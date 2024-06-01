import { handle } from './handler.mjs';

function invoke(theme) {
  const event = { 
    body: JSON.stringify({
      theme, 
    }),
  };
  
  return handle(event);
}

// invoke with the argument passed to the script
invoke(process.argv[2])