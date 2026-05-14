import { motion } from 'framer-motion';
import { BrainCircuit, AlertTriangle, TrendingUp, TrendingDown } from 'lucide-react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';

const emotionData = [
  { time: '09:00', intensity: 20 },
  { time: '10:00', intensity: 45 },
  { time: '11:00', intensity: 85 },
  { time: '12:00', intensity: 30 },
  { time: '13:00', intensity: 10 },
];

const EmotionDetector = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <BrainCircuit className="text-yellow-500" size={32} />
        <h2 className="text-2xl font-bold text-white">AI Emotion Detector</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-6 md:col-span-2"
        >
          <h3 className="text-lg font-semibold mb-4">Emotional Timeline</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={emotionData}>
                <defs>
                  <linearGradient id="colorIntensity" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="time" stroke="rgba(255,255,255,0.5)" />
                <Tooltip contentStyle={{ backgroundColor: '#111827', borderColor: 'rgba(255,255,255,0.1)' }} />
                <Area type="monotone" dataKey="intensity" stroke="#ef4444" fillOpacity={1} fill="url(#colorIntensity)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 flex flex-col gap-4"
        >
          <div className="flex items-center gap-2 text-red-400">
            <AlertTriangle size={20} />
            <span className="font-bold">FOMO Alert</span>
          </div>
          <p className="text-gray-300 text-sm">
            High emotional intensity detected between 10:30 and 11:30. This correlates with entering trades late after big moves.
          </p>
          <div className="mt-auto bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
            <span className="block text-xs text-red-300 uppercase font-semibold mb-1">Recommendation</span>
            <span className="text-red-100 font-medium">Step away from the charts for 15 minutes.</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmotionDetector;
