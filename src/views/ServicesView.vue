<template>
  <div class="services-view">
    <div class="space-background"></div>
    <div class="stars"></div>
    <div class="twinkling"></div>

    <section class="services-hero-section">
      <div class="container">
        <div class="section-header">
          <h1 class="main-title">
            <span class="section-number">//</span>Servicios_Softbot
          </h1>
          <p class="main-subtitle">
            Forjando el futuro digital con soluciones de software avanzadas, seguras e inteligentes.
          </p>
        </div>
      </div>
    </section>

    <div class="services-details-container">
      <section
        v-for="(service, index) in services"
        :key="service.id"
        class="service-detail-item section-padding"
        :class="{ 'bg-darker': index % 2 !== 0, 'reverse-layout': index % 2 !== 0 }"
      >
        <div class="container service-item-grid">
          <div class="service-visual animate-on-scroll" data-animation="fadeInVisual">
            <img :src="service.imageSrc" :alt="service.title" class="service-image">
            <div class="visual-overlay-icon">
                <i :class="service.icon"></i>
            </div>
          </div>
          <div class="service-text-content animate-on-scroll" data-animation="fadeInText">
            <div class="service-header-inline">
              <i :class="service.icon" class="service-main-icon accent-color"></i>
              <h2 class="service-item-title">{{ service.title }}</h2>
            </div>
            <p class="service-item-description">{{ service.detailedDescription }}</p>

            <h4 class="sub-heading">// Características_Clave:</h4>
            <ul class="key-features-list">
              <li v-for="feature in service.keyFeatures" :key="feature">
                <i class="fas fa-cog accent-color"></i> {{ feature }}
              </li>
            </ul>

            <h4 class="sub-heading tech-heading">// Tecnologías_Asociadas:</h4>
            <div class="service-tech-tags">
              <span v-for="tech in service.technologies" :key="tech" class="tech-tag">{{ tech }}</span>
            </div>
             <RouterLink :to="service.ctaLink || '/contacto'" class="cta-button service-cta">
                <i class="fas fa-arrow-right"></i> Saber Más
            </RouterLink>
          </div>
        </div>
      </section>
    </div>

    <section class="process-section section-padding bg-darker">
        <div class="container">
            <h2 class="section-title text-center">Nuestro_Proceso_Estratégico <span class="accent-color">//</span></h2>
            <p class="section-subtitle text-center">Metodología ágil y centrada en resultados para garantizar el éxito de tu proyecto.</p>
            <div class="process-steps-grid">
                <div class="process-step animate-on-scroll" data-animation="bounceIn" v-for="(step, index) in processSteps" :key="step.id" :style="{'animation-delay': `${index * 0.15}s`}">
                    <div class="step-number-container">
                        <span class="step-number">{{ step.id }}</span>
                        <i :class="step.icon" class="step-icon"></i>
                    </div>
                    <h3 class="step-title">{{ step.title }}</h3>
                    <p class="step-description">{{ step.description }}</p>
                </div>
            </div>
        </div>
    </section>


    <section class="final-cta-section section-padding">
      <div class="container text-center">
        <h2 class="section-title light text-center">¿Listo para <span class="primary-color-text">Elevar</span> tu Proyecto?</h2>
        <p class="cta-text">
          Permite que Softbot sea tu aliado estratégico en la era digital. Contáctanos para una consultoría sin compromiso.
        </p>
        <RouterLink to="/contacto" class="cta-button primary large">
          <i class="fas fa-rocket"></i> Iniciar Colaboración
        </RouterLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterLink } from 'vue-router';

const services = ref([
  {
    id: 1,
    slug: 'desarrollo-a-medida',
    title: 'Desarrollo de Software a Medida',
    icon: 'fas fa-code-branch',
    detailedDescription: 'Creamos soluciones de software únicas y personalizadas, desde aplicaciones web complejas hasta sistemas empresariales robustos, diseñadas específicamente para resolver tus desafíos y potenciar tu crecimiento. Nos enfocamos en la escalabilidad, rendimiento y seguridad desde el núcleo.',
    keyFeatures: [
      'Análisis exhaustivo de requerimientos.',
      'Arquitecturas limpias y escalables (Microservicios, Monolitos modulares).',
      'Integración continua y despliegue automatizado (CI/CD).',
      'Metodologías Ágiles (Scrum/Kanban) para flexibilidad total.',
      'Pruebas unitarias, de integración y E2E.'
    ],
    technologies: ['Python (Django/Flask)', 'Node.js (Express/NestJS)', 'Java (Spring Boot)', 'Ruby on Rails', 'Vue.js', 'React', 'Angular', 'SQL & NoSQL DBs'],
    imageSrc: '/images/desarrollo.jpeg', // Reemplazar con imagen
    ctaLink: '/contacto?servicio=desarrollo-medida'
  },
  {
    id: 2,
    slug: 'soluciones-cloud',
    title: 'Soluciones Cloud & DevOps',
    icon: 'fas fa-cloud-upload-alt',
    detailedDescription: 'Optimizamos tu infraestructura en la nube (AWS, Azure, GCP) para garantizar alta disponibilidad, escalabilidad y eficiencia de costos. Implementamos prácticas DevOps para acelerar tus ciclos de entrega y mejorar la colaboración entre equipos.',
    keyFeatures: [
      'Diseño de arquitecturas Cloud-Native.',
      'Orquestación de Contenedores (Kubernetes, Docker Swarm).',
      'Infraestructura como Código (Terraform, CloudFormation)',
      'Monitorización y Alertas proactivas (Prometheus, Grafana).',
      'Optimización de costos en la nube (FinOps).'
    ],
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker', 'Terraform', 'Ansible', 'Jenkins'],
    imageSrc: '/images/nube.jpeg', // Reemplazar con imagen
    ctaLink: '/contacto?servicio=cloud-devops'
  },
  {
    id: 3,
    slug: 'ia-automatizacion',
    title: 'Inteligencia Artificial & Automatización',
    icon: 'fas fa-robot',
    detailedDescription: 'Integramos soluciones de IA y Machine Learning para automatizar tareas complejas, extraer insights valiosos de tus datos y crear experiencias de usuario personalizadas. Desde chatbots inteligentes hasta análisis predictivo y RPA.',
    keyFeatures: [
      'Modelos de Machine Learning personalizados.',
      'Procesamiento de Lenguaje Natural (NLP).',
      'Visión por Computadora.',
      'Robotic Process Automation (RPA) para tareas repetitivas.',
      'Análisis predictivo y sistemas de recomendación.'
    ],
    technologies: ['Python (TensorFlow, PyTorch, Scikit-learn)', 'R', 'AWS SageMaker', 'Azure ML', 'Dialogflow', 'UiPath'],
    imageSrc: '/images/services/ia-automatizacion.png', // Reemplazar con imagen
    ctaLink: '/contacto?servicio=ia-automatizacion'
  },
  {
    id: 4,
    slug: 'ciberseguridad',
    title: 'Ciberseguridad & DevSecOps',
    icon: 'fas fa-shield-alt',
    detailedDescription: 'Protegemos tus activos digitales integrando la seguridad en cada etapa del ciclo de vida del software (DevSecOps). Realizamos auditorías, pentesting y diseñamos arquitecturas seguras para mitigar riesgos y cumplir con normativas.',
    keyFeatures: [
      'Auditorías de seguridad y análisis de vulnerabilidades.',
      'Pruebas de penetración (Pentesting).',
      'Implementación de pipelines DevSecOps seguros.',
      'Gestión de Identidad y Acceso (IAM).',
      'Cumplimiento normativo (GDPR, ISO 27001).'
    ],
    technologies: ['OWASP', 'NIST Framework', 'SIEM', 'WAF', 'Kali Linux', 'Metasploit', 'Vault', 'SAST/DAST Tools'],
    imageSrc: '/images/services/ciberseguridad.png', // Reemplazar con imagen
    ctaLink: '/contacto?servicio=ciberseguridad'
  }
]);

const processSteps = ref([
    {id: '01', icon: 'fas fa-search-plus', title: 'Descubrimiento y Análisis', description: 'Entendemos a fondo tus necesidades, objetivos y el contexto de tu proyecto.'},
    {id: '02', icon: 'fas fa-drafting-compass', title: 'Diseño y Arquitectura', description: 'Planificamos la solución, definiendo la arquitectura tecnológica y la experiencia de usuario.'},
    {id: '03', icon: 'fas fa-laptop-code', title: 'Desarrollo Ágil', description: 'Construimos tu software en ciclos iterativos, con entregas frecuentes y feedback constante.'},
    {id: '04', icon: 'fas fa-shield-check', title: 'Pruebas y QA', description: 'Aseguramos la calidad y seguridad del software mediante pruebas exhaustivas.'},
    {id: '05', icon: 'fas fa-rocket', title: 'Despliegue y Puesta en Marcha', description: 'Implementamos la solución en tu entorno productivo de forma controlada.'},
    {id: '06', icon: 'fas fa-infinity', title: 'Soporte y Evolución', description: 'Ofrecemos mantenimiento continuo y escalamos la solución según tus futuras necesidades.'}
]);

// Animación al hacer scroll
let observers = [];
const setupIntersectionObserver = () => {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0.2 // 20% del elemento visible
  };

  animatedElements.forEach(el => {
    const observer = new IntersectionObserver((entries, observerInstance) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationType = entry.target.dataset.animation || 'fadeIn';
          entry.target.classList.add('animated', animationType);
          observerInstance.unobserve(entry.target); // Dejar de observar una vez animado
        }
      });
    }, options);
    observer.observe(el);
    observers.push(observer);
  });
};

onMounted(() => {
  // Pequeño delay para asegurar que el DOM esté listo para las animaciones
  setTimeout(setupIntersectionObserver, 100);
});

onUnmounted(() => {
  observers.forEach(observer => observer.disconnect());
});

</script>

<style scoped>
/* Variables de Color Softbot (igual que en otros componentes Softbot) */
:root {
  --primary-color: #00ffcc; /* Verde Neón / Cian */
  --secondary-color: #9c27b0; /* Púrpura */
  --accent-color: #ff00ff; /* Magenta */
  --background-dark: #0a0f1e;
  --background-darker: #060a14; /* Aún más oscuro para secciones alternas */
  --text-light: #e0e0e0;
  --text-dark-accent: #43D9AD;
  --text-muted: #8892b0;
  --border-color: rgba(0, 255, 204, 0.2);
  --card-bg: rgba(18, 28, 58, 0.5); /* Fondo de tarjeta oscuro y translúcido */
  --font-primary: 'Poppins', sans-serif;
  --font-code: 'Fira Code', 'Courier New', monospace;
  --card-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

/* Estilos base de la vista */
.services-view {
  background-color: var(--background-dark);
  min-height: 100vh;
  padding-top: 80px; /* Espacio para un posible header fijo global */
  overflow: hidden;
  position: relative;
  color: var(--text-light);
  font-family: var(--font-primary);
}

/* Fondos espaciales (igual que otros componentes Softbot) */
.space-background, .stars, .twinkling { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; /* Detrás de todo */ }
.space-background { background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%); }
.stars { background: transparent url('data:image/svg+xml;utf8,<svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="0.5" fill="white" opacity="0.4"/></svg>') repeat; background-size: 250px 250px; animation: stars-move 220s linear infinite; opacity: 0.6; }
.twinkling { background: transparent url('data:image/svg+xml;utf8,<svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100" height="100" viewBox="0 0 100 100"><circle cx="20" cy="20" r="0.3" fill="white" opacity="0.2"/><circle cx="70" cy="70" r="0.2" fill="white" opacity="0.15"/></svg>') repeat; background-size: 350px 350px; animation: twinkling-move 180s linear infinite; opacity: 0.5; }
@keyframes stars-move { from { background-position: 0 0; } to { background-position: -2000px 2000px; } }
@keyframes twinkling-move { from { background-position: 0 0; } to { background-position: -1500px 1500px; } }


.container { max-width: 1140px; margin: 0 auto; padding: 0 20px; position: relative; }
.section-padding { padding: 80px 0; }
.bg-darker { background-color: var(--background-darker); }
.text-center { text-align: center; }
.accent-color { color: var(--accent-color); }
.primary-color-text { color: var(--primary-color); }


/* Estilos de Encabezado de Sección (Reutilizados) */
.section-header { margin-bottom: 3rem; text-align: center; }
.main-title { /* Título principal de la página de servicios */
  font-size: clamp(2.8rem, 7vw, 4.5rem);
  color: var(--text-light);
  text-shadow: 0 0 15px rgba(0, 255, 204, 0.3);
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.2;
}
.main-title .section-number { color: var(--primary-color); font-family: var(--font-code); font-size: 0.7em; margin-right: 10px; }
.main-subtitle {
  color: var(--text-muted); font-size: clamp(1.1rem, 3vw, 1.4rem);
  max-width: 750px; margin: 0.5rem auto 0 auto; line-height: 1.7; font-weight: 300;
}
/* Título para secciones internas */
.section-title {
  font-size: clamp(2rem, 5vw, 2.8rem); color: var(--primary-color);
  margin-bottom: 1.5rem; display: inline-block; position: relative;
  font-weight: 700; letter-spacing: 1px;
}
.section-title.light { color: var(--text-light); }
.section-title.text-center::after {
  content: ''; position: absolute; width: 70px; height: 3px;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  bottom: -15px; left: 50%; transform: translateX(-50%); border-radius: 2px;
}
.section-subtitle.text-center { margin-bottom: 4rem; max-width: 700px; }


/* Hero Section de Servicios */
.services-hero-section {
  min-height: 60vh; /* Más corto que el home hero */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 60px 0;
  text-align: center;
}

/* Detalles de Servicio */
.service-detail-item {
  border-bottom: 1px solid var(--border-color); /* Separador sutil */
}
.service-detail-item:last-child {
    border-bottom: none;
}

.service-item-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr; /* Visual un poco más pequeño */
  gap: 3rem;
  align-items: center;
}
.service-detail-item.reverse-layout .service-item-grid {
  grid-template-columns: 1.2fr 1fr; /* Invertir columnas */
}
.service-detail-item.reverse-layout .service-visual {
  order: 2; /* Cambia el orden visual */
}

.service-visual {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  min-height: 350px; /* Altura mínima para el visual */
  display: flex; align-items: center; justify-content: center;
  background-color: var(--background-darker);
}
.service-image {
  width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease-in-out, opacity 0.5s ease;
  opacity: 0.6; /* Imagen un poco más visible */
}
.service-visual:hover .service-image {
  transform: scale(1.05);
  opacity: 0.8;
}
.visual-overlay-icon {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    color: rgba(0, 255, 204, 0.15); /* Icono de fondo muy sutil */
    z-index: 0;
}


.service-text-content { padding: 1rem 0; } /* Padding vertical */

.service-header-inline {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 1rem;
}
.service-main-icon { font-size: 1.8rem; }
.service-item-title {
  font-size: clamp(1.6rem, 4vw, 2.2rem);
  font-weight: 600;
  color: var(--text-light);
  margin-bottom: 0; /* Ajustado por header inline */
}
.service-item-description {
  color: var(--text-muted);
  font-size: 1rem;
  line-height: 1.7;
  margin-bottom: 1.8rem;
}

.sub-heading {
  font-family: var(--font-code);
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 500;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.tech-heading { margin-top: 2rem; }

.key-features-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem 0;
}
.key-features-list li {
  color: var(--text-light);
  margin-bottom: 0.8rem;
  display: flex;
  align-items: flex-start; /* Para items multi-línea */
  gap: 10px;
  font-size: 0.95rem;
}
.key-features-list li i {
  font-size: 1em; /* Relativo al texto */
  margin-top: 0.2em; /* Alineación vertical */
  width: 18px; /* Espacio para el icono */
  flex-shrink: 0; /* Evita que el icono se encoja */
}

.service-tech-tags {
  display: flex; flex-wrap: wrap; gap: 10px;
  margin-bottom: 2rem;
}
.tech-tag {
  background-color: rgba(0, 255, 204, 0.1);
  color: var(--primary-color);
  padding: 0.4em 0.9em; border-radius: 20px; font-size: 0.8rem;
  font-family: var(--font-code); font-weight: 500;
  border: 1px solid rgba(0, 255, 204, 0.2);
}
.service-cta { margin-top: 1.5rem; }


/* Sección Nuestro Proceso */
.process-steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}
.process-step {
    background: var(--card-bg);
    padding: 2rem 1.5rem;
    border-radius: 8px;
    text-align: center;
    border: 1px solid var(--border-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.process-step:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 255, 204, 0.1);
}
.step-number-container {
    position: relative;
    margin-bottom: 1.5rem;
    display: inline-block;
}
.step-number {
    font-family: var(--font-code);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--primary-color);
    opacity: 0.2;
    line-height: 1;
}
.step-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.8rem;
    color: var(--primary-color);
}
.step-title {
    font-size: 1.3rem;
    font-weight: 600;
    color: var(--text-light);
    margin-bottom: 0.8rem;
}
.step-description {
    font-size: 0.9rem;
    color: var(--text-muted);
    line-height: 1.6;
}


/* Llamado a Acción Final */
.final-cta-section { background-color: var(--background-dark); /* Un poco diferente para destacar */ }
.cta-text {
  color: var(--text-light); opacity: 0.9; font-size: 1.2rem;
  max-width: 600px; margin: 0 auto 40px auto; line-height: 1.7;
}

/* Botones CTA (reutilizados/definidos en HomeView) */
.cta-button { display: inline-flex; align-items: center; gap: 10px; padding: 12px 28px; border-radius: 5px; font-weight: 600; font-size: 1rem; text-decoration: none; cursor: pointer; transition: all 0.3s ease; border: 2px solid transparent; margin: 5px; }
.cta-button i { font-size: 1.1em; }
.cta-button.primary { background-color: var(--primary-color); color: var(--background-dark); border-color: var(--primary-color); }
.cta-button.primary:hover { background-color: transparent; color: var(--primary-color); box-shadow: 0 0 15px rgba(0, 255, 204, 0.5); transform: translateY(-3px); }
.cta-button.large { padding: 15px 35px; font-size: 1.1rem; }


/* Animaciones de Scroll */
.animated { visibility: visible !important; } /* Para que Animate.css funcione bien con IntersectionObserver */
.fadeInVisual { animation-name: fadeInVisualKeyframes; animation-duration: 0.8s; animation-timing-function: ease-out; animation-fill-mode: both; }
@keyframes fadeInVisualKeyframes {
  from { opacity: 0; transform: translateX(-30px) scale(0.95); }
  to { opacity: 1; transform: translateX(0) scale(1); }
}
.service-detail-item.reverse-layout .fadeInVisual { animation-name: fadeInVisualReverseKeyframes; }
@keyframes fadeInVisualReverseKeyframes {
  from { opacity: 0; transform: translateX(30px) scale(0.95); }
  to { opacity: 1; transform: translateX(0) scale(1); }
}

.fadeInText { animation-name: fadeInTextKeyframes; animation-duration: 0.8s; animation-timing-function: ease-out; animation-fill-mode: both; animation-delay: 0.2s; }
@keyframes fadeInTextKeyframes {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
.bounceIn { animation-name: bounceInKeyframes; animation-duration: 0.6s; animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275); animation-fill-mode: both; }
@keyframes bounceInKeyframes {
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
}
/* Clases base para elementos ocultos antes de animar */
.animate-on-scroll {
    opacity: 0; /* Empiezan invisibles */
    visibility: hidden; /* Ocultos para accesibilidad y evitar "flashes" */
}


/* Responsividad */
@media (max-width: 992px) {
  .service-item-grid,
  .service-detail-item.reverse-layout .service-item-grid {
    grid-template-columns: 1fr; /* Stack en pantallas medianas */
    gap: 2rem;
  }
  .service-detail-item.reverse-layout .service-visual {
    order: 0; /* Resetear orden para layout de una columna */
  }
  .service-visual { min-height: 300px; }
  .service-text-content { text-align: center; } /* Centrar texto en móvil */
  .service-header-inline, .key-features-list li { justify-content: center; }
  .service-tech-tags { justify-content: center; }
}

@media (max-width: 768px) {
  .services-view { padding-top: 60px; }
  .section-padding { padding: 60px 0; }
  .main-title { font-size: clamp(2.2rem, 6vw, 3.5rem); }
  .main-subtitle { font-size: 1rem; }
  .process-steps-grid { grid-template-columns: 1fr; } /* Stack process steps */
}

@media (max-width: 480px) {
  .section-padding { padding: 50px 0; }
  .service-item-title { font-size: 1.5rem; }
  .service-item-description { font-size: 0.9rem; }
  .key-features-list li, .tech-tag { font-size: 0.8rem; }
  .cta-button { width: 90%; justify-content: center; font-size: 1rem; }
  .step-title { font-size: 1.15rem; }
  .step-description { font-size: 0.85rem; }
}

</style>