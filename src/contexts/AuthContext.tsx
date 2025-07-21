import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  numeroContribuable?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: Omit<User, 'id'> & { password: string }) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('brc_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulation d'une connexion - remplacer par une vraie API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (email === 'client@example.com' && password === 'password') {
      const userData = {
        id: '1',
        nom: 'Jean Dupont',
        email: 'client@example.com',
        telephone: '01 23 45 67 89',
        numeroContribuable: '123456789'
      };
      setUser(userData);
      localStorage.setItem('brc_user', JSON.stringify(userData));
      return true;
    }
    return false;
  };

  const register = async (userData: Omit<User, 'id'> & { password: string }): Promise<boolean> => {
    // Simulation d'une inscription - remplacer par une vraie API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser = {
      id: Date.now().toString(),
      nom: userData.nom,
      email: userData.email,
      telephone: userData.telephone,
      numeroContribuable: userData.numeroContribuable
    };
    
    setUser(newUser);
    localStorage.setItem('brc_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('brc_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
