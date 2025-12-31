export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505] border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-center items-center">
        <div className="flex items-center">
          <img
            src="/wizzpro-navbar.png"
            alt="WizzPro Logo"
            className="h-10 w-auto"
          />
          <span className="ml-4 text-lg font-bold text-gold">
            Compra tu ticket
          </span>
        </div>
      </div>
    </nav>
  );
}
