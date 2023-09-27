import React from 'react'
import './FoodSection.css'

const FoodSection = () => {
    return (
        <div>
               <legend className='dietRestrictionLabel'>{`Diet Restrictions, please choose only one oval (if it applies to you):`}</legend>
               <br />
                 <div>
                    <input className='dietChoice' type="radio" id="Gluten Free" name="dietRestriction" value="Gluten Free" />
                    <label htmlFor="Gluten Free">Gluten Free</label>
                </div>
                <div>
                    <input className='dietChoice' type="radio" id="Vegetarian" name="dietRestriction" value="Vegetarian" />
                    <label htmlFor="Vegetarian">Vegetarian</label>
                </div>
                <div>
                    <input className='dietChoice' type="radio" id="Vegan" name="dietRestriction" value="Vegan" />
                    <label htmlFor="Vegan">Vegan</label>
                </div>
                <div>
                    <input className='dietChoice' type="radio" id="Kosher" name="dietRestriction" value="Kosher" />
                    <label htmlFor="Kosher">Kosher</label>
                </div>
                <div>
                    <input className='dietChoice' type="radio" id="Halal" name="dietRestriction" value="Halal" />
                    <label htmlFor="Halal">Halal</label>
                </div>
                
        </div>
    )
}

export default FoodSection