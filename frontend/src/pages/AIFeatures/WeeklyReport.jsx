import { FileText, Download } from 'lucide-react';

const WeeklyReport = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <FileText className="text-yellow-500" size={32} />
          <h2 className="text-2xl font-bold text-white">Weekly AI Report</h2>
        </div>
        <button className="btn-glass flex items-center gap-2">
          <Download size={18} />
          <span>Export PDF</span>
        </button>
      </div>

      <div className="glass-card p-8">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-black text-white mb-2">A</h1>
          <p className="text-gray-400 font-medium">Weekly Grade</p>
        </div>

        <div className="space-y-6">
          <div className="border-l-4 border-yellow-500 pl-4">
            <h3 className="text-xl font-bold text-white mb-2">Executive Summary</h3>
            <p className="text-gray-300 leading-relaxed">
              This week marked a significant improvement in emotional control. Your discipline score averaged 85/100, up 15% from last week. Profitability increased due to holding winning trades longer on average.
            </p>
          </div>

          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-white mb-2">Key Highlights</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Highest profit factor in 4 weeks (2.8).</li>
              <li>Successfully avoided overtrading during Wednesday's FOMC news.</li>
              <li>Excellent execution on the Breakout strategy.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReport;
