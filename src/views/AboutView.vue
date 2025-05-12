<template>
  <div class="about-view">
    <section class="about-section">
      <div class="space-background"></div>
      <div class="stars"></div>
      <div class="twinkling"></div>
      <div class="about-container">
        <div class="about-content">
          <div class="section-header">
            <h2 class="section-title"><span class="section-number">04.</span> Sobre Mí</h2>
            <p class="section-subtitle">El código detrás de SoftBot</p>
          </div>

          <div class="about-grid">
            <div class="about-text">
              <div class="hacker-message">
                <div class="message-line typing-animation" style="--delay: 0.5s">// Hola, soy Alejandro Botero</div>
                <div class="message-line typing-animation" style="--delay: 1s">// Creador y arquitecto de SoftBot</div>
                <div class="message-line typing-animation" style="--delay: 1.5s">------------------------------------</div>
                <div class="message-line typing-animation" style="--delay: 2s">Desde que escribí mi primera línea de código,</div>
                <div class="message-line typing-animation" style="--delay: 2.5s">supe que la programación era mi lenguaje.</div>
                <div class="message-line typing-animation" style="--delay: 3s">No solo una herramienta, sino una forma de pensar.</div>
                <div class="message-line typing-animation" style="--delay: 3.5s">SoftBot nació de esa pasión por crear soluciones</div>
                <div class="message-line typing-animation" style="--delay: 4s">que van más allá del código limpio.</div>
                <div class="message-line typing-animation" style="--delay: 4.5s">Es sobre impacto, innovación y futuro.</div>
                <div class="message-line typing-animation" style="--delay: 5s">------------------------------------</div>
                <div class="message-line typing-animation" style="--delay: 5.5s">> Especialidades:</div>
                <div class="message-line typing-animation" style="--delay: 6s">- Desarrollo Full Stack</div>
                <div class="message-line typing-animation" style="--delay: 6.3s">- Arquitectura de Software</div>
                <div class="message-line typing-animation" style="--delay: 6.6s">- Automatización Inteligente</div>
                <div class="message-line typing-animation" style="--delay: 6.9s">- Soluciones Cloud</div>
                <div class="message-line typing-animation" style="--delay: 7.2s">------------------------------------</div>
                <div class="message-line typing-animation" style="--delay: 7.5s">> Filosofía:</div>
                <div class="message-line typing-animation" style="--delay: 8s">"El código es poesía lógica,</div>
                <div class="message-line typing-animation" style="--delay: 8.5s">cada función un verso,</div>
                <div class="message-line typing-animation" style="--delay: 9s">cada sistema una epopeya tecnológica."</div>
                <div class="message-line" style="--delay: 9.5s">
                  <span class="cursor-prompt">></span>
                  <span class="cursor">|</span>
                </div>
              </div>
            </div>

            <div class="about-image">
              <div class="space-portrait">
                <img src="/images/alejandro.png" alt="Alejandro Botero" class="profile-image">
                <div class="satellite"></div>
                <div class="tech-stack">
                  <div class="tech-item">JavaScript</div>
                  <div class="tech-item">Python</div>
                  <div class="tech-item">Vue.js</div>
                  <div class="tech-item">Node.js</div>
                  <div class="tech-item">AWS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  mounted() {
    // Efecto de escritura automática
    const lines = document.querySelectorAll('.typing-animation');
    lines.forEach(line => {
      const delay = parseFloat(line.style.getPropertyValue('--delay')) || 0;
      setTimeout(() => {
        line.style.animation = 'typing 3s steps(40, end) forwards';
      }, delay * 1000);
    });
    
    // Efecto de movimiento de satélite
    const satellite = document.querySelector('.satellite');
    if (satellite) {
      setInterval(() => {
        const angle = Math.random() * Math.PI * 2;
        const distance = 120 + Math.random() * 30;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        satellite.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
      }, 3000);
    }
  }
}
</script>

<style>
/* Estilos base */
.about-view {
  background-color: #0a0e17;
  min-height: 100vh;
  padding-top: 80px;
  overflow: hidden;
  position: relative;
  color: #e2e8f0;
}

.about-section {
  position: relative;
  padding: 4rem 0;
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
}

/* Fondo espacial */
.space-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  z-index: 1;
}

.stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="0.5" fill="white" opacity="0.5"/></svg>') repeat;
  background-size: 200px 200px;
  z-index: 2;
  animation: stars-move 200s linear infinite;
}

.twinkling {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><circle cx="50" cy="50" r="0.3" fill="white" opacity="0.2"/></svg>') repeat;
  background-size: 300px 300px;
  z-index: 2;
  animation: twinkling-move 150s linear infinite;
  opacity: 0.7;
}

@keyframes stars-move {
  from { background-position: 0 0; }
  to { background-position: -2000px 2000px; }
}

@keyframes twinkling-move {
  from { background-position: 0 0; }
  to { background-position: -1000px 1000px; }
}

/* Contenido */
.about-container {
  position: relative;
  z-index: 3;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
}

.section-header {
  margin-bottom: 4rem;
  text-align: center;
}

.section-title {
  font-size: clamp(2rem, 5vw, 2.8rem);
  color: #4ade80;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.section-title .section-number {
  color: #6366f1;
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  font-family: 'Courier New', monospace;
}

.section-subtitle {
  color: #94a3b8;
  font-size: clamp(1rem, 3vw, 1.5rem);
  max-width: 600px;
  margin: 0 auto;
  font-family: 'Courier New', monospace;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

/* Texto con efecto hacker */
.about-text {
  position: relative;
}

.hacker-message {
  background: rgba(15, 23, 42, 0.7);
  border-left: 3px solid #6366f1;
  padding: 2rem;
  font-family: 'Courier New', monospace;
  font-size: clamp(0.9rem, 2vw, 1.1rem);
  line-height: 1.8;
  color: #e2e8f0;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  border-radius: 0 8px 8px 0;
}

.hacker-message::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(99, 102, 241, 0.05) 50%,
    transparent 100%
  );
  pointer-events: none;
}

.message-line {
  margin-bottom: 0.8rem;
  opacity: 0;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #6366f1;
  width: 0;
}

.typing-animation {
  animation: typing 3s steps(40, end) forwards;
}

@keyframes typing {
  from { width: 0; opacity: 1; }
  to { width: 100%; opacity: 1; }
}

.cursor-prompt {
  color: #4ade80;
  margin-right: 0.5rem;
}

.cursor {
  animation: blink 1s infinite;
  color: #4ade80;
}

/* Retrato espacial */
.about-image {
  display: flex;
  justify-content: center;
  position: relative;
}

.space-portrait {
  position: relative;
  width: 100%;
  max-width: 350px;
  height: auto;
  aspect-ratio: 3/4;
  display: flex;
  flex-direction: column;
}

.profile-image {
  width: 100%;
  height: 80%;
  object-fit: cover;
  border: 2px solid #6366f1;
  border-radius: 8px;
  box-shadow: 0 0 30px rgba(99, 102, 241, 0.5);
  position: relative;
  z-index: 2;
}

.satellite {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  background: #4ade80;
  border-radius: 50%;
  box-shadow: 0 0 10px #4ade80;
  transform: translate(-50%, -50%);
  z-index: 1;
  transition: transform 3s ease-in-out;
}

.satellite::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  border: 1px dashed rgba(74, 222, 128, 0.3);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem 0;
  justify-content: center;
  margin-top: 1rem;
}

.tech-item {
  background: rgba(99, 102, 241, 0.2);
  color: #e2e8f0;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
  border: 1px solid #6366f1;
  white-space: nowrap;
}

/* Efectos */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Responsive */
@media (max-width: 992px) {
  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hacker-portrait {
    margin: 0 auto;
    max-width: 300px;
  }
  
  .message-line {
    white-space: normal;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 2rem 0;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .hacker-message {
    padding: 1.5rem;
    font-size: 1rem;
  }
  
  .space-portrait {
    max-width: 280px;
  }
}

@media (max-width: 480px) {
  .about-container {
    padding: 0 1rem;
  }
  
  .hacker-message {
    padding: 1rem;
    font-size: 0.9rem;
  }
  
  .tech-item {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
  }
}
</style>