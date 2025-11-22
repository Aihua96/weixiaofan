
import React from 'react';
import { Project } from '../types';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative z-10 container mx-auto px-6 py-12 md:px-12 lg:px-24 max-w-5xl animate-in fade-in duration-500">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-12"
      >
        <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-medium">返回首页</span>
      </button>

      {/* Header */}
      <header className="mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          {project.technologies.map(tech => (
            <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full border border-blue-100">
              {tech}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
          {project.title}
        </h1>
        <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
          {project.description}
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-12">
          {project.background && (
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-blue-600 rounded-full"></span>
                项目背景
              </h2>
              <p className="text-slate-600 leading-loose text-lg">
                {project.background}
              </p>
            </section>
          )}

          {project.fullDescription && (
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-purple-600 rounded-full"></span>
                解决方案
              </h2>
              <p className="text-slate-600 leading-loose text-lg">
                {project.fullDescription}
              </p>
            </section>
          )}
          
          {/* Action Buttons */}
          <div className="flex gap-4 pt-8">
            {project.demoLink && (
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300">
                访问演示
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
              </a>
            )}
            {project.repoLink && (
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white text-slate-700 border border-slate-200 font-medium rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path></svg>
                查看源码
              </a>
            )}
          </div>
        </div>

        {/* Sidebar Features */}
        <div className="md:col-span-1">
          <div className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-100 sticky top-8">
            <h3 className="font-bold text-slate-900 mb-4">核心功能</h3>
            <ul className="space-y-3">
              {project.features?.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-8 border-t border-slate-100">
              <h3 className="font-bold text-slate-900 mb-2">技术栈</h3>
              <div className="flex flex-wrap gap-2">
                 {project.technologies.map(tech => (
                    <span key={tech} className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                      {tech}
                    </span>
                 ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
