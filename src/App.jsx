
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-indigo-800 px-4 py-6 text-center text-white">
          <h1 className="text-3xl font-bold">
            React Router Navigation
          </h1>
          <p className="mt-2 text-indigo-100">
            Navigate without page reload
          </p>
        </header>

        <Navbar />

        <main className="mx-auto max-w-4xl p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
