function Header() {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-gray-700">File Dashboard</h1>
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Welcome, Admin</span>
        <button className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Logout</button>
      </div>
    </header>
  );
}

export default Header;
