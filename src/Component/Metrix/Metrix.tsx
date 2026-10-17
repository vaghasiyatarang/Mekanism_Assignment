import React, { useState } from 'react'
import "./Metrix.css";

const Metrix = () => {
    const initialState = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    const [value, setValue] = useState<Array<number>>(initialState);
    const [count, setCount] = useState<number>(0);

    const handleClick = (i: number) => {
        const updatedValue = count + 1
        const valueClone = value;
        if(valueClone[i] === 0){
            valueClone.splice(i, 1, updatedValue)
            setCount(count + 1)
            setValue(valueClone)
        }
    }
    const handleClearMetrix = () => {
        setValue(initialState)
        setCount(0)
    }

    return (
        <div className='container'>
            <div className='metrix'>
                {
                    value.map((u, i) => {
                        if ((i + 1) % 3 === 0) {
                            return <><input key={i} className={`box ${value[i] !== 0 ? 'filled' : ''}`} value={value[i] === 0 ? "" : value[i]} onClick={() => handleClick(i)} name='' readOnly /> <br /></>
                        }
                        return <><input key={i} className={`box ${value[i] !== 0 ? 'filled' : ''}`} value={value[i] === 0 ? "" : value[i]} onClick={() => handleClick(i)} name='' readOnly /></>
                    })
                }
            </div>

            <div>
                <button className='clear-btn' onClick={handleClearMetrix}>Clear</button>
            </div>
        </div >
    )
}

export default Metrix