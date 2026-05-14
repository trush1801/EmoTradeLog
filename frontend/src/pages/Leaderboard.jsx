import { Trophy, Medal } from 'lucide-react';

const Leaderboard = () => {
  const topTraders = [
    { rank: 1, name: 'Alex P.', pnl: '+$45,200', winRate: '78%' },
    { rank: 2, name: 'Sarah M.', pnl: '+$38,150', winRate: '82%' },
    { rank: 3, name: 'Preet Trader', pnl: '+$31,400', winRate: '68%' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Trophy className="text-yellow-500" size={32} />
        <h2 className="text-2xl font-bold text-white">Top Traders Leaderboard</h2>
      </div>
      <div className="glass-card p-6">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 border-b border-white/5">
              <th className="pb-3 font-medium text-sm">Rank</th>
              <th className="pb-3 font-medium text-sm">Trader</th>
              <th className="pb-3 font-medium text-sm">Monthly P&L</th>
              <th className="pb-3 font-medium text-sm">Win Rate</th>
            </tr>
          </thead>
          <tbody>
            {topTraders.map((trader) => (
              <tr key={trader.rank} className="border-b border-white/5 hover:bg-white/5">
                <td className="py-4 font-bold text-yellow-500 flex items-center gap-2">
                  {trader.rank === 1 && <Medal size={16} />} #{trader.rank}
                </td>
                <td className="py-4 font-semibold text-white">{trader.name}</td>
                <td className="py-4 font-bold text-green-400">{trader.pnl}</td>
                <td className="py-4 text-gray-300">{trader.winRate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
