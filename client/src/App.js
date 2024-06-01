import './App.css';
import { useState } from 'react';

/**
 * This is the URL for the infinite episode writer lambda function.
 */
const INFINITE_EPISODE_WRITER_URL = 'https://6bvlhqo2f34mfjxuq6mevirxoq0eggan.lambda-url.us-east-1.on.aws/';

function renderTextWithNewlines(text) {
  return text.split('\n').map((item, key) => {
    return <span key={key}>{item}<br/></span>
  })
}

function App() {
  const [currentTheme, setCurrentTheme] = useState('');
  const [episodeScript, setEpisodeScript] = useState('');

  function handleThemeUpdate(event) {
    setCurrentTheme(event.target.value);
  }

  async function sendThemeToWriter() {
    console.log(currentTheme);
    // fetch the response body from a request to this lambda URL: https://6bvlhqo2f34mfjxuq6mevirxoq0eggan.lambda-url.us-east-1.on.aws/
    const writerResponse = await fetch(INFINITE_EPISODE_WRITER_URL, {
      method: 'POST',
      body: JSON.stringify({ theme: currentTheme }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Writer response: ', writerResponse);

    // parse the response body as JSON
    try {
      const writerResponseJson = await writerResponse.json();
      console.log('Writer Response JSON: ', writerResponseJson);

      if (writerResponseJson.statusCode === 200) {
        setEpisodeScript(writerResponseJson.episodeScript);
      } else {
        setEpisodeScript('FUDRUCKERS. Something went wrong. Try again.');
      }
    } catch (error) {
      setEpisodeScript('FUDRUCKERS. Something went wrong. Try again.');
    }
  }

  return (
    <div className='container'>
      <h1>8th Period</h1>
      <input 
        className='themeInput'
        onChange={handleThemeUpdate}
        onKeyDown={(event) => (event.key) === 'Enter' && sendThemeToWriter()}
      />

      <button 
        className='themeButton'
        onClick={sendThemeToWriter}>
          Submit Theme
      </button>
      { episodeScript && <p className='episodeScript'>{renderTextWithNewlines(episodeScript)}</p> }
    </div>
  );
}

export default App;
