import React, { useState } from 'react';
import { InputNumber, Button } from 'antd';

const onChange = (value) => {
  console.log('changed', value);
};



const Randomnumber = () => {

    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [result, setResult] = useState(0);
    
    const handleGetValueMin = (e) =>{{
        setMin(e);
    }}

    const handleGetValueMax = (e) => {
        setMax(e);
    }

    const handleClick = () => {
        setResult(min + Math.random() *  [max - min]);
    }
    
    return (
    <>
        <InputNumber onChange={handleGetValueMin}/>
        <InputNumber onChange={handleGetValueMax}/>
        <Button type="primary" onClick={handleClick}>Primary Button</Button>
        <p>Result from {min} to {max} = {result}</p>
    </>
    )
}
export default Randomnumber;