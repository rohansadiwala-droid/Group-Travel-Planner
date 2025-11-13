import React, { useState } from 'react';
import { X, Mail, Lock } from 'lucide-react';

interface LoginModalProps {
  onClose: () => void;
  onLogin: (email: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    // Simple email validation for demonstration
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    onLogin(email);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50 animate-fade-in" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm p-8 space-y-6 animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-neutral">Welcome Back!</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors"><X size={24} /></button>
        </div>
        <p className="text-gray-500">Sign in to sync your trip details.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="email" 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="you@example.com" 
                className="w-full pl-10 pr-4 py-2 border border-base-300 rounded-lg focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:border-primary transition" 
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password_modal" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="password" 
                id="password_modal" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••" 
                className="w-full pl-10 pr-4 py-2 border border-base-300 rounded-lg focus:ring-2 focus:ring-primary focus:ring-opacity-50 focus:border-primary transition"
                required
              />
            </div>
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
          <div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-focus focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-sm text-gray-500">
          This is a mock login. Any valid email/password will work.
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
