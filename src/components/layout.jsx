import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="min-h-screen flex w-[100vw]">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Admin Panel</h2>
        </div>
        <nav>
          <ul>
            <li className="mb-4">
              <Link to="/dashboard" className="block p-2 hover:bg-gray-700 rounded">
                Dashboard
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/users" className="block p-2 hover:bg-gray-700 rounded">
                Users
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/settings" className="block p-2 hover:bg-gray-700 rounded">
                Settings
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/profile" className="block p-2 hover:bg-gray-700 rounded">
                Profile
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
