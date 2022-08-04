import './styles.js'
import CartProduct from '../CartProduct/index.js'
import CartTotal from '../CartTotal/index.js'
import { Cartt } from './styles.js';

function Cart({currentSale,handleTotalValue,setCurrentSale}) {
    return ( 
        <Cartt>
            <div className='cart__header'>
                <p>Carrinho de compras</p>
            </div>

            {currentSale.length !== 0?

                currentSale.map((product)=>{
                    return <CartProduct 
                    key={product.id}
                    img={product.img}
                    name={product.name}
                    category={product.category}
                    currentSale={currentSale}
                    setCurrentSale={setCurrentSale}
                    id={product.id}
                    />  

            })
            :

                <>
                    
                    <div className='cart__body'>
                        <p>Sua sacola está vazia</p>
                        <span>Adicione itens</span>
                    </div>
                </>
            
            }
            {currentSale.length > 0 && <CartTotal currentSale={currentSale} handleTotalValue={handleTotalValue} setCurrentSale={setCurrentSale}/>}
            

        </Cartt>
     );
}

export default Cart;