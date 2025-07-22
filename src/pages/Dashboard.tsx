import React from 'react';
import { Download, FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useState, useEffect } from 'react';
import {supabase} from "./images/SupabaseClient"
interface Dossier {
  id: string;
  nom: string;
  statut: string;
  date_traitement: string;
  type: string;
  taille: string;
  url:string;
}

const Dashboard: React.FC = () => {
   const { user } = useAuth();
   const [statCounts, setStatCounts] = useState({
  Termine: 0,
  En_cours: 0,
  En_attente: 0
});

  const [dossiers, setDossiers] = useState<Dossier[]>([]);

           const fetchDossiers = async () => {
              const { data, error } = await supabase
                .from('dossiers')
                .select('*')
                .order('id_dossier', { ascending: true })
                console.log(data)
          
              if (error) console.log(error)
              else setDossiers(data)
            }
          
            useEffect(() => {
              fetchDossiers()
            }, [])
        useEffect(() => {

             const fetchStatCounts = async () => {
    const { count: countTermine, error: error1 } = await supabase
      .from("dossiers")
      .select("*", { count: "exact", head: true })
      .eq("statut", "Termine");

    const { count: countEnCours, error: error2 } = await supabase
      .from("dossiers")
      .select("*", { count: "exact", head: true })
      .eq("statut", "En_cours");

    const { count: countEnAttente, error: error3 } = await supabase
      .from("dossiers")
      .select("*", { count: "exact", head: true })
      .eq("statut", "En_attente");

    if (!error1 && !error2 && !error3) {
      setStatCounts({
        Termine: countTermine || 0,
        En_cours: countEnCours || 0,
        En_attente: countEnAttente || 0
      });
    }
  };

  fetchStatCounts();
}, []);



 

  const handleDownload = (dossier: Dossier) => {
    // Simulation du téléchargement
    const link = document.createElement('a');
    link.href = dossier.url;
    link.download = `${dossier.nom}.pdf`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-50 top-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8 mt-16">
          <h1 className="text-3xl font-bold text-gray-900">
            Bienvenue, {user.nom}
          </h1>
          <p className="text-gray-600 mt-2">
            Gérez vos dossiers comptables et téléchargez vos documents
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-green-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {statCounts.Termine}
                </h3>
                <p className="text-gray-600">Dossiers terminés</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {statCounts.En_cours}
                </h3>
                <p className="text-gray-600">En cours</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="bg-yellow-100 p-3 rounded-lg">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {statCounts.En_attente}
                </h3>
                <p className="text-gray-600">En attente</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dossiers List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">
              Mes dossiers comptables
            </h2>
          </div>
          <div className="divide-y divide-gray-200">
            {dossiers.map((dossier) => (
              <div key={dossier.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-[#4A5FB6] p-2 rounded-lg">
                      <FileText className="w-6 h-6  text-white" />
                    </div>
                    <div>
                      <h3  className="text-lg font-medium text-gray-900">
                        {dossier.nom}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                        <span>Type: {dossier.type}</span>
                        <span>•</span>
                        <span>Traité le: {new Date(dossier.date_traitement).toLocaleDateString('fr-FR')}</span>
                        <span>•</span>
                            <span>Taille: {dossier.taille}</span>
                      
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div>
                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      <Clock className="w-4 h-6 mr-1" />
                        {dossier.statut}
                    </span>
                  </div>
                    <button
                        onClick={() => handleDownload(dossier)}
                        className="bg-[#4A5FB6] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Télécharger</span>
                      </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Panel */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">
            Informations importantes
          </h3>
          <div className="space-y-3 text-blue-800">
            <p>
              • Vos documents sont disponibles au téléchargement pendant 12 mois
            </p>
            <p>
              • En cas de problème, contactez votre expert-comptable BRC Group
            </p>
            <p>
              • Prochainement : messagerie intégrée et prise de rendez-vous en ligne
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;