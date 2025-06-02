import React, { useState, useEffect } from 'react';

function FileViewer() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');

  // Fetch list of files from backend
  const fetchFiles = () => {
    fetch('http://localhost:5000/files')
      .then(res => res.json())
      .then(data => setFiles(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setMessage('');
  };

  const handleUpload = () => {
    if (!selectedFile) {
      setMessage('Please select a file first.');
      return;
    }
    const formData = new FormData();
    formData.append('file', selectedFile);

    fetch('http://localhost:5173/upload', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(data => {
        setMessage(`Uploaded: ${data.originalname}`);
        setSelectedFile(null);
        fetchFiles();
      })
      .catch(() => setMessage('Upload failed.'));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">File Viewer</h1>

      <div className="mb-4">
        <input type="file" onChange={handleFileChange} />
        <button
          onClick={handleUpload}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Upload
        </button>
      </div>

      {message && <p className="mb-4 text-green-600">{message}</p>}

      <h2 className="text-xl font-semibold mb-2">Files:</h2>
      <ul className="list-disc list-inside">
        {files.map((file) => (
          <li key={file}>
            <a
              href={`http://localhost:5000/uploads/${file}`}
              target="_blank"
              rel="noreferrer"
              className="text-blue-700 hover:underline"
            >
              {file}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileViewer;
