import styled from 'styled-components'

const grey0 = '#F5F5F5'
const grey4 = '#BDBDBD'
const grey300 = '#828282'

export const CartProductt = styled.div`
    width: 1%;

    .productImg__container{
        background: ${grey0};
        width: 6em;
        height: 6em;
        border-radius: 1em;
        display: flex;
        margin-right: .7em;
    }   

    .container{
        display: flex;
        margin: 1em 0em;
        width: 0em;
    }

    .productImg__container img{
        width: 6em;
        height: 6em;
    }

    .wrapper2{
        display: flex;
        flex-direction: column;
        text-align: justify;
        gap: .6em;
        margin-right: 2.4em;
    }
    
    .wrapper2 h2{
        margin: 0em;
        font-size: 1em;
        width: 6em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .wrapper2 span{
       color: ${grey300};
       font-size: 0.8em;
      
    }

     button{
        border: none;
        background-color: transparent;
        margin: .1em 0em;
        color: ${grey4};
        font-size: 0.8em;
    }
`