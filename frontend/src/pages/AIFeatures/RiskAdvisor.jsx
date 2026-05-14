import { ShieldAlert, Activity } from 'lucide-react';

const RiskAdvisor = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <ShieldAlert className="text-yellow-500" size={32} />
        <h2 className="text-2xl font-bold text-white">AI Risk Advisor</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 rounded-full border-4 border-green-500 flex items-center justify-center mb-4 relative">
            <span className="text-2xl font-bold text-white">1.2%</span>
          </div>
          <h3 className="font-semibold text-lg text-white mb-1">Current Risk Exposure</h3>
          <p className="text-sm text-gray-400">Well within your 2% maximum daily limit.</p>
        </div>

        <div className="glass-card p-6 md:col-span-2 border-orange-500/30">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Activity className="text-orange-400" /> Active Warnings
          </h3>
          <div className="space-y-3">
            <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-xl">
              <p className="text-orange-200 text-sm">
                <span className="font-bold text-orange-400">Warning:</span> You are currently holding 2 correlated pairs (EUR/USD and GBP/USD). This effectively doubles your risk exposure on USD weakness.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
              <p className="text-gray-300 text-sm">
                No upcoming high-impact news events in the next 2 hours. Safe to maintain current positions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskAdvisor;
