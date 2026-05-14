const Market = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Market Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-2">S&P 500</h3>
          <p className="text-2xl font-bold text-green-400">4,352.12 <span className="text-sm">+1.2%</span></p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-2">NASDAQ</h3>
          <p className="text-2xl font-bold text-green-400">14,821.50 <span className="text-sm">+1.5%</span></p>
        </div>
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold mb-2">DOW JONES</h3>
          <p className="text-2xl font-bold text-red-400">33,982.10 <span className="text-sm">-0.4%</span></p>
        </div>
      </div>
    </div>
  );
};

export default Market;
