import React from 'react';
import WaveBackground from './components/WaveBackground';
import Typewriter from './components/Typewriter';
import ProfileImage from './components/ProfileImage';
import { Experience, Education, Project } from './types';

// Data Constants
const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: '云计算产品经理 (Cloud Product Manager)',
    company: 'Leading Tech Co.',
    period: '2023 - 至今',
    description: '负责地理信息(GIS)行业的云原生解决方案。主导开发了基于微服务的空间数据处理平台，将传统GIS算力迁移至云端，提升数据处理效率400%。',
    tags: ['Cloud Computing', 'SaaS', 'GIS', 'Microservices', 'Kubernetes']
  },
  {
    id: '2',
    role: '建筑工程管理系统产品经理 (BIM/ConTech PM)',
    company: 'Digital Construction Ltd.',
    period: '2020 - 2023',
    description: '负责大型建筑项目的数字化管理平台。设计并落地了基于BIM的施工进度追踪系统，实现了工地现场与数字孪生模型的实时联动。',
    tags: ['BIM', 'Digital Twin', 'Project Management', 'IoT', 'Mobile App']
  },
  {
    id: '3',
    role: '助理桥梁工程师 (Assistant Bridge Engineer)',
    company: 'Civil Design Institute',
    period: '2019 - 2020',
    description: '参与特大桥梁的结构设计与计算。这段经历让我深刻理解了传统工程行业的痛点，为后续转型数字化产品奠定了坚实的行业认知基础。',
    tags: ['Civil Engineering', 'AutoCAD', 'Structural Analysis']
  }
];

const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'AI Construction Safety Monitor',
    description: 'A computer vision system utilizing YOLOv8 to detect PPE compliance (helmets, vests) on construction sites in real-time. Integrated with a notification service to alert site managers of safety violations.',
    technologies: ['Python', 'PyTorch', 'YOLOv8', 'FastAPI', 'React'],
    demoLink: '#',
    repoLink: 'https://github.com/weixiaofan'
  },
  {
    id: 'p2',
    title: 'BIM-GPT Assistant',
    description: 'An intelligent chatbot interface for querying IFC model data. Uses LangChain and RAG to allow non-technical stakeholders to ask questions like "Show me all windows on level 2 with area > 2m²".',
    technologies: ['OpenAI API', 'LangChain', 'Neo4j', 'Three.js', 'TypeScript'],
    repoLink: 'https://github.com/weixiaofan'
  },
  {
    id: 'p3',
    title: 'Urban Flood Risk Visualizer',
    description: 'A WebGL-based visualization tool analyzing urban terrain and drainage capacity to simulate flood risks under different rainfall scenarios.',
    technologies: ['Mapbox GL', 'Deck.gl', 'PostGIS', 'Vue.js'],
    demoLink: '#'
  }
];

const EDUCATION: Education[] = [
  {
    degree: '硕士 (Master)',
    major: '桥梁与隧道工程 (Bridge Engineering)',
    school: '同济大学 (Tongji University)',
    details: '专注于大跨度桥梁结构健康监测研究'
  },
  {
    degree: '本科 (Bachelor)',
    major: '土木工程 (Civil Engineering)',
    school: '东南大学 (Southeast University)',
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative selection:bg-blue-100 selection:text-blue-900">
      <WaveBackground />

      <main className="relative z-10 container mx-auto px-6 py-12 md:px-12 lg:px-24 max-w-7xl">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-20 md:mb-32">
          <div className="text-xl font-bold tracking-tight text-slate-900 uppercase">
            Wei Xiaofan
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
            <a href="#about" className="hover:text-blue-600 transition-colors">关于</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">经历</a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">项目</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">联系</a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center min-h-[60vh] mb-24">
          <div className="order-2 md:order-1 space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-slate-900">
              User-centred design <br />
              <span className="text-slate-400">powered by AI.</span>
            </h1>
            
            <div className="text-xl md:text-2xl font-light leading-relaxed min-h-[120px]">
              <Typewriter 
                text="让云计算和AI技术在业务场景中落地，赋能建筑工程、地理信息等传统行业。" 
                typingSpeed={80}
                deletingSpeed={30}
                pauseDuration={3000}
              />
            </div>

            <div className="pt-4">
               <p className="text-slate-600 max-w-md leading-relaxed">
                 我是<strong className="text-slate-900">未小范</strong>，拥有4年+经验的产品经理。
                 我致力于连接<span className="text-blue-600 font-medium">传统工程智慧</span>与<span className="text-purple-600 font-medium">前沿数字技术</span>，
                 打造真正解决行业痛点的B端产品。
               </p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <ProfileImage />
          </div>
        </section>

        {/* About / Stats Section */}
        <section id="about" className="mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-200 py-12">
            {[
              { label: 'Years Experience', value: '4+' },
              { label: 'Domains', value: 'AEC & Cloud' },
              { label: 'Product Launched', value: '12+' },
              { label: 'Background', value: 'Civil Eng.' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-4">工作经历</h2>
              <p className="text-slate-500 text-lg">
                从桥梁结构设计到数字化产品管理，我的职业路径见证了产业数字化的浪潮。
              </p>
            </div>
            
            <div className="md:w-2/3 space-y-12">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-2">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <div className="text-base font-semibold text-slate-600 mb-3">{exp.company}</div>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-4">个人项目</h2>
              <p className="text-slate-500 text-lg">
                探索技术边界，将AI与行业场景结合的业余实践。
              </p>
            </div>
            
            <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
              {PROJECTS.map((project) => (
                <div key={project.id} className="group relative bg-white/40 backdrop-blur-sm border border-slate-100 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl -z-10" />
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 min-h-[80px]">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-2 py-1 bg-white border border-slate-100 text-slate-500 text-xs font-medium rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-100/50">
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                        Live Demo 
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                      </a>
                    )}
                    {project.repoLink && (
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">
                        GitHub
                        <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-32">
           <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <h2 className="text-3xl font-bold mb-4">教育背景</h2>
            </div>
            <div className="md:w-2/3 grid gap-8">
              {EDUCATION.map((edu, idx) => (
                 <div key={idx} className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-slate-800">{edu.school}</h3>
                      <span className="px-2 py-1 bg-slate-900 text-white text-xs font-bold rounded">{edu.degree}</span>
                    </div>
                    <div className="text-blue-600 font-medium mb-2">{edu.major}</div>
                    {edu.details && <p className="text-sm text-slate-500">{edu.details}</p>}
                 </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer id="contact" className="py-20 border-t border-slate-200">
           <div className="text-center max-w-2xl mx-auto space-y-8">
             <h2 className="text-4xl font-bold text-slate-900">Let's build the future together.</h2>
             <p className="text-slate-600 text-lg">
               Looking for a Product Manager who understands both the code and the concrete?
             </p>
             
             <div className="flex justify-center gap-6 pt-8">
                <a href="mailto:hello@weixiaofan.com" className="px-8 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20">
                  Email Me
                </a>
                <button className="px-8 py-3 bg-white text-slate-900 border border-slate-200 font-medium rounded-full hover:border-slate-400 transition-all">
                  Download Resume
                </button>
             </div>
             
             <div className="pt-20 text-slate-400 text-sm">
               © {new Date().getFullYear()} Wei Xiaofan. Inspired by Jon Lamb. Generated with Gemini.
             </div>
           </div>
        </footer>

      </main>
    </div>
  );
};

export default App;