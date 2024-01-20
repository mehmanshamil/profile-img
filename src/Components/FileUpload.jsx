import React, { useState } from "react";

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);
    } else {
      alert("Please select a photo file");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected file: {selectedFile.name}</p>
          <img
            src={URL.createObjectURL(selectedFile)}
            alt="Seçilen file"
            style={{ width: "10rem", height: "10rem", borderRadius: "50%" }}
          />
        </div>
      )}
    </div>
  );
};

export default FileUpload;
