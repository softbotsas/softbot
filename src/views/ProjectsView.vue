<template>
  <div class="projects-view">
    <div class="space-background"></div>
    <div class="stars"></div>
    <div class="twinkling"></div>

    <section class="projects-section">
      <div class="projects-container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-number">// 03.</span>Proyectos_Clave
          </h2>
          <p class="section-subtitle">
            Código que transforma ideas en realidad. Soluciones innovadoras para desafíos complejos.
          </p>
        </div>

        <div class="featured-project-wrapper">
          <div class="project-card featured">
            <div class="featured-project-visual">
              <div class="visual-glitch-layers">
                <div class="glitch-layer"></div>
                <div class="glitch-layer"></div>
              </div>
              <i class="fas fa-paper-plane project-icon-bg"></i>
              <img :src="megaSend.imageSrc || '/images/projects/megasend-placeholder.png'" :alt="megaSend.title" class="featured-image">
            </div>
            <div class="project-content">
              <span class="project-type featured-type">{{ megaSend.type }}</span>
              <h3 class="project-title">{{ megaSend.title }} <span class="featured-tag">Principal</span></h3>
              <p class="project-description">{{ megaSend.description }}</p>
              <div class="project-tech">
                <span v-for="tech in megaSend.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
              </div>
              <div class="project-links">
                <a v-if="megaSend.liveLink" :href="megaSend.liveLink" target="_blank" class="project-link-button primary">
                  <i class="fas fa-rocket"></i> Ver Demo
                </a>
                <a v-if="megaSend.repoLink" :href="megaSend.repoLink" target="_blank" class="project-link-button secondary">
                  <i class="fab fa-github"></i> Repositorio
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="other-projects-header">
          <h3 class="other-projects-title">// Portfolio_Adicional</h3>
        </div>
        <div class="projects-grid">
          <div class="project-card" v-for="project in otherProjects" :key="project.id">
            <div class="project-image-container">
              <img :src="project.imageSrc || '/images/projects/default-placeholder.png'" :alt="project.title" class="project-image">
              <div class="project-image-overlay">
                <div class="project-links overlay-links">
                    <a v-if="project.liveLink" :href="project.liveLink" target="_blank" class="link-icon" title="Ver Demo"><i class="fas fa-external-link-alt"></i></a>
                    <a v-if="project.repoLink" :href="project.repoLink" target="_blank" class="link-icon" title="Ver Repositorio"><i class="fab fa-github"></i></a>
                </div>
              </div>
            </div>
            <div class="project-content">
              <span class="project-type">{{ project.type }}</span>
              <h4 class="project-title-small">{{ project.title }}</h4>
              <p class="project-description small">{{ project.description }}</p>
              <div class="project-tech small-tech">
                <span v-for="tech in project.technologies" :key="tech" class="tech-tag small">{{ tech }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const megaSend = ref({
  id: 1,
  title: 'MegaSend',
  type: 'Plataforma SaaS',
  description: 'Solución robusta para envíos masivos y automatizados a través de WhatsApp. Ideal para marketing, notificaciones y comunicación directa con clientes, integrando análisis y gestión de campañas.',
  technologies: ['Python', 'Cloud API', 'MongoDB'],
  imageSrc: '/images/megasend.png', // Reemplazar con imagen real
  liveLink: '#demo-megasend', // Reemplazar
  repoLink: null, // O '#github-megasend'
  featured: true
});

const otherProjects = ref([
  {
    id: 2,
    title: 'Budget Buddy',
    type: 'Aplicación Web y Móvil',
    description: 'Sistema integral para la administración, seguimiento y análisis de gastos personales y empresariales. Backend en Laravel y frontend en Angular.',
    technologies: ['Angular', 'Laravel', 'MySQL', 'PWA'],
    imageSrc: '/images/projects/budgetbuddy-cover.png', // Reemplazar
    liveLink: '#demo-budgetbuddy',
    repoLink: '#github-budgetbuddy'
  },
  {
    id: 3,
    title: 'Consmo PC Mayorista',
    type: 'Plataforma E-commerce B2B',
    description: 'Sitio web de comercio electrónico para la distribución mayorista de componentes y equipos de cómputo.',
    technologies: ['Vue.js', 'API REST', 'Pasarela de Pagos'],
    imageSrc: '/images/projects/consmopc-cover.png', // Reemplazar
    liveLink: '#', // Reemplazar
    repoLink: null
  },
  {
    id: 4,
    title: 'Tu Caja Express',
    type: 'Sitio Web Corporativo y Logística',
    description: 'Página web para empresa de envíos y paquetería, con funcionalidades de cotización y seguimiento.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    imageSrc: '/images/projects/tucaja-cover.png', // Reemplazar
    liveLink: '#', // Reemplazar
    repoLink: null
  },
  {
    id: 5,
    title: 'Fundación Semillas Zoe',
    type: 'Sitio Web Informativo y Donaciones',
    description: 'Plataforma web para fundación sin fines de lucro, enfocada en la difusión de su misión y la captación de donaciones.',
    technologies: ['WordPress', 'Responsive Design', 'Integración Donaciones'],
    imageSrc: '/images/projects/semillaszoe-cover.png', // Reemplazar
    liveLink: '#', // Reemplazar
    repoLink: null
  }
]);
</script>

<style scoped>
/* Importar fuentes (si no están en index.html o globalmente) */
/* @import url('[https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap](https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap)'); */
/* @import url('[https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap](https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap)'); */

/* Variables de Color Softbot */
:root {
  --primary-color: #00ffcc;
  --secondary-color: #9c27b0;
  --accent-color: #ff00ff;
  --background-dark: #0a0f1e;
  --background-darker: #060a14;
  --background-card: rgba(18, 28, 58, 0.7); /* Fondo de tarjeta más oscuro y translúcido */
  --text-light: #e0e0e0;
  --text-dark-accent: #43D9AD;
  --text-muted: #8892b0;
  --border-color: rgba(0, 255, 204, 0.2);
  --border-highlight: rgba(0, 255, 204, 0.5);
  --font-primary: 'Poppins', sans-serif;
  --font-code: 'Fira Code', 'Courier New', monospace;
  --card-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

/* Estilos base de la vista */
.projects-view {
  background-color: var(--background-dark);
  min-height: 100vh;
  padding-top: 80px; /* Para header fijo global */
  overflow: hidden;
  position: relative;
  color: var(--text-light);
  font-family: var(--font-primary);
}

/* Fondos espaciales */
.space-background, .stars, .twinkling { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
.space-background { background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%); }
.stars { background: transparent url('data:image/svg+xml;utf8,<svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="0.5" fill="white" opacity="0.4"/></svg>') repeat; background-size: 250px 250px; animation: stars-move 220s linear infinite; opacity: 0.6; }
.twinkling { background: transparent url('data:image/svg+xml;utf8,<svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100" height="100" viewBox="0 0 100 100"><circle cx="20" cy="20" r="0.3" fill="white" opacity="0.2"/><circle cx="70" cy="70" r="0.2" fill="white" opacity="0.15"/></svg>') repeat; background-size: 350px 350px; animation: twinkling-move 180s linear infinite; opacity: 0.5; }
@keyframes stars-move { from { background-position: 0 0; } to { background-position: -2000px 2000px; } }
@keyframes twinkling-move { from { background-position: 0 0; } to { background-position: -1500px 1500px; } }

/* Contenedor principal */
.projects-container {
  position: relative; z-index: 3; max-width: 1200px; margin: 0 auto;
  padding: 0 20px 60px 20px; /* Padding inferior aumentado */
}

/* Encabezado de Sección */
.section-header { margin-bottom: 4rem; text-align: center; }
.section-title {
  font-size: clamp(2.2rem, 5vw, 3rem); color: var(--primary-color);
  margin-bottom: 1rem; display: inline-block; position: relative;
  font-weight: 700; letter-spacing: 1px;
}
.section-title::after {
  content: ''; position: absolute; width: 80%; height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  bottom: -10px; left: 50%; transform: translateX(-50%); border-radius: 2px;
}
.section-title .section-number { color: var(--accent-color); font-family: var(--font-code); font-size: 0.9em; }
.section-subtitle {
  color: var(--text-muted); font-size: clamp(1rem, 2.5vw, 1.2rem);
  max-width: 700px; margin: 0.5rem auto 0 auto; font-family: var(--font-code); line-height: 1.6;
}

/* Proyecto Destacado */
.featured-project-wrapper {
  margin-bottom: 5rem;
  background: linear-gradient(145deg, rgba(0, 255, 204, 0.05), rgba(156, 39, 176, 0.05)); /* Gradiente sutil */
  padding: 3px; /* Para efecto de borde con gradiente */
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0, 255, 204, 0.1);
}

.project-card.featured {
  display: flex;
  flex-direction: column; /* Stack visual y contenido en móvil */
  gap: 0; /* Sin gap entre visual y contenido */
  background: var(--background-darker); /* Fondo más oscuro para el contenido interno */
  border: none; /* Sin borde, el wrapper lo maneja */
  border-radius: 10px; /* Redondeado interno */
  padding: 0; /* El padding se manejará internamente */
  box-shadow: none;
  backdrop-filter: blur(5px); /* Sutil blur si el wrapper es translúcido */
}

.featured-project-visual {
  flex-basis: 45%; /* Ocupa parte del espacio */
  min-height: 300px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(to bottom right, var(--primary-color), var(--accent-color));
  border-radius: 10px 10px 0 0; /* Redondeo superior */
  display: flex;
  align-items: center;
  justify-content: center;
}

.featured-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Cubre el área, puede recortar */
  opacity: 0.3; /* Imagen semi-transparente */
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.project-card.featured:hover .featured-image {
  opacity: 0.5;
  transform: scale(1.05);
}

/* Efecto Glitch para el fondo del visual (sutil) */
.visual-glitch-layers { position: absolute; top:0; left:0; width:100%; height:100%; overflow:hidden;}
.glitch-layer { position:absolute; top:0; left:0; width:100%; height:100%; background: var(--primary-color); animation: glitchAnim 5s infinite alternate; }
.glitch-layer:nth-child(2) { background: var(--accent-color); animation-delay: -2.5s; }
@keyframes glitchAnim {
  0% { transform: translateX(0) skewX(0); opacity: 0.03; }
  25% { transform: translateX(5px) skewX(0.5deg); opacity: 0.02; }
  50% { transform: translateX(-5px) skewX(-0.3deg); opacity: 0.04; }
  75% { transform: translateX(3px) skewX(0.2deg); opacity: 0.01; }
  100% { transform: translateX(0) skewX(0); opacity: 0.03; }
}

.project-icon-bg {
  position: absolute;
  font-size: 8rem;
  color: rgba(255,255,255,0.05); /* Muy sutil */
  z-index: 0;
  transform: rotate(-15deg);
}

.project-card.featured .project-content {
  flex-basis: 55%;
  padding: 2.5rem; /* Más padding para el destacado */
  text-align: left;
  background-color: var(--background-card); /* Fondo para contenido */
  border-radius: 0 0 10px 10px;
}

.project-card.featured .project-title {
  font-size: clamp(1.8rem, 4vw, 2.4rem); /* Más grande */
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}
.featured-tag {
    background: var(--primary-color); color: var(--background-dark);
    padding: 0.2em 0.6em; font-size: 0.6em; border-radius: 4px;
    margin-left: 10px; vertical-align: middle; font-weight: 700;
    text-transform: uppercase; letter-spacing: 0.5px;
}

.project-card.featured .project-description {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.project-links { margin-top: 1.5rem; display: flex; gap: 15px; flex-wrap: wrap;}
.project-link-button {
  padding: 10px 20px; text-decoration: none; border-radius: 5px;
  font-weight: 500; transition: all 0.3s ease; font-size: 0.9rem;
  display: inline-flex; align-items: center; gap: 8px;
}
.project-link-button.primary { background-color: var(--primary-color); color: var(--background-dark); border: 1px solid var(--primary-color); }
.project-link-button.primary:hover { background-color: transparent; color: var(--primary-color); }
.project-link-button.secondary { border: 1px solid var(--border-color); color: var(--text-light); }
.project-link-button.secondary:hover { border-color: var(--primary-color); color: var(--primary-color); }


/* Otros Proyectos */
.other-projects-header {
  margin-top: 4rem;
  margin-bottom: 2rem;
  text-align: center;
}
.other-projects-title {
  font-family: var(--font-code);
  font-size: 1.5rem;
  color: var(--text-muted);
  border-bottom: 1px dashed var(--border-color);
  display: inline-block;
  padding-bottom: 0.5rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--background-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  box-shadow: var(--card-shadow);
}
.project-card:hover {
  transform: translateY(-8px);
  border-color: var(--border-highlight);
  box-shadow: 0 12px 35px rgba(0, 255, 204, 0.1);
}

.project-image-container {
  width: 100%;
  height: 180px; /* Altura fija para imágenes */
  background-color: var(--background-darker); /* Fondo para la imagen */
  border-radius: 6px;
  margin-bottom: 1.5rem;
  overflow: hidden;
  position: relative;
}
.project-image {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.4s ease;
}
.project-card:hover .project-image { transform: scale(1.05); }

.project-image-overlay {
  position: absolute; top: 0; left: 0; width: 100%; height: 100%;
  background: linear-gradient(to top, rgba(10, 15, 30, 0.8), transparent 60%);
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  align-items: flex-end; /* Links abajo */
  justify-content: flex-end;
  padding: 10px;
}
.project-card:hover .project-image-overlay { opacity: 1; }

.overlay-links .link-icon {
  color: var(--text-light); font-size: 1.3rem; margin-left: 10px;
  opacity: 0.8; transition: opacity 0.3s ease, color 0.3s ease;
}
.overlay-links .link-icon:hover { opacity: 1; color: var(--primary-color); }


.project-content { flex-grow: 1; display: flex; flex-direction: column; }
.project-type {
  font-family: var(--font-code); font-size: 0.8rem; color: var(--accent-color);
  margin-bottom: 0.5rem; text-transform: uppercase; letter-spacing: 0.5px;
  font-weight: 500;
}
.featured-type { color: var(--accent-color); } /* Diferente para destacado */

.project-title {
  font-size: 1.5rem; font-weight: 600; color: var(--text-light);
  margin-bottom: 0.8rem;
}
.project-title-small {
    font-size: 1.3rem; font-weight: 600; color: var(--text-light);
    margin-bottom: 0.5rem;
}

.project-description {
  color: var(--text-muted); font-size: 0.9rem; line-height: 1.6;
  margin-bottom: 1rem; flex-grow: 1; /* Para empujar techs/links abajo */
}
.project-description.small { font-size: 0.85rem; margin-bottom: 0.8rem;}

.project-tech { display: flex; flex-wrap: wrap; gap: 8px; margin-top: auto; /* Empuja al fondo */ }
.tech-tag {
  background-color: rgba(0, 255, 204, 0.1); /* Fondo con color primario */
  color: var(--primary-color);
  padding: 0.3em 0.8em; border-radius: 4px; font-size: 0.75rem;
  font-family: var(--font-code); font-weight: 500;
}
.tech-tag.small { font-size: 0.7rem; padding: 0.25em 0.6em;}

/* Responsividad */
@media (min-width: 769px) { /* Desktop: Featured project en dos columnas */
    .project-card.featured {
        flex-direction: row;
        align-items: stretch; /* Estirar items a la misma altura */
    }
    .featured-project-visual {
      border-radius: 10px 0 0 10px;
    }
    .project-card.featured .project-content {
      border-radius: 0 10px 10px 0;
    }
}


@media (max-width: 992px) {
  .projects-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
}

@media (max-width: 768px) {
  .projects-section { padding-top: 60px; }
  .section-header { margin-bottom: 3rem; }
  .featured-project-wrapper { margin-bottom: 3rem; }
  .project-card.featured .project-content { padding: 2rem; }
  .project-card.featured .project-title { font-size: 1.6rem; }
  .project-card.featured .project-description { font-size: 1rem; }
  .projects-grid { grid-template-columns: 1fr; } /* Una columna en móvil */
}

@media (max-width: 480px) {
  .projects-container { padding: 0 15px 40px 15px; }
  .section-title { font-size: 1.8rem; }
  .section-subtitle { font-size: 0.9rem; }
  .project-card, .project-card.featured .project-content { padding: 1.5rem; }
  .featured-project-visual { min-height: 250px; }
  .project-image-container { height: 160px; }
  .project-title-small { font-size: 1.15rem; }
  .project-description.small { font-size: 0.8rem; }
  .project-tech.small-tech .tech-tag.small { font-size: 0.65rem;}
  .project-link-button { font-size: 0.85rem; padding: 8px 15px; }
}
</style>