import { useState } from 'react';
import { parseMatrix, drawMatrix, buttonData } from './dataPackaging';
import './demo.css';

function add_handler(){
  console.log("add");
}
function mult_handler(){
  console.log("mult");
}
function transpose_handler(){
  console.log("transpose");
}
function inverse_handler(){
  console.log("inverse");
}
function gauss_handler(){
  console.log("gauss");
}
function luFact_handler(){
  return 0;
}
function jacobi_handler(){
  return 0;
}
function gauss_siedel_handler(){
  return 0;
}

const func_map = {
  0x10: add_handler,
  0x11: mult_handler,
  0x12: transpose_handler,
  0x13: inverse_handler,
  0x20: gauss_handler,
  0x21: luFact_handler,
  0x30: jacobi_handler,
  0x31: gauss_siedel_handler,
}

function handleClick(funcId) {
  const func = func_map[funcId];
  func();
}


function Demo() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFilename] = useState(null);
  const [buttonColor, setButtonColor] = useState("#CCCCCC");
  const [isValidMatrix, setIsValidMatrix] = useState(true); // assuming it is initially valid
  const [buttons, setButtons] = useState([]);


  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
    setButtonColor("#4CAF50");
    setButtons([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    reader.readAsText(selectedFile);
    reader.onload = (event) => {
      const matrixData = event.target.result;
      const isValid = parseMatrix(matrixData);
      setButtonColor(isValid ? "#4CAF50" : "#CCCCCC");
      setIsValidMatrix(isValid);

      if (isValid) {
        const canvas = document.getElementById('matrix-canvas');
        const ctx = canvas.getContext('2d');
        drawMatrix(matrixData, canvas, ctx);
        const buttons = buttonData.map((button) => (
          <button key={button.func_id} onClick={() => handleClick(button.func_id)}>
            {button.label}
          </button>
        ));
        setButtons(buttons);
      }
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
          The uploaded file does not contain a valid matrix. Please ensure that it is formatted correctly and is less than or equal to 25x25.
        </p>
      )}
      {isValidMatrix && (
        <div>
          <canvas id="matrix-canvas"></canvas>
          <div className="button-container">{buttons}</div>
        </div>
      )}
    </div>
  );
}

export default Demo;
