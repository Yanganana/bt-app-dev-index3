import React, { useState } from 'react';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { generateTechAdvice } from '../services/geminiService.ts';
import ReactMarkdown from 'react-markdown';

export const TechAdvisor: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [advice, setAdvice] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setLoading(true);
    setAdvice(null);
    try {
      const result = await generateTechAdvice(idea);
      setAdvice(result);
    } catch (error) {
      setAdvice("抱歉，出错了。请稍后再试。");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 to-blue-900 text-white overflow-hidden relative">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
             <Sparkles className="w-6 h-6 text-yellow-300 mr-2" />
             <span className="font-semibold tracking-wide">AI 技术架构师</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">不确定使用哪种技术？</h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            描述您的应用创意，我们的 Gemini AI 助手将即时为您推荐技术栈并分析关键挑战。
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-1 shadow-2xl border border-white/20">
          <form onSubmit={handleSubmit} className="relative">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="例如：我想开发一个使用 GPS 追踪跑步并支持社交分享的健身应用..."
              className="w-full bg-slate-900/50 text-white placeholder-blue-200/50 rounded-xl p-6 pr-32 focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px] resize-none text-lg"
            />
            <div className="absolute bottom-4 right-4">
               <button 
                type="submit" 
                disabled={loading || !idea.trim()}
                className="flex items-center px-6 py-2 bg-blue-500 hover:bg-blue-400 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-all shadow-lg"
               >
                 {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <><span className="mr-2">开始分析</span> <Send className="w-4 h-4" /></>}
               </button>
            </div>
          </form>
        </div>

        {advice && (
          <div className="mt-8 bg-white text-slate-800 rounded-2xl p-8 shadow-2xl animate-fade-in border-l-8 border-blue-500">
             <h3 className="text-xl font-bold mb-4 text-blue-700 flex items-center">
                <Sparkles className="w-5 h-5 mr-2" />
                AI 推荐建议
             </h3>
             <div className="prose prose-slate max-w-none">
                <ReactMarkdown>{advice}</ReactMarkdown>
             </div>
             <div className="mt-6 pt-6 border-t border-slate-200 text-center">
                <p className="text-slate-500 mb-4 text-sm">想将这个想法变为现实？让我们聊聊细节。</p>
                <a href="#contact" className="inline-block px-6 py-2 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-colors">
                    预约免费咨询
                </a>
             </div>
          </div>
        )}
      </div>
    </section>
  );
};