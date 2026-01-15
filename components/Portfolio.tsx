import React from 'react';

const ProjectCard: React.FC<{ image: string; title: string; category: string }> = ({ image, title, category }) => (
  <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
    <img 
      src={image} 
      alt={title} 
      className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
      <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">{category}</span>
      <h3 className="text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200">{title}</h3>
    </div>
  </div>
);

export const Portfolio: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
           <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">精选案例</h2>
              <p className="text-slate-600">探索我们的最新作品，了解我们如何通过技术帮助企业实现转型。</p>
           </div>
           <button className="mt-4 md:mt-0 text-blue-600 font-semibold hover:text-blue-800 flex items-center transition-colors">
              查看所有项目 &rarr;
           </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard 
            image="https://picsum.photos/600/400?random=10"
            title="金融科技仪表盘"
            category="Web 应用"
          />
          <ProjectCard 
            image="https://picsum.photos/600/400?random=11"
            title="健康追踪 App"
            category="iOS & Android"
          />
          <ProjectCard 
            image="https://picsum.photos/600/400?random=12"
            title="跨境电商平台"
            category="全栈开发"
          />
          <ProjectCard 
            image="https://picsum.photos/600/400?random=13"
            title="物流 CRM 系统"
            category="企业级软件"
          />
          <ProjectCard 
            image="https://picsum.photos/600/400?random=14"
            title="智能家居中控"
            category="物联网 & 移动端"
          />
          <ProjectCard 
            image="https://picsum.photos/600/400?random=15"
            title="EduLearn 在线教育"
            category="SaaS 平台"
          />
        </div>
      </div>
    </section>
  );
};