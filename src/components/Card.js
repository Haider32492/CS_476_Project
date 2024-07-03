import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Card = () => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:scale-105 duration-300 transition-all">
            <a className="relative  flex h-50 overflow-hidden " href="#">
                <img
                    className="object-cover "
                    src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="product image"
                />

                <button
                    className="absolute top-0 right-0 m-2 rounded-full border border-gray-300 bg-white p-1 text-red-500 hover:bg-gray-100"
                    onClick={() => setLiked(!liked)}
                >
                    {liked ? <FaHeart /> : <FaRegHeart />}
                </button>
            </a>
            <div className="mt-4 px-5 pb-5">
                <a >
                    <h5 className="text-xl tracking-tight text-slate-900">Nike Air MX Super 2500</h5>
                </a>
            </div>
        </div>
    );
}

export default Card;
