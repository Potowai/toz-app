// JavaScript logic for Toz - Je n'ai jamais
(function () {
    const $ = s => document.querySelector(s);
    const h = (t, p = {}, c = []) => {
        const e = document.createElement(t);
        for (const k in p) {
            if (k === 'class') e.className = p[k];
            else if (k === 'html') e.innerHTML = p[k];
            else e.setAttribute(k, p[k]);
        }
        c.forEach(x => e.appendChild(typeof x === 'string' ? document.createTextNode(x) : x));
        return e;
    };
    const shuffle = a => {
        const x = a.slice();
        for (let i = x.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [x[i], x[j]] = [x[j], x[i]];
        }
        return x;
    };
    const toast = m => {
        const t = $('#toast');
        t.textContent = m;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 2000);
    };

    const DATA = {
        HOT: {
            id: 'hot',
            label: 'Hot',
            icon: '🔥',
            desc: 'Pour commencer en douceur.',
            color: 'var(--hot)',
            gradient: 'var(--hot-gradient)',
            questions: [
                "Je n'ai jamais embrassé quelqu'un sous la pluie",
                "Je n'ai jamais eu de coup de foudre",
                "Je n'ai jamais flirté avec un collègue",
                "Je n'ai jamais envoyé de texto coquin par erreur",
                "Je n'ai jamais rêvé de quelqu'un ici",
                "Je n'ai jamais menti sur mon âge pour séduire",
                "Je n'ai jamais embrassé quelqu'un le premier soir",
                "Je n'ai jamais eu de rencard arrangé",
                "Je n'ai jamais stalké un ex sur les réseaux",
                "Je n'ai jamais fait semblant d'être difficile à avoir",
                "Je n'ai jamais embrassé plus de 2 personnes en 24h",
                "Je n'ai jamais eu de relation à distance",
                "Je n'ai jamais pleuré devant un film romantique",
                "Je n'ai jamais écrit de poème d'amour",
                "Je n'ai jamais chanté une sérénade (même pour rire)",
                "Je n'ai jamais eu de crush sur un prof",
                "Je n'ai jamais embrassé quelqu'un du même sexe",
                "Je n'ai jamais joué à la bouteille",
                "Je n'ai jamais fait de massage sensuel",
                "Je n'ai jamais dormi dans le même lit qu'un ami sans rien faire",
                "Je n'ai jamais eu de surnom ridicule en couple",
                "Je n'ai jamais porté de vêtements de mon partenaire",
                "Je n'ai jamais fait de bain de minuit",
                "Je n'ai jamais embrassé quelqu'un avec un appareil dentaire",
                "Je n'ai jamais eu de rencard au cinéma",
                "Je n'ai jamais offert de fleurs",
                "Je n'ai jamais reçu de fleurs",
                "Je n'ai jamais cuisiné pour séduire",
                "Je n'ai jamais appris une langue pour quelqu'un",
                "Je n'ai jamais changé de style pour plaire",
                "Je n'ai jamais fait semblant d'aimer une musique pour pécho",
                "Je n'ai jamais embrassé les yeux ouverts",
                "Je n'ai jamais eu les mains moites lors d'un rencard",
                "Je n'ai jamais bafouillé devant mon crush",
                "Je n'ai jamais liké une vieille photo par erreur",
                "Je n'ai jamais utilisé une appli de rencontre",
                "Je n'ai jamais eu de match Tinder avec une connaissance",
                "Je n'ai jamais ghosté quelqu'un",
                "Je n'ai jamais été ghosté",
                "Je n'ai jamais embrassé quelqu'un dont je ne connaissais pas le nom",
                "Je n'ai jamais fait de déclaration d'amour publique",
                "Je n'ai jamais été friendzoné",
                "Je n'ai jamais friendzoné quelqu'un",
                "Je n'ai jamais embrassé mon meilleur ami",
                "Je n'ai jamais eu de relation secrète",
                "Je n'ai jamais embrassé devant un coucher de soleil",
                "Je n'ai jamais tenu la main en public",
                "Je n'ai jamais porté de lingerie fine juste pour moi",
                "Je n'ai jamais fait de strip-tease rigolo",
                "Je n'ai jamais dormi nu",
                "Je n'ai jamais embrassé quelqu'un qui avait mauvaise haleine",
                "Je n'ai jamais eu de suçon visible",
                "Je n'ai jamais dû cacher un suçon",
                "Je n'ai jamais embrassé quelqu'un de plus vieux",
                "Je n'ai jamais embrassé quelqu'un de plus jeune",
                "Je n'ai jamais été dragué par un inconnu lourd",
                "Je n'ai jamais dragué un barman/serveur",
                "Je n'ai jamais laissé mon numéro sur une serviette",
                "Je n'ai jamais demandé le numéro de quelqu'un dans la rue",
                "Je n'ai jamais eu de rencard catastrophe",
                "Je n'ai jamais oublié le prénom de mon rencard",
                "Je n'ai jamais confondu mon partenaire avec quelqu'un d'autre",
                "Je n'ai jamais dit 'je t'aime' sans le penser",
                "Je n'ai jamais regretté un baiser",
                "Je n'ai jamais embrassé pour rendre jaloux",
                "Je n'ai jamais été jaloux de l'ex de mon partenaire",
                "Je n'ai jamais fouillé dans le téléphone de mon partenaire",
                "Je n'ai jamais deviné le mot de passe de quelqu'un",
                "Je n'ai jamais créé de faux profil",
                "Je n'ai jamais envoyé de lettre anonyme",
                "Je n'ai jamais eu de relation pansement",
                "Je n'ai jamais retourné avec un ex",
                "Je n'ai jamais embrassé quelqu'un qui était en couple",
                "Je n'ai jamais été infidèle (même un bisou)",
                "Je n'ai jamais pardonné une infidélité",
                "Je n'ai jamais rompu par SMS",
                "Je n'ai jamais été largué par SMS",
                "Je n'ai jamais pleuré en public pour une rupture",
                "Je n'ai jamais déchiré des photos d'ex",
                "Je n'ai jamais gardé un cadeau d'ex",
                "Je n'ai jamais porté le pull d'un ex",
                "Je n'ai jamais recroisé un ex par hasard",
                "Je n'ai jamais fait semblant d'être au téléphone pour éviter quelqu'un",
                "Je n'ai jamais eu de crush sur une célébrité",
                "Je n'ai jamais embrassé mon poster de star",
                "Je n'ai jamais rêvé de me marier",
                "Je n'ai jamais imaginé ma vie avec mon crush",
                "Je n'ai jamais fait de test de compatibilité amoureuse",
                "Je n'ai jamais lu mon horoscope pour l'amour",
                "Je n'ai jamais fait de vœu en voyant 11h11",
                "Je n'ai jamais effeuillé une marguerite",
                "Je n'ai jamais gravé mes initiales dans un arbre",
                "Je n'ai jamais mis un cadenas sur un pont",
                "Je n'ai jamais partagé un écouteur pour écouter de la musique",
                "Je n'ai jamais dansé un slow",
                "Je n'ai jamais marché pieds nus sur la plage avec quelqu'un",
                "Je n'ai jamais regardé les étoiles à deux",
                "Je n'ai jamais fait de pique-nique romantique",
                "Je n'ai jamais partagé une glace",
                "Je n'ai jamais bu dans le même verre pour flirter"
            ]
        },
        VERY_HOT: {
            id: 'very_hot',
            label: 'Very Hot',
            icon: '🌶️',
            desc: 'La température monte d\'un cran.',
            color: 'var(--very-hot)',
            gradient: 'var(--very-hot-gradient)',
            questions: [
                "Je n'ai jamais dormi nu avec quelqu'un",
                "Je n'ai jamais pris de douche à deux",
                "Je n'ai jamais fait l'amour le matin",
                "Je n'ai jamais fait l'amour sur un canapé",
                "Je n'ai jamais fait l'amour par terre",
                "Je n'ai jamais fait l'amour dans la cuisine",
                "Je n'ai jamais fait l'amour dans la salle de bain",
                "Je n'ai jamais fait l'amour devant un miroir",
                "Je n'ai jamais fait l'amour avec la lumière allumée",
                "Je n'ai jamais fait l'amour dans le noir complet",
                "Je n'ai jamais utilisé d'huile de massage",
                "Je n'ai jamais fait de strip-tease sérieux",
                "Je n'ai jamais reçu de lap dance",
                "Je n'ai jamais donné de lap dance",
                "Je n'ai jamais envoyé de nude",
                "Je n'ai jamais reçu de nude",
                "Je n'ai jamais fait de sexting",
                "Je n'ai jamais eu de conversation téléphonique coquine",
                "Je n'ai jamais fait l'amour sans préservatif (attention !)",
                "Je n'ai jamais pris la pilule du lendemain",
                "Je n'ai jamais acheté de test de grossesse",
                "Je n'ai jamais fait l'amour pendant les règles",
                "Je n'ai jamais fait l'amour plusieurs fois de suite",
                "Je n'ai jamais fait l'amour toute la nuit",
                "Je n'ai jamais été trop bruyant au lit",
                "Je n'ai jamais réveillé les voisins",
                "Je n'ai jamais cassé un lit",
                "Je n'ai jamais tombé du lit pendant l'acte",
                "Je n'ai jamais eu de crampe pendant l'acte",
                "Je n'ai jamais ri pendant l'acte",
                "Je n'ai jamais pleuré après l'acte",
                "Je n'ai jamais dormi tout de suite après",
                "Je n'ai jamais fait l'amour avec de la musique",
                "Je n'ai jamais fait de playlist pour faire l'amour",
                "Je n'ai jamais regardé de porno",
                "Je n'ai jamais regardé de porno en couple",
                "Je n'ai jamais imité une position du Kamasutra",
                "Je n'ai jamais essayé le 69",
                "Je n'ai jamais essayé la levrette",
                "Je n'ai jamais essayé l'andromaque",
                "Je n'ai jamais essayé le missionnaire",
                "Je n'ai jamais été attaché",
                "Je n'ai jamais attaché quelqu'un",
                "Je n'ai jamais utilisé de menottes",
                "Je n'ai jamais utilisé de foulard",
                "Je n'ai jamais utilisé de plume",
                "Je n'ai jamais utilisé de glaçon",
                "Je n'ai jamais utilisé de chantilly ou chocolat",
                "Je n'ai jamais mangé sur quelqu'un",
                "Je n'ai jamais mordu quelqu'un",
                "Je n'ai jamais été mordu",
                "Je n'ai jamais griffé quelqu'un",
                "Je n'ai jamais été griffé",
                "Je n'ai jamais donné de fessée",
                "Je n'ai jamais reçu de fessée",
                "Je n'ai jamais tiré les cheveux",
                "Je n'ai jamais aimé qu'on me tire les cheveux",
                "Je n'ai jamais dit des mots crus au lit",
                "Je n'ai jamais aimé qu'on me dise des mots crus",
                "Je n'ai jamais joué un rôle au lit",
                "Je n'ai jamais porté de déguisement au lit",
                "Je n'ai jamais fait l'amour dans un hôtel",
                "Je n'ai jamais fait l'amour chez des amis",
                "Je n'ai jamais fait l'amour chez mes parents",
                "Je n'ai jamais fait l'amour dans une tente",
                "Je n'ai jamais fait l'amour dans une voiture",
                "Je n'ai jamais fait l'amour sur une plage",
                "Je n'ai jamais fait l'amour dans l'eau",
                "Je n'ai jamais fait l'amour dans une piscine",
                "Je n'ai jamais fait l'amour dans un jacuzzi",
                "Je n'ai jamais fait l'amour dans un sauna",
                "Je n'ai jamais fait l'amour dans les bois",
                "Je n'ai jamais fait l'amour dans un champ",
                "Je n'ai jamais fait l'amour sur un balcon",
                "Je n'ai jamais fait l'amour dans un ascenseur",
                "Je n'ai jamais fait l'amour dans des escaliers",
                "Je n'ai jamais fait l'amour dans des toilettes",
                "Je n'ai jamais été surpris en train de faire l'amour",
                "Je n'ai jamais surpris mes parents",
                "Je n'ai jamais surpris des amis",
                "Je n'ai jamais entendu mes voisins faire l'amour",
                "Je n'ai jamais simulé un orgasme",
                "Je n'ai jamais eu d'orgasme multiple",
                "Je n'ai jamais eu de panne sexuelle",
                "Je n'ai jamais eu de fou rire nerveux au lit",
                "Je n'ai jamais appelé mon partenaire par le mauvais prénom au lit",
                "Je n'ai jamais pensé à quelqu'un d'autre pendant l'acte",
                "Je n'ai jamais fait l'amour pour me réconcilier",
                "Je n'ai jamais fait l'amour par pitié",
                "Je n'ai jamais fait l'amour par ennui",
                "Je n'ai jamais refusé de faire l'amour",
                "Je n'ai jamais initié un rapport",
                "Je n'ai jamais fait le premier pas pour aller au lit",
                "Je n'ai jamais dormi avec un ami avec bénéfices",
                "Je n'ai jamais eu de plan cul régulier",
                "Je n'ai jamais eu un coup d'un soir",
                "Je n'ai jamais recouché avec un ex",
                "Je n'ai jamais couché avec le même partenaire la même nuit",
                "Je n'ai jamais fait l'amour le jour de la Saint-Valentin"
            ]
        },
        SPICY: {
            id: 'spicy',
            label: 'Spicy',
            icon: '😈',
            desc: 'Expériences et fantasmes.',
            color: 'var(--spicy)',
            gradient: 'var(--spicy-gradient)',
            questions: [
                "Je n'ai jamais utilisé de sex toy",
                "Je n'ai jamais utilisé de sex toy à deux",
                "Je n'ai jamais offert de sex toy",
                "Je n'ai jamais été dans un sex shop",
                "Je n'ai jamais commandé sur un site coquin",
                "Je n'ai jamais regardé du hentai",
                "Je n'ai jamais lu de fanfiction érotique",
                "Je n'ai jamais lu 50 Nuances de Grey",
                "Je n'ai jamais fantasmé sur un personnage de fiction",
                "Je n'ai jamais fantasmé sur un prof",
                "Je n'ai jamais fantasmé sur un collègue",
                "Je n'ai jamais fantasmé sur le partenaire d'un ami",
                "Je n'ai jamais fantasmé sur un inconnu dans la rue",
                "Je n'ai jamais fantasmé sur quelqu'un du même sexe",
                "Je n'ai jamais fait de rêve érotique lucide",
                "Je n'ai jamais eu d'orgasme en dormant",
                "Je n'ai jamais pratiqué l'échangisme",
                "Je n'ai jamais pensé à l'échangisme",
                "Je n'ai jamais fait de plan à 3",
                "Je n'ai jamais voulu faire un plan à 3",
                "Je n'ai jamais regardé d'autres personnes faire l'amour",
                "Je n'ai jamais été regardé pendant l'acte",
                "Je n'ai jamais filmé mes ébats",
                "Je n'ai jamais pris de photos coquines de mon partenaire",
                "Je n'ai jamais laissé quelqu'un me prendre en photo nu",
                "Je n'ai jamais eu peur qu'une sextape fuite",
                "Je n'ai jamais fait l'amour avec un inconnu total",
                "Je n'ai jamais fait l'amour sans échanger un mot",
                "Je n'ai jamais fait l'amour les yeux bandés",
                "Je n'ai jamais fait l'amour avec les mains attachées",
                "Je n'ai jamais fait l'amour avec un baillon",
                "Je n'ai jamais pratiqué le BDSM soft",
                "Je n'ai jamais utilisé de fouet",
                "Je n'ai jamais utilisé de pince-tétons",
                "Je n'ai jamais utilisé de plug",
                "Je n'ai jamais utilisé de lubrifiant chauffant",
                "Je n'ai jamais utilisé de préservatif parfumé",
                "Je n'ai jamais fait l'amour devant la télé",
                "Je n'ai jamais fait l'amour pendant un film",
                "Je n'ai jamais fait l'amour en silence pour ne pas être entendu",
                "Je n'ai jamais fait l'amour très vite (quickie)",
                "Je n'ai jamais fait l'amour très lentement (tantra)",
                "Je n'ai jamais essayé le massage prostatique",
                "Je n'ai jamais essayé la sodomie",
                "Je n'ai jamais aimé la sodomie",
                "Je n'ai jamais fait de rimming",
                "Je n'ai jamais reçu de rimming",
                "Je n'ai jamais avalé",
                "Je n'ai jamais demandé à ce qu'on avale",
                "Je n'ai jamais reçu un facial",
                "Je n'ai jamais fait un facial",
                "Je n'ai jamais fait de 69 debout",
                "Je n'ai jamais porté de lingerie comestible",
                "Je n'ai jamais utilisé de peinture corporelle",
                "Je n'ai jamais fait l'amour devant une fenêtre ouverte",
                "Je n'ai jamais fait l'amour sur un balcon la nuit",
                "Je n'ai jamais fait l'amour dans une cabine d'essayage",
                "Je n'ai jamais fait l'amour dans des toilettes publiques",
                "Je n'ai jamais fait l'amour dans un avion (mile high club)",
                "Je n'ai jamais fait l'amour dans un train",
                "Je n'ai jamais fait l'amour dans un bus",
                "Je n'ai jamais fait l'amour dans un cinéma",
                "Je n'ai jamais fait l'amour dans un parc",
                "Je n'ai jamais fait l'amour dans un cimetière",
                "Je n'ai jamais fait l'amour dans une église",
                "Je n'ai jamais fait l'amour au travail",
                "Je n'ai jamais fait l'amour à l'école/fac",
                "Je n'ai jamais fait l'amour dans une bibliothèque",
                "Je n'ai jamais fait l'amour dans un musée",
                "Je n'ai jamais fait l'amour dans une piscine municipale",
                "Je n'ai jamais fait l'amour dans la mer",
                "Je n'ai jamais fait l'amour sur un bateau",
                "Je n'ai jamais fait l'amour sous la tente en festival",
                "Je n'ai jamais fait l'amour dans un sac de couchage",
                "Je n'ai jamais fait l'amour sur une machine à laver",
                "Je n'ai jamais fait l'amour sur une table de cuisine",
                "Je n'ai jamais fait l'amour sur un bureau",
                "Je n'ai jamais fait l'amour sur un piano",
                "Je n'ai jamais fait l'amour sur un billard",
                "Je n'ai jamais fait l'amour devant une cheminée",
                "Je n'ai jamais fait l'amour sur une peau de bête",
                "Je n'ai jamais fait l'amour avec des talons",
                "Je n'ai jamais fait l'amour avec des chaussettes",
                "Je n'ai jamais fait l'amour tout habillé",
                "Je n'ai jamais déchiré les vêtements de quelqu'un",
                "Je n'ai jamais eu mes vêtements déchirés",
                "Je n'ai jamais joué au docteur",
                "Je n'ai jamais joué au professeur/élève",
                "Je n'ai jamais joué au policier/voleur",
                "Je n'ai jamais joué au patron/secrétaire",
                "Je n'ai jamais utilisé de cravate pour attacher",
                "Je n'ai jamais utilisé de ceinture",
                "Je n'ai jamais donné de fessée avec un objet",
                "Je n'ai jamais reçu de fessée avec un objet",
                "Je n'ai jamais aimé la douleur",
                "Je n'ai jamais aimé infliger la douleur",
                "Je n'ai jamais eu de marque de dents",
                "Je n'ai jamais laissé de marque de dents",
                "Je n'ai jamais eu de griffures dans le dos",
                "Je n'ai jamais griffé le dos de quelqu'un"
            ]
        },
        DANGEROUS: {
            id: 'dangerous',
            label: 'Dangerous',
            icon: '☢️',
            desc: 'Tabous, risques et interdits.',
            color: 'var(--dangerous)',
            gradient: 'var(--dangerous-gradient)',
            questions: [
                "Je n'ai jamais couché avec le frère/sœur d'un ami",
                "Je n'ai jamais couché avec l'ex d'un ami",
                "Je n'ai jamais couché avec le partenaire d'un ami",
                "Je n'ai jamais brisé un couple",
                "Je n'ai jamais été la maîtresse / l'amant",
                "Je n'ai jamais eu deux relations en même temps",
                "Je n'ai jamais menti sur mon prénom pour un coup d'un soir",
                "Je n'ai jamais donné un faux numéro après avoir couché",
                "Je n'ai jamais volé quelque chose chez un coup d'un soir",
                "Je n'ai jamais fouillé les tiroirs d'un coup d'un soir",
                "Je n'ai jamais couché pour obtenir quelque chose",
                "Je n'ai jamais couché pour une promotion",
                "Je n'ai jamais couché pour de l'argent",
                "Je n'ai jamais payé pour du sexe",
                "Je n'ai jamais été dans un club échangiste",
                "Je n'ai jamais été dans un club libertin",
                "Je n'ai jamais participé à une orgie",
                "Je n'ai jamais fait l'amour avec plus de 2 personnes en même temps",
                "Je n'ai jamais fait l'amour avec des jumeaux/jumelles",
                "Je n'ai jamais fait l'amour avec un membre de ma belle-famille",
                "Je n'ai jamais eu de fantasme incestueux",
                "Je n'ai jamais fait l'amour sans protection avec un inconnu",
                "Je n'ai jamais menti sur ma santé sexuelle",
                "Je n'ai jamais transmis une IST",
                "Je n'ai jamais attrapé une IST",
                "Je n'ai jamais eu peur d'avoir une IST",
                "Je n'ai jamais fait de test de paternité",
                "Je n'ai jamais douté de la paternité d'un enfant",
                "Je n'ai jamais avorté (ou partenaire)",
                "Je n'ai jamais fait l'amour dans un lieu de culte",
                "Je n'ai jamais fait l'amour dans un cimetière la nuit",
                "Je n'ai jamais fait l'amour dans une école",
                "Je n'ai jamais fait l'amour dans un hôpital",
                "Je n'ai jamais fait l'amour dans un commissariat",
                "Je n'ai jamais fait l'amour dans une prison",
                "Je n'ai jamais fait l'amour avec un uniforme",
                "Je n'ai jamais fait l'amour avec une personne mariée",
                "Je n'ai jamais fait l'amour avec une personne fiancée",
                "Je n'ai jamais fait l'amour la veille de mon mariage avec quelqu'un d'autre",
                "Je n'ai jamais annulé un mariage",
                "Je n'ai jamais été laissé devant l'autel",
                "Je n'ai jamais divorcé",
                "Je n'ai jamais fait l'amour avec mon avocat",
                "Je n'ai jamais fait l'amour avec mon médecin",
                "Je n'ai jamais fait l'amour avec mon psy",
                "Je n'ai jamais fait l'amour avec mon prof",
                "Je n'ai jamais fait l'amour avec mon élève (majeur)",
                "Je n'ai jamais fait l'amour avec mon patron",
                "Je n'ai jamais fait l'amour avec mon employé",
                "Je n'ai jamais fait l'amour avec le parent d'un ami",
                "Je n'ai jamais fait l'amour avec l'enfant (majeur) d'un ami",
                "Je n'ai jamais fait l'amour avec un voisin marié",
                "Je n'ai jamais été surpris par la police",
                "Je n'ai jamais eu une amende pour exhibitionnisme",
                "Je n'ai jamais marché nu dans la rue",
                "Je n'ai jamais conduit nu",
                "Je n'ai jamais fait l'amour en conduisant",
                "Je n'ai jamais eu d'accident à cause du sexe",
                "Je n'ai jamais cassé un objet de valeur pendant le sexe",
                "Je n'ai jamais blessé quelqu'un pendant le sexe",
                "Je n'ai jamais été blessé et fini aux urgences",
                "Je n'ai jamais coincé un objet en moi",
                "Je n'ai jamais dû appeler les pompiers pour un problème sexuel",
                "Je n'ai jamais pris de drogue pour le sexe",
                "Je n'ai jamais été trop ivre pour performer",
                "Je n'ai jamais vomi pendant l'acte",
                "Je n'ai jamais dormi pendant l'acte",
                "Je n'ai jamais oublié le prénom pendant l'acte",
                "Je n'ai jamais appelé maman/papa pendant l'acte",
                "Je n'ai jamais pleuré de tristesse pendant l'acte",
                "Je n'ai jamais eu une crise de panique pendant l'acte",
                "Je n'ai jamais fait l'amour avec quelqu'un que je détestais",
                "Je n'ai jamais fait l'amour pour me venger",
                "Je n'ai jamais fait l'amour pour rendre service",
                "Je n'ai jamais fait l'amour par pari",
                "Je n'ai jamais perdu un pari sexuel",
                "Je n'ai jamais filmé quelqu'un à son insu (illégal !)",
                "Je n'ai jamais diffusé des photos intimes (revenge porn)",
                "Je n'ai jamais été victime de revenge porn",
                "Je n'ai jamais fait de chantage sexuel",
                "Je n'ai jamais subi de chantage sexuel",
                "Je n'ai jamais eu de relation toxique",
                "Je n'ai jamais été violent physiquement",
                "Je n'ai jamais subi de violence physique",
                "Je n'ai jamais harcelé quelqu'un",
                "Je n'ai jamais été harcelé",
                "Je n'ai jamais eu d'ordonnance d'éloignement",
                "Je n'ai jamais espionné quelqu'un avec un logiciel",
                "Je n'ai jamais mis un traceur GPS",
                "Je n'ai jamais lu le journal intime de quelqu'un",
                "Je n'ai jamais écouté aux portes",
                "Je n'ai jamais regardé par la serrure",
                "Je n'ai jamais utilisé de jumelles pour espionner",
                "Je n'ai jamais volé un sous-vêtement",
                "Je n'ai jamais senti un sous-vêtement sale",
                "Je n'ai jamais acheté un sous-vêtement porté",
                "Je n'ai jamais vendu un sous-vêtement porté",
                "Je n'ai jamais fait l'amour avec un animal (non, jamais !)",
                "Je n'ai jamais eu de fantasme zoophile (beurk)",
                "Je n'ai jamais fait l'amour avec un cadavre (nécrophilie, non !)"
            ]
        }
    };

    let deck = [], index = 0, currentCategory = null;

    function renderHome() {
        const v = $('#view');
        v.innerHTML = '';
        const wrap = h('div', { class: 'grid' }, []);

        const hero = h('div', { class: 'hero' }, [
            h('h2', {}, ['Je n’ai jamais']),
            h('p', {}, ['Choisis ton niveau d\'intensité pour commencer la partie.'])
        ]);

        const catGrid = h('div', { class: 'category-grid' }, []);

        Object.values(DATA).forEach(cat => {
            const btn = h('button', {
                class: 'btn-category',
                style: `--gradient: ${cat.gradient}`,
                'aria-label': `Jouer au mode ${cat.label}`
            }, [
                h('div', { class: 'icon' }, [cat.icon]),
                h('div', { class: 'label' }, [cat.label]),
                h('div', { style: 'font-size: 0.8em; opacity: 0.7; margin-top: 4px' }, [cat.desc])
            ]);
            btn.addEventListener('click', () => startGame(cat));
            catGrid.appendChild(btn);
        });

        wrap.append(hero, catGrid);
        v.append(wrap);

        // Reset active styles
        document.body.style.setProperty('--active-gradient', 'var(--primary)');
    }

    function startGame(category) {
        currentCategory = category;
        deck = shuffle(category.questions).slice(0, 50).map((text, i) => ({ id: i + 1, text }));
        index = 0;

        // Update theme
        document.body.style.setProperty('--active-gradient', category.gradient);

        renderGame();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function renderGame() {
        const v = $('#view');
        v.innerHTML = '';
        const wrap = h('div', { class: 'qwrap' }, []);

        const q = deck[index];
        const progress = Math.round(((index + 1) / deck.length) * 100);

        const card = h('div', { class: 'qcard', id: 'qcard' }, [
            h('div', { class: 'qindex' }, [`${index + 1} / ${deck.length}`]),
            h('div', { class: 'qcat', style: `color: ${currentCategory.color}; border-color: ${currentCategory.color}` }, [currentCategory.label]),
            q ? document.createTextNode(q.text) : document.createTextNode('—'),
            h('div', { class: 'qhint' }, ['Tap ou swipe pour passer'])
        ]);

        // Touch events
        let startX = null;
        card.addEventListener('touchstart', e => { startX = e.changedTouches[0].clientX; });
        card.addEventListener('touchend', e => {
            if (startX === null) return;
            const dx = e.changedTouches[0].clientX - startX;
            startX = null;
            if (Math.abs(dx) > 50) {
                if (dx < 0) next(); else prev();
            }
        });
        card.addEventListener('click', (e) => {
            // Avoid double trigger if touch ended
            next();
        });

        const bar = h('div', { class: 'progress-bar' }, [
            h('div', { class: 'progress-fill', style: `width: ${progress}%` })
        ]);

        const nav = h('div', { class: 'nav' }, [
            h('button', { class: 'nav-btn', id: 'prev', 'aria-label': 'Précédent' }, ['←']),
            h('button', { class: 'nav-btn primary', id: 'home', 'aria-label': 'Accueil' }, ['🏠']),
            h('button', { class: 'nav-btn', id: 'next', 'aria-label': 'Suivant' }, ['→'])
        ]);

        wrap.append(card, bar, nav);
        v.append(wrap);

        $('#prev').addEventListener('click', (e) => { e.stopPropagation(); prev(); });
        $('#next').addEventListener('click', (e) => { e.stopPropagation(); next(); });
        $('#home').addEventListener('click', (e) => { e.stopPropagation(); renderHome(); });
    }

    function prev() {
        if (index > 0) {
            index--;
            renderGame();
        } else {
            toast('Début du paquet');
        }
    }

    function next() {
        if (index < deck.length - 1) {
            index++;
            renderGame();
        } else {
            end();
        }
    }

    function end() {
        const v = $('#view');
        v.innerHTML = '';
        const done = h('div', { class: 'grid' }, []);

        done.append(h('div', { class: 'card hero' }, [
            h('h2', {}, ['Terminé !']),
            h('p', {}, [`Tu as parcouru les ${deck.length} questions du mode ${currentCategory.label}.`]),
            h('button', { class: 'nav-btn primary', style: 'margin-top: 20px; width: 100%' }, ['Choisir un autre mode'])
        ]));

        v.append(done);
        $('button').addEventListener('click', renderHome);
    }

    $('#year').textContent = String(new Date().getFullYear());

    // Init
    renderHome();

    // Global listeners
    document.querySelector('.logo').addEventListener('click', renderHome);

})();
