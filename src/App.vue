<template>
  <div id="app">
    <Navbar />
    
    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style lang="scss">
/* Variables */
:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --secondary: #ec4899;
  --accent: #14b8a6;
  --text: #e2e8f0;
  --text-secondary: #94a3b8;
  --bg-dark: #1e293b;
  --bg-darker: #0f172a;
  --terminal-green: #4ade80;
  --terminal-yellow: #facc15;
  --terminal-red: #f87171;
}

/* Reset y estilos base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
}

body {
  font-family: 'Courier New', monospace, sans-serif;
  background-color: var(--bg-darker);
  color: var(--text);
  line-height: 1.6;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
}

/* Contenido principal */
.main-content {
  flex: 1;
  width: 100%;
  padding: 2rem;
}

/* Transiciones de ruta */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .main-content {
    padding: 1rem;
  }
}
</style>