import React, { useState } from 'react';
import { QUESTIONS_WHO } from '../data';
import { shuffle } from '../utils';
import { PlusIcon } from 'lucide-react';

export default function WhoGame() {
    const [players, setPlayers] = useState([]);
    const [scores, setScores] = useState({});
    const [deck, setDeck] = useState([]);
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const addPlayer = () => {
        const name = inputValue.trim();
        if (name) {
            setPlayers([...players, name]);
            setScores({ ...scores, [name]: 0 });
            setInputValue('');
        }
    };

    const removePlayer = (idx) => {
        const name = players[idx];
        const newPlayers = [...players];
        newPlayers.splice(idx, 1);
        setPlayers(newPlayers);
        const newScores = { ...scores };
        delete newScores[name];
        setScores(newScores);
    };

    const startGame = () => {
        setDeck(shuffle(QUESTIONS_WHO).slice(0, 50));
        setIndex(0);
        const resetScores = {};
        players.forEach(p => resetScores[p] = 0);
        setScores(resetScores);
        setIsPlaying(true);
    };

    const vote = (player, points) => {
        setScores({ ...scores, [player]: scores[player] + points });
        // Toast logic could be added here
        next();
    };

    const next = () => {
        if (index < deck.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(deck.length); // End
        }
    };

    const prev = () => {
        if (index > 0) setIndex(index - 1);
    };

    if (!isPlaying) {
        return (
            <div className="grid">
                <div className="hero">
                    <h2>Qui pourrait ?</h2>
                    <p>Ajoute les joueurs pour commencer (3 min).</p>
                </div>

                <div className="setup-form">
                    <div className="input-group">
                        <input
                            className="input-field"
                            placeholder="Nom du joueur"
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && addPlayer()}
                        />
                        <button className="nav-btn primary" style={{ flex: 0 }} onClick={addPlayer}><PlusIcon /></button>
                    </div>
                    <div className="player-list">
                        {players.map((p, i) => (
                            <div key={i} className="player-chip">
                                {p}
                                <button onClick={() => removePlayer(i)}>×</button>
                            </div>
                        ))}
                    </div>
                    <button
                        className="nav-btn primary"
                        style={{ marginTop: '16px' }}
                        onClick={startGame}
                    >
                        {players.length === 0 ? 'Jouer sans joueurs' : 'Commencer la partie'}
                    </button>
                </div>
            </div>
        );
    }

    if (index >= deck.length) {
        const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
        const loser = sorted[0];

        return (
            <div className="grid">
                {players.length > 0 ? (
                    <div className="card">
                        <h2 style={{ textAlign: 'center', color: 'var(--tertiary)' }}>Résultats</h2>
                        <div className="hero">
                            <h3>{loser[0]} a perdu !</h3>
                            <p>Avec {loser[1]} points.</p>
                        </div>
                        <div className="score-board">
                            {sorted.map((s, i) => (
                                <div key={i} className="score-row">
                                    <span>#{i + 1} {s[0]}</span>
                                    <span style={{ fontWeight: 'bold' }}>{s[1]} pts</span>
                                </div>
                            ))}
                        </div>
                        <button className="nav-btn primary" style={{ marginTop: '20px', width: '100%' }} onClick={() => setIsPlaying(false)}>
                            Rejouer
                        </button>
                    </div>
                ) : (
                    <div className="card hero">
                        <h2>Terminé !</h2>
                        <p>Tu as parcouru les {deck.length} questions.</p>
                        <button className="nav-btn primary" style={{ marginTop: '20px', width: '100%' }} onClick={() => setIsPlaying(false)}>
                            Retour
                        </button>
                    </div>
                )}
            </div>
        );
    }

    const q = deck[index];
    const progress = Math.round(((index + 1) / deck.length) * 100);
    let points = q.base;
    const bonusTags = ['sexe', 'drogue', 'alcool', 'honte', 'salete', 'illegal'];
    if (q.tags) q.tags.forEach(t => { if (bonusTags.includes(t)) points += 1; });

    return (
        <div className="qwrap">
            <div className="qcard" style={{ borderColor: 'var(--tertiary)' }} onClick={() => players.length === 0 && next()}>
                <div className="qindex">{index + 1} / {deck.length}</div>
                <div className="qcat" style={{ color: 'var(--tertiary)', borderColor: 'var(--tertiary)' }}>
                    {points} Points
                </div>
                <p>{q.text}</p>
                {players.length > 0 ? (
                    <div className="vote-grid">
                        {players.map(p => (
                            <button key={p} className="vote-btn" onClick={(e) => { e.stopPropagation(); vote(p, points); }}>
                                {p}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="qhint">Tap ou swipe pour passer</div>
                )}
            </div>

            <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%`, background: 'var(--tertiary)' }}></div>
            </div>

            <div className="nav">
                {players.length === 0 && <button className="nav-btn" onClick={prev}>←</button>}
                <button className="nav-btn primary" onClick={() => setIsPlaying(false)}>
                    {players.length === 0 ? '🏠' : 'Quitter'}
                </button>
                {players.length === 0 && <button className="nav-btn" onClick={next}>→</button>}
            </div>
        </div>
    );
}
