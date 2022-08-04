import styled from 'styled-components'
const primaryColor = '#27AE60'
const grey0 = '#F5F5F5'

export const Headerr = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${grey0};          
    padding: 0.8em;
    min-width: 1223px;

    img{
        width: 10em;
        margin: 0em 3em
    }

    .inputSearch__container{
        display: flex;
        gap: 0.5em;
        min-width: 331px;
    }

    input{
        width: 13.2em;
        padding: 0.2em;
        border-radius: 0.7em;
        border: none;
        font-size: 1em;
    }

    button{
        color: #FFFFFF;
        background-color: ${primaryColor};
        padding: 0.5em;
        width: 6em;
        border-radius: 0.7em;
        border: none;
        font-size: 1em;
    }

`
