import React from 'react';
import {Link} from 'react-router-dom';

const Buttons = () => {
    return (
        <div>
            <div className="flex items-center justify-between gap-x-2 mb-5  ">
                <Link to="/categoryform">
                <button   className ="flex-1   bg-slate-500 text-slate-200 rounded-xl py-2 px-2">Add
                Category
                </button>
                </Link>
                <Link to="/productform">
                <button   className ="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 px-3">Add
                Product
                </button>
                </Link>
                <Link to="/products">
                <button  className ="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2 px-6">Products
                </button>
                </Link>
            
            </div>    
        </div>
    );
};

export default Buttons;