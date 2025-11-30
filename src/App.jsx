import React, { useState, useEffect } from 'react';
import NeverGame from './components/NeverGame';
import WhoGame from './components/WhoGame';

function App() {
    const [activeTab, setActiveTab] = useState('never');

    useEffect(() => {
        const yearEl = document.getElementById('year');
        if (yearEl) yearEl.textContent = String(new Date().getFullYear());
    }, []);

    return (
        <div id="app">
            <header className="header">
                <div className="header-inner">
                    <div className="logo" aria-hidden="true" onClick={() => setActiveTab('never')}></div>
                    <div className="title cursor-pointer">toz — Je n’ai jamais</div>
                </div>
            </header>

            <main className="content" id="view">
                <div className="tabs-container">
                    <button
                        className={`tab ${activeTab === 'never' ? 'active' : ''}`}
                        onClick={() => setActiveTab('never')}
                    >
                        Je n'ai jamais
                    </button>
                    <button
                        className={`tab ${activeTab === 'who' ? 'active' : ''}`}
                        onClick={() => setActiveTab('who')}
                    >
                        Qui pourrait
                    </button>
                </div>

                <div id="content">
                    {activeTab === 'never' ? <NeverGame /> : <WhoGame />}
                </div>
            </main>

            <footer className="footer">
                © <span id="year"></span> — Neon dark UI • Cartes 50 aléatoires
            </footer>
        </div>
    );
}

export default App;
