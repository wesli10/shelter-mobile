import { Configuration, OpenAIApi } from "openai";
import { OPENAI_API_KEY } from "@env";

export async function OpenIa() {
  const configuration = new Configuration({
    apiKey: OPENAI_API_KEY,
  });

  const openia = new OpenAIApi(configuration);

  return openia;
}
