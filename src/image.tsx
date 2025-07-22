import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from './SupabaseClient';

interface User {
  id: string;
  nom: string;
  email: string;
  telephone: string;
  numeroContribuable?: string;
  password:string;
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
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.user) return false;

    const { data: profile, error: profileError } = await supabase
      .from('utilisateurs')
      .select('*')
      .eq('id', data.user.id)
      .single();

    if (profileError || !profile) return false;

    const userData: User = {
      id: profile.id,
      nom: profile.nom,
      email: profile.email,
      telephone: profile.telephone,
      numeroContribuable: profile.numeroContribuable,
      password:profile.password,
    };

    setUser(userData);
    localStorage.setItem('brc_user', JSON.stringify(userData));
    return true;
  };

  const register = async (userData: Omit<User, 'id'> & { password: string }): Promise<boolean> => {
    const { data, error } = await supabase.auth.signUp({
      email: userData.email,
      password: userData.password,
    });

    if (error || !data.user) return false;

    const { error: insertError } = await supabase.from('utilisateurs').insert([
      {
        id: data.user.id,
        nom: userData.nom,
        email: userData.email,
        telephone: userData.telephone,
        numeroContribuable: userData.numeroContribuable,
        password:userData.password,
        },
    ]);

    if (insertError) return false;

    const newUser: User = {
      id: data.user.id,
      nom: userData.nom,
      email: userData.email,
      telephone: userData.telephone,
      numeroContribuable: userData.numeroContribuable,
      password:userData.password,
    };

    setUser(newUser);
    localStorage.setItem('brc_user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    supabase.auth.signOut();
    setUser(null);
    localStorage.removeItem('brc_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
