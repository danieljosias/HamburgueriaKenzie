import './styles.js'
import Product from '../Product/index.js';
import {ProductContainer} from './styles.js'

function ProductList({products,handleClick}) {
    return ( 
        <ProductContainer>
            {products.map(product=>{
                return <Product 
                key={product.id} 
                img={product.img}
                name={product.name}
                category={product.category}
                price={product.price}
                id={product.id}
                handleClick = {handleClick}
                />
            })}
        </ProductContainer>
    );
}

export default ProductList;