import React from 'react';

function PrivacyPolicy() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-16">
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Overview</h2>
          <p className="mb-2">At Potato Disease Prediction, we are committed to protecting your privacy and ensuring the security of your personal information. This privacy policy outlines how we collect, use, and safeguard the information you provide to us.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Information We Collect</h2>
          <p className="mb-2">Personal Information: When you register on our platform or contact us, we may collect personal information such as your name, email address, and contact details.</p>
          <p className="mb-2">Usage Data: We may collect information about how you interact with our platform, including your browsing activity and preferences.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">How We Use Your Information</h2>
          <p className="mb-2">To provide and maintain our services.</p>
          <p className="mb-2">To communicate with you and respond to your inquiries.</p>
          <p className="mb-2">To analyze usage trends and improve our platform's functionality.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Data Security</h2>
          <p className="mb-2">We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Third-Party Links</h2>
          <p className="mb-2">Our platform may contain links to third-party websites or services. Please note that we are not responsible for the privacy practices of these third parties.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">Changes to This Policy</h2>
          <p className="mb-2">We reserve the right to update or modify this privacy policy at any time. We encourage you to review this page periodically for any changes.</p>
        </div>
        <p className="font-semibold">Contact Us</p>
        <p>If you have any questions or concerns about our privacy policy, please contact us at <a href="mailto:privacy@example.com" className="text-blue-500">privacy@example.com</a>.</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
