import React from 'react';
import Product from './Product';
import { Link } from 'react-router-dom';
const ProductList = (props) => {
 const { deletehandler , valhandler, val , products , sort, sortProducrs}=props;

    return (
        <div>
            <h2 className ="text-xl text-slate-300 font-bold mb-2">Product list</h2>
      <div className ="flex items-center justify-between mb-6">
      <Link to="/Search">
                <button   className ="flex-1   bg-slate-500 text-slate-200 rounded-xl py-2 px-2">Search
                
                </button>
      </Link>
        
      </div>
      <div className ="flex items-center justify-between mb-6">
        <label htmlFor="sort-products" className ="text-slate-500 text-lg">sort</label>
        <select name="sort-products" id="sort-products" className ="bg-transparent text-slate-400 rounded-xl" value={sort} onChange={sortProducrs}>
          <option className ="bg-slate-500 text-slate-300" value="">select a category</option>
          <option className ="bg-slate-500 text-slate-300"  value="newest">newest</option>
          <option className ="bg-slate-500 text-slate-300" value="oldest">oldest</option>
        </select>
      </div>
      <div id="products-list" className ="overflow-x-auto">
        {
         products.map(product=> <Product key={product.id} product={product} deletehandler={deletehandler}/>)
        }
      </div>
      <div className ="h-20"></div>
        </div>
    );
};

export default ProductList;