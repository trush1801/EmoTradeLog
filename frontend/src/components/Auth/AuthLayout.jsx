import logo from '../../assets/logo.png';

const AuthLayout = ({ children }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black">
    <div className="w-full max-w-md mx-auto p-8 rounded-3xl shadow-2xl bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800">
      <div className="flex flex-col items-center mb-8">
        <img
          src={logo}
          alt="EmoTradeLog Logo"
          className="w-16 h-16 mb-3 drop-shadow-lg"
        />
        <div className="flex flex-col items-center">
          <span className="text-xs tracking-widest text-zinc-400 font-semibold uppercase" style={{ letterSpacing: '0.2em' }}>
            Emo
          </span>
          <span className="text-3xl font-extrabold text-white tracking-tight font-serif" style={{ letterSpacing: '-0.03em' }}>
            <span className="text-gradient bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">Trade</span>
            <span className="text-white">Log</span>
          </span>
        </div>
      </div>
      {children}
    </div>
  </div>
);

export default AuthLayout;
