import { MessageSquare, Award, TrendingUp, AlertCircle } from 'lucide-react';

const TradeCoach = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <MessageSquare className="text-yellow-500" size={32} />
        <h2 className="text-2xl font-bold text-white">AI Trade Coach</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Trade Score</h3>
            <span className="text-3xl font-bold text-green-400">A-</span>
          </div>
          <p className="text-gray-300">Your recent trades show excellent adherence to your risk management rules. Keep it up!</p>
        </div>

        <div className="glass-card p-6 border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
          <h3 className="text-lg font-semibold mb-4 text-yellow-500 flex items-center gap-2">
            <Award size={20} /> AI Recommendation
          </h3>
          <p className="text-gray-200">
            You have a 70% win rate on EUR/USD but only 40% on GBP/JPY. Consider focusing on EUR/USD until market conditions change.
          </p>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-green-400">
            <TrendingUp size={20} /> Strengths
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Patient entries</li>
            <li>Proper position sizing</li>
            <li>Letting winners run</li>
          </ul>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-red-400">
            <AlertCircle size={20} /> Weaknesses
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Moving stop loss to breakeven too early</li>
            <li>Overtrading during NY session</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TradeCoach;
