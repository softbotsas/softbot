<template>
  <footer class="hacker-footer">
    <div class="footer-container">
      <div class="footer-terminal">
        <div class="terminal-line">// Softbot Digital Solutions</div>
        <div class="terminal-line">// Copyright © {{ currentYear }} All rights reserved</div>
        <div class="terminal-line">// Version 1.0.0</div>
        <div class="terminal-line">// Last update: {{ lastUpdate }}</div>
        <div class="terminal-line blink">//_</div>
      </div>
      
      <div class="footer-social">
        <a href="#" class="social-link" aria-label="GitHub">
          <i class="icon-github"></i>
        </a>
        <a href="#" class="social-link" aria-label="LinkedIn">
          <i class="icon-linkedin"></i>
        </a>
        <a href="#" class="social-link" aria-label="Twitter">
          <i class="icon-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      lastUpdate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
}
</script>

<style scoped>
/* Variables */
:root {
  --terminal-green: #4ade80;
  --text-secondary: #94a3b8;
  --bg-dark: #1e293b;
  --primary: #6366f1;
}

.hacker-footer {
  background-color: var(--bg-dark);
  border-top: 1px solid rgba(99, 102, 241, 0.2);
  padding: 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

.footer-terminal {
  font-family: 'Courier New', monospace;
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.8;
}

.terminal-line {
  display: block;
}

.blink {
  animation: blink 1s infinite;
}

.footer-social {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  color: var(--text-secondary);
  font-size: 1.25rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--terminal-green);
  }
}

/* Iconos */
.icon-github::before { content: '⎘'; }
.icon-linkedin::before { content: '⎗'; }
.icon-twitter::before { content: '⚯'; }

/* Animaciones */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

/* Responsive */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
  
  .footer-social {
    justify-content: center;
    margin-top: 1rem;
  }
  
  .footer-terminal {
    text-align: center;
  }
}
</style>