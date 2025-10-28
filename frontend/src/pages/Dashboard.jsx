import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useAuth } from '../context/AuthContext';
import { LogOut, User } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1e293b] via-[#1e3a4f] to-[#1e4d5f]">
      {/* Header */}
      <header className="bg-[#0f172a]/60 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-serif text-white">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-slate-300">
                <User className="w-5 h-5" />
                <span className="text-sm">{user?.email}</span>
              </div>
              <Button
                onClick={handleLogout}
                variant="ghost"
                className="text-slate-300 hover:text-white hover:bg-slate-700/50"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid gap-6">
          {/* Welcome Card */}
          <div className="bg-[#0f172a]/60 backdrop-blur-md rounded-lg border border-slate-700/50 p-8 shadow-2xl">
            <h2 className="text-2xl font-serif text-white mb-2">Bienvenue sur votre espace privé</h2>
            <p className="text-slate-400">Vous êtes maintenant connecté à votre compte.</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#0f172a]/60 backdrop-blur-md rounded-lg border border-slate-700/50 p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Email</p>
                  <p className="text-white text-lg font-medium">{user?.email}</p>
                </div>
                <div className="bg-slate-700/50 p-3 rounded-lg">
                  <User className="w-6 h-6 text-slate-300" />
                </div>
              </div>
            </div>

            <div className="bg-[#0f172a]/60 backdrop-blur-md rounded-lg border border-slate-700/50 p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Statut</p>
                  <p className="text-white text-lg font-medium">Actif</p>
                </div>
                <div className="bg-green-700/30 p-3 rounded-lg">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>
            </div>

            <div className="bg-[#0f172a]/60 backdrop-blur-md rounded-lg border border-slate-700/50 p-6 shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm mb-1">Membre depuis</p>
                  <p className="text-white text-lg font-medium">Aujourd'hui</p>
                </div>
                <div className="bg-slate-700/50 p-3 rounded-lg">
                  <span className="text-slate-300 text-xl">📅</span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-[#0f172a]/60 backdrop-blur-md rounded-lg border border-slate-700/50 p-8 shadow-2xl">
            <h3 className="text-xl font-serif text-white mb-4">Votre espace personnel</h3>
            <p className="text-slate-400 mb-4">
              Ceci est votre tableau de bord personnel. Vous pouvez gérer votre compte et accéder à vos informations ici.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h4 className="text-white font-medium mb-2">Profil</h4>
                <p className="text-slate-400 text-sm">Gérez vos informations personnelles</p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <h4 className="text-white font-medium mb-2">Paramètres</h4>
                <p className="text-slate-400 text-sm">Configurez vos préférences</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;