import React from 'react';

const steps = [
  {
    num: "01",
    title: "探索与发现",
    desc: "我们深入分析您的需求、市场契合度和技术可行性，为项目奠定坚实基础。"
  },
  {
    num: "02",
    title: "设计与原型",
    desc: "创建线框图和高保真 UI 设计稿，供您审核并确保视觉效果符合预期。"
  },
  {
    num: "03",
    title: "敏捷开发",
    desc: "通过敏捷冲刺（Sprints）构建产品，编写整洁、可维护的高质量代码。"
  },
  {
    num: "04",
    title: "发布与交付",
    desc: "进行严格的测试，部署到生产环境，并提供持续的发布后支持与维护。"
  }
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">工作方式</h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            我们成熟的敏捷方法论确保了开发的透明度、灵活性，以及高质量软件的快速交付。
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-6xl font-black text-slate-800 mb-4 group-hover:text-slate-700 transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="text-xl font-bold text-blue-400 mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed border-l-2 border-blue-900 pl-4 group-hover:border-blue-500 transition-colors duration-300">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};