import React, { useState } from 'react';
import { Shield, ShieldOff, AlertTriangle, Lock, Unlock, CreditCard, User, KeyRound, Eye } from 'lucide-react';

function App() {
  const [isSecure, setIsSecure] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [showInterception, setShowInterception] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSecure) {
      // Simulate data interception in insecure connection
      setShowInterception(true);
    } else {
      alert('Transaction processed securely!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-900">Security Demo Bank</h1>
            <button
              onClick={() => setIsSecure(!isSecure)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md ${
                isSecure
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}
            >
              {isSecure ? (
                <>
                  <Shield className="w-5 h-5" />
                  <span>HTTPS (Secure)</span>
                </>
              ) : (
                <>
                  <ShieldOff className="w-5 h-5" />
                  <span>HTTP (Insecure)</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Security Warning Banner */}
        {!isSecure && (
          <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-8">
            <div className="flex items-center">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-2" />
              <p className="text-red-700">
                Warning: You are currently on an insecure connection. Your data can be intercepted!
              </p>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Payment Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              {isSecure ? <Lock className="w-5 h-5" /> : <Unlock className="w-5 h-5" />}
              Payment Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <div className="relative">
                  <User className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 w-full p-2 border rounded-md"
                    placeholder="Enter username"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <KeyRound className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 w-full p-2 border rounded-md"
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <div className="relative">
                  <CreditCard className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="pl-10 w-full p-2 border rounded-md"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                <div className="relative">
                  <Eye className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
                  <input
                    type="text"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="pl-10 w-full p-2 border rounded-md"
                    placeholder="123"
                    maxLength={3}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                Process Payment
              </button>
            </form>
          </div>

          {/* Information Panel */}
          <div className="space-y-6">
            {/* Data Interception Demo */}
            {showInterception && !isSecure && (
              <div className="bg-red-50 border-2 border-red-200 p-6 rounded-lg animate-pulse">
                <h3 className="text-xl font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Data Intercepted!
                </h3>
                <div className="space-y-2 text-red-700">
                  <p>⚠️ Intercepted sensitive information:</p>
                  <ul className="list-disc list-inside pl-4">
                    <li>Username: {username}</li>
                    <li>Password: {password}</li>
                    <li>Card Number: {cardNumber}</li>
                    <li>CVV: {cvv}</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Security Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Security Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">HTTP (Insecure)</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Data transmitted in plain text</li>
                    <li>Vulnerable to man-in-the-middle attacks</li>
                    <li>No encryption of sensitive data</li>
                    <li>Susceptible to packet sniffing</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">HTTPS (Secure)</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Data encrypted during transmission</li>
                    <li>Protected against eavesdropping</li>
                    <li>SSL/TLS certificate verification</li>
                    <li>Secure end-to-end communication</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;