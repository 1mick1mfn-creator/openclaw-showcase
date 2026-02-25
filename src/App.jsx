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
            <a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a>
            <a href="#how-it-works" className="hover:text-white transition-colors">Comment ça marche</a>
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
            v1.0.0 Disponible
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500">
            Votre Assistant IA <br />
            <span className="text-red-500">Souverain</span>
          </motion.h1>
          
          <motion.p variants={fadeInUp} className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            OpenClaw fonctionne localement, respecte votre vie privée et se connecte à votre vie numérique.
            Automatisez vos tâches, gérez votre code et explorez le web—sans quitter votre terminal.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/openclaw/openclaw" className="px-8 py-4 bg-red-600 hover:bg-red-500 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-105">
              Commencer
              <ChevronRight className="w-4 h-4" />
            </a>
            <a href="#features" className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-white rounded-full font-bold transition-all">
              En savoir plus
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
                ✅ Agent: En ligne (Gemini Pro)<br/>
                ✅ Gateway: Connecté<br/>
                ✅ Skills: 12 Chargés<br/>
                <br/>
                Prêt pour vos commandes.
              </div>
              <div className="flex gap-2">
                <span className="text-green-400">➜</span>
                <span className="text-blue-400">~</span>
                <span className="text-zinc-400">crée une application react</span>
              </div>
              <div className="text-zinc-500 animate-pulse">
                Réflexion en cours...
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Capacités Puissantes</h2>
            <p className="text-zinc-400">Tout ce dont vous avez besoin pour automatiser votre workflow.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Terminal}
              title="Natif Terminal"
              description="Vit dans votre CLI. Exécute des commandes, gère les fichiers et interagit avec votre système en toute sécurité."
            />
            <FeatureCard 
              icon={Cpu}
              title="Agnostique LLM"
              description="Passez de Gemini à Claude, GPT-4, ou des modèles locaux via Ollama sans effort."
            />
            <FeatureCard 
              icon={Code}
              title="Agent de Codage"
              description="Lit, écrit et refactorise le code. Peut générer des projets entiers et débugger de manière autonome."
            />
            <FeatureCard 
              icon={Globe}
              title="Accès Web"
              description="Navigue sur le web pour récupérer de la documentation, faire des recherches et résumer du contenu en temps réel."
            />
            <FeatureCard 
              icon={Shield}
              title="Sécurisé & Privé"
              description="Environnement d'exécution isolé (sandbox). Vous contrôlez les permissions. Vos données ne quittent pas votre machine."
            />
            <FeatureCard 
              icon={MessageSquare}
              title="Multi-Canal"
              description="Discutez avec OpenClaw via Telegram, Discord ou WhatsApp lorsque vous êtes loin de votre terminal."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-900/20 to-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à améliorer votre workflow ?</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Rejoignez des milliers de développeurs qui utilisent OpenClaw pour automatiser les tâches répétitives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://github.com/openclaw/openclaw" className="px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-full font-bold transition-colors">
                Installer Maintenant
              </a>
              <a href="https://discord.gg/openclaw" className="px-8 py-4 bg-transparent border border-zinc-700 hover:bg-zinc-800 text-white rounded-full font-bold transition-colors">
                Rejoindre la Communauté
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
            <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white transition-colors">Conditions</a>
            <a href="https://github.com/openclaw/openclaw" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>
          <div>
            © 2026 Projet OpenClaw. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
