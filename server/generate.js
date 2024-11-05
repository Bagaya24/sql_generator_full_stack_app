import openaiClient from "./api.js";

const generate = async (queryDescription) => {
    const response = await openaiClient.chat.completions.create({
    messages: [
        {
            role: "system",
            content: "You are a translator from naturel language to sql ."
        },
        {
        role: "user",
        content: "convert the following natural language description into a sql query, just write the sql query and nothing else:\n\n "+queryDescription+".",
        },
    ],
    model: "llama3-8b-8192",
    temperature:0,
  });
    return response.choices[0]?.message?.content || ""
}

export default generate