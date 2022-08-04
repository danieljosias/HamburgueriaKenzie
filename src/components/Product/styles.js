import styled from 'styled-components'

const primaryColor = '#27AE60'
const grey0 = '#F5F5F5'
const grey20 = '#E0E0E0'
const grey100 = '#333333'
const grey300 = '#828282'

export const Card = styled.div`
    width: 15em;
    height: 18em;
    border: 0.1em solid ${grey20}; 
    
   
    .img__container{
        width: 15em;
        background-color: ${grey0};
    }

    img{
        width: 10em;
        height: 9.37em;
    }

    .wrapper{
        display: flex;
        flex-direction: column;
        text-align: justify;
        margin: 0em 1em;
    }

    h2{
        color: ${grey100};
        font-size: 1em;
    }

    span{
        color: ${grey300};
        font-size: 0.8em;
    }

    p{
        color: ${primaryColor};
        font-size: 0.8em;
    }

    button{
        background-color: ${primaryColor};
        color: #FFFFFF;
        width: 7em;
        padding: 0.4em;
        border-radius: 0.5em;
        border: none;
        font-size: 0.8em;
    }


  

`