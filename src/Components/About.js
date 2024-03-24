import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-6">Welcome to our Potato Disease Prediction platform! Our team is dedicated to revolutionizing agriculture through innovative technology solutions. We understand the challenges farmers face in maintaining crop health and maximizing yield.</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="mb-2">Our mission is to provide accessible tools and services to empower farmers and growers worldwide. By leveraging advanced algorithms and machine learning techniques, we aim to streamline the process of disease detection in crops, starting with potatoes.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="mb-2">We envision a future where precision agriculture is the norm, where farmers can make informed decisions quickly and efficiently to ensure food security and sustainability.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Our Team</h2>
          <p className="mb-2">We are a diverse team of experts passionate about agriculture, technology, and sustainability. Our combined expertise allows us to develop cutting-edge solutions that address real-world challenges faced by farmers and agricultural communities.</p>
        </div>
        <p className="font-semibold">Get in Touch</p>
        <p>Have questions or feedback? We'd love to hear from you! Reach out to us through our contact page.</p>
      </div>
    </div>
  );
}

export default About;
