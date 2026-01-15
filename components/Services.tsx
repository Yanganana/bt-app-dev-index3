import React from 'react';
import { Smartphone, Monitor, Database, Layout, ShieldCheck, Cloud } from 'lucide-react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </div>
);

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "移动应用开发",
      description: "使用 React Native 和 Flutter 构建适用于 iOS 和 Android 的原生及跨平台移动应用程序。"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      title: "Web 应用开发",
      description: "基于 React、Next.js 和现代前端架构，构建可扩展、高性能的 Web 应用程序。"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "后端开发",
      description: "使用 Node.js、Python 或 Go 进行稳健的 API 开发、数据库设计和微服务架构搭建。"
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "UI/UX 设计",
      description: "以用户为中心的设计理念，将美学与功能性完美融合，创造引人入胜的数字体验。"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "云解决方案",
      description: "基于 AWS、Google Cloud 或 Azure 的云迁移、DevOps 自动化和无服务器架构服务。"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "企业级安全",
      description: "采用安全优先的开发实践，保护您的数据安全并确保符合行业合规标准。"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base font-semibold text-blue-600 tracking-wide uppercase mb-2">我们的专长</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">全方位的开发服务</h3>
          <p className="text-lg text-slate-600">我们不只是编写代码；我们构建能够推动业务增长和提升用户参与度的数字解决方案。</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};