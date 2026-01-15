import { GoogleGenAI } from "@google/genai";

const getClient = () => {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
        throw new Error("API_KEY environment variable is not set");
    }
    return new GoogleGenAI({ apiKey });
};

export const generateTechAdvice = async (projectIdea: string): Promise<string> => {
  try {
    const ai = getClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `
        你是一家名为 DevForge 的顶级软件代理公司的高级技术架构师。
        一位潜在客户有这样一个项目想法： "${projectIdea}"。
        
        请提供一份简明的技术建议（最多 200 字）。
        请使用标准的 Markdown 格式回复。
        内容必须包含：
        1. **推荐技术栈**：(例如：React Native, Node.js, AWS)
        2. **关键挑战**：(潜在的技术难点)
        3. **预估复杂度**：(低/中/高)
        
        请保持专业、鼓励和专家的语气。
        **重要：请全程使用中文回答。**
      `,
    });

    return response.text || "抱歉，暂时无法生成建议。请稍后再试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "我们的 AI 架构师目前正忙。请直接联系我们的销售团队进行咨询。";
  }
};