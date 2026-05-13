const state = {
    projectsH: 40,
    viewH: 40,
    startH: 40,
    maxH: 100,
    isDragging: false,
    pos: 0,
    startX: 0,
    speed: 0.7
};

const dom = {
    projectsPanel: document.getElementById('projectsPanel'),
    projectsScroll: document.getElementById('projectsScrollArea'),
    viewPanel: document.getElementById('viewPanel'),
    viewScroll: document.getElementById('viewScrollArea'),
    infoPanel: document.getElementById('infoPanel'),
    track: document.getElementById('track'),
    carousel: document.getElementById('carousel')
};

// =====================
// 📁 DATA PROJETS
// =====================
const projectsData = {
    barthou: {
        number: "001 / 005",
        title: "Atlantique",
        subtitle: "Biarritz, 2025",
        images: [
            "assets/LOUISBARTHOU_1.png",
            "assets/LOUISBARTHOU_2.png",
            "assets/LOUISBARTHOU_3.png"
        ],
        description: "<p>&nbsp;</p>\n<p>ATLANTIQUE,&nbsp;Appartement haut de gamme, 95m2.</p>\n<p>Biarritz, 2025.</p>\n<p>Projet d&rsquo;am&eacute;nagement int&eacute;rieur d&rsquo;un appartement avec vue mer au c&oelig;ur de Biarritz. L&rsquo;intervention met l&rsquo;accent sur la fluidit&eacute; des espaces et la lumi&egrave;re naturelle. Une atmosph&egrave;re d&eacute;licate et color&eacute;e, pens&eacute;e pour dialoguer avec le paysage.</p>\n<p>Projet livr&eacute; en octobre 2025.&nbsp;</p>\n<p><em>Interior design project for a sea-view apartment in the heart of Biarritz. The intervention focuses on spatial fluidity and natural light. A subtle, colorful atmosphere has been created to engage in dialogue with the surrounding landscape.</em></p>\n<p><em>Delivered project.</em></p>"
    },
    gemillon: {
        number: "002 / 005",
        title: "Alpâge",
        subtitle: "Haute-Savoie, 2026",
        images: [
            "assets/GEMILLON_1.png",
            "assets/GEMILLON_2.png",
            "assets/GEMILLON_3.png"
        ],
        description: "<p></p>\n<p>ALPAGE, Chalet de montagne, 300m2</p>\n<p>Haute-Savoie, 2026</p>\n<p>Architectes : Michael Levy / Jean Philippe Besson</p>\n<p>Agencement int&eacute;rieur de ce chalet nich&eacute; au c&oelig;ur des montagnes, reprenant les codes du chalet d&rsquo;alpage et valorisant le savoir-faire local. Le projet s&rsquo;articule autour d&rsquo;un &eacute;quilibre entre h&eacute;ritage et proposition architecturale personnelle. Des fresques et motifs viennent nourrir les espaces, tandis qu&rsquo;une monochromie assum&eacute;e met en valeur les mati&egrave;res brutes : enveloppe en bois massif, plafond en b&eacute;ton et &eacute;corces, foyer central massif, escalier sculptural et portes signatures. L&rsquo;ensemble s&rsquo;efface au profit du paysage environnant.</p>\n<p>Chantier en cours, livraison pr&eacute;vue pour la fin de l&rsquo;ann&eacute;e 2026.</p>\n<p><em>Interior design of this chalet nestled in the heart of the mountains, drawing on the codes of traditional alpine chalets while highlighting local craftsmanship. The project is based on a balance between heritage and a distinctive architectural approach. Murals and patterns enrich the spaces, while an intentional monochromatic palette emphasizes raw materials: a solid timber envelope, concrete and bark ceilings, a monumental central fireplace, a sculptural staircase, and signature doors. The interior recedes to give full prominence to the surrounding landscape.</em></p>\n<p><em>Construction in progress, completion scheduled for the end of 2026.</em></p>"
    },
    bastille: {
        number: "003 / 005",
        title: "Ile-Tudy",
        subtitle: "Ile Tudy, 2024",
        images: [
            "assets/ILETUDY_1.png",
            "assets/ILETUDY_2.png",
            "assets/ILETUDY_3.png"
        ],
        description: "<p></p>\n<p></p>\n<p>ILE-TUDY, Maison de vacances, 60m2</p>\n<p>Ile Tudy, Bretagne, 2024</p>\n<p>Travail de revalorisation des espaces pour cette petite maison au coeur de l&rsquo;Ile Tudy. Mise en oeuvre de volumes coh&eacute;rents pour l&rsquo;usage avec une distribution fluide des espaces. Un jeu de couleurs et mati&egrave;res a &eacute;t&eacute; imagin&eacute; pour ce projet pour illuminer les mois d&rsquo;hiver et accompagner le printemps et l'&eacute;t&eacute;.</p>\n<p><em>Renovation and enhancement of the spaces in this small house in the heart of &Icirc;le-Tudy. The project introduces coherent volumes adapted to use, with a fluid spatial layout. A palette of colours and materials has been designed to brighten the winter months and accompany the arrival of spring and summer.</em></p>"
    },
    louvel: {
        number: "004 / 005",
        title: "Jacques Louvel Tessier",
        subtitle: "Paris 10, 2025",
        images: [
            "assets/JLT_1.png",
            "assets/JLT_2.png",
            "assets/JLT_3.png"
        ],
        description: "<p></p>\n<p>JACQUES LOUVEL TESSIER, Appartement, 40m2</p>\n<p>Paris 10, 2025</p>\n<p>Architecte : Michael Levy</p>\n<p>Travail d&rsquo;accompagnement et mise en oeuvre. S&eacute;lection de mat&eacute;riaux et suivi du chantier pour ce petit appartement parisien, voulu comme un pied &agrave; terre chaleureux et confortable.</p>\n<p>Projet livr&eacute; en f&eacute;vrier 2025.</p>\n<p><em>Design support and implementation. Selection of materials and site supervision for this small Parisian apartment, conceived as a warm and comfortable pied-&agrave;-terre.</em></p>\n<p><em>Project completed in February 2025.</em></p>"
    },
    lesclefs: {
        number: "005 / 005",
        title: "Aravis",
        subtitle: "Haute-Savoie, 2025",
        images: [
            "assets/LESCLEFS_1.png",
            "assets/LESCLEFS_2.png",
            "assets/LESCLEFS_3.png"
        ],
        description: "<p></p>\n<p>ARAVIS, Villa de montagne, 300m2</p>\n<p>Haute-Savoie, 2025</p>\n<p>Architecte : Michael Levy</p>\n<p>Agencement int&eacute;rieur de cette villa sur trois niveaux. Pens&eacute; comme un lieu de vill&eacute;giature pouvant recevoir de nombreux invit&eacute;s, la villa s&rsquo;articule sur trois &eacute;tages proposant une fluidit&eacute; dans la circulation et l&rsquo;entretient de cette maison. Des mat&eacute;riaux esth&eacute;tiques et durables ont &eacute;t&eacute; choisis, tout en travaillant l&rsquo;ambiance globale, souhait&eacute;e chaleureuse et conviviale.</p>\n<p><em>Interior design of this three-storey villa. Conceived as a holiday residence capable of hosting numerous guests, the villa is organised across three levels, ensuring fluid circulation and ease of maintenance. A selection of aesthetic and durable materials has been made, while developing an overall atmosphere intended to be warm and convivial.</em></p>"
    }
};

// =====================
// 🔥 OPEN PROJECT VIEW (STACK MODE)
// =====================
function openProjectView(key) {
    const p = projectsData[key];
    if (!p) return;

    // ❌ NE FERME PLUS LES AUTRES PANELS (STACK MODE)
    dom.viewPanel.classList.add('open');

    // encart progressif (important)
    state.viewH = state.startH;
    dom.viewPanel.style.height = state.viewH + 'vh';

    // TEXTE
    document.getElementById('viewProjectNumber').innerText = p.number;
    document.getElementById('viewProjectArtist').innerText = p.title;
    document.getElementById('viewProjectTitle').innerText = p.subtitle;

    // GALERIE
    const gallery = document.querySelector('.view-gallery');
    gallery.innerHTML = "";

    p.images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        gallery.appendChild(img);
    });

    // DESCRIPTION
    const text = document.querySelector('.view-text .col-text');
    text.innerHTML = p.description;
}

// =====================
// 📂 PANELS
// =====================
function togglePanel(id) {
    const panel = document.getElementById(id);
    const isMobile = window.innerWidth <= 768;

    if (!panel.classList.contains('open')) {

        // IMPORTANT : on ne ferme PAS view si on ouvre projects
        if (id !== 'viewPanel') {
            closeAllPanels();
        }

        panel.classList.add('open');

        if (isMobile) {
            panel.style.height = '100vh';
        } else if (id !== 'infoPanel') {
            state.projectsH = state.startH;
            panel.style.height = state.startH + 'vh';
        }
    } else {
        panel.classList.remove('open');
    }
}

function closePanel(id) {
    document.getElementById(id).classList.remove('open');
}

// ⚠️ version stack-safe
function closeAllPanels() {
    document.querySelectorAll('.sliding-panel').forEach(p =>
        p.classList.remove('open')
    );

    dom.viewPanel.style.height = state.startH + 'vh';
}

// =====================
// 🖱 SCROLL ENCASTRÉ
// =====================
function handleScroll(e, panel, scrollArea, heightKey) {
    if (!panel.classList.contains('open')) return;

    const atTop = scrollArea.scrollTop <= 0;
    const isFull = state[heightKey] >= 99.9;

    if (
        (e.deltaY > 0 && !isFull) ||
        (e.deltaY < 0 && atTop && state[heightKey] > state.startH)
    ) {
        e.preventDefault();

        state[heightKey] += e.deltaY * 0.12;

        state[heightKey] = Math.min(
            Math.max(state[heightKey], state.startH),
            state.maxH
        );

        panel.style.height = state[heightKey] + 'vh';
    }

    scrollArea.style.overflowY =
        state[heightKey] >= 99.9 ? 'auto' : 'hidden';
}

dom.projectsPanel.addEventListener(
    'wheel',
    e => handleScroll(e, dom.projectsPanel, dom.projectsScroll, 'projectsH'),
    { passive: false }
);

dom.viewPanel.addEventListener(
    'wheel',
    e => handleScroll(e, dom.viewPanel, dom.viewScroll, 'viewH'),
    { passive: false }
);

// =====================
// 🖱 OUTSIDE CLICK
// =====================
window.addEventListener('mousedown', e => {

    if (e.target.closest('#carousel')) {
        closeAllPanels();
        return;
    }

    if (dom.viewPanel.classList.contains('open')) {
        if (!e.target.closest('#viewPanel') && !e.target.closest('.view-link')) {
            closePanel('viewPanel');
        }
    } else if (dom.projectsPanel.classList.contains('open')) {
        if (!e.target.closest('#projectsPanel') && !e.target.closest('.nav-btn')) {
            closePanel('projectsPanel');
        }
    } else if (dom.infoPanel.classList.contains('open')) {
        if (!e.target.closest('#infoPanel') && !e.target.closest('.nav-btn')) {
            closePanel('infoPanel');
        }
    }
});

// =====================
// 🎞 CAROUSEL
// =====================
const initCarousel = () => {
    const images = dom.track.innerHTML;
    dom.track.innerHTML = images + images;
    animate();
};

const animate = () => {
    if (!state.isDragging) {
        state.pos -= state.speed;

        const halfWidth = dom.track.scrollWidth / 2;

        if (Math.abs(state.pos) >= halfWidth) {
            state.pos = 0;
        }

        dom.track.style.transform = `translateX(${state.pos}px)`;
    }

    requestAnimationFrame(animate);
};

dom.carousel.addEventListener('mousedown', e => {
    state.isDragging = true;
    state.startX = e.pageX - state.pos;
});

window.addEventListener('mouseup', () => {
    state.isDragging = false;
});

window.addEventListener('mousemove', e => {
    if (state.isDragging) {
        state.pos = e.pageX - state.startX;

        const halfWidth = dom.track.scrollWidth / 2;

        if (state.pos > 0) state.pos = -halfWidth;
        if (state.pos < -halfWidth) state.pos = 0;

        dom.track.style.transform = `translateX(${state.pos}px)`;
    }
});

// =====================
// 🚀 INIT
// =====================
window.onload = initCarousel;