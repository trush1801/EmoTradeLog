import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
