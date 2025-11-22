
import React from 'react';
import WaveBackground from './components/WaveBackground';
import Typewriter from './components/Typewriter';
import ProfileImage from './components/ProfileImage';
import ProjectDetail from './components/ProjectDetail';
import { Experience, Education, Project } from './types';

// Data Constants
const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: '云计算产品经理',
    company: 'Leading Tech Co.',
    period: '2023 - 至今',
    description: '负责地理信息(GIS)行业的云原生解决方案。主导开发了基于微服务的空间数据处理平台，将传统GIS算力迁移至云端，提升数据处理效率400%。',
    tags: ['Cloud Computing', 'SaaS', 'GIS', 'Microservices', 'Kubernetes']
  },
  {
    id: '2',
    role: '建筑工程管理系统产品经理',
    company: 'Digital Construction Ltd.',
    period: '2020 - 2023',
    description: '负责大型建筑项目的数字化管理平台。设计并落地了基于BIM的施工进度追踪系统，实现了工地现场与数字孪生模型的实时联动。',
    tags: ['BIM', 'Digital Twin', 'Project Management', 'IoT', 'Mobile App']
  },
  {
    id: '3',
    role: '助理桥梁工程师',
    company: 'Civil Design Institute',
    period: '2019 - 2020',
    description: '参与特大桥梁的结构设计与计算。这段经历让我深刻理解了传统工程行业的痛点，为后续转型数字化产品奠定了坚实的行业认知基础。',
    tags: ['Civil Engineering', 'AutoCAD', 'Structural Analysis']
  }
];

const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: '智慧工地AI安全监测系统',
    description: '基于 YOLOv8 的计算机视觉系统，实时检测施工现场的安全帽和反光背心佩戴情况。集成通知服务，向现场管理人员发送违规警报。',
    technologies: ['Python', 'PyTorch', 'YOLOv8', 'FastAPI', 'React'],
    repoLink: 'https://github.com/weixiaofan',
    fullDescription: '这是一个针对建筑施工现场开发的实时安全监测解决方案。利用先进的计算机视觉技术，系统能够自动识别工人是否正确佩戴安全帽和反光背心。违规行为一旦被捕捉，系统会自动截取视频帧并标注违规类型，通过后端API实时推送至工地管理APP。',
    background: '在传统建筑工地上，安全监管主要依赖人工巡查，效率低、覆盖面窄且存在监管盲区。工人的不安全行为（如未戴安全帽）是导致事故的主要原因之一。该项目旨在通过AI技术实现7x24小时的全天候自动化监管，降低事故风险。',
    features: [
      '实时视频流分析 (RTSP协议支持)',
      'YOLOv8 高精度目标检测模型',
      '违规行为自动截图存证',
      'WebSocket 实时前端报警推送',
      '安全日报自动生成与统计'
    ]
  },
  {
    id: 'p2',
    title: 'BIM-GPT 智能助手',
    description: '用于查询 IFC 模型数据的智能对话接口。使用 LangChain 和 RAG 技术，允许非技术人员通过自然语言查询建筑信息。',
    technologies: ['OpenAI API', 'LangChain', 'Neo4j', 'Three.js', 'TypeScript'],
    repoLink: 'https://github.com/weixiaofan',
    fullDescription: '结合大语言模型与建筑信息模型(BIM)的创新应用。它允许项目参与方（如业主、施工方）使用自然语言查询复杂的3D建筑数据，例如"显示二层所有面积大于2平米的窗户"。系统将自然语言转换为图数据库查询语句(Cypher)，并从IFC文件中提取准确信息，同时在前端3D查看器中高亮显示对应构件。',
    background: 'BIM模型（IFC标准）包含丰富的建筑数据，但数据结构极其复杂，非专业人员难以提取所需信息。现有的BIM软件操作门槛极高，阻碍了数据的流通与利用。',
    features: [
      'IFC数据解析与知识图谱构建',
      '基于LangChain的RAG架构',
      '自然语言转图数据库查询语言(Text-to-Cypher)',
      'Three.js Web端模型高亮联动',
      '多轮对话上下文理解'
    ]
  },
  {
    id: 'p3',
    title: '城市内涝风险可视化平台',
    description: '基于 WebGL 的可视化工具，分析城市地形和排水能力，模拟不同降雨情景下的内涝风险。',
    technologies: ['Mapbox GL', 'Deck.gl', 'PostGIS', 'Vue.js'],
    demoLink: '#',
    fullDescription: '这是一个高性能的地理空间数据可视化项目，用于展示和分析城市在不同降雨级别下的内涝风险。利用Deck.gl的大规模数据渲染能力，系统能够在浏览器端流畅展示百万级的城市建筑模型与地形网格，并叠加动态的水淹模拟效果，为城市规划与应急响应提供决策支持。',
    background: '随着全球气候变化，极端降雨事件频发，城市内涝治理成为智慧城市建设的重点难点。传统的二维GIS分析缺乏直观性，无法准确表达积水深度与建筑物的空间关系。',
    features: [
      'Mapbox GL/Deck.gl 大规模3D场景渲染',
      '基于DEM地形的积水淹没分析算法',
      '多场景降雨模拟实时切换',
      '受影响基础设施与人口统计',
      '时空数据动态可视化'
    ]
  }
];

const EDUCATION: Education[] = [
  {
    degree: '硕士',
    major: '桥梁与隧道工程',
    school: '同济大学',
    details: '专注于大跨度桥梁结构健康监测研究'
  },
  {
    degree: '本科',
    major: '土木工程',
    school: '东南大学',
  }
];

const App: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');
  const [selectedProjectId, setSelectedProjectId] = React.useState<string | null>(null);

  // Extract unique technologies for the filter
  const allTechnologies = React.useMemo(() => {
    const techs = new Set<string>();
    PROJECTS.forEach(p => p.technologies.forEach(t => techs.add(t)));
    return ['All', ...Array.from(techs).sort()];
  }, []);

  // Filter projects based on selection
  const filteredProjects = React.useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.technologies.includes(activeFilter));
  }, [activeFilter]);

  const selectedProject = React.useMemo(() => 
    PROJECTS.find(p => p.id === selectedProjectId), 
  [selectedProjectId]);

  return (
    <div className="min-h-screen relative selection:bg-blue-100 selection:text-blue-900">
      <WaveBackground />

      {selectedProject ? (
        <ProjectDetail 
          project={selectedProject} 
          onBack={() => setSelectedProjectId(null)} 
        />
      ) : (
        <main className="relative z-10 container mx-auto px-6 py-12 md:px-12 lg:px-24 max-w-7xl animate-in fade-in duration-500">
          
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
                以用户为中心的 <br />
                <span className="text-slate-400">AI驱动型设计</span>
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
                { label: '工作经验', value: '4年+' },
                { label: '专注领域', value: '工程 & 云计算' },
                { label: '发布产品', value: '12+' },
                { label: '专业背景', value: '土木工程' },
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
                <p className="text-slate-500 text-lg mb-6">
                  探索技术边界，将AI与行业场景结合的业余实践。
                </p>
              </div>
              
              <div className="md:w-2/3">
                {/* Filter Controls */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {allTechnologies.map(tech => (
                    <button
                      key={tech}
                      onClick={() => setActiveFilter(tech)}
                      className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 border ${
                        activeFilter === tech
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md scale-105'
                          : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600'
                      }`}
                    >
                      {tech}
                    </button>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="group relative bg-white/40 backdrop-blur-sm border border-slate-100 rounded-xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl -z-10" />
                      
                      <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 min-h-[80px] line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map(tech => (
                          <span key={tech} className="px-2 py-1 bg-white border border-slate-100 text-slate-500 text-xs font-medium rounded-md">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                           <span className="px-2 py-1 text-slate-400 text-xs font-medium">+</span>
                        )}
                      </div>
                      
                      <div className="mt-auto pt-4 border-t border-slate-100/50">
                        <button 
                          onClick={() => setSelectedProjectId(project.id)}
                          className="w-full py-2 flex items-center justify-center gap-2 text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                        >
                          了解更多
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </button>
                      </div>
                    </div>
                  ))}
                  {filteredProjects.length === 0 && (
                     <div className="col-span-2 py-12 text-center text-slate-400 bg-slate-50 rounded-xl border border-dashed border-slate-200">
                       没有找到包含 {activeFilter} 的项目。
                     </div>
                  )}
                </div>
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
               <h2 className="text-4xl font-bold text-slate-900">让我们共创未来。</h2>
               <p className="text-slate-600 text-lg">
                 正在寻找一位既懂代码又懂业务的产品经理？
               </p>
               
               <div className="flex justify-center gap-6 pt-8">
                  <a href="mailto:hello@weixiaofan.com" className="px-8 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-blue-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-900/20">
                    联系我
                  </a>
                  <button className="px-8 py-3 bg-white text-slate-900 border border-slate-200 font-medium rounded-full hover:border-slate-400 transition-all">
                    下载简历
                  </button>
               </div>
               
               <div className="pt-20 text-slate-400 text-sm">
                 © {new Date().getFullYear()} Wei Xiaofan. Inspired by Jon Lamb. Generated with Gemini.
               </div>
             </div>
          </footer>

        </main>
      )}
    </div>
  );
};

export default App;
