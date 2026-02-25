import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cpu, Shield, Globe, Github, ChevronRight, Code, MessageSquare, ExternalLink } from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

function FeatureCard({ icon: Icon, title, description }) {
  return (
    <motion.div 
      variants={fadeInUp}
      className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-red-500/50 transition-colors group"
    >
      <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-500/10 transition-colors">
        <Icon className="w-6 h-6 text-red-500" />
      </div>
      <h3 className="text-xl font-bold mb-2 text-zinc-100">{title}</h3>
      <p className="text-zinc-400 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-red-500/30">
      
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-2xl">🦞</span>
            <span>OpenClaw</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="https://github.com/openclaw/openclaw" className="hover:text-white transition-colors">Docs</a>
          </div>
          <a 
            href="https://github.com/openclaw/openclaw"
            className="flex items-center gap-2 bg-zinc-100 text-zinc-900 px-4 py-2 rounded-full text-sm font-bold hover:bg-white transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-background to-background pointer-events-none" />
        
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-400 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            v1.0.0 Now Available
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Your Sovereign <br />
            <span className="text-red-500">AI Assistant</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            OpenClaw runs locally, respects your privacy, and connects to your digital life. 
            Automate tasks, manage code, and explore the web—without leaving your terminal.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/openclaw/openclaw" className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105">
              Get Started
              <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#features" className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-full font-bold transition-all">
              Learn More
            </a>
          </motion.div>

          {/* Terminal Preview Mockup */}
          <motion.div 
            variants={fadeInUp}
            className="mt-20 rounded-xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-950 max-w-3xl mx-auto text-left"
          >
            <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <div className="text-xs text-zinc-500 font-mono ml-2">openclaw — zsh</div>
            </div>
            <div className="p-6 font-mono text-sm space-y-4">
              <div className="flex gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-zinc-400">openclaw status</span>
              </div>
              <div className="text-zinc-300">
                🦞 OpenClaw v1.0.0<br/>
                ------------------<br/>
                ✅ Agent: Online (Gemini Pro)<br/>
                ✅ Gateway: Connected<br/>
                ✅ Skills: 12 Loaded<br/>
                <br/>
                Ready for commands.
              </div>
              <div className="flex gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-zinc-400">create a new react app</span>
              </div>
              <div className="text-zinc-500 animate-pulse">
                Thinking...
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Capabilities</h2>
            <p className="text-zinc-400">Everything you need to automate your workflow.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Terminal}
              title="Terminal Native"
              description="Lives in your CLI. Executes commands, manages files, and interacts with your system securely."
            />
            <FeatureCard 
              icon={Cpu}
              title="LLM Agnostic"
              description="Switch between Gemini, Claude, GPT-4, or local models via Ollama effortlessly."
            />
            <FeatureCard 
              icon={Code}
              title="Coding Agent"
              description="Reads, writes, and refactors code. Can generate entire projects and debug errors autonomously."
            />
            <FeatureCard 
              icon={Globe}
              title="Web Access"
              description="Browses the web to fetch documentation, research topics, and summarize content in real-time."
            />
            <FeatureCard 
              icon={Shield}
              title="Secure & Private"
              description="Sandboxed execution environment. You control the permissions. Your data never leaves your machine unnecessarily."
            />
            <FeatureCard 
              icon={MessageSquare}
              title="Multi-Channel"
              description="Chat with OpenClaw via Telegram, Discord, or WhatsApp when you're away from your terminal."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-900/20 to-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to upgrade your workflow?</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Join thousands of developers using OpenClaw to automate the boring stuff and focus on building.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/openclaw/openclaw" className="px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-full font-bold transition-colors">
                Install Now
              </a>
              <a href="https://discord.gg/openclaw" className="px-8 py-4 bg-transparent border border-zinc-700 hover:bg-zinc-800 text-white rounded-full font-bold transition-colors">
                Join Community
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-800 bg-zinc-950 text-sm text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-bold text-zinc-300">
            <span>🦞</span>
            <span>OpenClaw</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="https://github.com/openclaw/openclaw" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          <div>
            © 2026 OpenClaw Project. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
