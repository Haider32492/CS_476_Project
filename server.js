const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MyNewPass',
    database: 'autogenius'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/api/signup', (req, res) => {
    const { name, email, confirm_email, password, confirm_password, phone_number } = req.body;

    if (email !== confirm_email) {
        return res.status(400).json({ error: 'Emails do not match' });
    }
    if (password !== confirm_password) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        
        const checkUserQuery = 'SELECT * FROM users WHERE email = ?';
        connection.query(checkUserQuery, [email], (err, results) => {
            if (err) {
                console.error('Error checking user existence:', err);
                return res.status(500).json({ error: 'Error checking user existence' });
            }

            if (results.length > 0) {
                return res.status(400).json({ error: 'User already exists' });
            }

            const query = 'INSERT INTO users (name, email, password, phone_number) VALUES (?, ?, ?, ?)';
            connection.query(query, [name, email, password, phone_number], (err, results) => {
                if (err) {
                    console.error('Error saving user to database:', err);
                    return res.status(500).json({ error: 'Error saving user to database' });
                }
                res.status(201).json({ message: 'User registered successfully' });
            });
        });
    } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).json({ error: 'Error during signup' });
    }
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        console.log('Email and password are required');
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const query = 'SELECT password FROM users WHERE email = ?';
    connection.query(query, [email], (err, results) => {
        if (err) {
            console.error('Error retrieving user from database:', err);
            return res.status(500).json({ error: 'Error retrieving user from database' });
        }

        if (results.length === 0) {
            console.log('User not found');
            return res.status(400).json({ error: 'User not found' });
        }

        const user = results[0];
        console.log(`User found: ${JSON.stringify(user)}`);
        console.log(`Retrieved password: ${user.password}`);
        console.log(`Provided password: ${password}`);

        
        if (password !== user.password) {
            console.log('Incorrect password');
            return res.status(400).json({ error: 'Incorrect password' });
        }

        console.log('Login successful');
        res.status(200).json({ message: 'Login successful' });
    });
});

app.post('/api/problems', upload.single('image'), (req, res) => {
    const { make, model, year, description, username } = req.body;
    const image = req.file ? req.file.filename : null;

    const query = 'INSERT INTO problems (make, model, year, description, image, username) VALUES (?, ?, ?, ?, ?, ?)';
    connection.query(query, [make, model, year, description, image, username], (err, results) => {
        if (err) {
            console.error('Error saving problem to database:', err);
            return res.status(500).json({ error: 'Error saving problem to database' });
        }
        res.status(201).json({ message: 'Problem posted successfully' });
    });
});


app.get('/api/cars', (req, res) => {
    const query = 'SELECT id, make, model, year, image FROM cars LIMIT 8';
    connection.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching car data:', err);
            return res.status(500).json({ error: 'Error fetching car data' });
        }

        const cars = results.map(car => ({
            ...car,
            image: `${car.image}`
        }));

        res.json(cars);
    });
});
app.get('/api/cars/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT id, make, model, year, image FROM cars WHERE id = ?';
    connection.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching car data:', err);
            return res.status(500).json({ error: 'Error fetching car data' });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: 'Car not found' });
        }
        const car = results[0];
        car.image = `./images/${car.image}`; 
        res.json(car);
    });
});

app.get('/api/problemss', (req, res) => {
    const { make, model, year } = req.query;
    const query = 'SELECT id, description, image FROM problems WHERE make = ? AND model = ? AND year = ?';
    connection.query(query, [make, model, year], (err, results) => {
        if (err) {
            console.error('Error fetching problems:', err);
            return res.status(500).json({ error: 'Error fetching problems' });
        }
        const problems = results.map(problem => ({
            ...problem,
            image: `./uploads/${problem.image}`
        }));
        res.json(problems);
    });
});
app.get('/api/solutions', (req, res) => {
    const { make, model, year } = req.query;
    const query = 'SELECT id, username, description FROM solutions WHERE make = ? AND model = ? AND year = ?';
    connection.query(query, [make, model, year], (err, results) => {
        if (err) {
            console.error('Error fetching solutions:', err);
            return res.status(500).json({ error: 'Error fetching solutions' });
        }
        res.json(results);
    });
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
