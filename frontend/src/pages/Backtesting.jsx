import { History, PlayCircle } from 'lucide-react';

const Backtesting = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <History className="text-yellow-500" size={32} />
        <h2 className="text-2xl font-bold text-white">Backtesting Engine</h2>
      </div>
      <div className="glass-card p-8 border-dashed border-2 border-white/20 text-center">
        <PlayCircle size={48} className="mx-auto mb-4 text-gray-500" />
        <h3 className="text-xl font-semibold text-white mb-2">Simulate Strategies</h3>
        <p className="text-gray-400 mb-6">Test your trading strategies against historical data to find your edge before risking real capital.</p>
        <button className="btn-gold inline-flex">Start New Simulation</button>
      </div>
    </div>
  );
};

export default Backtesting;
