import React, { useState, useEffect } from 'react';
import { DATA_NEVER } from '../data';
import { shuffle } from '../utils';

export default function NeverGame({ onHome }) {
    const [category, setCategory] = useState(null);
    const [deck, setDeck] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (category) {
            document.body.style.setProperty('--active-gradient', category.gradient);
        } else {
            document.body.style.setProperty('--active-gradient', 'var(--primary)');
        }
    }, [category]);

    const startGame = (cat) => {
        setCategory(cat);
        setDeck(shuffle(cat.questions).slice(0, 50).map((text, i) => ({ id: i + 1, text })));
        setIndex(0);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const next = () => {
        if (index < deck.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(deck.length); // End state
        }
    };

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    if (!category) {
        return (
            <div className="grid">
                <div className="hero">
                    <h2>Je n’ai jamais</h2>
                    <p>Choisis ton niveau d'intensité pour commencer.</p>
                </div>
                <div className="category-grid">
                    {Object.values(DATA_NEVER).map((cat) => (
                        <button
                            key={cat.id}
                            className="btn-category"
                            style={{ '--gradient': cat.gradient }}
                            onClick={() => startGame(cat)}
                            aria-label={`Jouer au mode ${cat.label}`}
                        >
                            <div className="icon">{cat.icon}</div>
                            <div className="label">{cat.label}</div>
                            <div style={{ fontSize: '0.8em', opacity: 0.7, marginTop: '4px' }}>{cat.desc}</div>
                        </button>
                    ))}
                </div>
            </div>
        );
    }

    if (index >= deck.length) {
        return (
            <div className="grid">
                <div className="card hero">
                    <h2>Terminé !</h2>
                    <p>Tu as parcouru les {deck.length} questions.</p>
                    <button className="nav-btn primary" style={{ marginTop: '20px', width: '100%' }} onClick={() => setCategory(null)}>
                        Retour
                    </button>
                </div>
            </div>
        );
    }

    const q = deck[index];
    const progress = Math.round(((index + 1) / deck.length) * 100);

    return (
        <div className="qwrap">
            <div className="qcard" id="qcard" onClick={next}>
                <div className="qindex">{index + 1} / {deck.length}</div>
                <div className="qcat" style={{ color: category.color, borderColor: category.color }}>
                    {category.label}
                </div>
                {q ? q.text : '—'}
                <div className="qhint">Tap ou swipe pour passer</div>
            </div>

            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>

            <div className="nav">
                <button className="nav-btn" onClick={(e) => { e.stopPropagation(); prev(); }}>←</button>
                <button className="nav-btn primary" onClick={(e) => { e.stopPropagation(); setCategory(null); }}>🏠</button>
                <button className="nav-btn" onClick={(e) => { e.stopPropagation(); next(); }}>→</button>
            </div>
        </div>
    );
}
