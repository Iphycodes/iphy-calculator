import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 20px; 
    flex-direction: column;

    .heading{
      margin-bottom: 20px;

      h3{
        color: black;
        font-size: 34px;
        font-family: 'Candal', sans-serif;

        @media only screen and (max-width: 768px){
          font-size: 28px;
      }
      }
    }

    @media only screen and (max-width: 768px){
      padding: 10px;
    }

`

export const CalculatorContainer = styled.div`
    width: 400px;
    height: 500px;
    display: grid;
    margin: 0 10px;
    /* grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr); */
    grid-template-areas: 
    'di di di di'
    'cl cl cl times'
    'seven eight nine divide'
    'four five six minus'
    'one two three add'
    'zero zero clean equals';
    border: 1px solid red;

    @media only screen and (max-width: 768px){
      width: 100%;
    }

    .solution{
        background-color: black;
        color: white;
        font-size: 34px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        grid-area: di;
        padding: 5px 10px;
        overflow-x: hidden;

        h3{
            margin: 0;
            padding:5px;
            overflow-x: auto;
            
      &::-webkit-scrollbar{
        width: 2px;
      }

      &::-webkit-scrollbar-track {
        background: grey;
      }

      &::-webkit-scrollbar-thumb {
        background: black;
      }
        }

        h6{
            margin: 0;
        }

    }

`