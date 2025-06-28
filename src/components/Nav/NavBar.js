const NavBar = ({ userName }) => {
  return (
    <nav className="bg-gray-900 bg-opacity-80 backdrop-blur-md border-b border-purple-900 px-6 py-4 fixed w-full z-50">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-1 bg-purple-500 rounded-full"></div>
          <span className="text-xl font-bold text-white">TechCompare</span>
        </div>
        
        {userName && (
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-purple-600 flex items-center justify-center text-white font-medium">
              {userName.charAt(0).toUpperCase()}
            </div>
            <span className="text-gray-300">{userName}</span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;