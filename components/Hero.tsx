import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
              正在承接新项目
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
              将复杂的创意转化为 <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">数字现实</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
              我们是一家顶级定制开发机构，专注于构建可扩展的 Web 应用、移动 App 和企业级软件解决方案。
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-1">
                启动您的项目
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="#portfolio" className="inline-flex justify-center items-center px-8 py-3.5 border border-slate-300 text-base font-bold rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 transition-all">
                查看案例
              </a>
            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500 font-medium">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1.5" />
                敏捷流程
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1.5" />
                前 1% 的顶尖人才
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-1.5" />
                按时交付
              </div>
            </div>
          </div>

          <div className="relative">
             {/* Decorative Background Elements */}
            <div className="absolute -top-12 -right-12 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            {/* Image Placeholder */}
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://picsum.photos/800/600?random=1" 
                 alt="Team collaborating on software" 
                 className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-bold text-lg">现代技术栈</p>
                    <p className="text-sm opacity-80">我们使用最新工具打造面向未来的软件。</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};