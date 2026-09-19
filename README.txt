轩轩专属 · GPT小狗

部署结构：
index.html
api/chat.js
package.json

重要：
1. 不要把 OPENAI_API_KEY 写进 index.html。
2. 部署后，在 Vercel 项目 Settings -> Environment Variables 添加：
   OPENAI_API_KEY = 你的 API key
3. 可选：
   OPENAI_MODEL = gpt-5.6-luna

然后重新部署。
