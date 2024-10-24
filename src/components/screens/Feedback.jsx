import React, { useState } from 'react';


const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    comments: '',
  });
  const [formErrors, setFormErrors] = useState({});


  const [feedbackList, setFeedbackList] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';

    if (!formData.rating) errors.rating = 'Rating is required';
    if (!formData.comments) errors.comments = 'Comments are required';

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFeedbackList([...feedbackList, formData]);
      setFormData({ name: '', rating: 0, comments: '' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-white to-blue-50 shadow-xl rounded-lg mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Submit Your Feedback for us to improve !</h2>

      <form onSubmit={handleSubmit} className="space-y-6">

        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange}
            
            className={`w-full p-3 border ${ formErrors.name ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-4 transition-all duration-300 ${ formErrors.name ? 'focus:ring-red-300' : 'focus:ring-blue-400'}`}
            placeholder="Enter your name" required />

          {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}

        </div>

   


        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="rating">
            Rating (1-5)
          </label>
          <select  id="rating"  name="rating" value={formData.rating} onChange={handleInputChange}
        
            className={`w-full p-3 border ${ formErrors.rating ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-4 transition-all duration-300 ${
              formErrors.rating ? 'focus:ring-red-300' : 'focus:ring-blue-400' }`}
            required >
            <option value="">Select a rating</option>
            <option value="5">5 - Excellent</option>

            <option value="4">4 - Very Good</option>
            <option value="3">3 - Good</option>
            <option value="2">2 - Fair</option>

            <option value="1">1 - Poor</option>

          </select>
          {formErrors.rating && (
            <p className="text-red-500 text-sm mt-1">{formErrors.rating}</p>
          )}


        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-700 mb-2" htmlFor="comments">
            Comments
          </label>
          <textarea id="comments" name="comments"  value={formData.comments}  onChange={handleInputChange}
          
             className={`w-full p-3 border ${  formErrors.comments ? 'border-red-500' : 'border-gray-300'
            } rounded-lg focus:outline-none focus:ring-4 transition-all duration-300 ${
              formErrors.comments ? 'focus:ring-red-300' : 'focus:ring-blue-400' }`}
            placeholder="Write your feedback here" rows="4" required>
            
            </textarea>


          {formErrors.comments && (
            <p className="text-red-500 text-sm mt-1">{formErrors.comments}</p>)}

        </div>


        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold text-lg py-3 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Submit Feedback
        </button>
      </form>

    

    
      <div className="mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4"> Check out our Recent Feedback</h3>
        <div className="space-y-6">
          {feedbackList.map((feedback, index) => (
            <div key={index} className="p-6 bg-white border border-gray-200 shadow-md rounded-lg transition-transform hover:scale-105 duration-300">
            
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xl font-semibold text-gray-700">{feedback.name}</h4>
            
                <span className="text-yellow-500 text-lg font-bold">
                  {'★'.repeat(feedback.rating)}
                </span>

              </div>

              <p className="text-gray-600">{feedback.comments}</p>

            </div>
          ))}
        </div>

      </div>



    </div>
  );
};

export default Feedback;
