import React, { useState } from 'react';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <label htmlFor="fileInput" className="mb-2 text-lg font-bold ">
        Select a file:
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        className="border border-gray-300 px-4 py-2 rounded-lg w-64"
      />
      {selectedFile && (
        <img src={previewUrl} alt="Uploaded" className="mt-4 w-3/4 h-auto rounded-lg" />
      )}
    </div>
  );
};

export default FileUploader;
