import { Configuration, OpenAIApi} from "openai";
import dotenv from "dotenv"
dotenv.config();

const openaiApiKey = process.env.OPENAI_KEY

if (!openaiApiKey) {
    console.error("openai_api_key is not set")
    process.exit(1)
}

const configuration = new Configuration({
    apiKey: openaiApiKey
})
const openai = new OpenAIApi(configuration)
export default openai