import { Users, MessageSquare } from 'lucide-react';

const Community = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Users className="text-yellow-500" size={32} />
        <h2 className="text-2xl font-bold text-white">Traders Lounge</h2>
      </div>
      <div className="glass-card p-8 text-center text-gray-400">
        <MessageSquare size={48} className="mx-auto mb-4 text-gray-500" />
        <h3 className="text-xl font-semibold text-white mb-2">Community Chat</h3>
        <p>Connect with other traders, share setups, and discuss market conditions.</p>
        <button className="btn-gold mt-6 inline-flex">Join the Lounge</button>
      </div>
    </div>
  );
};

export default Community;
