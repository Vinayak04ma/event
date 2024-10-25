import React, { useState } from 'react';
import Foot from "../Foot";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ticketType: '',
    agreeTerms: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const Input = (e) => {
    const { name,value,type,checked } = e.target;
    setFormData({  ...formData,[name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name) errors.name = 'Name is required';
    else if (!formData.email) {
      errors.email = 'Email is required';
    } 
    
    if (!formData.ticketType) errors.ticketType = 'Please select your ticket type';
    if (!formData.agreeTerms) errors.agreeTerms = 'You must agree to our Terms & Conditions';

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
    }
  };

  return (
    <>
    <div className="max-w-lg mx-auto p-8 bg-[#576CBC] shadow-lg rounded-xl my-10">
      <h2 className="text-3xl font-bold text-white  mb-6 text-center">Event Registration</h2>

      {submitted ? (
        <div className="p-4 mb-6 text-green-800 bg-green-100 rounded-md border border-green-300">
          🎉 Registration successful! See you at the event.
        </div>) : (<form onSubmit={handleSubmit} className="space-y-6">



          <div>
            <label className="block text-lg font-semibold text-[#f2f1f1] mb-2" htmlFor="name">
              Full Name
            </label>
            <input
              type="text" id="name" name="name" value={formData.name} onChange={Input} className={`w-full p-3 border ${
                formErrors.name ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-4 transition-all duration-300 ${ formErrors.name ? 'focus:ring-red-300' : 'focus:ring-blue-400'}`}

              placeholder="Enter your full name" required
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold text-[#f2f1f1] mb-2" htmlFor="email">
              Email Address
            </label>
            <input type="email" id="email" name="email" value={formData.email} onChange={Input} className={`w-full p-3 border 
            ${
                formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-4 transition-all duration-300 ${
                formErrors.email ? 'focus:ring-red-300' : 'focus:ring-blue-400'

              }`} placeholder="Enter your email" required
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
            )}
          </div>

        

          <div>
            <label className="block text-lg font-semibold text-[#f2f1f1] mb-2" htmlFor="ticketType">
              Ticket Type
            </label>
            <select id="ticketType" name="ticketType" value={formData.ticketType}  onChange={Input}
              className={`w-full p-3 border ${
                formErrors.ticketType ? 'border-red-500' : 'border-gray-300'
              } rounded-lg focus:outline-none focus:ring-4 transition-all duration-300 ${
                formErrors.ticketType ? 'focus:ring-red-300' : 'focus:ring-blue-400'
              }`}

              required
            >
              <option value="">Select a ticket type</option>
              <option value="VIP">VIP</option>
              <option value="General Admission">General Admission</option>
              <option value="Student">Student</option>
            </select>
            {formErrors.ticketType && (
              <p className="text-red-500 text-sm mt-1">{formErrors.ticketType}</p>
            )}
          </div>

      
          <div className="flex items-center space-x-3">
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms}  onChange={Input}

              className="h-5 w-5 text-blue-500 focus:ring-4 focus:ring-blue-300 rounded-md transition-all duration-300"
              required
            />
            <label className="text-[#f2f1f1] text-sm">
              I agree to the <span className="underline">terms and conditions</span>
            </label>
            {formErrors.agreeTerms && (
              <p className="text-red-500 text-sm mt-1">{formErrors.agreeTerms}</p>
            )}
          </div>


        
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold text-lg py-3
             rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300
              focus:outline-none focus:ring-4 focus:ring-blue-300">
            Register Now
          </button>
        </form>
      )}
    
    </div>
    <Foot/>
    </>
  );
};

export default RegistrationForm;
