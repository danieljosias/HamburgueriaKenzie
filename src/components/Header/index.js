import './styles.js'
import {Headerr} from './styles.js'
import { useState } from 'react'
import toast from 'react-hot-toast'

function Header({products,setProducts,fixedProducts}) {
    const [valueInput,setValueInput] = useState('')
    
    function filteredProduct(){
        const produtos = products.filter(product=>{
            if(product.category === valueInput || product.name === valueInput){
                return true
            }
            return false 
        })
        if(produtos.length > 0){
            setProducts(produtos)
            toast.success("Produto encontrado!")
        }else{
            setProducts(fixedProducts)
        }
    }    

    return ( 
        <Headerr>
            <img alt='logo site' src='./logo.svg'/>
            <form onSubmit={(e)=>e.preventDefault()} className='inputSearch__container'>
                <input 
                type='text' 
                placeholder='Digitar pesquisa'
                value={valueInput}
                onChange={(e)=> setValueInput(e.target.value)}
                />
                <button type='submit' onClick={()=> filteredProduct()
                
                
                }>Pesquisar</button>
            </form>
        </Headerr>
    )
}

export default Header;