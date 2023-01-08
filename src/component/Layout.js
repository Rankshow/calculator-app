import React, { useState } from 'react';
import './layout.css';
import Piggyvest from './image/piggyvest.png';
import Output from './output';


const Layout = (props) => {
    const [input, setInput] = useState('0');
    const [result, setResult] = useState('');

    const handleClick = (e) => {
       const value = e.target.value;
       if(value === '='){
        if(input !== ''){
            let result = ''
            try{
                result = eval(input)
            } catch(err){
                setResult('Math error')
            }
            if (result === undefined){
                setResult('Math error')
            }else{
                setResult(input + '=')
                setInput(result)
            }
        }
       }else if(value === 'C'){
        setInput('0')
        setResult('')
       } else if(value === 'DEL'){
        let str = input
        str = str.substr(0, str.length-1)
        setInput(str)
       } else if(input === '0') {
         setInput(value)
       } else {
        setInput((input += value))
       }
    }
    return(
        <div className="frame">
            <div className="calculator">
                <Output user={input} answer={result}/>
                <br></br>
                <img src={Piggyvest} className='logo' alt="piggyvest" />
                <div className="keys">
                    <input type="button" value={'C'} className='button clear' onClick={handleClick}/>
                    <input type="button" value={'DEL'} className='button clear' onClick={handleClick}/>
                    <input type="button" value={'%'} className='button oprator' onClick={handleClick}/>
                    <input type="button" value={'/'} className='button operator' onClick={handleClick}/>
                    
                    <input type="button" value={'7'} className='button ' onClick={handleClick}/>
                    <input type="button" value={'8'} className='button ' onClick={handleClick}/>
                    <input type="button" value={'9'} className='button ' onClick={handleClick}/>
                    <input type="button" value={'*'} className='button operator' onClick={handleClick}/>

                    <input type="button" value={'4'} className='button ' onClick={handleClick}/>
                    <input type="button" value={'5'} className='button ' onClick={handleClick}/>
                    <input type="button" value={'6'} className='button ' onClick={handleClick}/>
                    <input type="button" value={'-'} className='button operator' onClick={handleClick}/>

                    <input type="button" value={'1'} className='button ' onClick={handleClick}/>
                    <input type="button" value={'2'} className='button ' onClick={handleClick}/>
                    <input type="button" value={'3'} className='button ' onClick={handleClick}/>
                    <input type="button" value={'+'} className='button operator' onClick={handleClick}/>

                    <input type="button" value={'0'} className='button ' onClick={handleClick}/>
                    <input type="button" value={'.'} className='button' onClick={handleClick}/>
                    <input type="button" value={'='} className='button eqaul-sign' onClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}

export default Layout;