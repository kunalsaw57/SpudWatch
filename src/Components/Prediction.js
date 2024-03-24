import React, { useState } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handlePrediction = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setPrediction(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white border-4 border-blue-500 p-8 rounded-lg">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Upload leaf</h1>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-72 mb-4 bg-gray-100 rounded-md px-3 py-2 text-base leading-normal font-normal"
          />

          {imagePreview && (
            <div className="mb-4">
              <h2 className="text-xl font-bold mb-2">Image Preview</h2>
              <img
                src={imagePreview}
                alt="Preview"
                className="w-64 h-64 rounded-md object-cover"
              />
            </div>
          )}

          <button
            onClick={handlePrediction}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md justify-center"
          >
            Predict
          </button>

          {prediction && (
            <div className="mt-4">
              <h2 className="text-xl font-bold">Prediction</h2>
              <p>Class: {prediction.class}</p>
              <p>Confidence: {prediction.confidence}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
