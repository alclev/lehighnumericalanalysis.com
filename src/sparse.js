import { useState } from 'react';
import { sparseButtonData, drawSparseMatrix} from './dataPackaging';
import './demo.css';
import {handleAddition, handleMultiply, handleTranspose, handleInverse, handleGaussElimination,
handleLuFactorization, handleJacobiMethod, handleGaussSidel} from './api';
function Sparse() {
//these constants set the state for different parts of the frontend
const [selectedFile, setSelectedFile] = useState(null);
const [selectedFileTwo, setSelectedFileTwo] = useState(null);
const [matrixData, setMatrixData] = useState(null);
const [matrixDataTwo, setMatrixDataTwo] = useState(null);
const [gotResult, setGotResult] = useState(null);
const [filename, setFilename] = useState(null);
const [fileNameTwo, setfileNameTwo] = useState(null);
const [buttonColor, setButtonColor] = useState("#CCCCCC");
const [buttonColorSecondFileUpload, setButtonColorSecondFileUpload] = useState("#CCCCCC");
const [isValidMatrix, setIsValidMatrix] = useState(true); // assuming it is initially valid
const [isValidMatrixTwo, setIsValidMatrixTwo] = useState(true); // assuming it is initially valid
const [buttons, setButtons] = useState([]);
const [add_called, setSparseAdd_called] = useState(false);
const [mult_called, setSparseMatrixMult_called] = useState(false);
const [scalar, setScalar] = useState('');
const [transpose_called, setSparseTranspose_called] = useState(false);
const [inverse_called, setSparseApproximateInverse_called] = useState(false);
const [gauss_called, setSparseGauss_called] = useState(false);
const [luFact_called, setSparseLuFact_called] = useState(false);
const [jacobi_called, setSparseJacobi_called] = useState(false);

//set all of the operations to false
//we have to set all of them to false because another one might be active, resulting in two showing up
function set_all_operations_false(){
  setSparseAdd_called(false);
  setSparseMatrixMult_called(false);
  setSparseTranspose_called(false);
  setSparseApproximateInverse_called(false);
  setSparseGauss_called(false);
  setSparseLuFact_called(false);
  setSparseJacobi_called(false);
  setGotResult(false);
}
//when we get an add, set all the other operations to false
function sparse_add_handler(){
  set_all_operations_false()
  setSparseAdd_called(true);
}
function sprase_matrix_mult_handler(){
  set_all_operations_false()
  setSparseMatrixMult_called(true);
}
function sparse_transpose_handler(){
  set_all_operations_false()
  setSparseTranspose_called(true);
}
function sparse_approximate_inverse_handler(){
  set_all_operations_false()
  setSparseApproximateInverse_called(true);
}
function sparse_gauss_handler(){
  set_all_operations_false()
  setSparseGauss_called(true);
}
function sparse_luFact_handler(){
  set_all_operations_false()
  setSparseLuFact_called(true);
}
function sprase_jacobi_handler(){
  set_all_operations_false()
  setSparseJacobi_called(true);
}
//maps the functions to a value
const func_sparse_map = {
  0xA0: sparse_add_handler,
  0xA1: sprase_matrix_mult_handler,
  0xA2: sparse_transpose_handler,
  0xA3: sparse_approximate_inverse_handler,
  0xB0: sparse_gauss_handler,
  0xB1: sparse_luFact_handler,
  0xC0: sprase_jacobi_handler,
}
//calls the correct handler based on the ID
function handleClick(funcId) {
  const func = func_sparse_map[funcId];
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
    //const isValid = parseMatrix(matrixData);
    const isValid = true;
    setButtonColor(isValid ? "#4CAF50" : "#CCCCCC");
    setIsValidMatrix(isValid);

    if (isValid) {
      setMatrixData(matrixData);
      const canvas = document.getElementById('matrix-canvas');
      const ctx = canvas.getContext('2d');
      drawSparseMatrix(matrixData, canvas, ctx);
      const buttons = sparseButtonData.map((button) => (
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
    //const isValid = parseMatrix(matrixData);
    const isValid = true;
    setButtonColorSecondFileUpload(isValid ? "#4CAF50" : "#CCCCCC");
    setIsValidMatrixTwo(isValid);
    if (isValid) {
      setMatrixDataTwo(matrixData);
      const canvas = document.getElementById('matrix-canvas-two');
      const ctx = canvas.getContext('2d');
      drawSparseMatrix(matrixData, canvas, ctx);
    }
  };
};

//when a file is submited, validate it and display it
const handleComputeAddition = async (event) => {
  try{
    const result = await handleAddition(matrixData, matrixDataTwo);
    console.log(result);
    if(true){
      setGotResult(true);
      const canvas = document.getElementById('matrix-canvas-result');
      const ctx = canvas.getContext('2d');
      drawSparseMatrix(result, canvas, ctx);
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
    if(true){
      setGotResult(true);
      const canvas = document.getElementById('matrix-canvas-result');
      const ctx = canvas.getContext('2d');
      drawSparseMatrix(result, canvas, ctx);
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
    const canvas = document.getElementById('matrix-canvas-result');
    const ctx = canvas.getContext('2d');
    drawSparseMatrix(result, canvas, ctx);
  } catch (error) {
    console.log("Error in handleComputeAddition: ", error);
  }
};

//when a file is submited, validate it and display it
const handleComputeInverse = async(event) => {
  try{
    const result = await handleInverse(matrixData);
    setGotResult(true);
    const canvas = document.getElementById('matrix-canvas-result');
    const ctx = canvas.getContext('2d');
    drawSparseMatrix(result, canvas, ctx);
  } catch (error) {
    console.log("Error in handleComputeAddition: ", error);
  }
};

//when a file is submited, validate it and display it
const handleComputeGaussElimination = (event) => {
  const result = handleGaussElimination(matrixData,matrixDataTwo);
  setGotResult(true);
  const canvas = document.getElementById('matrix-canvas-result');
  const ctx = canvas.getContext('2d');
  drawSparseMatrix(result, canvas, ctx);
  //set_all_operations_false();
};

//when a file is submited, validate it and display it
const handleComputeLuFactorization = (event) => {
  const result = handleLuFactorization(matrixData,matrixDataTwo);
  setGotResult(true);
  const canvas = document.getElementById('matrix-canvas-result');
  const ctx = canvas.getContext('2d');
  drawSparseMatrix(result, canvas, ctx);
  //set_all_operations_false();
};

//when a file is submited, validate it and display it
const handleComputJacobiMethod = (event) => {
  const result = handleJacobiMethod(matrixData,matrixDataTwo);
  setGotResult(true);
  const canvas = document.getElementById('matrix-canvas-result');
  const ctx = canvas.getContext('2d');
  drawSparseMatrix(result, canvas, ctx);
  //set_all_operations_false();
};

return (
  <div className="file-upload">
  {true && (
    <div >
    <div className="matrix-format-box">
      <h2>Upload Your Sprase Matrix File</h2>
      <div>
        <p>In order for the program to read the  sparse file, it must be formatted in the .mat standard</p>
        <h3>Example</h3>
        <div style={{ textAlign: "left" }}>
          The following is the proper format for a file containing a single 3 x 3 matrix with 5 elements:
          <br />
          <pre> 
          3 3 5<br/>
            1 1 2<br/>
            2 2 -3<br/>
            3 3 4<br/>
            1 2 0.5<br/>
            3 2 -0.25<br/>
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
           <label for="add">Upload B vector to solve the system using LU factorization</label>
           <form onSubmit={handleSubmitSecondMatrix}>
           <label htmlFor="file-input-2" className={isValidMatrixTwo ? "file-input" : "file-input file-invalid"} style={{ backgroundColor: buttonColorSecondFileUpload }}>
               <i className="fas fa-cloud-upload-alt"></i> {fileNameTwo || "Choose File"}
             </label>
             <input id="file-input-2" type="file" name="file" onChange={handleFileInputChangeTwo} />
             <button type="submit" className="file-input" style={{ backgroundColor: buttonColorSecondFileUpload }} disabled={!selectedFileTwo}>Upload</button>      
           </form>
           <canvas id="matrix-canvas-two"></canvas>
           <div>
           <button type="submit" onClick={() => handleComputeLuFactorization()}>
             Compute
           </button>
           </div>
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
      </div>
    )}
  </div>
  )}
            {gotResult && (
              <div>
                <p>And the result is...</p>
                 
              </div>
            )}
            <canvas id="matrix-canvas-result"></canvas>
  </div>
);
}
export default Sparse;