import React from 'react';
import Product from './Product';

const Search = (props) => {
    const {valhandler,val, filteredProducts , deletehandler} = props
    return (
        <div>
            <div className="flex items-center justify-between mb-10 mt-10">
            <label forhtml="search-input" className="text-slate-500 text-lg">search</label>
            <input type="text" name="search-input" id="search-input" value={val} onChange={valhandler}
          className ="bg-transparent rounded-xl border border-slate-500 text-slate-400"/>
          </div>

            <div id="products-list" className ="overflow-x-auto">
                {
                filteredProducts.map(product=> <Product key={product.id} product={product} deletehandler={deletehandler}/>)
                }
            </div>
            <div className ="h-20"></div>
        </div>
        
    );
};

export default Search;