import React, { useEffect } from 'react';
import './download.css';

// This component displays information about the project
function Download() {
  useEffect(() => {
    const downloadLink = document.getElementById("downloadLink");
    downloadLink.href = "https://github.com/MichaelSpeckhart/NumericalAnalysisCapstone2023/archive/refs/heads/main.zip";
    downloadLink.download = "NumericalAnalysisCapstone2023.zip";
  }, []);

  return (
    <a id="downloadLink">Download Repository</a>
  );
}

export default Download;
