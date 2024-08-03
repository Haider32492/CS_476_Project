import React from 'react';
import { useParams } from 'react-router-dom';

const cardData = {
    1: {
        imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Toyota Corolla 2020',
        comments: [
            {
                username: 'juliusomo',
                text: 'ASdksdnddojsnosnoscnscjnscljncljsnclancjlancls',
                date: '2 days ago'
            }
        ]
    },
    
    2: {
        imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Honda CiviC 2019',
        comments: [
            {
                username: 'juliusomo',
                text: 'ASdksdnddojsnosnoscnscjnscljncljsnclancjlancls',
                date: '2 days ago'
            }
        ]
    },
    3: {
        imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Ford Focus 2018 ',
        comments: [
            {
                username: 'juliusomo',
                text: 'ASdksdnddojsnosnoscnscjnscljncljsnclancjlancls',
                date: '2 days ago'
            }
        ]
    },
    4: {
        imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Chevrolet Malibu 2017',
        comments: [
            {
                username: 'juliusomo',
                text: 'ASdksdnddojsnosnoscnscjnscljncljsnclancjlancls',
                date: '2 days ago'
            }
        ]
    },
    5: {
        imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Nissan Altima 2020',
        comments: [
            {
                username: 'juliusomo',
                text: 'ASdksdnddojsnosnoscnscjnscljncljsnclancjlancls',
                date: '2 days ago'
            }
        ]
    },
    6: {
        imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'BMW 3 Series',
        comments: [
            {
                username: 'juliusomo',
                text: 'ASdksdnddojsnosnoscnscjnscljncljsnclancjlancls',
                date: '2 days ago'
            }
        ]
    },
    7: {
        imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Mercedes-Benz C-Class',
        comments: [
            {
                username: 'juliusomo',
                text: 'ASdksdnddojsnosnoscnscjnscljncljsnclancjlancls',
                date: '2 days ago'
            }
        ]
    },
    8: {
        imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Audi A4',
        comments: [
            {
                username: 'juliusomo',
                text: 'ASdksdnddojsnosnoscnscjnscljncljsnclancjlancls',
                date: '2 days ago'
            }
        ]
    },
    9: {
        imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: 'Nike Air MX Super 2500',
        comments: [
            {
                username: 'juliusomo',
                text: 'ASdksdnddojsnosnoscnscjnscljncljsnclancjlancls',
                date: '2 days ago'
            }
        ]
    },
};

const CardDetails = () => {
    const { id } = useParams();
    const card = cardData[id];

    if (!card) {
        return <div>Card not found</div>;
    }

    return (
        <div className='flex items-center justify-center w-full h-full px-20 py-10 flex-col'>
            <div className='w-full max-w-4xl bg-white p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold mb-4'>{card.title}</h2>
                <img src={card.imageUrl} alt={card.title} className="mb-4" />
                <div className='flex items-center justify-start w-full gap-40 mt-10'>
                    <p className='text-lg font-semibold'>
                        Comments
                    </p>
                </div>
                <div className='mt-4'>
                    {card.comments.map((comment, index) => (
                        <div key={index} className='mb-4'>
                            <div className='flex items-center mb-4'>
                                <div>
                                    <p className='font-semibold'>{comment.username}</p>
                                    <p className='text-gray-600 text-sm'>{comment.date}</p>
                                </div>
                            </div>
                            <div className='bg-gray-100 p-4 rounded-lg'>
                                <p>{comment.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='mt-4'>
                    <input 
                        type='text' 
                        placeholder='Add a comment...' 
                        className='w-full p-3 border border-gray-300 rounded-lg' 
                    />
                    <div className='flex items-center justify-end mt-2'>
                        <button className='px-4 py-2 bg-blue-500 text-white rounded-lg'>Send</button>
                        <button className='px-4 py-2 bg-gray-500 text-white rounded-lg ml-2'>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardDetails;
