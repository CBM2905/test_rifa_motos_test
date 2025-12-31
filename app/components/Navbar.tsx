interface NavbarProps {
  onLoginClick?: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/wizzpro-navbar.png" 
            alt="WizzPro Logo" 
            className="h-10 w-auto"
          />
        </div>
        <button 
          onClick={onLoginClick}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition font-semibold"
        >
          Iniciar sesión
        </button>
      </div>
    </nav>
  );
}
