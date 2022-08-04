import styled from 'styled-components'

const primaryColor = '#27AE60'
const grey0 = '#F5F5F5'
const grey300 = '#828282'

export const Cartt = styled.div`
    height: 10rem;
    margin: 1em 1em;

    .cart__header{
        background-color: ${primaryColor};
        width: 19.3em;
    }

    .cart__header p{
        color: #FFFFFF;
        padding: 1em;
        text-align: justify;
    }
    
    .cart__body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: ${grey0};
        width: 19.3em;
        height: 15em;
    }

    .cart__body span{
        color: ${grey300}
    }


`