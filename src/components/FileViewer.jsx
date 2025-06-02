function FileViewer() {
  return (
    <div className="bg-white p-6 rounded shadow h-full overflow-auto">
      <h2 className="text-lg font-semibold mb-4">Files</h2>
      <div className="border border-dashed border-gray-400 p-8 text-center text-gray-500">
        No files uploaded yet.
      </div>
    </div>
  );
}

export default FileViewer;
