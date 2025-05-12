<template>
  <div class="contact-view">
    <div class="space-background"></div>
    <div class="stars"></div>
    <div class="twinkling"></div>

    <section class="contact-section">
      <div class="contact-container">
        <div class="section-header">
          <h2 class="section-title">
            <span class="section-number">// 05.</span>Conectar_
          </h2>
          <p class="section-subtitle">
            Iniciemos la transmisión. Tu próximo gran proyecto empieza aquí.
          </p>
        </div>

        <div class="contact-intro-message">
          <div class="message-line typing-animation" style="--char-count: 42; --delay: 0.5s">
            &gt; Softbot_Terminal v1.0 Conectado...
          </div>
          <div class="message-line typing-animation" style="--char-count: 38; --delay: 1.5s">
            &gt; Esperando su señal para innovar...
          </div>
          <div class="message-line" style="--delay: 2.5s">
            <span class="cursor-prompt">&gt;</span>
            <span class="cursor">|</span>
          </div>
        </div>

        <div class="contact-grid">
          <div class="contact-form-column">
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name">Nombre_Completo:</label>
                <input type="text" id="name" v-model="formData.name" required placeholder="Tu Identificador" />
              </div>
              <div class="form-group">
                <label for="email">Email_Corporativo:</label>
                <input type="email" id="email" v-model="formData.email" required placeholder="tu@dominio.com" />
              </div>
              <div class="form-group">
                <label for="company">Organización: (Opcional)</label>
                <input type="text" id="company" v-model="formData.company" placeholder="Nombre de tu Empresa" />
              </div>
              <div class="form-group">
                <label for="subject">Asunto_Clave:</label>
                <input type="text" id="subject" v-model="formData.subject" required placeholder="Breve descripción del proyecto" />
              </div>
              <div class="form-group">
                <label for="message">Mensaje_Encriptado:</label>
                <textarea id="message" v-model="formData.message" rows="6" required placeholder="Detalla tu requerimiento o consulta..."></textarea>
              </div>
              <button type="submit" class="submit-btn">
                <i class="fas fa-paper-plane"></i> Enviar Transmisión
              </button>
            </form>
          </div>

          <div class="contact-info-column">
            <div class="info-block">
              <h4>// Canales_Directos</h4>
              <p>
                <i class="fas fa-envelope-open-text accent-color"></i>
                <a href="mailto:contacto@softbot.com">softbotsas@gmail.com</a>
              </p>
              <p>
                <i class="fas fa-phone-alt accent-color"></i>
                <a href="tel:+1234567890">+57 (301) 769 3004</a> 
              </p>
              <p>
                <i class="fas fa-map-marker-alt accent-color"></i>
                Cyberespacio Global, Nodo Principal: [Tu Ciudad]
              </p>
            </div>

            <div class="info-block">
              <h4>// Redes_Neurales</h4>
              <div class="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer" title="GitHub"><i class="fab fa-github-square"></i></a>
                <a href="#" target="_blank" rel="noopener noreferrer" title="Twitter (X)"><i class="fab fa-xing"></i></a>
                </div>
            </div>
            
            <div class="contact-visual-element">
              <div class="node" style="--node-delay: 0.1s;"></div>
              <div class="node" style="--node-delay: 0.3s;"></div>
              <div class="node" style="--node-delay: 0.5s;"></div>
              <div class="node-connection"></div>
              <i class="fas fa-satellite-dish data-icon"></i>
            </div>
            <p class="visual-caption">// Estableciendo_Conexión_Segura...</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const formData = ref({
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
});

const handleSubmit = () => {
  console.log('Formulario Enviado:', formData.value);
  // Aquí iría la lógica para enviar el formulario a un backend o servicio
  alert('Mensaje enviado (simulación). Revisa la consola para ver los datos.');
  // Resetear formulario (opcional)
  formData.value = { name: '', email: '', company: '', subject: '', message: '' };
};

onMounted(() => {
  // Efecto de escritura automática
  const lines = document.querySelectorAll('.contact-intro-message .typing-animation');
  lines.forEach(line => {
    const delay = parseFloat(line.style.getPropertyValue('--delay')) || 0;
    const charCount = parseInt(line.style.getPropertyValue('--char-count')) || line.textContent.length;
    // Ajustar duración basado en --char-count para velocidad de tipeo más consistente
    const duration = charCount * 0.07; // 0.07s por caracter

    line.style.setProperty('--dynamic-char-count', charCount); // Pasar a CSS
    line.style.setProperty('--dynamic-duration', `${duration}s`);


    setTimeout(() => {
      line.classList.add('typing-active');
    }, delay * 1000);
  });
});

</script>

<style scoped>
/* Importar fuentes globales (si no están en index.html) */
/* @import url('[https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap](https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap)'); */
/* @import url('[https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap](https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap)'); */

/* Variables de Color Softbot (Consistente con HomeView) */
:root {
  --primary-color: #00ffcc; /* Verde Neón / Cian */
  --secondary-color: #9c27b0; /* Púrpura */
  --accent-color: #ff00ff; /* Magenta */
  --background-dark: #0a0f1e; /* Azul oscuro/negro */
  --background-darker: #060a14; /* Aún más oscuro */
  --text-light: #e0e0e0;
  --text-dark-accent: #43D9AD; /* Un verde más oscuro para texto */
  --text-muted: #8892b0; /* Gris azulado */
  --border-color: rgba(0, 255, 204, 0.2);
  --input-bg: rgba(12, 26, 50, 0.7); /* Fondo input más oscuro */
  --font-primary: 'Poppins', sans-serif;
  --font-code: 'Fira Code', 'Courier New', monospace;
}

/* Estilos base de la vista */
.contact-view {
  background-color: var(--background-dark);
  min-height: 100vh;
  padding-top: 80px; /* Espacio para un posible header fijo global */
  overflow: hidden; /* Evita scrollbars por animaciones de fondo */
  position: relative;
  color: var(--text-light);
  font-family: var(--font-primary);
}

.contact-section {
  position: relative;
  padding: 4rem 0;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center; /* Centrar verticalmente el contenido principal */
}

/* Fondos espaciales (igual que AboutView) */
.space-background, .stars, .twinkling { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; }
.space-background { background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%); }
.stars { background: transparent url('data:image/svg+xml;utf8,<svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="0.5" fill="white" opacity="0.4"/></svg>') repeat; background-size: 250px 250px; animation: stars-move 220s linear infinite; opacity: 0.6; }
.twinkling { background: transparent url('data:image/svg+xml;utf8,<svg xmlns="[http://www.w3.org/2000/svg](http://www.w3.org/2000/svg)" width="100" height="100" viewBox="0 0 100 100"><circle cx="20" cy="20" r="0.3" fill="white" opacity="0.2"/><circle cx="70" cy="70" r="0.2" fill="white" opacity="0.15"/></svg>') repeat; background-size: 350px 350px; animation: twinkling-move 180s linear infinite; opacity: 0.5; }

@keyframes stars-move { from { background-position: 0 0; } to { background-position: -2000px 2000px; } }
@keyframes twinkling-move { from { background-position: 0 0; } to { background-position: -1500px 1500px; } }

/* Contenedor principal del contenido */
.contact-container {
  position: relative;
  z-index: 3; /* Encima de los fondos */
  max-width: 1100px; /* Ancho ligeramente reducido para centrar más */
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
}

/* Encabezado de Sección */
.section-header { margin-bottom: 3rem; text-align: center; }
.section-title {
  font-size: clamp(2.2rem, 5vw, 3rem);
  color: var(--primary-color); /* Color primario Softbot */
  margin-bottom: 1rem;
  display: inline-block; /* Para centrar la línea debajo */
  position: relative;
  font-weight: 700;
  letter-spacing: 1px;
}
.section-title::after { /* Línea decorativa */
    content: '';
    position: absolute;
    width: 80%;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
}
.section-title .section-number { color: var(--accent-color); font-family: var(--font-code); font-size: 0.9em; }
.section-subtitle { color: var(--text-muted); font-size: clamp(1rem, 2.5vw, 1.2rem); max-width: 650px; margin: 0.5rem auto 0 auto; font-family: var(--font-code); line-height: 1.6; }

/* Mensaje Introductorio Hacker */
.contact-intro-message {
  background: rgba(12, 26, 50, 0.6); /* Fondo oscuro semi-transparente */
  border-left: 3px solid var(--primary-color);
  padding: 1.5rem;
  font-family: var(--font-code);
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.7;
  color: var(--text-light);
  margin-bottom: 3rem;
  border-radius: 0 8px 8px 0;
  backdrop-filter: blur(3px); /* Sutil blur para el fondo */
}
.message-line {
  margin-bottom: 0.5rem;
  opacity: 0; /* Inicialmente invisible */
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid transparent; /* Cursor inicialmente invisible */
  width: 0; /* Inicialmente sin ancho */
}
.message-line.typing-active { /* Clase añadida por JS */
  opacity: 1;
  width: calc(var(--dynamic-char-count) * 1ch); /* Ajustar ancho al contenido */
  border-right-color: var(--primary-color); /* Mostrar cursor */
  animation: typing var(--dynamic-duration) steps(var(--dynamic-char-count), end) forwards,
             blink-caret .75s step-end infinite;
}

/* Animación de typing */
@keyframes typing {
  from { width: 0; }
  to { width: calc(var(--dynamic-char-count) * 1ch); } /* Ancho dinámico */
}
@keyframes blink-caret {
  from, to { border-right-color: transparent; }
  50% { border-right-color: var(--primary-color); }
}
.message-line:last-child.typing-active { animation: blink-caret .75s step-end infinite; border-right: 2px solid var(--primary-color); } /* Para el cursor final */


.cursor-prompt { color: var(--primary-color); margin-right: 0.5ch; }
.cursor { animation: blink 1s infinite; color: var(--primary-color); font-weight: bold; }
@keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }


/* Grid de Contacto (Formulario + Info) */
.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr; /* Formulario más ancho */
  gap: 3rem;
  align-items: flex-start; /* Alinear arriba */
}

/* Columna Formulario */
.contact-form-column {
  background: var(--input-bg);
  padding: 2.5rem;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  box-shadow: 0 0 25px rgba(0, 255, 204, 0.05);
}
.form-group { margin-bottom: 1.5rem; }
.form-group label {
  display: block;
  margin-bottom: 0.75rem;
  color: var(--primary-color);
  font-weight: 500;
  font-size: 0.9rem;
  font-family: var(--font-code);
}
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 15px;
  background: rgba(0,0,0, 0.2); /* Fondo oscuro para inputs */
  border: 1px solid var(--border-color);
  border-radius: 4px;
  color: var(--text-light);
  font-family: var(--font-primary);
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: var(--text-muted); opacity: 0.7; }
.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 10px rgba(0, 255, 204, 0.25);
}
.form-group textarea { resize: vertical; min-height: 120px; }

.submit-btn {
  display: inline-flex; align-items: center; gap: 10px;
  background-color: var(--primary-color); color: var(--background-dark);
  border: none; padding: 12px 28px; border-radius: 5px;
  font-weight: 600; font-size: 1rem; cursor: pointer;
  transition: all 0.3s ease;
}
.submit-btn:hover { background-color: var(--text-light); color: var(--primary-color); box-shadow: 0 0 15px var(--primary-color); transform: translateY(-2px); }
.submit-btn i { font-size: 1.1em; }


/* Columna Información */
.contact-info-column {
  color: var(--text-light);
}
.info-block {
  background: var(--input-bg);
  padding: 1.8rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  border: 1px solid var(--border-color);
}
.info-block h4 {
  font-family: var(--font-code);
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.8rem;
}
.info-block p { margin-bottom: 0.8rem; display: flex; align-items: center; gap: 10px; color: var(--text-muted); }
.info-block p i.accent-color { color: var(--accent-color); font-size: 1.1em; width: 20px; text-align: center;}
.info-block a { color: var(--text-light); text-decoration: none; transition: color 0.3s ease; }
.info-block a:hover { color: var(--primary-color); }

.social-links { display: flex; gap: 15px; }
.social-links a {
  color: var(--text-muted); font-size: 1.8rem;
  transition: color 0.3s ease, transform 0.3s ease;
}
.social-links a:hover { color: var(--primary-color); transform: translateY(-3px); }

/* Visual Element - Communication Node */
.contact-visual-element {
  margin-top: 1.5rem;
  height: 180px;
  background: var(--input-bg);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-color);
}
.node {
  width: 10px; height: 10px; background-color: var(--primary-color);
  border-radius: 50%; position: absolute;
  box-shadow: 0 0 10px var(--primary-color), 0 0 20px var(--primary-color);
  animation: pulse-node 2s infinite ease-in-out;
  opacity: 0;
}
.node:nth-child(1) { top: 20%; left: 25%; animation-delay: var(--node-delay); }
.node:nth-child(2) { bottom: 30%; left: 60%; animation-delay: var(--node-delay); }
.node:nth-child(3) { top: 40%; right: 15%; animation-delay: var(--node-delay); }

@keyframes pulse-node {
  0%, 100% { transform: scale(0.5); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
}
.node-connection { /* Placeholder for future line animations */
  position: absolute; width: 100%; height: 100%;
  /* background: radial-gradient(circle, transparent 60%, rgba(0, 255, 204, 0.05) 100%); */
}
.data-icon {
    font-size: 4rem;
    color: var(--accent-color);
    opacity: 0.15;
    animation: float-icon 6s ease-in-out infinite;
}
@keyframes float-icon {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}
.visual-caption {
    font-family: var(--font-code);
    font-size: 0.8rem;
    text-align: center;
    color: var(--text-muted);
    margin-top: 10px;
    opacity: 0.7;
}

/* Responsive */
@media (max-width: 992px) {
  .contact-grid { grid-template-columns: 1fr; gap: 2.5rem; }
  .contact-info-column { order: -1; /* Info arriba en móvil */ }
  .contact-visual-element { height: 150px; }
  .data-icon { font-size: 3rem;}
}
@media (max-width: 768px) {
  .contact-section { padding: 3rem 0; }
  .section-header { margin-bottom: 2.5rem; }
  .contact-intro-message { padding: 1rem; font-size: 0.9rem; margin-bottom: 2.5rem;}
  .contact-form-column, .info-block { padding: 1.8rem; }
  .info-block { padding: 1.5rem;}
}
@media (max-width: 480px) {
  .contact-container { padding: 0 1rem; }
  .contact-form-column, .info-block { padding: 1.5rem; }
  .form-group input, .form-group textarea { padding: 10px 12px; font-size: 0.95rem;}
  .submit-btn { width: 100%; justify-content: center; }
}

</style>