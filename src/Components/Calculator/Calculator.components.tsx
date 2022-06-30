import React, { useState } from "react";
import { KeyButton } from "../KeyButton/KeyButton.component";
import { CalculatorContainer, Container } from "./Calculator.styled";

export const Calculator: React.FC<{}> = () => {

    const [problem, setProblem] = useState('0');
    const [answer, setAnswer] = useState('');


    // const addText = (val:string) => {

    //     console.log('problem')
        
    //     setProblem(problem + val + '')
        
    // }
    async function clear(){
        setProblem('0')

        setAnswer('')
    }

    async function clean(){
        if(problem !== '0'){
            if(problem.length === 1){
                setProblem('0')
            }
            else{
                setProblem(problem.slice(0, -1));
            }
        }
    }

    async function addText(val:string){


        if(answer === ''){
            if(problem === '0'){
                setProblem(val + '')
            }
            else{
                setProblem(problem + val + '')
            }
        }
        else{
            await clear();
            setProblem(val);
        }
        

    }

    function evaluate(){
        try{
            setAnswer(eval(problem))

        }
        catch{
            setAnswer('Error')
        }
    
    }

    return(
        <>
        <Container>
            {/* <div className="heading">
                <h3>IPHY - CALCULATOR</h3>
            </div> */}
            <CalculatorContainer>
                <KeyButton label="0" placement="zero" handleClick={() => addText('0')}/>
                <KeyButton label="C" placement="clean" handleClick={() => clean()}/>
                <KeyButton label="1" placement="one" handleClick={() => addText('1')}/>
                <KeyButton label="2" placement="two" handleClick={() => addText('2')}/>
                <KeyButton label="3" placement="three" handleClick={() => addText('3')}/>
                <KeyButton label="4" placement="four" handleClick={() => addText('4')}/>
                <KeyButton label="5" placement="five" handleClick={() => addText('5')}/>
                <KeyButton label="6" placement="six" handleClick={() => addText('6')}/>
                <KeyButton label="7" placement="seven" handleClick={() => addText('7')}/>
                <KeyButton label="8" placement="eight" handleClick={() => addText('8')}/>
                <KeyButton label="9" placement="nine" handleClick={() => addText('9')}/>
                <KeyButton label="/" placement="divide" isFunction={true} handleClick={() => addText('/')}/>
                <KeyButton label="+" placement="add" isFunction={true} handleClick={() => addText('+')}/>
                <KeyButton label="-" placement="minus" isFunction={true} handleClick={() => addText('-')}/>
                <KeyButton label="=" placement="equals" isFunction={true} handleClick={() => evaluate()}/>
                <KeyButton label="*" placement="times" isFunction={true} handleClick={() => addText('*')}/>
                <KeyButton label="clear" placement="cl" handleClick={() => clear()}/>
                <div className="solution"><h6>{answer === '' ? '' : `ANS: ${answer}`}</h6><h3>{problem}</h3></div>
            </CalculatorContainer>
        </Container>
        </>
        
    )
}