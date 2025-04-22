import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
      <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;