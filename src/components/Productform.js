import React,{useState} from 'react';
import Storage from '../Storage.js';
import {Link} from 'react-router-dom';

const Productform = (props) => {
    const{category , dataa , addnewproduct, changeehandler} = props
    
    
    
    return (
        <div>
            <div className ="mb-6">
        <h2 className ="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
        <form className ="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label htmlFor="product-title" className ="block mb-1 text-slate-400">title</label>
            <input type="text" name="title" id="product-title" value={dataa.title} onChange={changeehandler}
              className ="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"/>
          </div>
          <div>
            <label htmlFor="product-quantity" className ="block mb-1 text-slate-400">quantity</label>
            <input className ="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto" value={dataa.quan} onChange={changeehandler}
              type="number" name="quan" id="product-quantity"/>
          </div>
          <div>
            <label htmlFor="product-category" className ="block mb-1 text-slate-400">category</label>
            <select name="cate" id="product-category" 
              className ="bg-transparent text-slate-400 rounded-xl w-full" value={dataa.cate} onChange={changeehandler}>
                <option className="bg-slate-500 text-slate-300" value="">select a category</option>
                  {
                  category.map((element) => 
                  <option className="bg-slate-500 text-slate-300" key={element.id} name="cate"  value={element.id} >{element.title}</option>
                  )}

            </select>
          </div>
          <div className ="flex items-center justify-between gap-x-4">
            <button id="add-new-product" className ="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2" onClick={addnewproduct}>Add new
              Product</button>
          </div>
        </form>
        
        
      </div>
        </div>
    );
};

export default Productform;