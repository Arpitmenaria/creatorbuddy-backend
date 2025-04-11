const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { CohereClient } = require("cohere-ai");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Cohere client
const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

app.post("/generate", async (req, res) => {
  const { prompt } = req.body;

  try {
    // Generate short caption
    const captionResponse = await cohere.generate({
      model: "command",
      prompt: `Write a short and catchy social media caption (max 20 words) for this photo description:\n"${prompt}"`,
      max_tokens: 60,
      temperature: 0.7,
    });

    const caption = captionResponse.generations?.[0]?.text?.trim() || "";

    // Generate hashtags only if caption exists
    const hashtagResponse = await cohere.generate({
      model: "command",
      prompt: `Generate 5 to 10 relevant and trending hashtags for this caption:\n"${caption}". Return them space-separated.`,
      max_tokens: 60,
      temperature: 0.7,
    });

    const hashtags = hashtagResponse.generations?.[0]?.text?.trim() || "";

    res.json({ caption, hashtags });
  } catch (error) {
    console.error("Cohere Error:", error);
    res.status(500).json({ error: "Cohere API error" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Backend running on http://localhost:${PORT}`);
});
