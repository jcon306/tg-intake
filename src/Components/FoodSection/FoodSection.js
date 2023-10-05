import React from 'react';
import './FoodSection.css';

const FoodSection = ({ dietRestriction, dietRestrictionChange, specialRequests, specialRequestsChange }) => {
    
  return (
    <div>
       <label className='dietRestrictionLabel'>Diet Restrictions, please choose only one oval if it applies to you:</label>
            <select
                className='agency-dropdown' 
                  value={dietRestriction}
                  onChange={dietRestrictionChange}>
                    <option value='None'>None</option>
                    <option value='Gluten Free'>Gluten Free</option>
                    <option value='Vegetarian'>Vegetarian</option>
                    <option value='Vegan'>Vegan</option>
                    <option value='Kosher'>Kosher</option>
                    <option value='Halal'>Halal</option>
                    <option value='Other'>Other (specify in the section below)</option>
                
            </select>
      <br />
      <label className='specialRequestLabel'>
          Sponsors often ask if there is anything special you would like for your Thanksgiving dinner. Please let us know 
          if you have any special requests and the sponsors will do their best to accommodate.  
            <input 
                className='specialRequestInput'
                type='text' 
                placeholder='Enter requests'
                onChange={specialRequestsChange}
                value={specialRequests}
                name="requests"
            />
        </label>
    </div>
  );
};

export default FoodSection;

    // {/* <legend className='dietRestrictionLabel'>
    //     {`Diet Restrictions, please choose only one oval (if it applies to you):`}
    //   </legend>
    //   <br />
    //   <div>
    //     <input
    //       className='dietChoice'
    //       type='radio'
    //       id='None'
    //       name='dietRestriction'
    //       value='None'
    //       checked={dietRestriction === 'Gluten Free'}
    //       onChange={dietRestrictionChange}
    //     />
    //     <label htmlFor='Gluten Free'>None</label>
    //   </div>
    //   <div>
    //     <input
    //       className='dietChoice'
    //       type='radio'
    //       id='Gluten Free'
    //       name='dietRestriction'
    //       value='Gluten Free'
    //       checked={dietRestriction === 'Gluten Free'}
    //       onChange={dietRestrictionChange}
    //     />
    //     <label htmlFor='Gluten Free'>Gluten Free</label>
    //   </div>
    //   <div>
    //     <input
    //       className='dietChoice'
    //       type='radio'
    //       id='Vegetarian'
    //       name='dietRestriction'
    //       value='Vegetarian'
    //       checked={dietRestriction === 'Vegetarian'}
    //       onChange={dietRestrictionChange}
    //     />
    //     <label htmlFor='Vegetarian'>Vegetarian</label>
    //   </div>
    //   <div>
    //     <input
    //       className='dietChoice'
    //       type='radio'
    //       id='Vegan'
    //       name='dietRestriction'
    //       value='Vegan'
    //       checked={dietRestriction === 'Vegan'}
    //       onChange={dietRestrictionChange}
    //     />
    //     <label htmlFor='Vegan'>Vegan</label>
    //   </div>
    //   <div>
    //     <input
    //       className='dietChoice'
    //       type='radio'
    //       id='Kosher'
    //       name='dietRestriction'
    //       value='Kosher'
    //       checked={dietRestriction === 'Kosher'}
    //       onChange={dietRestrictionChange}
    //     />
    //     <label htmlFor='Kosher'>Kosher</label>
    //   </div>
    //   <div>
    //     <input
    //       className='dietChoice'
    //       type='radio'
    //       id='Halal'
    //       name='dietRestriction'
    //       value='Halal'
    //       checked={dietRestriction === 'Halal'}
    //       onChange={dietRestrictionChange}
    //     />
    //     <label htmlFor='Halal'>Halal</label>
    //   </div>
    //   <div>
    //     <input
    //       className='dietChoice'
    //       type='radio'
    //       id='Other'
    //       name='dietRestriction'
    //       value='Other'
    //       checked={dietRestriction === 'Other'}
    //       onChange={dietRestrictionChange}
    //     />
    //     <label htmlFor='Other'>{`Other (specify in the section below)`}</label>
    //   </div> */}
