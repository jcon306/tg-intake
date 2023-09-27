import React from 'react'
import './FamilySection.css'

const FamilySection = ({ childAgesChange, childAges, numOfAdultsChange, numOfAdults }) => {
    return(
        <div>
             <label className='childAgesLabel'>
                Ages of all children in your family, please separate each age with a comma:
                <input 
                    className='childAgesInput'
                    type='text' 
                    placeholder='Enter ages'
                    required
                    onChange={childAgesChange}
                    value={childAges}
                    name="ages"
                />
            </label>
            <br />
            <label className='numberOfAdultsLabel'>
                    Number of adults in your family: 
                    <input 
                        className='numberOfAdultsInput'
                        type='text'
                        inputMode="numeric"
                        maxLength={2}
                        placeholder='# of Adults'
                        required
                        onChange={numOfAdultsChange}
                        value={numOfAdults}
                        name='adults'
                    />
            </label>
        </div>
    )
}

export default FamilySection