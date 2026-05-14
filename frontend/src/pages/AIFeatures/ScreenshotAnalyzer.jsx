import { Camera, Upload, CheckCircle2 } from 'lucide-react';

const ScreenshotAnalyzer = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-8">
        <Camera className="text-yellow-500" size={32} />
        <h2 className="text-2xl font-bold text-white">AI Screenshot Analyzer</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-8 flex flex-col items-center justify-center border-2 border-dashed border-white/20 hover:border-yellow-500/50 transition-colors cursor-pointer min-h-[400px]">
          <Upload size={48} className="text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">Upload Chart Screenshot</h3>
          <p className="text-gray-400 text-sm">Drag & drop or click to select</p>
        </div>

        <div className="glass-card p-6 flex flex-col">
          <h3 className="text-lg font-semibold mb-4 text-white">AI Analysis</h3>
          <div className="flex-1 flex flex-col items-center justify-center text-center text-gray-500">
            <p>Upload a screenshot to get instant AI analysis on technical patterns, support/resistance, and entry validation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScreenshotAnalyzer;
