<template>
  <nav class="hacker-nav">
    <div class="nav-container">
      <!-- Logo y marca -->
      <div class="nav-brand">
        <img src="/images/logo-softbot.png" alt="Softbot Logo" class="nav-logo">
        <span class="logo-text">SOFTBOT</span>
        <span class="terminal-cursor">_</span>
      </div>
      
      <!-- Menú hamburguesa para mobile -->
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span class="menu-icon" :class="{ 'open': isMenuOpen }"></span>
      </button>
      
      <!-- Links de navegación -->
      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <router-link to="/" class="nav-link" exact @click="closeMenu">
          <span class="link-number">01.</span> Home
        </router-link>
        <router-link to="/services" class="nav-link" @click="closeMenu">
          <span class="link-number">02.</span> Services
        </router-link>
        <router-link to="/projects" class="nav-link" @click="closeMenu">
          <span class="link-number">03.</span> Projects
        </router-link>
        <router-link to="/about" class="nav-link" @click="closeMenu">
          <span class="link-number">04.</span> About
        </router-link>
        <router-link to="/contact" class="nav-link" @click="closeMenu">
          <span class="link-number">05.</span> Contact
        </router-link>
      </div>
      
      <!-- Terminal solo en desktop -->
      <div class="nav-terminal">
        <span class="terminal-line">user@softbot:~$ _</span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
/* Variables */
:root {
  --primary: #6366f1;
  --terminal-green: #4ade80;
  --text: #e2e8f0;
  --text-secondary: #94a3b8;
  --bg-darker: #0f172a;
}

.hacker-nav {
  background-color: rgba(15, 23, 42, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(99, 102, 241, 0.2);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--terminal-green);
  z-index: 101;
}

.nav-logo {
  height: 40px;
  width: auto;
}

.terminal-cursor {
  animation: blink 1s infinite;
  color: var(--terminal-green);
}

/* Menú hamburguesa */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;
}

.menu-icon {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--terminal-green);
  position: relative;
  transition: all 0.3s ease;
}

.menu-icon::before,
.menu-icon::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--terminal-green);
  transition: all 0.3s ease;
}

.menu-icon::before {
  top: -8px;
}

.menu-icon::after {
  bottom: -8px;
}

.menu-icon.open {
  background-color: transparent;
}

.menu-icon.open::before {
  top: 0;
  transform: rotate(45deg);
}

.menu-icon.open::after {
  bottom: 0;
  transform: rotate(-45deg);
}

/* Links de navegación */
.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.95rem;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover, &.router-link-active {
    color: var(--terminal-green);
    
    &::after {
      width: 100%;
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--terminal-green);
    transition: width 0.3s ease;
  }
}

.link-number {
  color: var(--primary);
  font-weight: 700;
  margin-right: 0.25rem;
}

.nav-terminal {
  color: var(--terminal-green);
  font-size: 0.9rem;
  opacity: 0.8;
}

/* Responsive */
@media (max-width: 992px) {
  .nav-terminal {
    display: none;
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }
  
  .nav-links {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--bg-darker);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
    z-index: 100;
  }
  
  .nav-links.active {
    transform: translateY(0);
  }
  
  .nav-link {
    font-size: 1.2rem;
    padding: 0.5rem;
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>