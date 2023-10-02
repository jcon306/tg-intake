import React, { Component } from 'react'
import Heading from './Components/Heading/Heading'
import NameSection from './Components/NameSection/NameSection'
import AddressSection from './Components/AddressSection/AddressSection'
import PhoneSection from './Components/PhoneSection/PhoneSection'
import EmailSection from './Components/EmailSection/EmailSection'
import FamilySection from './Components/FamilySection/FamilySection'
import FoodSection from './Components/FoodSection/FoodSection'
import AgencySection from './Components/AgencySection/AgencySection'
import SubmitButton from './Components/SubmitButton/SubmitButton'
import Logo from './Assets/F4FLogo.png'
import axios from "axios";
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
          dietRestriction: 'None',
          specialRequests: '',
          agency: ''
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
    handleDietRestrictionChange = (e) => {
      this.setState({
          dietRestriction: e.target.value
      })
    }
    handleSpecialRequestsChange = (e) => {
      this.setState({
          specialRequests: e.target.value
      })
    }
    handleAgencyChange = (e) => {
      this.setState({
          agency: e.target.value
      })
  }
  async fetchRegisteredEmails() {
    try {
        // ---------------------------------- ADD API URL BELOW ----------------------------------------------------
        const response = await fetch('https://sheet.best/api/sheets/fd91b4ff-e40a-4167-9c6e-6425acbf86c8'); 
        const data = await response.json();

        const registeredEmails = data.map((row) => row["Client_Email"]);

        return registeredEmails;
    } catch (error) {
        console.error('Error fetching registered emails:', error);
        return [];
    }
  }
   handleSubmit = async (e) => {
        e.preventDefault()
  
        if (this.state.email.indexOf('@') === -1) {
            alert('Please enter a valid email address')
        } else if (this.state.phoneNumber.length < 10){
            alert('Please enter a valid phone number')
        } else if (!this.state.numOfAdults || !this.state.childAges) {
            alert('Please make sure all family information fields are filled out.')
        } else if (this.state.firstName && this.state.lastName && this.state.address && this.state.city 
            && this.state.zipCode && this.state.agency) {
                const registeredEmails = await this.fetchRegisteredEmails();
                const isEmailAlreadyRegistered = registeredEmails.includes(this.state.email);
    
                if (isEmailAlreadyRegistered) {
                    alert('Email is already registered.');
                    window.location.reload()
                    return
                } else {
                    const data = {
                        "Client_Email": this.state.email,
                        "Client's Last Name": this.state.lastName,
                        "Client's First Name": this.state.firstName,
                        "Address": `${this.state.address}, ${this.state.city}, ${this.state.zipCode}`,
                        "Phone Number": this.state.phoneNumber,
                        "Referral Agency": this.state.agency,
                        "Number Of Adults": this.state.numOfAdults,
                        "Child Ages": this.state.childAges,
                        "Dietary Restriction" : this.state.dietRestriction,
                        // "Special Requests": this.state.specialRequests,
                        "Special Requests": this.state.specialRequests.trim() !== '' ? this.state.specialRequests : 'None',
                        "Date Signed Up": new Date().toLocaleString().split(',')[0],
                        "Sponsored": 'No'        
                    }
                    // ---------------------------------- ADD API URL BELOW ----------------------------------------------------
                    axios.post("https://sheet.best/api/sheets/fd91b4ff-e40a-4167-9c6e-6425acbf86c8", data) 
                        .then((response) => {
                            if (response.status === 200) {
                                alert('Registration successful! You may now close this page.')
                            } 
                             this.setState({
                                firstName: '',
                                lastName: '',
                                address: '',
                                city: '',
                                zipCode: '',
                                phoneNumber: '',
                                email: '',
                                childAges: '',
                                numOfAdults: '',
                                dietRestriction: '',
                                specialRequests: '',
                                agency: ''
                            })
                        })
                        .catch(error => {
                            alert('There was a problem registering. Please try again later or email Families For Families.\n' + error.message)
                        })
                }
                
            }  else {
                alert('Please make sure all the contact information fields are filled out, and an agency is selected.')
            }  
    }
  
  render() {
    console.log(this.state.firstName, this.state.lastName, this.state.address, this.state.city, this.state.zipCode, this.state.phoneNumber,
        this.state.email, this.state.numOfAdults, this.state.childAges, this.state.dietRestriction, this.state.specialRequests, this.state.agency)
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
              <FoodSection 
                dietRestrictionChange={this.handleDietRestrictionChange}
                dietRestriction={this.state.dietRestriction}
                specialRequestsChange={this.handleSpecialRequestsChange}
                specialRequests={this.state.specialRequests}
              />
          </div>
          <div className='form-section'>
              <AgencySection 
                agencyChange={this.handleAgencyChange} 
                agency={this.state.agency} 
              />
          </div>
          <div className='submit'>
              <SubmitButton  
                onSubmit={this.handleSubmit}
              />
          </div> 
        </div>
        
      );
  }
}

export default App;
