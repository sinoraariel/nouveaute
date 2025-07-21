import React from 'react';
import { Link } from 'react-router-dom';
import { Shield,Star, Award, Lightbulb, FileText, Download, MessageSquare, ExternalLink, ArrowRight } from 'lucide-react';
import Image from "./images/promo.jpg"
const Home: React.FC = () => {
  const achievements = [
    {
      title: "Tenue de comptabilité ",
      description: "Enregistrement et suivi des opérations comptables selon les normes OHADA",
      icon: <Award className="h-6 w-6 text-accent-500" />
    },
    {
      title: "Optimisation fiscale",
      description: " Conseils pour maximiser les déductions fiscales et crédits d’impôt",
      icon: <Star className="h-6 w-6 text-secondary-500" />
    },
    {
      title: " Prévention des risques fiscaux",
      description: "Vérification systématique des déclarations pour éviter les erreurs et sanctions",
      icon: <Lightbulb className="h-6 w-6 text-primary-500" />
    }
  ];
  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#4B2D89] to-[#4A5FB6] text-white overflow-hidden">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Portail Client BRC Group
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Votre espace sécurisé pour suivre l'évolution de vos dossiers comptables 
              et télécharger vos documents en toute simplicité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/connexion"
                className="bg-white text-[#003366] px-8 py-3 rounded-lg font-semibold hover:bg-transparent hover:text-white/100 hover:border-2 hover:border-white transition-colors inline-flex items-center justify-center"
              >
                Accéder à mon espace
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://www.cga-brcgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#003366] transition-colors inline-flex items-center justify-center"
              >
                En savoir plus
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Fonctionnalités de  la {''}
              <span className='bg-gradient-to-r from-[#4B2D89] to-[#4A5FB6]  bg-clip-text text-transparent'>
                Plateforme
              </span>
               
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une interface moderne et sécurisée pour gérer vos relations avec votre expert-comptable
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-[#4A5FB6] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Suivi des dossiers
              </h3>
              <p className="text-gray-600">
                Suivez l'évolution de vos dossiers comptables en temps réel avec un 
                statut clair et des notifications automatiques.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-[#4A5FB6] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Téléchargement PDF
              </h3>
              <p className="text-gray-600">
                Téléchargez vos documents comptables traités au format PDF de manière 
                sécurisée et accessible 24h/24.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
              <div className="bg-[#4A5FB6] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sécurité maximale
              </h3>
              <p className="text-gray-600">
                Vos données sont protégées par des protocoles de sécurité avancés 
                et un système d'authentification robuste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                À propos de {''}
                <span className='bg-gradient-to-r from-[#4B2D89] via-[#4A5FB6] to-[#4A5FB6]  bg-clip-text text-transparent'>
                  BRC Group
                </span>
                 
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                BRC Group est votre partenaire de confiance en expertise comptable. 
                Avec des années d'expérience dans le domaine, nous accompagnons nos 
                clients dans la gestion de leur comptabilité avec professionnalisme et rigueur.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Cette plateforme digitale a été conçue pour faciliter vos échanges avec 
                notre cabinet et vous offrir un accès permanent à vos documents comptables.
              </p>
              <a
                href="https://www.cga-brcgroup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#003366] font-semibold hover:text-blue-700 transition-colors"
              >
                Découvrir notre cabinet
                <ExternalLink className="ml-2 w-5 h-5" />
              </a>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Prochaines fonctionnalités
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-6 h-6 text-[#003366] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Messagerie intégrée</h4>
                    <p className="text-gray-600">Communiquez directement avec votre expert-comptable</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-[#003366] mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Prise de rendez-vous</h4>
                    <p className="text-gray-600">Planifiez vos entretiens en ligne</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#4B2D89] to-[#4A5FB6] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à commencer ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Créez votre compte dès maintenant et accédez à votre espace client sécurisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/inscription"
              className="bg-white text-[#003366] px-8 py-3 rounded-lg font-semibold hover:bg-transparent hover:text-white/100 hover:border-2 hover:border-white transition-colors inline-flex items-center justify-center"
            >
              Créer mon compte
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/connexion"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#003366] transition-colors"
            >
              J'ai déjà un compte
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
                 CGA{' '}
                  <span className="bg-gradient-to-r from-[#4B2D89] to-[#4A5FB6]  bg-clip-text text-transparent">
                   BRC Group
                  </span>
                </h2>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  BRC GROUP est un centre de gestion agrée de renomée mondiale. Il est spécialisé dans l'accompagnement des des PME et TPE en matière de comptabilité, fiscalité, audit et gestion administrative.
                 L'objectif principal de BRC est de fournir une assistance de qualité, fruit d'une politique de formation, d'échange et de coaching, pour aider les petites entreprises à surmonter les défis liés à la gestion comptable et fiscale
                </p>
              </div>

              {/* Achievements */}
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-neutral-50 to-transparent rounded-xl hover:from-primary-50 transition-all duration-300">
                    <div className=" bg-gradient-to-r from-[#4B2D89] to-[#4A5FB6] text-white p-2 rounded-lg shadow-sm">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{achievement.title}</h4>
                      <p className="text-neutral-600 text-sm">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://www.cga-brcgroup.com/"
                className="inline-flex items-center text-[#4B2D89] font-semibold hover:text-primary-700 transition-colors group"
              >
                En savoir plus sur notre équipe
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-secondary-100 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={Image}
                  alt="Équipe 2meTech - Dr Agnès Virginie Tjahe"
                  className="w-full h-full object-cover saturate-100 "
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-secondary-600" />
                  <div>
                    <div className="text-lg font-bold text-neutral-900">Entreprise de </div>
                    <div className="text-sm text-neutral-600">Grande renomée</div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-secondary-500/10 rounded-3xl blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;