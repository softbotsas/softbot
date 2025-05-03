<template>
  <div class="home-view">
    <!-- Hero Section with Particle Background -->
    <section class="hero-section">
      <div class="particles-background"></div>
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title glitch" data-text="SOFTBOT">SOFTBOT</h1>
          <p class="hero-subtitle">Code the future. Build the impossible.</p>
          <div class="hero-buttons">
            <button class="btn-primary">Explore Solutions</button>
            <button class="btn-outline">Contact Us</button>
          </div>
        </div>
        <div class="hero-image">
          <div class="code-terminal">
            <div class="terminal-header">
              <div class="terminal-buttons">
                <span class="terminal-btn red"></span>
                <span class="terminal-btn yellow"></span>
                <span class="terminal-btn green"></span>
              </div>
              <span class="terminal-title">softbot@terminal:~</span>
            </div>
            <div class="terminal-body">
              <div class="code-line"><span class="prompt">$</span> npm init softbot-app</div>
              <div class="code-line"><span class="prompt">$</span> creating next-gen software...</div>
              <div class="code-line"><span class="prompt">$</span> compiling AI modules...</div>
              <div class="code-line"><span class="prompt">$</span> deploying cloud solutions...</div>
              <div class="code-line"><span class="prompt">$</span> <span class="cursor">|</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="services-section">
      <div class="section-header">
        <h2 class="section-title">Our <span class="highlight">Digital Arsenal</span></h2>
        <p class="section-subtitle">Cutting-edge solutions for the modern world</p>
      </div>
      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.title">
          <div class="service-icon" :style="{ backgroundColor: service.color }">
            <svg class="service-svg" viewBox="0 0 24 24">
              <path :d="service.iconPath" fill="white"/>
            </svg>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <div class="service-tech">
            <span v-for="tech in service.tech" :key="tech" class="tech-tag">{{ tech }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section with Animated Grid -->
    <section class="about-section">
      <div class="grid-animation">
        <div class="grid-lines">
          <div class="line horizontal" v-for="i in 12" :key="'h'+i" :style="{'--i': i}"></div>
          <div class="line vertical" v-for="i in 20" :key="'v'+i" :style="{'--i': i}"></div>
        </div>
        <div class="grid-dots">
          <div class="dot" v-for="i in 60" :key="'d'+i" 
               :style="{
                 '--top': Math.random() * 100,
                 '--left': Math.random() * 100,
                 '--delay': Math.floor(Math.random() * 10)
               }"></div>
        </div>
      </div>
      <div class="about-content">
        <div class="about-text">
          <h2 class="section-title">We <span class="highlight">Transform</span> Ideas Into Digital Reality</h2>
          <p class="about-description">
            At Softbot, we blend cutting-edge technology with elegant design to create software solutions that push boundaries. 
            Our team of elite developers and designers work tirelessly to craft digital experiences that matter.
          </p>
          <div class="stats">
            <div class="stat">
              <div class="stat-number" ref="projectsCounter">0</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
            <div class="stat">
              <div class="stat-number" ref="clientsCounter">0</div>
              <div class="stat-label">Satisfied Clients</div>
            </div>
            <div class="stat">
              <div class="stat-number" ref="codeCounter">0</div>
              <div class="stat-label">Lines of Code</div>
            </div>
          </div>
        </div>
        <div class="about-image">
          <div class="hexagon-container">
            <div class="hexagon" v-for="n in 7" :key="'hex'+n">
              <div class="hexagon-tech">
                <span>{{ ['AI', 'ML', 'IoT', 'Cloud', 'Blockchain', 'VR'][n-1] || 'TEAM' }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="tech-section">
      <div class="section-header">
        <h2 class="section-title">Our <span class="highlight">Tech Stack</span></h2>
        <p class="section-subtitle">Tools we master to build your vision</p>
      </div>
      <div class="tech-scroller">
        <div class="tech-track">
          <div class="tech-item" v-for="tech in techStack" :key="tech.name">
            <div class="tech-logo" :style="{ backgroundColor: tech.color }">
              {{ tech.name.substring(0, 2) }}
            </div>
            <span>{{ tech.name }}</span>
          </div>
          <!-- Duplicate for infinite loop -->
          <div class="tech-item" v-for="tech in techStack" :key="tech.name+'-copy'">
            <div class="tech-logo" :style="{ backgroundColor: tech.color }">
              {{ tech.name.substring(0, 2) }}
            </div>
            <span>{{ tech.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section with Cyberpunk Style -->
    <section class="contact-section">
      <div class="contact-grid">
        <div class="contact-card">
          <h3 class="contact-title">Ready to <span class="highlight">Elevate</span> Your Digital Presence?</h3>
          <form class="contact-form">
            <div class="form-group">
              <input type="text" placeholder="Your Name" class="form-input">
              <div class="input-underline"></div>
            </div>
            <div class="form-group">
              <input type="email" placeholder="Your Email" class="form-input">
              <div class="input-underline"></div>
            </div>
            <div class="form-group">
              <textarea placeholder="Tell us about your project" class="form-textarea"></textarea>
              <div class="input-underline"></div>
            </div>
            <button type="submit" class="btn-submit">
              Send Message
              <span class="btn-arrow">→</span>
            </button>
          </form>
        </div>
        <div class="contact-visual">
          <div class="cyber-card">
            <div class="cyber-card-inner">
              <div class="cyber-card-face front">
                <div class="cyber-card-header">
                  <div class="chip"></div>
                  <div class="wifi"></div>
                </div>
                <div class="cyber-card-number">
                  <span>••••</span>
                  <span>••••</span>
                  <span>••••</span>
                  <span>••••</span>
                </div>
                <div class="cyber-card-footer">
                  <div class="cyber-card-name">SOFTBOT INC</div>
                  <div class="cyber-card-expiry">∞/∞</div>
                </div>
              </div>
              <div class="cyber-card-face back">
                <div class="cyber-card-magnetic"></div>
                <div class="cyber-card-cvv">
                  <div class="cvv-strip"></div>
                  <div class="cvv-number">•••</div>
                </div>
                <div class="cyber-card-logo"></div>
              </div>
            </div>
          </div>
          <div class="contact-info">
            <div class="info-item">
              <svg class="info-icon" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>contact@softbot.dev</span>
            </div>
            <div class="info-item">
              <svg class="info-icon" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>+1 (555) TECH-BOT</span>
            </div>
            <div class="info-item">
              <svg class="info-icon" viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Silicon Valley, CA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'HomeView',
  setup() {
    const projectsCounter = ref(null)
    const clientsCounter = ref(null)
    const codeCounter = ref(null)

    const services = ref([
      {
        title: 'Custom Software',
        description: 'Tailored solutions designed specifically for your business needs and workflows.',
        tech: ['Node.js', 'Python', 'Java', '.NET'],
        iconPath: 'M13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43A9.949 9.949 0 0 0 13 2.05m0 17.88v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62M2.05 11h2.02c.18 1.46.76 2.79 1.62 3.9l-1.43 1.43A9.981 9.981 0 0 1 2.05 11m17.88 2c.86 1.11 1.44 2.44 1.62 3.89h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.43M7.05 12c0-2.73 1.08-5.27 2.85-7.12l-1.42-1.43A11.94 11.94 0 0 0 5.05 12c0 3.21 1.29 6.12 3.38 8.23l1.42-1.42A9.93 9.93 0 0 1 7.05 12m10 0c0 2.73-1.08 5.26-2.85 7.12l1.42 1.42A11.94 11.94 0 0 0 19 12c0-3.21-1.29-6.12-3.38-8.23l-1.42 1.42A9.93 9.93 0 0 1 17 12m-5 7a5 5 0 0 0 5-5 5 5 0 0 0-5-5 5 5 0 0 0-5 5 5 5 0 0 0 5 5z',
        color: '#6366f1'
      },
      {
        title: 'AI & ML',
        description: 'Intelligent systems that learn and adapt to give you a competitive edge.',
        tech: ['TensorFlow', 'PyTorch', 'OpenAI', 'NLP'],
        iconPath: 'M19 14.94V11a7 7 0 0 0-5.33-6.79A5 5 0 0 0 7 6h2.5L5.5 9.5 2 6h4a7 7 0 0 1 14 .06zM12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2.5-2.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM22 6h-4l2.5 3.5L22 6z',
        color: '#ec4899'
      },
      {
        title: 'Cloud Solutions',
        description: 'Scalable, secure cloud infrastructure optimized for performance and cost.',
        tech: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
        iconPath: 'M3 15a4 4 0 0 0 4 4h9a5 5 0 1 0-.1-9.99 5.002 5.002 0 1 0-9.78 2.1A4 4 0 0 0 3 15z',
        color: '#14b8a6'
      },
      {
        title: 'Cybersecurity',
        description: 'Protect your digital assets with our cutting-edge security solutions.',
        tech: ['Pen Testing', 'Zero Trust', 'Encryption', 'SOC'],
        iconPath: 'M12 3a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1zm0 16a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zm8-8a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1zM4 12a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zm13.657-5.657a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414zm-11.314 11.314a1 1 0 0 1 1.414 0l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 0-1.414zm11.314 0a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM5.636 7.05a1 1 0 0 1 0 1.414l-.707.707a1 1 0 1 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 0zM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z',
        color: '#f97316'
      },
      {
        title: 'Mobile Apps',
        description: 'Beautiful, high-performance applications for iOS and Android platforms.',
        tech: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
        iconPath: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2z',
        color: '#8b5cf6'
      },
      {
        title: 'Web Development',
        description: 'Modern, responsive web applications with stunning UX/UI design.',
        tech: ['Vue.js', 'React', 'TypeScript', 'GraphQL'],
        iconPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z',
        color: '#0ea5e9'
      }
    ])

    const techStack = ref([
      { name: 'Vue.js', color: '#42b883' },
      { name: 'React', color: '#61dafb' },
      { name: 'Node.js', color: '#68a063' },
      { name: 'Python', color: '#3776ab' },
      { name: 'Docker', color: '#2496ed' },
      { name: 'AWS', color: '#ff9900' },
      { name: 'TensorFlow', color: '#ff6f00' },
      { name: 'Flutter', color: '#02569b' },
      { name: 'GraphQL', color: '#e10098' },
      { name: 'Kubernetes', color: '#326ce5' }
    ])

    const animateCounters = () => {
      const animate = (el, target, duration = 2000) => {
        const start = 0
        const increment = target / (duration / 16)
        let current = start
        
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            clearInterval(timer)
            current = target
          }
          el.textContent = Math.floor(current).toLocaleString()
        }, 16)
      }

      if (projectsCounter.value) animate(projectsCounter.value, 247)
      if (clientsCounter.value) animate(clientsCounter.value, 189)
      if (codeCounter.value) animate(codeCounter.value, 9825000)
    }

    onMounted(() => {
      animateCounters()
    })

    return {
      services,
      techStack,
      projectsCounter,
      clientsCounter,
      codeCounter
    }
  }
}
</script>

<style lang="scss">
$primary: #6366f1;
$bg-dark: #1e293b;
$bg-darker: #0f172a;
$bg-primary: #0f172a;
$text-light: #e2e8f0;
$text-secondary: #94a3b8;

// Variables de espaciado
$spacing-xs: 0.25rem;  // 4px
$spacing-sm: 0.5rem;   // 8px
$spacing-md: 1rem;     // 16px
$spacing-lg: 1.5rem;   // 24px
$spacing-xl: 2rem;     // 32px
$spacing-xxl: 3rem;    // 48px

$border-radius-sm: 0.25rem;
$border-radius-md: 0.5rem;
$border-radius-lg: 1rem;
$container-width: 1200px;
$breakpoint-lg: 992px;
$breakpoint-md: 768px;
$breakpoint-sm: 576px;

// Mixins
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-view {
  overflow-x: hidden;
  color: #e2e8f0;
  background-color: #0f172a;
}

// Variables
$primary: #6366f1;
$bg-dark: #1e293b;
$bg-darker: #0f172a;
$bg-primary: #0f172a;
$text-light: #e2e8f0;
$text-secondary: #94a3b8;
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
$spacing-xl: 2rem;
$spacing-xxl: 3rem;
$border-radius-sm: 0.25rem;
$border-radius-md: 0.5rem;
$border-radius-lg: 1rem;
$container-width: 1200px;
$breakpoint-lg: 992px;
$breakpoint-md: 768px;
$breakpoint-sm: 576px;

// Mixins
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

// Hero Section
.hero-section {
  position: relative;
  height: 100vh;
  min-height: 800px;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, $bg-dark 0%, $bg-darker 100%);
  overflow: hidden;

  .particles-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(circle at 25% 25%, rgba($primary, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba($primary, 0.1) 0%, transparent 50%);
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: $container-width;
    margin: 0 auto;
    padding: 0 $spacing-lg;
    gap: $spacing-xxl;

    @media (max-width: $breakpoint-lg) {
      flex-direction: column;
      text-align: center;
      padding-top: $spacing-xxl;
      gap: $spacing-xl;
    }
  }

  .hero-text {
    flex: 1;
    max-width: 600px;

    @media (max-width: $breakpoint-lg) {
      max-width: 100%;
    }
  }

  .hero-title {
    font-size: 5rem;
    font-weight: 800;
    margin-bottom: $spacing-md;
    color: $text-light;
    position: relative;
    line-height: 1.1;

    &.glitch {
      animation: glitch-effect 3s infinite alternate;
    }

    @media (max-width: $breakpoint-md) {
      font-size: 3.5rem;
    }
  }

  .hero-subtitle {
    font-size: 1.5rem;
    color: $text-secondary;
    margin-bottom: $spacing-xl;
    font-weight: 400;
    line-height: 1.6;

    @media (max-width: $breakpoint-md) {
      font-size: 1.25rem;
    }
  }

  .hero-buttons {
    display: flex;
    gap: $spacing-md;

    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
    }
  }

  .btn-primary {
    background: $primary;
    color: white;
    border: none;
    padding: $spacing-md $spacing-xl;
    border-radius: $border-radius-md;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: darken($primary, 10%);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba($primary, 0.3);
    }
  }

  .btn-outline {
    background: transparent;
    color: $text-light;
    border: 1px solid $primary;
    padding: $spacing-md $spacing-xl;
    border-radius: $border-radius-md;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba($primary, 0.1);
      transform: translateY(-2px);
    }
  }

  .hero-image {
    flex: 1;
    max-width: 600px;
    position: relative;

    @media (max-width: $breakpoint-lg) {
      width: 100%;
      max-width: 100%;
    }
  }

  .code-terminal {
    background: $bg-darker;
    border-radius: $border-radius-lg;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    border: 1px solid rgba($primary, 0.2);
    font-family: 'Courier New', monospace;
  }

  .terminal-header {
    background: $bg-dark;
    padding: $spacing-sm $spacing-md;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba($primary, 0.1);
  }

  .terminal-buttons {
    display: flex;
    gap: $spacing-xs;
    margin-right: $spacing-md;
  }

  .terminal-btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;

    &.red { background: #ff5f56; }
    &.yellow { background: #ffbd2e; }
    &.green { background: #27c93f; }
  }

  .terminal-title {
    color: $text-secondary;
    font-size: 0.875rem;
  }

  .terminal-body {
    padding: $spacing-lg;
    color: $text-light;
  }

  .code-line {
    margin-bottom: $spacing-sm;
    font-size: 1rem;
    line-height: 1.6;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .prompt {
    color: $primary;
    margin-right: $spacing-sm;
  }

  .cursor {
    animation: blink 1s infinite;
    color: $text-light;
  }
}

// Services Section
.services-section {
  padding: $spacing-xxl 0;
  background: $bg-primary;
  position: relative;
  z-index: 2;

  .section-header {
    text-align: center;
    margin-bottom: $spacing-xxl;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 $spacing-lg;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: $spacing-md;
    color: $text-light;

    @media (max-width: $breakpoint-md) {
      font-size: 2rem;
    }
  }

  .section-subtitle {
    font-size: 1.25rem;
    color: $text-secondary;
    font-weight: 400;

    @media (max-width: $breakpoint-md) {
      font-size: 1rem;
    }
  }

  .highlight {
    color: $primary;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 5px;
      left: 0;
      width: 100%;
      height: 10px;
      background: rgba($primary, 0.2);
      z-index: -1;
      border-radius: 3px;
    }
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: $spacing-lg;
    max-width: $container-width;
    margin: 0 auto;
    padding: 0 $spacing-lg;

    @media (max-width: $breakpoint-sm) {
      grid-template-columns: 1fr;
    }
  }

  .service-card {
    background: $bg-dark;
    border-radius: $border-radius-lg;
    padding: $spacing-xl;
    transition: all 0.3s ease;
    border: 1px solid rgba($primary, 0.1);
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
      border-color: rgba($primary, 0.3);

      &::before {
        opacity: 1;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba($primary, 0.05) 0%, transparent 100%);
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  .service-icon {
    width: 60px;
    height: 60px;
    border-radius: $border-radius-md;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: $spacing-lg;
    color: white;
  }

  .service-svg {
    width: 30px;
    height: 30px;
  }

  .service-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: $spacing-md;
    color: $text-light;
  }

  .service-description {
    color: $text-secondary;
    margin-bottom: $spacing-lg;
    line-height: 1.6;
  }

  .service-tech {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-xs;
  }

  .tech-tag {
    background: rgba($primary, 0.1);
    color: $primary;
    padding: $spacing-xs $spacing-sm;
    border-radius: $border-radius-sm;
    font-size: 0.75rem;
    font-weight: 500;
    font-family: 'Courier New', monospace;
  }
}

// About Section
.about-section {
  padding: $spacing-xxl 0;
  background: $bg-darker;
  position: relative;
  overflow: hidden;

  .grid-animation {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    z-index: 1;
  }

  .grid-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .line {
    position: absolute;
    background: linear-gradient(to right, rgba($primary, 0.2), transparent);

    &.horizontal {
      width: 100%;
      height: 1px;
      top: calc(var(--i) * 8.33%);
      animation: grid-line-h 10s linear infinite;
      animation-delay: calc(var(--i) * -1s);
    }

    &.vertical {
      height: 100%;
      width: 1px;
      left: calc(var(--i) * 5%);
      animation: grid-line-v 15s linear infinite;
      animation-delay: calc(var(--i) * -1.5s);
    }
  }

  .grid-dots {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .dot {
    position: absolute;
    width: 4px;
    height: 4px;
    background: $primary;
    border-radius: 50%;
    top: calc(var(--top) * 1%);
    left: calc(var(--left) * 1%);
    animation: dot-pulse 2s infinite ease-in-out;
    animation-delay: calc(var(--delay) * 0.2s);
  }

  .about-content {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    gap: $spacing-xxl;
    max-width: $container-width;
    margin: 0 auto;
    padding: 0 $spacing-lg;

    @media (max-width: $breakpoint-lg) {
      flex-direction: column;
      gap: $spacing-xl;
    }
  }

  .about-text {
    flex: 1;
    max-width: 600px;

    @media (max-width: $breakpoint-lg) {
      max-width: 100%;
      text-align: center;
    }
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: $spacing-xl;
    color: $text-light;

    @media (max-width: $breakpoint-md) {
      font-size: 2rem;
    }
  }

  .about-description {
    font-size: 1.125rem;
    color: $text-secondary;
    margin-bottom: $spacing-xxl;
    line-height: 1.7;

    @media (max-width: $breakpoint-md) {
      font-size: 1rem;
    }
  }

  .stats {
    display: flex;
    gap: $spacing-xl;

    @media (max-width: $breakpoint-sm) {
      flex-direction: column;
      gap: $spacing-lg;
    }
  }

  .stat {
    flex: 1;
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    color: $primary;
    margin-bottom: $spacing-xs;
    font-family: 'Courier New', monospace;

    @media (max-width: $breakpoint-md) {
      font-size: 2.5rem;
    }
  }

  .stat-label {
    font-size: 1rem;
    color: $text-secondary;
    font-weight: 500;
  }

  .about-image {
    flex: 1;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .hexagon-container {
    position: relative;
    width: 400px;
    height: 400px;

    @media (max-width: $breakpoint-md) {
      width: 300px;
      height: 300px;
    }
  }

  .hexagon {
    --size: 120px;
    width: var(--size);
    height: calc(var(--size) * 1.1547);
    background: $bg-dark;
    position: absolute;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border: 1px solid rgba($primary, 0.2);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    &:hover {
      transform: scale(1.1);
      z-index: 3;
      border-color: $primary;
    }

    &:nth-child(1) {
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &:nth-child(2) {
      top: calc(var(--size) * 0.2887);
      right: calc(var(--size) * 0.25);
    }
    &:nth-child(3) {
      bottom: calc(var(--size) * 0.2887);
      right: calc(var(--size) * 0.25);
    }
    &:nth-child(4) {
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
    &:nth-child(5) {
      bottom: calc(var(--size) * 0.2887);
      left: calc(var(--size) * 0.25);
    }
    &:nth-child(6) {
      top: calc(var(--size) * 0.2887);
      left: calc(var(--size) * 0.25);
    }
    &:nth-child(7) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      --size: 140px;
      z-index: 2;
    }
  }

  .hexagon-tech {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba($primary, 0.05);
    color: $primary;
    font-weight: 700;
    font-size: 1.5rem;
    font-family: 'Courier New', monospace;
  }
}

// Tech Stack Section
.tech-section {
  padding: $spacing-xxl 0;
  background: $bg-primary;
  overflow: hidden;

  .section-header {
    text-align: center;
    margin-bottom: $spacing-xxl;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 $spacing-lg;
  }

  .tech-scroller {
    width: 100%;
    overflow: hidden;
    position: relative;
    padding: $spacing-lg 0;

    &::before, &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 100px;
      height: 100%;
      z-index: 2;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, $bg-primary, transparent);
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, $bg-primary, transparent);
    }
  }

  .tech-track {
    display: flex;
    gap: $spacing-xl;
    width: max-content;
    animation: scroll 30s linear infinite;
  }

  .tech-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-sm;
    min-width: 120px;
  }

  .tech-logo {
    width: 60px;
    height: 60px;
    border-radius: $border-radius-md;
    @include flex-center;
    color: white;
    font-weight: 700;
    font-size: 1.25rem;
    font-family: 'Courier New', monospace;
    filter: grayscale(20%) brightness(1.1);
    transition: all 0.3s ease;
  }

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: $text-secondary;
    transition: all 0.3s ease;
  }

  .tech-item:hover {
    .tech-logo {
      filter: grayscale(0%) brightness(1.2);
      transform: scale(1.1);
    }

    span {
      color: $text-light;
    }
  }
}

// Contact Section
.contact-section {
  padding: $spacing-xxl 0;
  background: $bg-dark;
  position: relative;

  .contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: $spacing-xxl;
    max-width: $container-width;
    margin: 0 auto;
    padding: 0 $spacing-lg;
    position: relative;
    z-index: 2;

    @media (max-width: $breakpoint-lg) {
      grid-template-columns: 1fr;
    }
  }

  .contact-card {
    background: $bg-darker;
    border-radius: $border-radius-lg;
    padding: $spacing-xxl;
    border: 1px solid rgba($primary, 0.2);

    @media (max-width: $breakpoint-md) {
      padding: $spacing-xl;
    }
  }

  .contact-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: $spacing-xl;
    color: $text-light;

    @media (max-width: $breakpoint-md) {
      font-size: 1.75rem;
    }
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: $spacing-xl;
  }

  .form-group {
    position: relative;
  }

  .form-input, .form-textarea {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba($primary, 0.2);
    padding: $spacing-sm 0;
    color: $text-light;
    font-size: 1rem;
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-bottom-color: $primary;
    }
  }

  .form-textarea {
    resize: none;
    min-height: 100px;
  }

  .input-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: $primary;
    transition: width 0.3s ease;
  }

  .form-input:focus ~ .input-underline,
  .form-textarea:focus ~ .input-underline {
    width: 100%;
  }

  .btn-submit {
    background: $primary;
    color: white;
    border: none;
    padding: $spacing-md $spacing-xl;
    border-radius: $border-radius-sm;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: $spacing-sm;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
      background: darken($primary, 5%);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba($primary, 0.3);

      .btn-arrow {
        transform: translateX(5px);
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: all 0.5s ease;
    }

    &:hover::before {
      left: 100%;
    }
  }

  .btn-arrow {
    transition: transform 0.3s ease;
  }

  .contact-visual {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: $spacing-xl;
  }

  .cyber-card {
    width: 100%;
    max-width: 400px;
    height: 250px;
    perspective: 1000px;

    @media (max-width: $breakpoint-lg) {
      margin: 0 auto;
    }
  }

  .cyber-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .cyber-card:hover .cyber-card-inner {
    transform: rotateY(180deg);
  }

  .cyber-card-face {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  }

  .front {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    padding: $spacing-xl;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cyber-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chip {
    width: 40px;
    height: 30px;
    background: linear-gradient(135deg, #ffd700, #c0c0c0);
    border-radius: 5px;
  }

  .wifi {
    width: 24px;
    height: 24px;
    background: radial-gradient(circle, transparent 50%, #4f46e5 50%);
    border-radius: 50%;
    position: relative;

    &::before, &::after {
      content: '';
      position: absolute;
      border: 2px solid #4f46e5;
      border-radius: 50%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &::before {
      width: 16px;
      height: 16px;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }

    &::after {
      width: 8px;
      height: 8px;
      border-top-color: transparent;
      border-right-color: transparent;
      border-bottom-color: transparent;
    }
  }

  .cyber-card-number {
    display: flex;
    justify-content: space-between;
    font-family: 'Courier New', monospace;
    font-size: 1.25rem;
    letter-spacing: 2px;
    color: white;
    margin: $spacing-xl 0;
  }

  .cyber-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cyber-card-name {
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    letter-spacing: 1px;
    color: white;
    text-transform: uppercase;
  }

  .cyber-card-expiry {
    font-family: 'Courier New', monospace;
    font-size: 0.875rem;
    color: white;
  }

  .back {
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
    transform: rotateY(180deg);
    padding: $spacing-md;
  }

  .cyber-card-magnetic {
    height: 40px;
    background: #000;
    margin-top: $spacing-lg;
    border-radius: 3px;
  }

  .cyber-card-cvv {
    margin-top: $spacing-md;
    display: flex;
    justify-content: flex-end;
  }

  .cvv-strip {
    width: 60%;
    height: 30px;
    background: white;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: $spacing-md;
  }

  .cvv-number {
    font-family: 'Courier New', monospace;
    color: #000;
    font-weight: 600;
  }

  .cyber-card-logo {
    position: absolute;
    bottom: $spacing-md;
    right: $spacing-md;
    width: 60px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    width: 100%;
    max-width: 400px;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    color: $text-light;
    font-size: 1.125rem;
    padding: $spacing-md;
    background: rgba($primary, 0.05);
    border-radius: $border-radius-sm;
    border: 1px solid rgba($primary, 0.2);
    transition: all 0.3s ease;

    &:hover {
      background: rgba($primary, 0.1);
      border-color: rgba($primary, 0.4);
      transform: translateX(5px);
    }
  }

  .info-icon {
    width: 24px;
    height: 24px;
    color: $primary;
  }
}

// Animations
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@keyframes glitch-effect {
  0% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  14% {
    text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
                -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
  }
  15% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  49% {
    text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
                0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
                -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  50% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 255, 0, 0.75),
                0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  99% {
    text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
                0.05em 0 0 rgba(0, 255, 0, 0.75),
                0 -0.05em 0 rgba(0, 0, 255, 0.75);
  }
  100% {
    text-shadow: -0.025em 0 0 rgba(255, 0, 0, 0.75),
                -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
                -0.025em -0.05em 0 rgba(0, 0, 255, 0.75);
  }
}

@keyframes grid-line-h {
  0% { background: linear-gradient(to right, rgba($primary, 0), transparent); }
  50% { background: linear-gradient(to right, rgba($primary, 0.2), transparent); }
  100% { background: linear-gradient(to right, rgba($primary, 0), transparent); }
}

@keyframes grid-line-v {
  0% { background: linear-gradient(to bottom, rgba($primary, 0), transparent); }
  50% { background: linear-gradient(to bottom, rgba($primary, 0.2), transparent); }
  100% { background: linear-gradient(to bottom, rgba($primary, 0), transparent); }
}

@keyframes dot-pulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.3); opacity: 1; }
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>