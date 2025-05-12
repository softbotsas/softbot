<template>
  <div class="home-view">
    <!-- Hero Section with Particle Background -->
    <section class="hero-section">
      <div class="particles-background"></div>
      <div class="hero-content">
        <div class="hero-text">
          <div class="logo-title">
            <img src="/images/logo-softbot.png" alt="Softbot Logo" class="logo-img">
            <h1 class="hero-title modern-solid">SOFTBOT</h1>
          </div>
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
  </div>
</template>

<script>
export default {
  name: 'HomeView'
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

  .logo-title {
    display: flex;
    align-items: center;
    gap: $spacing-md;
    margin-bottom: $spacing-md;
  }

  .logo-img {
    height: 80px;
    width: auto;

    @media (max-width: $breakpoint-md) {
      height: 60px;
    }
  }

  .hero-title {
    font-size: 5rem;
    font-weight: 800;
    color: $text-light;
    position: relative;
    line-height: 1.1;
    margin: 0;

    &.glitch {
      animation: glitch-effect 3s infinite alternate;
    }

    @media (max-width: $breakpoint-md) {
      font-size: 3.5rem;
    }
  }
  .modern-solid {
  font-size: 5rem;
  font-weight: 800;
  color: #6366f1;
  margin: 0;
  line-height: 1.1;
  position: relative;
  display: inline-block;
}

.modern-solid::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
  height: 4px;
  background: #ec4899;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.modern-solid:hover::after {
  transform: scaleX(1);
  transform-origin: left;
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
</style>