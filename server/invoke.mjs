import { handle } from './handler.mjs';

async function invoke(theme) {
  const event = { 
    body: JSON.stringify({
      theme, 
    }),
  };

  const responseData = await handle(event); 
  const responseJson = JSON.parse(responseData);
  console.log(responseJson);
  console.log('Episode script: ', responseJson.episodeScript);
}

// invoke with the argument passed to the script
invoke(process.argv[2])