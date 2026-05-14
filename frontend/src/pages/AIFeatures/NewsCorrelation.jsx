import { Newspaper, Calendar } from 'lucide-react';

const NewsCorrelation = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Newspaper className="text-yellow-500" size={32} />
        <h2 className="text-2xl font-bold text-white">News Correlation</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Calendar size={20} /> Upcoming High Impact News
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <div>
                <span className="text-red-400 font-bold text-sm block">10:00 AM EST</span>
                <span className="text-white font-medium">ISM Non-Manufacturing PMI</span>
              </div>
              <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded font-bold">USD</span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6 border-blue-500/30">
          <h3 className="text-lg font-bold text-white mb-4">AI Correlation Insight</h3>
          <p className="text-gray-300 leading-relaxed">
            Historical data shows your win rate drops by 35% when trading within 15 minutes of USD High Impact news. You often exhibit signs of "FOMO" during these volatile spikes.
          </p>
          <div className="mt-4 p-4 bg-white/5 rounded-xl border border-white/10">
            <span className="text-yellow-500 font-semibold text-sm">Suggested Rule:</span>
            <p className="text-gray-400 text-sm mt-1">Close all active intraday USD positions 5 minutes before the news release.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCorrelation;
