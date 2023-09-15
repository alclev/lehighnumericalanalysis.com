import { useState } from 'react';
import { parseMatrix, drawMatrix, buttonData } from './dataPackaging';
import './demo.css';
import {handleAddition, handleMultiply, handleTranspose, handleInverse} from './api';
//import './api.js'




function Demo() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileTwo, setSelectedFileTwo] = useState(null);
  const [gotResult, setGotResult] = useState(null);
  const [filename, setFilename] = useState(null);
  const [fileNameTwo, setfileNameTwo] = useState(null);
  const [buttonColor, setButtonColor] = useState("#CCCCCC");
  const [buttonColorSecondFileUpload, setButtonColorSecondFileUpload] = useState("#CCCCCC");
  const [isValidMatrix, setIsValidMatrix] = useState(true); // assuming it is initially valid
  const [isValidMatrixTwo, setIsValidMatrixTwo] = useState(true); // assuming it is initially valid
  const [buttons, setButtons] = useState([]);

  const [add_called, setAdd_called] = useState(false);
  const [mult_called, setMult_called] = useState(false);
  //for mult
  const [scalar, setScalar] = useState('');
  const [transpose_called, setTranspose_called] = useState(false);
  const [inverse_called, setInverse_called] = useState(false);
  const [gauss_called, setGauss_called] = useState(false);
  const [luFact_called, setLuFact_called] = useState(false);
  const [jacobi_called, setJacobi_called] = useState(false);
  const [gauss_siedel_called, setGauss_siedel_called] = useState(false);

  function add_handler(){
    setAdd_called(true);
    setMult_called(false);
    setTranspose_called(false);
    setInverse_called(false);
    setGauss_called(false);
    setLuFact_called(false);
    setJacobi_called(false);
    setGauss_siedel_called(false);

  }
  function mult_handler(){
    setAdd_called(false);
    setMult_called(true);
    setTranspose_called(false);
    setInverse_called(false);
    setGauss_called(false);
    setLuFact_called(false);
    setJacobi_called(false);
    setGauss_siedel_called(false);
  }
  function transpose_handler(){
    setAdd_called(false);
    setMult_called(false);
    setTranspose_called(true);
    setInverse_called(false);
    setGauss_called(false);
    setLuFact_called(false);
    setJacobi_called(false);
    setGauss_siedel_called(false);
  }
  function inverse_handler(){
    setAdd_called(false);
    setMult_called(false);
    setTranspose_called(false);
    setInverse_called(true);
    setGauss_called(false);
    setLuFact_called(false);
    setJacobi_called(false);
    setGauss_siedel_called(false);
  }
  function gauss_handler(){
    setAdd_called(false);
    setMult_called(false);
    setTranspose_called(false);
    setInverse_called(false);
    setGauss_called(true);
    setLuFact_called(false);
    setJacobi_called(false);
    setGauss_siedel_called(false);
  }
  function luFact_handler(){
    setAdd_called(false);
    setMult_called(false);
    setTranspose_called(false);
    setInverse_called(false);
    setGauss_called(false);
    setLuFact_called(true);
    setJacobi_called(false);
    setGauss_siedel_called(false);
  }
  function jacobi_handler(){
    setAdd_called(false);
    setMult_called(false);
    setTranspose_called(false);
    setInverse_called(false);
    setGauss_called(false);
    setLuFact_called(false);
    setJacobi_called(true);
    setGauss_siedel_called(false);
  }
  function gauss_siedel_handler(){
    setAdd_called(false);
    setMult_called(false);
    setTranspose_called(false);
    setInverse_called(false);
    setGauss_called(false);
    setLuFact_called(false);
    setJacobi_called(false);
    setGauss_siedel_called(true);
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

  const handleFileInputChangeTwo = (event) => {
    setSelectedFileTwo(event.target.files[0]);
    setfileNameTwo(event.target.files[0].name);
    setButtonColorSecondFileUpload("#4CAF50");
    setButtons([]);
  };

  const handleSubmitSecondMatrix = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    reader.readAsText(selectedFile);
    reader.onload = (event) => {
      const matrixData = event.target.result;
      const isValid = parseMatrix(matrixData);
      setButtonColorSecondFileUpload(isValid ? "#4CAF50" : "#CCCCCC");
      setIsValidMatrixTwo(isValid);

      if (isValid) {
        const canvas = document.getElementById('matrix-canvas-two');
        const ctx = canvas.getContext('2d');
        drawMatrix(matrixData, canvas, ctx);
        // const buttons = buttonData.map((button) => (
        //   <button key={button.func_id} onClick={() => handleClick(button.func_id)}>
        //     {button.label}
        //   </button>
        // ));
        // setButtons(buttons);
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
          {add_called && (
            <div>
              <label for="add">Upload a matrix to add:</label>
              <form onSubmit={handleSubmitSecondMatrix}>
                <label htmlFor="file-input" className={isValidMatrixTwo ? "file-input" : "file-input file-invalid"} style={{ backgroundColor: buttonColorSecondFileUpload }}>
                  <i className="fas fa-cloud-upload-alt"></i> {fileNameTwo || "Choose File"}
                </label>
                <input id="file-input" type="file" name="file" onChange={handleFileInputChangeTwo} />
                <button type="submit" className="file-input" style={{ backgroundColor: buttonColorSecondFileUpload }} disabled={selectedFileTwo}>Upload</button>
              </form>
              <canvas id="matrix-canvas-two"></canvas>
              <div>
                <button type="submit" onClick={() => handleAddition(selectedFile, selectedFileTwo)}>
                  Compute
                </button>
              </div>
            </div>
          )}
          {mult_called && (
            <div>
              <label htmlFor="mult">Multiply a matrix by a scalar:</label>
              <p>Enter a scalar</p>
              <input
                className="mult-input"
                type="number"
                value={scalar}
                onChange={(e) => setScalar(e.target.value)}
              />
              <button type="submit" onClick={() => handleMultiply(selectedFile, scalar)}>
                Compute
              </button>
            </div>
          )}
          {transpose_called && (
            <div>
              <p>Transpose the matrix.</p>
              <button type="submit" onClick={() => handleTranspose(selectedFile)}>
                Compute
              </button>
            </div>
          )}
          {inverse_called && (
            <div>
              <p>Inverse the matrix.</p>
              <button type="submit" onClick={() => handleInverse(selectedFile)}>
                Compute
              </button>
            </div>
          )}
          {gauss_called && (
            <div>
              <p>Solve the system using Gauss elimination</p>
              <button type="submit">Compute</button>
            </div>
          )}
          {luFact_called && (
            <div>
              <p>Decompose the square matrix with LU factorization</p>
              <button type="submit">Compute</button>
           </div>
          )}
          {jacobi_called && (
            <div>
              <p>Solve the system using the Jacobi method</p>
              <button type="submit">Compute</button>
            </div>
          )}
          {gauss_siedel_called && (
            <div>
              <p>Solve the system using Gauss Siedel</p>
              <button type="submit">Compute</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Demo;
