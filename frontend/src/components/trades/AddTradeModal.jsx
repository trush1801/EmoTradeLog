import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, TrendingUp, Target, DollarSign, Calendar } from 'lucide-react';
import useTradeStore from '../../store/useTradeStore';

const AddTradeModal = ({ isOpen, onClose }) => {
  const { addTrade } = useTradeStore();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [formData, setFormData] = useState({
    symbol: '',
    type: 'Long',
    entry: '',
    exit: '',
    size: '0.01',
    pnl: '',
    emotion: 'Neutral',
    date: new Date().toISOString().slice(0, 10),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    try {
      const isWinner = Number(formData.pnl) > 0;
      await addTrade({
        ...formData,
        entry: Number(formData.entry),
        exit: formData.exit ? Number(formData.exit) : undefined,
        size: Number(formData.size),
        pnl: Number(formData.pnl),
        isWinner
      });
      onClose();
      // Reset form
      setFormData({
        symbol: '',
        type: 'Long',
        entry: '',
        exit: '',
        size: '0.01',
        pnl: '',
        emotion: 'Neutral',
        date: new Date().toISOString().slice(0, 10),
      });
    } catch (error) {
      console.error('Failed to add trade:', error);
      setErrorMsg(error.message || 'Failed to add trade. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-gray-900 border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Target className="text-yellow-500" /> Log New Trade
              </h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6 overflow-y-auto custom-scrollbar">
              {errorMsg && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-xl text-sm">
                  {errorMsg}
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Symbol / Pair</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. EURUSD, BTC, AAPL"
                    value={formData.symbol}
                    onChange={(e) => setFormData({ ...formData, symbol: e.target.value.toUpperCase() })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white placeholder-gray-600 focus:outline-none focus:border-yellow-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Direction</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500/50 appearance-none"
                  >
                    <option value="Long">📈 Long (Buy)</option>
                    <option value="Short">📉 Short (Sell)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Entry Price</label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={formData.entry}
                    onChange={(e) => setFormData({ ...formData, entry: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Exit Price</label>
                  <input
                    type="number"
                    step="any"
                    value={formData.exit}
                    onChange={(e) => setFormData({ ...formData, exit: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Lot Size / Quantity</label>
                  <input
                    type="number"
                    step="any"
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500/50"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Realized P&L ($)</label>
                  <input
                    type="number"
                    step="any"
                    required
                    value={formData.pnl}
                    onChange={(e) => setFormData({ ...formData, pnl: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500/50"
                    placeholder="-150 or 500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Primary Emotion</label>
                  <select
                    value={formData.emotion}
                    onChange={(e) => setFormData({ ...formData, emotion: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500/50 appearance-none"
                  >
                    <option value="Neutral">😐 Neutral</option>
                    <option value="Confident">😎 Confident</option>
                    <option value="Anxious">😰 Anxious</option>
                    <option value="FOMO">🏃‍♂️ FOMO</option>
                    <option value="Greedy">🤑 Greedy</option>
                    <option value="Revenge">🔥 Revenge Trading</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-3 text-white focus:outline-none focus:border-yellow-500/50"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 shrink-0">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full btn-gold py-4 text-sm font-bold flex items-center justify-center gap-2"
                >
                  {loading ? 'Logging Trade...' : 'Log Trade to Journal'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default AddTradeModal;
