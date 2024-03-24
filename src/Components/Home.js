import React from 'react';

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-3/4">
        <h1 className="text-3xl font-bold mb-4">Potato Disease Prediction</h1>
        <p className="mb-6">Welcome to our Potato Disease Prediction service. Upload an image of your potato plant and let us analyze it to determine if it's healthy or if it shows signs of disease.</p>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">How it Works</h2>
          <p className="mb-2">1. Upload Image: Provide the URL of an image showing your potato plant.</p>
          <p className="mb-2">2. Predict: Click the "Predict" button to analyze the image.</p>
          <p>3. Get Results: Receive instant feedback on whether your potato plant is healthy or if it exhibits symptoms of disease.</p>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Why It's Important</h2>
          <p className="mb-2">Early detection of diseases in potato plants is crucial for maintaining crop health and maximizing yield. Our prediction service helps you identify potential issues early, allowing for timely intervention and effective management practices.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
