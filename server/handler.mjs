import OpenAI from 'openai';
import {
  characterDescriptions,
  pastEpisodes,
} from './seriesBackstory.mjs';

const OPENAI_API_KEY = 'sk-infinity-period-service-xFcYEhkCHBK9uyQWReE3T3BlbkFJqIGx3ubnAuDDRP9VYHXE';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY, // This is the default and can be omitted
});

/**
 * Handles the incoming event and context from the AWS Lambda function.
 * 
 * @param {object} event - The incoming event.
 * 
 * @returns {Promise<void>} - A promise that resolves when the function is complete.
 */
export async function handle(event) {
  const response = {
    statusCode: 200,
    errors: [],
    episodeScript: null,
  };

  let requestBody = {};

  if (event.body) {
    try {
      requestBody = JSON.parse(event.body);
    } catch (error) {
      response.statusCode = 400;
      response.errors.push({
        code: 'INVALID_REQUEST_BODY',
        message: 'The request body is invalid.',
      })
    }
  }
  
  const theme = requestBody.theme ?? 'whatever you want';

  const chatCompletion = await openai.chat.completions.create({
    messages: [
        { role: 'system', content: 'You are a web series writer. You must write a script for a new episode of the series "8th Period" and you must make the theme of the episode whatever the user decides. You will recieve information about the series characters and previous episode scripts to help you write a new episode in the same style and voice as the existing scripts.' },
        { role: 'system', content: `Here are the characters in the series "8th Period". You will find them grouped by club. Below each character name is a description about that character: ${characterDescriptions}` },
        { role: 'system', content: `Here is the script for the pilot episode of "8th Period". Try to match this style and tone in your script, and use this as background information for the characters: ${pastEpisodes.join('\n')}` },
        { role: 'system', content: 'When you write your script, try to be witty and edgy - the intended audience is older teenages to young adults. It is very important that this new script feels like the previous scripts, and you should make callback references to things that have happened in previous scripts. Do not include an episode number for your script unless it is specifically mentioned in the theme.' },
        { role: 'system', content: 'When you write your script, try to make the subplots for each group of characters very distinct. Not all characters need to be in every script and not all groups need to be in every script. There should be a central conflict that the characters must overcome using their own agency and this should help them grow as people.' },
        { role: 'system', content: 'You now have everything you need to write a script for a new episode of "8th Period" when the user gives you the theme of the episode. When formatting your script, try to make it look like a professional television script and ignore the formatting of the other 8th period scripts you were provided' },
        { role: 'user', content: `The theme of the episode is: ${theme}` }
    ],
    model: 'gpt-4o',
  });

  console.log('Chat completion is', chatCompletion);

  // check if chat completion is successful
  if (
    chatCompletion?.choices?.length
    && chatCompletion.choices[0]?.finish_reason === 'stop'
  ) {
    // take the first choice
    response.episodeScript = chatCompletion.choices[0]?.message?.content;
  } else {
    response.errors.push({
      code: 'CHAT_COMPLETION_FAILED',
      message: 'Chat completion failed.',
    });
  }

  return JSON.stringify(response);
}