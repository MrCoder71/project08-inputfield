import React from 'react'

// Import Style File
import './InputField.css';

const InputField = () => {

    return (

        <>
            <div className='input-field'>

                <input type='text' required spellCheck='false' />

                <label>Enter your name </label>

            </div>

            <div className='input-field'>

                <input type='email' required spellCheck='false' />

                <label>Enter your email </label>

            </div>

        </>
    )
}

export default InputField;