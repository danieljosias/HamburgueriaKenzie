import './styles.js'
import {CartProductt} from './styles.js'

function CartProduct({img,name,category,id,currentSale,setCurrentSale}) {

    function removeProduct(id){
        
        const product = currentSale.filter((produto)=>{
            //elemento/array completo
            return produto.id !== id
        })
        setCurrentSale(product)
    }

    return ( 
        <CartProductt>
            <div className='container'>
                <div className='productImg__container'>
                    <img src={img} alt="" />
                </div>

                <div className='wrapper2'>
                    <h2>{name}</h2>
                    <span>{category}</span>
                </div>
                
                <div className='button__container'>
                    <button onClick={()=> removeProduct(id)}>Remover</button>
                </div>
            </div>
        </CartProductt>
     );
}

export default CartProduct;