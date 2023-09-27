import React from 'react'
import './NameSection.css'

const NameSection = ({ firstName, lastName, onFirstNameChange, onLastNameChange}) => {


    return (
        <div>
            <label className='nameLabel'>
                First Name:
                <input
                    className='nameInput' 
                    type='text' 
                    placeholder='Enter first name' 
                    required
                    onChange={onFirstNameChange}
                    value={firstName}
                    name='firstName'
                />
            </label>
            <br />
            <label className='nameLabel'>
            Last Name:
            <input
                className='nameInput' 
                type='text' 
                placeholder='Enter last name' 
                required
                onChange={onLastNameChange}
                value={lastName}
                name='lastName'
            />
        </label>
    </div>
    )
}

export default NameSection