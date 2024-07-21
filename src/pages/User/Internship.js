import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');  // This is to avoid accessibility-related warnings

const InternshipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    college: '',
    experience: '',
    internship: '',
    heardAboutUs: '',
    friendName: '',
    phoneNumber: '' // Added phoneNumber field
  });
  console.log(formData)

  const [showFriendName, setShowFriendName] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [error, setError] = useState('');
const Razpay = process.env.REACT_APP_RAZPAY_KEY;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'heardAboutUs' && value === 'friend') {
      setShowFriendName(true);
    } else if (name === 'heardAboutUs') {
      setShowFriendName(false);
    }
  };
  console.log(formData)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('https://devstore-backend.vercel.app/api/formData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const formDataResult = await response.json();
console.log(formData)
      // Redirect to Razorpay payment page
      const options = {
        key: Razpay,
        amount: 199, // Amount in paise (₹599)
        currency: 'INR',
        name: 'Vigrona Ventures pvt Ltd',
        description: 'Internship Application Registration',
        handler: async function (response) {
          try {
            // Update payment status on backend
            await fetch(`https://devstore-backend.vercel.app/api/payment/${formDataResult._id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              }
            });

            // Update state to show modal
            setModalIsOpen(true);

            // Optionally redirect after 3 seconds
            setTimeout(() => {
              setModalIsOpen(false);
              window.location.href = 'https://artizz.store';
            }, 3000);
          } catch (error) {
            console.error('Error updating payment status:', error);
            setError('Failed to update payment status.');
          }
        },
        prefill: {
          name: `${formData.name} ${formData.lastname}`,
          email: formData.email,
          contact: formData.phoneNumber // Include phoneNumber in prefill
        },
        theme: {
          color: '#3399cc'
        },
        modal: {
          ondismiss: function () {
            // handle modal close if needed
          }
        }
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();

    } catch (error) {
      setError('Failed to submit the form. Please try again.');
      console.error('Fetch error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 mt-16">Internship Application Form</h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">First Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Last Name</label>
          <input
            type="text"
            name="lastname"
            required
            value={formData.lastname}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"

            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">College</label>
          <input
            type="text"
            name="college"

            required
            value={formData.college}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Experience</label>
          <textarea
            name="experience"
            required
            value={formData.experience}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Internship Interest</label>
          <select
            name="internship"
            required
            value={formData.internship}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="python-ai-ml">Python AI/ML</option>
            <option value="web-development">Web Development</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
          <select
            name="heardAboutUs"
            value={formData.heardAboutUs}
            required
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="">Select</option>
            <option value="ad-fb-insta">Ad on Facebook/Instagram</option>
            <option value="friend">Referred by a Friend</option>
            <option value="google-search">Google Search</option>
            <option value="linkedin">LinkedIn</option>
          </select>
        </div>

        {showFriendName && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Friend's Name</label>
            <input
              type="text"
              name="friendName"
              value={formData.friendName}
              required
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phoneNumber"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit and Pay ₹599
          </button>
        </div>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Payment Successful"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75"
      >
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Payment Successful</h2>
          <p>Your payment was successful. You will be redirected shortly.</p>
        </div>
      </Modal>
    </div>
  );
};

export default InternshipForm;
