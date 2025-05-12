<template>
  <div class="projects-view">
    <section class="projects-section">
      <div class="particles-background"></div>
      <div class="projects-container">
        <div class="section-header">
          <h2 class="section-title"><span class="section-number">03.</span> Our Projects</h2>
          <p class="section-subtitle">Code that makes a difference</p>
        </div>

        <div class="projects-grid">
          <div class="project-card" v-for="(project, index) in projects" :key="index">
            <div class="project-terminal">
              <div class="terminal-header">
                <div class="terminal-buttons">
                  <span class="terminal-btn red"></span>
                  <span class="terminal-btn yellow"></span>
                  <span class="terminal-btn green"></span>
                </div>
                <span class="terminal-title">project-{{ index + 1 }}@softbot:~</span>
              </div>
              <div class="project-content">
                <h3 class="project-title">{{ project.title }}</h3>
                <div class="terminal-body">
                  <div class="code-line"><span class="prompt">$</span> {{ project.tech }}</div>
                  <div class="code-line"><span class="prompt">$</span> {{ project.description }}</div>
                  <div class="code-line"><span class="prompt">$</span> <a :href="project.link" class="project-link" target="_blank">view project</a></div>
                  <div class="code-line"><span class="prompt">$</span> <span class="cursor">|</span></div>
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
  name: 'ProjectsView',
  data() {
    return {
      projects: [
        {
          title: 'Neural Network Dashboard',
          tech: 'React, TensorFlow.js, Node.js',
          description: 'Real-time neural network visualization tool',
          link: '#'
        },
        {
          title: 'Blockchain Explorer',
          tech: 'Vue.js, Ethers.js, Solidity',
          description: 'Explorer for Ethereum blockchain transactions',
          link: '#'
        },
        {
          title: 'AI Content Generator',
          tech: 'Python, GPT-3, FastAPI',
          description: 'AI-powered content creation platform',
          link: '#'
        },
        {
          title: 'Cloud Automation Suite',
          tech: 'AWS CDK, TypeScript, Lambda',
          description: 'Infrastructure as code automation',
          link: '#'
        },
        {
          title: 'Cybersecurity Dashboard',
          tech: 'React, GraphQL, Python',
          description: 'Real-time threat monitoring system',
          link: '#'
        },
        {
          title: 'AR Shopping Assistant',
          tech: 'Unity, ARCore, Firebase',
          description: 'Augmented reality retail experience',
          link: '#'
        }
      ]
    }
  }
}
</script>

<style>
.projects-view {
  background-color: #0f172a;
  min-height: 100vh;
  padding-top: 80px;
}

.projects-section {
  position: relative;
  padding: 3rem 0;
}

.projects-section .particles-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
  z-index: 1;
}

.projects-container {
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-header {
  margin-bottom: 3rem;
  text-align: center;
}

.section-title {
  font-size: 2.5rem;
  color: #e2e8f0;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.section-title .section-number {
  color: #6366f1;
  font-size: 1.5rem;
}

.section-subtitle {
  color: #94a3b8;
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  margin-top: 3rem;
}

.project-card {
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}

.project-terminal {
  background: #1e293b;
  border-radius: 1rem;
  overflow: hidden;
  height: 100%;
  border: 1px solid rgba(99, 102, 241, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.terminal-header {
  background: #1a2536;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.terminal-buttons {
  display: flex;
  gap: 0.25rem;
  margin-right: 1rem;
}

.terminal-btn {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.terminal-btn.red { background: #ff5f56; }
.terminal-btn.yellow { background: #ffbd2e; }
.terminal-btn.green { background: #27c93f; }

.terminal-title {
  color: #94a3b8;
  font-size: 0.75rem;
  font-family: 'Courier New', monospace;
}

.project-content {
  padding: 1.5rem;
}

.project-title {
  color: #e2e8f0;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.project-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 2px;
  background: #6366f1;
}

.terminal-body {
  color: #e2e8f0;
  font-family: 'Courier New', monospace;
}

.code-line {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  line-height: 1.6;
}

.code-line:last-child {
  margin-bottom: 0;
}

.prompt {
  color: #6366f1;
  margin-right: 0.5rem;
}

.project-link {
  color: #6366f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.project-link:hover {
  color: #8183f3;
  text-decoration: underline;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>