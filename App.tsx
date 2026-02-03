
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Skills from './components/Skills';
import LogicPlayground from './components/LogicPlayground';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-indigo-500/30">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Philosophy />
          <Projects />
          <Skills />
          <LogicPlayground />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
