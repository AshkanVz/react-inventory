import React,{useState,createContext} from 'react';
import Storage from '../Storage.js';
import {Link} from 'react-router-dom';

const Categoryform = (props) => {
    
   const {data , addnew , change} = props

    
    
    
    return (
        <div>
            <section>
        <div className ="mb-6 " id="category-wrapper">
          <h2 className ="text-xl text-slate-300 font-bold mb-2">Add New category</h2>
          <form className ="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
            <div>
              <label htmlFor="category-title" className ="block mb-1 text-slate-400">title</label>
              <input type="text" name="title" id="category-title" value={data.title} onChange={change}
                className ="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"/>
            </div>
            <div>
              <label htmlFor="category-description" className ="block mb-1 text-slate-400">description</label>
              <textarea className ="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full" type=" text"
                name="desc" value={data.desc} onChange={change} id="category-description"></textarea>
            </div>
            <div className ="flex items-center justify-between gap-x-4">
              <button className ="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
                id="cancel-add-category">Cancel</button>
              <button id="add-new-category" onClick={addnew} className ="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2">Add
                Category</button>
            </div>
          </form>
        </div>
       
       
      </section>
        </div>
    );
};

export default Categoryform;