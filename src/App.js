import  './index.css';
import React,{useState} from 'react';
import {  Route , Routes , Navigate } from 'react-router-dom';

import Storage from './Storage.js';

//components
import Appbar from './components/Appbar';
import Categoryform from './components/Categoryform';
import Productform from './components/Productform';
import ProductList from './components/ProductList';
import Buttons from './components/Buttons';
import Search from './components/Search';

function App() {
//category
  const [data , setData] = useState({
    title: "",
    desc: ""
  })
  
  const [categories , setCategories] = useState([...Storage.getAllCategories()]);
  
  const changehandler = event =>{
  event.preventDefault()
  setData({...data , [event.target.name]:event.target.value})
  }
  const addNewCategory = () =>{
  const {title , desc} = data;
  if(!title || !desc) return;
  Storage.saveCategory({title,desc})
  setCategories(Storage.getAllCategories());
  
  
  }
//products
const [dataa , setDataa] = useState({
  title: "",
  quan: "",
  cate : ""
        
})
const [products , setProducts]= useState([...Storage.getAllProducts()])
 
const changeehandler = e =>{
  e.preventDefault()
  setDataa({...dataa , [e.target.name]:e.target.value})
  
  
  }
const addnewproduct = (e) =>{
  e.preventDefault()
  const {title , quan , cate} = dataa;
  Storage.saveProducts({title,quan,cate});
  
  setProducts(Storage.getAllProducts());
}
const deletehandler = (e) =>{
  const produdcId = e.target.dataset.productId;
  Storage.deleteProduct(produdcId);
  setProducts(Storage.getAllProducts());
}
// search
const [val , setVal] = useState("");

const valhandler = (e) =>{
  e.preventDefault();
  
  setVal(e.target.value)
}
const filteredProducts = products.filter((p) => p.title.toLowerCase().includes(val));
//sort
const [sort , setSort] = useState(
  
);
console.log(sort);
const sortProducrs = (e) => {
  e.preventDefault();
  setSort(e.target.value);
  setProducts(Storage.getAllProducts(sort));

}
  return (
    
    
    <div className="bg-slate-800 min-h-screen">
      <Appbar/>
      <div className ="container max-w-screen-sm mx-auto p-4">
        <Buttons/>
        <Routes>
        <Route path="/categoryform" element={<Categoryform data={data} change={changehandler} addnew={addNewCategory}/>}/>
       
        <Route path="/productform" element={<Productform category={categories} dataa={dataa} changeehandler={changeehandler} addnewproduct={addnewproduct} />}/>
        
          <Route path='/products' element={<ProductList products={products} deletehandler={deletehandler} sort={sort} sortProducrs={sortProducrs}/>} />
          <Route path='/Search' element={<Search valhandler={valhandler} val={val} filteredProducts={filteredProducts} deletehandler={deletehandler}/>}/>
          <Route path='/' element={ <Navigate to="/productform" />} />
        </Routes>
        
      </div>
      
    </div>
    
  
  );
}

export default App;
