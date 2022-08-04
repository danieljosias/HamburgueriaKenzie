import './App.css';
import Header from './components/Header/index.js'
import ProductList from './components/ProductList/index.js'
import Cart from './components/Cart/index.js'
import { useState,useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  
  const [products, setProducts] = useState([]);
  const [fixedProducts, setFixedProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([])

  useEffect(()=> {
    fetch('https://hamburgueria-kenzie-json-serve.herokuapp.com/products')
    .then(response => response.json())
    .then((response)=> {setProducts(response) 
      setFixedProducts(response)
    })
    .catch((err) => alert(err))
  }, [])
  
  function handleClick(productId){  
    const result = products.find(product=>{
      return product.id === productId
    })

    const produto = currentSale.find(product=>{
      return product.id === productId
    })

    if(produto){
      toast.error("Produto já adicionado!")

    }else{
      setCurrentSale([...currentSale,result])
    }

  }

  return (
    <div className="App">
      <Toaster position="top-center"/>
      <Header products={products} fixedProducts={fixedProducts} setProducts={setProducts}/>
      <div className='productAndCart__container'>
        <ProductList products={products} handleClick={handleClick}/>
        <Cart products={products} currentSale={currentSale} setCurrentSale={setCurrentSale}/>
      </div>
    </div>
  );
}

export default App;
