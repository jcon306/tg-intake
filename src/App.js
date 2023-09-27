import React, { Component } from 'react'
import Heading from './Components/Heading/Heading'
import NameSection from './Components/NameSection/NameSection'
import AddressSection from './Components/AddressSection/AddressSection'
import PhoneSection from './Components/PhoneSection/PhoneSection'
import EmailSection from './Components/EmailSection/EmailSection'
import FamilySection from './Components/FamilySection/FamilySection'
import FoodSection from './Components/FoodSection/FoodSection'

import Logo from './Assets/F4FLogo.png'
import './App.css';

class App extends Component {
    
  constructor(props) {
      super(props)
      this.state = {
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          zipCode: '',
          phoneNumber: '',
          email: '',
          childAges: '',
          numOfAdults: '',
          dietRestriction: ''
          // numOfChildren: 0,
          // childGenders: [''],
          // childAges: [''],
          // childGrades: ['']
          // agency: ''
      }
    }

  handleFirstNameChange = (e) => {
    this.setState({
        firstName: e.target.value
    })
}
  handleLastNameChange = (e) => {
    this.setState({
        lastName: e.target.value
    })
}
    handleAddressChange = (e) => {
      this.setState({
          address: e.target.value
      })
    }
    handleCityChange = (e) => {
      this.setState({
          city: e.target.value
      })
    }
    handleZipCodeChange = (e) => {
      this.setState({
          zipCode: e.target.value
      })
    }
    handlePhoneNumberChange = (e) => {
      this.setState({
          phoneNumber: e.target.value
      })
    }
    handleEmailChange = (e) => {
      this.setState({
          email: e.target.value
      })
    }
    handleNumOfAdultsChange = (e) => {
      this.setState({
          numOfAdults: e.target.value
      })
    }
    handleChildAgesChange = (e) => {
      this.setState({
          childAges: e.target.value
      })
    }

  render() {
    console.log(this.state.firstName, this.state.lastName, this.state.address, this.state.city, this.state.zipCode, this.state.phoneNumber,
        this.state.email, this.state.numOfAdults, this.state.childAges)
      return (
        <div className='form-container'>
          <img className='page-logo' src={Logo} alt='F4F Logo' />
          <div className='first form-section'>
              <Heading />
          </div>
          <div className='form-section'>
              <NameSection 
                onFirstNameChange={this.handleFirstNameChange}
                onLastNameChange={this.handleLastNameChange}  
                firstName={this.state.firstName}
                lastName={this.state.lastName} />
          </div>
          <div className='form-section'>
              <AddressSection 
                addressChange={this.handleAddressChange}
                cityChange={this.handleCityChange}
                zipCodeChange={this.handleZipCodeChange}
                address ={this.state.address}
                city={this.state.city}
                zipCode={this.state.zipCode} />
          </div>
          <div className='form-section'>
              <PhoneSection 
                phoneNumberChange={this.handlePhoneNumberChange} 
                phoneNumber={this.state.phoneNumber} />
          </div>
          <div className='form-section'>
              <EmailSection 
                emailChange={this.handleEmailChange} 
                email={this.state.email} />
          </div>
          <div className='form-section'>
              <FamilySection 
                numOfAdultsChange={this.handleNumOfAdultsChange} 
                numOfAdults={this.state.numOfAdults} 
                childAgesChange={this.handleChildAgesChange}
                childAges={this.state.childAges}
                />
          </div>
          <div className='form-section'>
              <FoodSection />
          </div>
        </div>
        
      );
  }
}

export default App;
