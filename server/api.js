import Groq from "groq-sdk";
import dotenv from "dotenv"
dotenv.config();

const groqApiKey = process.env.GROQ_API_KEY

if (!groqApiKey) {
    console.error("openai_api_key is not set")
    process.exit(1)
}

const groq = new Groq({ apiKey: groqApiKey});
export default groq