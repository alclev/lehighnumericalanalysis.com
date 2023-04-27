
function Demo() {
  const form = document.createElement('form');
  form.id = 'fileUploadForm';
  form.action = 'upload.php';
  form.method = 'POST';
  form.enctype = 'multipart/form-data';
  
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.name = 'file';
  
  const submitButton = document.createElement('input');
  submitButton.type = 'submit';
  submitButton.value = 'Upload';
  
  form.appendChild(fileInput);
  form.appendChild(submitButton);
  
  const container = document.getElementById('container');
  container.appendChild(form);
}

export default Demo;
