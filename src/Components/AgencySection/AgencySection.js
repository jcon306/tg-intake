import React from 'react'
import './AgencySection.css'

const AgencySection = ({ agencyChange, numberOfChildren, agency, numChildren }) => {
    return (
        <div>
            <label className='agencyLabel'>Please select the agency who referred you:</label>
            <select
                className='agency-dropdown' 
                value={agency}
                onChange={agencyChange}>
                    <option value=''>--Agencies--</option>
                    <option value='Families For Families'>Families For Families</option>
                    <option value='Hilltop Haven/Paterson Task Force'>Hilltop Haven/Paterson Task Force</option>
                    <option value="Hope Through Care/Grandma's Place">Hope Through Care/Grandma's Place</option>
                    <option value='Heart of Hannah'>Heart of Hannah</option>
                    <option value="Passaic County Women's Center">Passaic County Women's Center</option>
                
            </select>
        </div>
    )
}

export default AgencySection