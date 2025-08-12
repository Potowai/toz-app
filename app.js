// JavaScript extrait du fichier HTML
(function(){
const $=s=>document.querySelector(s);
const h=(t,p={},c=[])=>{const e=document.createElement(t);for(const k in p){if(k==='class')e.className=p[k];else if(k==='html')e.innerHTML=p[k];else e.setAttribute(k,p[k])}c.forEach(x=>e.appendChild(typeof x==='string'?document.createTextNode(x):x));return e};
const shuffle=a=>{const x=a.slice();for(let i=x.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[x[i],x[j]]=[x[j],x[i]]}return x};
const toast=m=>{const t=$('#toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1600)};

const QUESTIONS=[
"Je n’ai jamais embrassé quelqu’un dans un ascenseur",
"Je n’ai jamais passé la nuit entière sans dormir pour des raisons coquines",
"Je n’ai jamais envoyé un message osé à la mauvaise personne",
"Je n’ai jamais flirté avec un(e) collègue au bureau",
"Je n’ai jamais eu un rendez-vous secret à l’hôtel",
"Je n’ai jamais pris une douche à deux",
"Je n’ai jamais embrassé plus d’une personne dans la même soirée",
"Je n’ai jamais joué à un jeu de société coquin",
"Je n’ai jamais regardé un film interdit aux moins de 18 ans avec quelqu’un",
"Je n’ai jamais dormi nu(e) chez un(e) ami(e)",
"Je n’ai jamais reçu de massage sensuel",
"Je n’ai jamais offert un massage sensuel",
"Je n’ai jamais embrassé quelqu’un sous la pluie",
"Je n’ai jamais eu un coup de foudre immédiat",
"Je n’ai jamais envoyé une photo suggestive",
"Je n’ai jamais essayé un costume sexy",
"Je n’ai jamais eu un rencard improvisé",
"Je n’ai jamais embrassé un(e) inconnu(e) en boîte",
"Je n’ai jamais participé à un strip-poker",
"Je n’ai jamais tenté une danse sensuelle",
"Je n’ai jamais bu un verre pour me donner du courage avant un rendez-vous",
"Je n’ai jamais écrit une lettre d’amour passionnée",
"Je n’ai jamais dormi dans le lit de quelqu’un que je connaissais à peine",
"Je n’ai jamais fait semblant d’être amoureux(se)",
"Je n’ai jamais embrassé quelqu’un juste pour rendre jaloux(se)",
"Je n’ai jamais invité quelqu’un à dîner chez moi pour plus qu’un repas",
"Je n’ai jamais regardé le lever du soleil avec quelqu’un après une nuit blanche",
"Je n’ai jamais surpris quelqu’un en tenue légère",
"Je n’ai jamais porté de parfum pour séduire",
"Je n’ai jamais eu de coup de cœur pour le/la meilleur(e) ami(e) de mon/ma partenaire",
"Je n’ai jamais essayé de draguer en ligne",
"Je n’ai jamais embrassé quelqu’un dans une piscine",
"Je n’ai jamais joué à « action ou vérité » version adulte",
"Je n’ai jamais fait semblant de ne pas savoir danser pour me rapprocher de quelqu’un",
"Je n’ai jamais utilisé une chanson pour séduire",
"Je n’ai jamais ressenti un désir immédiat en croisant quelqu’un",
"Je n’ai jamais eu un rêve coquin avec quelqu’un que je connaissais",
"Je n’ai jamais bu un verre au lit avec quelqu’un",
"Je n’ai jamais envoyé un texto romantique en pleine nuit",
"Je n’ai jamais eu un rendez-vous au clair de lune",
"Je n’ai jamais essayé un jeu de rôle amoureux",
"Je n’ai jamais pensé à quelqu’un d’autre pendant un rendez-vous",
"Je n’ai jamais ressenti de la jalousie en voyant mon crush avec quelqu’un",
"Je n’ai jamais marché main dans la main dans un lieu public avec quelqu’un que je venais de rencontrer",
"Je n’ai jamais partagé un dessert dans une ambiance romantique",
"Je n’ai jamais quitté une fête pour rester seul(e) avec quelqu’un",
"Je n’ai jamais donné un surnom intime à quelqu’un",
"Je n’ai jamais dansé collé-serré",
"Je n’ai jamais été tenté(e) par un(e) ami(e)",
"Je n’ai jamais chanté pour séduire",
"Je n’ai jamais pris un bain moussant avec quelqu’un",
"Je n’ai jamais mangé quelque chose directement dans la main de quelqu’un",
"Je n’ai jamais proposé un rendez-vous juste pour voir quelqu’un sourire",
"Je n’ai jamais offert un cadeau intime",
"Je n’ai jamais reçu un cadeau intime",
"Je n’ai jamais eu un fou rire pendant un moment romantique",
"Je n’ai jamais inventé une excuse pour passer plus de temps avec quelqu’un",
"Je n’ai jamais joué à un jeu vidéo en couple toute la nuit",
"Je n’ai jamais fait une surprise romantique",
"Je n’ai jamais été surpris(e) par une surprise romantique",
"Je n’ai jamais ressenti des papillons dans le ventre en touchant la main de quelqu’un",
"Je n’ai jamais écrit le nom de quelqu’un sur un carnet juste pour le voir",
"Je n’ai jamais pensé à embrasser quelqu’un en plein milieu d’une conversation",
"Je n’ai jamais eu peur de dire « je t’aime »",
"Je n’ai jamais imaginé un baiser avec quelqu’un en le regardant",
"Je n’ai jamais dansé lentement en regardant dans les yeux de quelqu’un",
"Je n’ai jamais joué avec les cheveux de quelqu’un pendant un moment intime",
"Je n’ai jamais reçu un compliment qui m’a fait rougir",
"Je n’ai jamais embrassé quelqu’un dans un coin sombre",
"Je n’ai jamais eu envie de prolonger un câlin",
"Je n’ai jamais bu dans le verre de quelqu’un d’autre",
"Je n’ai jamais regardé quelqu’un dormir avec tendresse",
"Je n’ai jamais eu envie de retenir quelqu’un qui partait",
"Je n’ai jamais envoyé un message juste pour dire « tu me manques »",
"Je n’ai jamais été en retard exprès pour prolonger un rendez-vous",
"Je n’ai jamais pris la main de quelqu’un dans le noir",
"Je n’ai jamais fait un compliment sur le parfum de quelqu’un",
"Je n’ai jamais attendu quelqu’un sous la pluie",
"Je n’ai jamais improvisé un pique-nique romantique",
"Je n’ai jamais embrassé quelqu’un juste après un fou rire",
"Je n’ai jamais senti mon cœur battre plus vite en entendant une voix",
"Je n’ai jamais inventé un prétexte pour toucher quelqu’un",
"Je n’ai jamais rêvé d’un premier baiser",
"Je n’ai jamais envoyé un message en pensant « j’espère qu’il/elle répond vite »",
"Je n’ai jamais été hypnotisé(e) par un regard",
"Je n’ai jamais ressenti le besoin de me rapprocher juste pour sentir quelqu’un",
"Je n’ai jamais eu envie de rester dans les bras de quelqu’un toute la nuit",
"Je n’ai jamais dit bonne nuit juste pour entamer une autre conversation",
"Je n’ai jamais observé quelqu’un discrètement juste pour le/la voir sourire",
"Je n’ai jamais marché lentement pour rester avec quelqu’un",
"Je n’ai jamais eu envie de dire « tu es beau/belle » mais je ne l’ai pas fait",
"Je n’ai jamais imaginé danser sous les étoiles avec quelqu’un",
"Je n’ai jamais retenu un sourire en entendant le prénom de quelqu’un"
];
let deck=[],index=0;
function renderHome(){const v=$('#view');v.innerHTML='';const wrap=h('div',{class:'grid'},[]);
const hero=h('div',{class:'card hero'},[h('h2',{},['Je n’ai jamais — pack torride']),h('p',{},['Clique sur Jouer pour tirer 50 cartes au hasard.'] ),h('div',{class:'row',style:'justify-content:center'},[
 h('button',{class:'primary',id:'play'},['Jouer'])
])]);
const tips=h('div',{class:'card'},[h('div',{class:'row',style:'justify-content:center;gap:10px'},[
 h('span',{class:'badge'},['Tactile 44px+']),h('span',{class:'badge'},['Swipe ← →']),h('span',{class:'badge'},['Contraste AA'])
])]);
wrap.append(hero,tips);v.append(wrap);$('#play').addEventListener('click',startGame)}
function startGame(){deck=shuffle(QUESTIONS).slice(0,50).map((text,i)=>({id:i+1,text}));index=0;renderGame()}
function renderGame(){const v=$('#view');v.innerHTML='';const wrap=h('div',{class:'qwrap'},[]);
const q=deck[index];
const progress=Math.round((index)/49*100);
const card=h('div',{class:'qcard',id:'qcard'},[h('div',{class:'qindex'},[`Carte ${index+1}/50`]),q?document.createTextNode(q.text):document.createTextNode('—'),h('div',{class:'qhint'},['Tap ou swipe pour naviguer'])]);
let startX=null;card.addEventListener('touchstart',e=>{startX=e.changedTouches[0].clientX});card.addEventListener('touchend',e=>{if(startX==null)return;const dx=e.changedTouches[0].clientX-startX;startX=null;if(Math.abs(dx)>70){if(dx<0)next();else prev()}});card.addEventListener('click',()=>next());
const bar=h('div',{class:'progress'},[h('div',{style:`width:${progress}%`})]);
const nav=h('div',{class:'nav'},[
 h('button',{class:'solid',id:'prev','aria-label':'Précédent'},['← Précédent']),
 h('button',{class:'solid',id:'next','aria-label':'Suivant'},['Suivant →'])
]);
wrap.append(card,bar,nav);v.append(wrap);
$('#prev').addEventListener('click',prev);$('#next').addEventListener('click',next);
function prev(){if(index>0){index--;renderGame()}else toast('Début du paquet')}
function next(){if(index<deck.length-1){index++;renderGame()}else end()}
}
function end(){const v=$('#view');v.innerHTML='';const done=h('div',{class:'grid'},[]);done.append(h('div',{class:'card hero'},[h('h2',{},['Fin du tirage']),h('p',{},['Tu as parcouru 50 cartes.']) ]));v.append(done);}
$('#year').textContent=String(new Date().getFullYear());
renderHome();
$('#playTop').addEventListener('click',()=>{startGame();window.scrollTo({top:0,behavior:'smooth'})});
document.querySelector('.logo').addEventListener('click',renderHome);
})();
