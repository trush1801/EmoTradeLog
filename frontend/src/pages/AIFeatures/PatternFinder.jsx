import { Search, Eye } from 'lucide-react';

const PatternFinder = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Search className="text-yellow-500" size={32} />
        <h2 className="text-2xl font-bold text-white">AI Pattern Finder</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6 border-l-4 border-l-green-500">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-white">Profitable Pattern Detected</h3>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">High Confidence</span>
          </div>
          <p className="text-gray-300 mb-4">You have a 78% win rate when trading Breakout strategies between 9:00 AM and 10:30 AM EST on EUR/USD.</p>
          <button className="flex items-center gap-2 text-sm text-yellow-500 hover:text-yellow-400 font-medium transition-colors">
            <Eye size={16} /> View Matching Trades
          </button>
        </div>

        <div className="glass-card p-6 border-l-4 border-l-red-500">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold text-white">Losing Pattern Detected</h3>
            <span className="text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded">Action Required</span>
          </div>
          <p className="text-gray-300 mb-4">Taking more than 3 trades a day reduces your daily profitability by 40%. The 4th trade has a 85% chance of being a loss.</p>
          <button className="flex items-center gap-2 text-sm text-yellow-500 hover:text-yellow-400 font-medium transition-colors">
            <Eye size={16} /> View Matching Trades
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatternFinder;
