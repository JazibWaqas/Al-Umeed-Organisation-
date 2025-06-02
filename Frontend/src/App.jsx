import Sidebar from './components/Siderbar';
import Header from './components/Header';
import FileViewer from './components/FileViewer';

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 bg-gray-100 p-4">
          <FileViewer />
        </main>
      </div>
    </div>
  );
}

export default App;
