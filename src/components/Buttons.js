import React from 'react';
import {Link} from 'react-router-dom';

const Buttons = () => {
    return (
        <div>
            <div className="flex items-center justify-between gap-x-2 w-full mb-5 overflow-x-auto ">
                <Link to="/categoryform">
                <button   className ="flex-1   bg-slate-500 text-slate-200 rounded-xl py-2 px-4 w-full">Add
                Category
                </button>
                </Link>
                <Link to="/productform">
                <button   className ="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 px-5   w-full">Add
                Product
                </button>
                </Link>
                <Link to="/products">
                <button  className ="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 px-3 w-full"> List of Products
                </button>
                </Link>
            
            </div>    
        </div>
    );
};

export default Buttons;