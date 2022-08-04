import './styles.js'
import {CartTotall} from './styles.js'

function CartTotal({currentSale,setCurrentSale}) {

    const total = currentSale.reduce((valorAnterior,valorAtual)=>{
        return valorAnterior + valorAtual.price
    },0)
        
    function removeAllProduct(){
        setCurrentSale([])
    }
        
    return ( 
        <>
            <CartTotall>
                <div className='total__container'>
                    <p>Total:</p>
                    <p className='total' >R$ {total}</p>
                </div>

                <div className='button__container'>
                    <button onClick={()=> removeAllProduct()}><span>Remover Todos</span></button>
                </div>
            </CartTotall>
        </>
    );
}

export default CartTotal;