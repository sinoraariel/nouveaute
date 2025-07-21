import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Logo from "./images/logo.jpg"
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white w-20 p-2 rounded-lg">
                <img className='w-13 h-9' src={Logo}></img>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-lg font-semibold mb-4">CGA BRC Group</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Votre expert-comptable de confiance. Portail sécurisé pour le suivi 
              de vos dossiers comptables et le téléchargement de vos documents.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-300" />
                <span className="text-sm"><a href='https://wa.me/237699902184' target='blank_' rel='noopener noreferrer'>699 902 184</a></span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-300" />
                <span className="text-sm"><a href='mailto:contact@cga-brcgroup.com' target='blank_' rel='noopener noreferrer' >contact@cga-brcgroup.com</a></span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-300" />
                <span className="text-sm"><a href='https://www.google.com/maps/place/Douala/Akwa,+Cameroun' target='blank_' rel='noopener noreferrer'>Douala, Cameroun </a></span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <div className="space-y-3">
              <a 
                href="https://www.cga-brcgroup.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-sm hover:text-blue-200 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Site officiel BRC Group</span>
              </a>
              <a href="#" className="block text-sm hover:text-blue-200 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="block text-sm hover:text-blue-200 transition-colors">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © 2024 BRC Group. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;