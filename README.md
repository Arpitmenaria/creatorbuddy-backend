# caption-hastag-generator
AI-powered caption and hashtag generator using React and Node.js
Creatorai is an AI-powered web app that generates **engaging captions** and **trending hashtags** for social media posts based on your image description or content idea.

Built with:
-  React (Frontend)
-  Cohere AI API (for caption and hashtag generation)
-  Node.js + Express (Backend)
-  dotenv for managing API keys securely

# Features

- Generate creative, catchy one-liner captions.
- Get space-separated trending hashtags for social reach.
- Copy to clipboard or download generated text.
- Fast and responsive UI.

# How It Works

1. Enter a description like:  
   _"A peaceful sunrise by the beach with waves crashing gently."_
2. Click **Generate Caption**
3. Instantly receive:
   -  A social media-ready caption
   -  Trending hashtags

# Setup Instructions (Local)

1. Clone the repo: git clone https://github.com/Arpitmenaria/caption-hashtag-generator.git
 
2. Go to the backend folder and install dependencies:cd creatorbuddy-backend npm install
 
3. Add your Cohere API Key in a `.env` file:COHERE_API_KEY=your-api-key-here

4. Start the backend: node index.js
   
5. Go to the frontend folder and install dependencies: cd ../creatorai-frontend npm install

6. Start the frontend: npm run dev
   

