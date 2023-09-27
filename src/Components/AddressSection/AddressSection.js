import React from 'react'
import './AddressSection.css'

const AddressSection = ({ addressChange, cityChange, zipCodeChange, address, city, zipCode }) => {
    return (
        <div className='address-form-section'>
            <label className='addressLabel'>
                Address: 
                <input 
                    className='addressInput'
                    type='text' 
                    placeholder='Enter address'
                    required
                    onChange={addressChange}
                    value={address}
                    name='address'
                />
                <br />
            </label>
            <label className='cityLabel'>
                City: 
                <input 
                    className='cityInput'
                    type="text"  
                    placeholder='City'
                    required
                    onChange={cityChange}
                    value={city}
                    name='city'
                />
            </label>
            <label className='zipCodeLabel'>
                Zip: 
                <input 
                    className='zipCodeInput'
                    type='text'
                    inputMode="numeric"
                    maxLength={5}
                    placeholder='Zip'
                    required
                    onChange={zipCodeChange}
                    value={zipCode}
                    name='zip'
                />
            </label>
        </div>
    )
}

export default AddressSection