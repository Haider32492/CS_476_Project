import React from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

const Results = () => {
    const cardsData = [
        { id: 1, imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Nike Air MX Super 2500' },
        { id: 2, imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Nike Air MX Super 2500' },
        { id: 3, imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Nike Air MX Super 2500' },
        { id: 4, imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Nike Air MX Super 2500' },
        { id: 5, imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Nike Air MX Super 2500' },
        { id: 6, imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Nike Air MX Super 2500' },
        { id: 7, imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Nike Air MX Super 2500' },
        { id: 8, imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Nike Air MX Super 2500' },
        { id: 9, imageUrl: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Nike Air MX Super 2500' },
    ];

    return (
        <div className='flex items-center justify-center w-full h-full px-20 py-10 flex-col'>
            <div className='flex items-center justify-start w-full gap-40 mt-10'>
                <p className='text-lg font-semibold'>
                    Just for you
                </p>
                <p className='underline cursor-pointer font-semibold'>
                    See all
                </p>
            </div>

            <div className='flex items-center justify-evenly w-full mt-10 gap-8 flex-wrap'>
                {cardsData.map((card) => (
                    <Link key={card.id} to={`/details/${card.id}`}>
                        <Card {...card} />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Results;
