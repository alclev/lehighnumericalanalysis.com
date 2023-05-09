import { useState } from 'react';
import './demo.css';
import { parseMatrix } from './dataPackaging';

function Demo() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [filename, setFilename] = useState(null);
  const [buttonColor, setButtonColor] = useState("#CCCCCC");
  const [isValidMatrix, setIsValidMatrix] = useState(true); // assuming it is initially valid

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
    setButtonColor("#4CAF50");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    reader.readAsText(selectedFile);
    reader.onload = (event) => {
      const matrixData = event.target.result;
      const isValidMatrix = parseMatrix(matrixData); 
      setFileData(matrixData);
      setButtonColor(isValidMatrix ? "#4CAF50" : "#CCCCCC");
      setIsValidMatrix(isValidMatrix);
    };
  };

  return (
    <div className="file-upload">
      <div className="matrix-format-box">
        <h2>Upload Your Matrix File</h2>
        <div>
          <p>In order for the program to read the file, it must be formatted in the following way for ONE matrix:</p>
          <ol style={{ textAlign: "left" }}>
            <li>Dimensions separated by commas</li>
            <li>Elements separated by commas</li>
          </ol>
          <h3>Example</h3>
          <div style={{ textAlign: "left" }}>
            The following is the proper format for a file containing a single 2 x 2 matrix with 1 and 2 in the first row and 3 and 4 in the second row:
            <br />
            <pre>
              2,2
              <br />
              1,2,3,4
            </pre>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="file-input" className={isValidMatrix ? "file-input" : "file-input file-invalid"} style={{ backgroundColor: buttonColor }}>
          <i className="fas fa-cloud-upload-alt"></i> {filename || "Choose File"}
        </label>
        <input id="file-input" type="file" name="file" onChange={handleFileInputChange} />
        <button type="submit" className="file-input" style={{ backgroundColor: buttonColor }} disabled={!selectedFile}>Upload</button>
      </form>
      {!isValidMatrix && (
        <p style={{ color: "red", marginTop: "10px" }}>
          The uploaded file does not contain a valid matrix. Please ensure that it is formatted correctly.
        </p>
      )}
      {fileData && <div>{fileData}</div>}
    </div>
  );
}

export default Demo;
