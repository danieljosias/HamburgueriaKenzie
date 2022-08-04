import './styles.js'
import {Card} from './styles.js'

function Product({img,name,category,price,handleClick,id}) {
    return ( 
        <Card>
            <div className='img__container'>
                <img src={img} alt="" />
            </div>
            <div className='wrapper'>
                <h2>{name}</h2>
                <span>{category}</span>
                <p>R$ {price}</p>
                <button onClick={()=> handleClick(id)}>Adicionar</button>
            </div>
        </Card>
    );
}

export default Product;