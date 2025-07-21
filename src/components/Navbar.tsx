import React, {useState,useEffect} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, User, Home } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Logo from "./images/logo.jpg"

const Navbar: React.FC = () => {
  const location= useLocation();
  const isLoginPage= location.pathname === '/connexion'
  const isLoginPage2= location.pathname === '/inscription'
  const isLoginPage3= location.pathname === '/espace-client'
  const { user, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  

  return (
    <nav className={`fixed  top-0 left-0 right-0 z-50 transition-all duration-300${
      isLoginPage 
        ? 'bg-white/95 text-black backdrop-blur-lg shadow-lg border-b border-neutral-200/50' 
        :isLoginPage2
        ? 'bg-white/95 text-black backdrop-blur-lg shadow-lg border-b border-neutral-200/50'
        :isLoginPage3
        ? 'bg-white/95 text-black backdrop-blur-lg shadow-lg border-b border-neutral-200/50' 
        : isScrolled
        ?'bg-white/95 backdrop-blur-lg shadow-lg border-b border-neutral-200/50'
        :'bg-[#8A4EC3] text-white shadow-lg'
    }
    `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-white p-2 rounded-lg">
                <img className='w-13 h-9' src={Logo}></img>
              </div>
              <div>
                <h1 className="text-xl font-bold">CGA BRC Group</h1>
                <p className="text-xs text-blue-400">Portail Client</p>
              </div>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/" className=" transition-colors hover:text-blue-200 ">
              Accueil
            </Link>
            <a 
              href="https://www.cga-brcgroup.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              À propos
            </a>
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/espace-client" 
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
                >
                  <User className="w-4 h-4" />
                  <span>{user.nom}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 hover:text-blue-200 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Déconnexion</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/connexion" 
                  className="hover:text-blue-200 transition-colors"
                >
                  Connexion
                </Link>
                <Link 
                  to="/inscription" 
                  className="bg-white text-[#003366] font-semibold hover:bg-transparent hover:text-white/100 hover:border-2 hover:border-white px-4 py-2 rounded-lg transition-colors"
                >
                  Inscription
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;