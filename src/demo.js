import { useState } from 'react';
import { parseMatrix, drawMatrix, buttonData} from './dataPackaging';
import './demo.css';
import {handleAddition, handleMultiply, handleTranspose, handleInverse, handleGaussElimination,
handleLuFactorization, handleJacobiMethod, handleGaussSidel} from './api';
//import './api.js'

function Demo() {
  //these constants set the state for different parts of the frontend
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFileTwo, setSelectedFileTwo] = useState(null);
  const [matrixData, setMatrixData] = useState(null);
  const [matrixDataTwo, setMatrixDataTwo] = useState(null);
  const [resultMatrixData, setResultMatrixData] = useState(null);
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
  const [scalar, setScalar] = useState('');
  const [transpose_called, setTranspose_called] = useState(false);
  const [inverse_called, setInverse_called] = useState(false);
  const [gauss_called, setGauss_called] = useState(false);
  const [luFact_called, setLuFact_called] = useState(false);
  const [jacobi_called, setJacobi_called] = useState(false);
  const [gauss_siedel_called, setGauss_siedel_called] = useState(false);

  //set all of the operations to false
  //we have to set all of them to false because another one might be active, resulting in two showing up
  function set_all_operations_false(){
    setAdd_called(false);
    setMult_called(false);
    setTranspose_called(false);
    setInverse_called(false);
    setGauss_called(false);
    setLuFact_called(false);
    setJacobi_called(false);
    setGauss_siedel_called(false);
    setGotResult(false);
    const resultCanvas = document.getElementById('matrix-canvas-result');
    const resultCtx = resultCanvas.getContext('2d');
    resultCtx.clearRect(0, 0, 0, 0);
  }
  //when we get an add, set all the other operations to false
  function add_handler(){
    set_all_operations_false()
    setAdd_called(true);
  }
  function mult_handler(){
    set_all_operations_false()
    setMult_called(true);
  }
  function transpose_handler(){
    set_all_operations_false()
    setTranspose_called(true);
  }
  function inverse_handler(){
    set_all_operations_false()
    setInverse_called(true);
  }
  function gauss_handler(){
    set_all_operations_false()
    setGauss_called(true);
  }
  function luFact_handler(){
    set_all_operations_false()
    setLuFact_called(true);
  }
  function jacobi_handler(){
    set_all_operations_false()
    setJacobi_called(true);
  }
  function gauss_siedel_handler(){
    set_all_operations_false()
    setGauss_siedel_called(true);
  }
  //maps the functions to a value
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
  //calls the correct handler based on the ID
  function handleClick(funcId) {
    const func = func_map[funcId];
    func();
  }
  //when a file is inputed update some states
  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFilename(event.target.files[0].name);
    setButtonColor("#4CAF50");
    setButtons([]);
  };
  //when a file is submited, validate it and display it
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
        setMatrixData(matrixData);
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
  //for when the functions requires two matrices
  const handleFileInputChangeTwo = (event) => {
    setSelectedFileTwo(event.target.files[0]);
    setfileNameTwo(event.target.files[0].name);
    setButtonColorSecondFileUpload("#4CAF50");
  };
  //for when the functions require two matrices
  const handleSubmitSecondMatrix = (event) => {
    event.preventDefault();
    const reader = new FileReader();
    reader.readAsText(selectedFileTwo);
    reader.onload = (event) => {
      const matrixData = event.target.result;
      const isValid = parseMatrix(matrixData);
      setButtonColorSecondFileUpload(isValid ? "#4CAF50" : "#CCCCCC");
      setIsValidMatrixTwo(isValid);
      if (isValid) {
        setMatrixDataTwo(matrixData);
        const canvas = document.getElementById('matrix-canvas-two');
        const ctx = canvas.getContext('2d');
        drawMatrix(matrixData, canvas, ctx);
      }
    };
  };

  //when a file is submited, validate it and display it
  const handleComputeAddition = async (event) => {
    try{
      const result = await handleAddition(matrixData, matrixDataTwo);
      console.log(result);
      if(parseMatrix(result)){
        setGotResult(true);
        setResultMatrixData(result);  
        const canvas = document.getElementById('matrix-canvas-result');
        const ctx = canvas.getContext('2d');
        drawMatrix(result, canvas, ctx);
      }else{
        alert("The result is not a valid matrix");
      }
    } catch (error) {
      console.log("Error in handleComputeAddition: ", error);
    }
  };

  //when a file is submited, validate it and display it
  const handleComputeScalar = async (event) => {
    try{
      const result = await handleMultiply(matrixData, scalar);
      console.log(result);
      if(parseMatrix(result)){
        setGotResult(true);
        setResultMatrixData(result);  
        const canvas = document.getElementById('matrix-canvas-result');
        const ctx = canvas.getContext('2d');
        drawMatrix(result, canvas, ctx);
      }else{
        alert("The result is not a valid matrix");
      }
    } catch (error) {
      console.log("Error in handleComputeAddition: ", error);
    }
  };

  //when a file is submited, validate it and display it
  const handleComputeTranspose = async (event) => {
    try{
      const result = await handleTranspose(matrixData);
      setGotResult(true);
      setResultMatrixData(result);  
      const canvas = document.getElementById('matrix-canvas-result');
      const ctx = canvas.getContext('2d');
      drawMatrix(result, canvas, ctx);
    } catch (error) {
      console.log("Error in handleComputeAddition: ", error);
    }
  };

  //when a file is submited, validate it and display it
  const handleComputeInverse = async(event) => {
    try{
      const result = await handleInverse(matrixData);
      setGotResult(true);
      setResultMatrixData(result);  
      const canvas = document.getElementById('matrix-canvas-result');
      const ctx = canvas.getContext('2d');
      drawMatrix(result, canvas, ctx);
    } catch (error) {
      console.log("Error in handleComputeAddition: ", error);
    }
  };

  //when a file is submited, validate it and display it
  const handleComputeGaussElimination = async (event) => {
    try{
      const result = await handleGaussElimination(matrixData,matrixDataTwo);
      setGotResult(true);
      setResultMatrixData(result);  
      const canvas = document.getElementById('matrix-canvas-result');
      const ctx = canvas.getContext('2d');
      drawMatrix(result, canvas, ctx);
    } catch (error) {
      console.log("Error in handleComputeAddition: ", error);
    }
  };

  //when a file is submited, validate it and display it
  const handleComputeLuFactorization = async (event) => {
    try{
      const result = await handleLuFactorization(matrixData);
      setGotResult(true);
      setResultMatrixData(result);  
      const canvas = document.getElementById('matrix-canvas-result');
      const ctx = canvas.getContext('2d');
      drawMatrix(result, canvas, ctx);
    } catch (error) {
      console.log("Error in handleComputeAddition: ", error);
    }
  };

  //when a file is submited, validate it and display it
  const handleComputJacobiMethod = async (event) => {
    try{
      const result = await handleJacobiMethod(matrixData, matrixDataTwo);
      setGotResult(true);
      setResultMatrixData(result);  
      const canvas = document.getElementById('matrix-canvas-result');
      const ctx = canvas.getContext('2d');
      drawMatrix(result, canvas, ctx);
    } catch (error) {
      console.log("Error in handleComputeAddition: ", error);
    }
  };

  //when a file is submited, validate it and display it
  const handleComputeGaussSidel = async (event) => {
    try{
      const result = await handleGaussSidel(matrixData, matrixDataTwo);
      setGotResult(true);
      setResultMatrixData(result);  
      const canvas = document.getElementById('matrix-canvas-result');
      const ctx = canvas.getContext('2d');
      drawMatrix(result, canvas, ctx);
    } catch (error) {
      console.log("Error in handleComputeAddition: ", error);
    }
  };

  const downloadResultMatrix = () => {
    if (resultMatrixData) {
      const blob = new Blob([resultMatrixData], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement('a');
      a.href = url;
      a.download = 'result_matrix.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  return (
    <div className="file-upload">
    {true && (
      <div >
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
              <label htmlFor="file-input-2" className={isValidMatrixTwo ? "file-input" : "file-input file-invalid"} style={{ backgroundColor: buttonColorSecondFileUpload }}>
                  <i className="fas fa-cloud-upload-alt"></i> {fileNameTwo || "Choose File"}
                </label>
                <input id="file-input-2" type="file" name="file" onChange={handleFileInputChangeTwo} />
                <button type="submit" className="file-input" style={{ backgroundColor: buttonColorSecondFileUpload }} disabled={!selectedFileTwo}>Upload</button>      
              </form>
              <canvas id="matrix-canvas-two"></canvas>
              <div>
              <button type="submit" onClick={() => handleComputeAddition()}>
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
              <button type="submit" onClick={() => handleComputeScalar()}>
                Compute
              </button>
            </div>
          )}
          {transpose_called && (
            <div>
              <p>Transpose the matrix.</p>
              <button type="submit" onClick={() => handleComputeTranspose()}>
                Compute
              </button>
            </div>
          )}
          {inverse_called && (
            <div>
              <p>Inverse the matrix.</p>
              <button type="submit" onClick={() => handleComputeInverse()}>
                Compute
              </button>
            </div>
          )}
          {gauss_called && (
            <div>
            <label for="add">Upload B vector to solve the system using Gauss elimination</label>
            <form onSubmit={handleSubmitSecondMatrix}>
            <label htmlFor="file-input-2" className={isValidMatrixTwo ? "file-input" : "file-input file-invalid"} style={{ backgroundColor: buttonColorSecondFileUpload }}>
                <i className="fas fa-cloud-upload-alt"></i> {fileNameTwo || "Choose File"}
              </label>
              <input id="file-input-2" type="file" name="file" onChange={handleFileInputChangeTwo} />
              <button type="submit" className="file-input" style={{ backgroundColor: buttonColorSecondFileUpload }} disabled={!selectedFileTwo}>Upload</button>      
            </form>
            <canvas id="matrix-canvas-two"></canvas>
            <div>
            <button type="submit" onClick={() => handleComputeGaussElimination()}>
              Compute
            </button>
            </div>
          </div>
          )}
          {luFact_called && (
            <div>
            <p>Compute the LU factorization.</p>
            <button type="submit" onClick={() => handleComputeLuFactorization()}>
              Compute
            </button>
          </div>
          )}
          {jacobi_called && (
             <div>
             <label for="add">Upload B vector to solve the system using Jacobi Method</label>
             <form onSubmit={handleSubmitSecondMatrix}>
             <label htmlFor="file-input-2" className={isValidMatrixTwo ? "file-input" : "file-input file-invalid"} style={{ backgroundColor: buttonColorSecondFileUpload }}>
                 <i className="fas fa-cloud-upload-alt"></i> {fileNameTwo || "Choose File"}
               </label>
               <input id="file-input-2" type="file" name="file" onChange={handleFileInputChangeTwo} />
               <button type="submit" className="file-input" style={{ backgroundColor: buttonColorSecondFileUpload }} disabled={!selectedFileTwo}>Upload</button>      
             </form>
             <canvas id="matrix-canvas-two"></canvas>
             <div>
             <button type="submit" onClick={() => handleComputJacobiMethod()}>
               Compute
             </button>
             </div>
            </div>
          )}
          {gauss_siedel_called && (
             <div>
             <label for="add">Upload B vector to solve the system using Gauss Siedel</label>
             <form onSubmit={handleSubmitSecondMatrix}>
             <label htmlFor="file-input-2" className={isValidMatrixTwo ? "file-input" : "file-input file-invalid"} style={{ backgroundColor: buttonColorSecondFileUpload }}>
                 <i className="fas fa-cloud-upload-alt"></i> {fileNameTwo || "Choose File"}
               </label>
               <input id="file-input-2" type="file" name="file" onChange={handleFileInputChangeTwo} />
               <button type="submit" className="file-input" style={{ backgroundColor: buttonColorSecondFileUpload }} disabled={!selectedFileTwo}>Upload</button>      
             </form>
             <canvas id="matrix-canvas-two"></canvas>
             <div>
             <button type="submit" onClick={() => handleComputeGaussSidel()}>
               Compute
             </button>
             </div>
            </div>
          )}
        </div>
      )}
    </div>
    )}
              {gotResult && (
                <div>
                  <p>And the result is...</p>
                  <button type="button" id="downloadLink" onClick={downloadResultMatrix}>
                    Download Result Matrix
                  </button>
                </div>
              
              )}
              <canvas id="matrix-canvas-result"></canvas>
    </div>
  );
}
export default Demo;