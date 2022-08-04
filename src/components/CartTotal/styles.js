import styled from 'styled-components'

const grey100 = '#E0E0E0'
const grey300 = '#828282'

export const CartTotall = styled.div`
    .total__container{
        display: flex;
        justify-content: space-between;
        width: 19em;
    }

    p{
        font-size: 0.8rem;
    }
    
    .total{
        color: ${grey300};
        font-size: 0.8rem;

    }

    .button__container button{
        height: 3em;
        width: 23em;
        border: none;
        background-color: ${grey100};
        color: ${grey300};
    }

    .button__container button span{
        font-size: 1rem;
    }

`