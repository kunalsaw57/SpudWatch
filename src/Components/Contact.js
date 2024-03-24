import React from 'react';

function Contact() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">General Inquiries</h2>
          <p className="mb-2">For general inquiries or questions about our platform, please email us at <a href="mailto:contact@example.com" className="text-blue-500">contact@example.com</a>.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Support</h2>
          <p className="mb-2">Need technical assistance or experiencing issues with our service? Our support team is here to help! Reach out to us at <a href="mailto:support@example.com" className="text-blue-500">support@example.com</a>.</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Business Opportunities</h2>
          <p className="mb-2">Interested in partnering with us or exploring business opportunities? Contact our business development team at <a href="mailto:partnerships@example.com" className="text-blue-500">partnerships@example.com</a>.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">Address</h2>
          <p>123 Main Street<br />City, State, Zip Code<br />Country</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
