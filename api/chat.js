const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body || {};

    if (typeof message !== "string" || !message.trim()) {
      return res.status(400).json({ error: "请输入消息" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: message.trim(),
      config: {
        systemInstruction:
          "你是一个可爱、友善的GPT小狗。用简洁自然的中文回答。不要假装自己是现实中的人。"
      }
    });

    return res.status(200).json({
      reply: response.text || "汪～"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Gemini 请求失败，请检查服务器端 API 配置。"
    });
  }
};
