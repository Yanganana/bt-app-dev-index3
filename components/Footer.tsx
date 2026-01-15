import React from 'react';
import { Code2, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4 text-white">
              <Code2 className="h-6 w-6 mr-2 text-blue-500" />
              <span className="font-bold text-xl tracking-tight">DevForge</span>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              利用为您量身定制的前沿软件解决方案，助力您的企业腾飞。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">服务项目</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Web 开发</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">移动应用</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">云解决方案</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">产品设计</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">公司信息</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">关于我们</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">招贤纳士</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">博客</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">联系方式</a></li>
            </ul>
          </div>

          <div>
             <h3 className="text-white font-semibold mb-4">订阅通讯</h3>
             <p className="text-sm text-slate-400 mb-4">订阅以获取最新的技术趋势和新闻。</p>
             <div className="flex">
               <input type="email" placeholder="电子邮箱地址" className="bg-slate-800 border-none rounded-l-md px-3 py-2 w-full focus:ring-1 focus:ring-blue-500 text-white text-sm outline-none" />
               <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-r-md text-sm font-medium transition-colors">
                 订阅
               </button>
             </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} DevForge Solutions Inc. 保留所有权利。</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-slate-300">隐私政策</a>
             <a href="#" className="hover:text-slate-300">服务条款</a>
          </div>
        </div>
      </div>
    </footer>
  );
};