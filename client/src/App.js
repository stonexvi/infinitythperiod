import { useState } from 'react';
import { ReactComponent as Infinity} from './svg/infinity.svg';
import { ReactComponent as ThPeriod} from './svg/thperiod.svg';
import './App.css';

/**
 * This is the error message that will be displayed if the infinite episode writer function fails.
 * @type {string}
 **/
const ERROR_MESSAGE = 'FUDDRUCKERS. Something went wrong. Try again.';

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
  const [requestPending, setRequestPending] = useState(false);

  function handleThemeUpdate(event) {
    setCurrentTheme(event.target.value);
  }

  async function sendThemeToWriter() {
    console.log(`Request issued for theme: ${currentTheme}`);

    if (requestPending) {
      console.log('Existing request pending, try again later.');
    } else {
      try {
        // establish that a request is pending
        setRequestPending(true);

        // start loading animation
        setEpisodeScript('Loading...');
  
        const writerResponse = await fetch(INFINITE_EPISODE_WRITER_URL, {
          method: 'POST',
          body: JSON.stringify({ theme: currentTheme }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Writer response: ', writerResponse);
  
        // parse the response body as JSON
        const writerResponseJson = await writerResponse.json();
        console.log('Writer Response JSON: ', writerResponseJson);
  
        if (writerResponseJson.statusCode === 200) {
          setEpisodeScript(writerResponseJson.episodeScript);
        } else {
          setEpisodeScript(ERROR_MESSAGE);
        }
      } catch (error) {
        setEpisodeScript(ERROR_MESSAGE);
      }

      // request has been resolved, allow more requests
      setRequestPending(false);
    }
  }

  return (
    <div className='container'>
      <div className='logo-container'>
        <Infinity className='infinity'/>
        <ThPeriod className='thperiod'/>
      </div>
      <p className='explanation'>Choose any theme and I will write you an episode of 8th period.</p>
      <input 
        className='themeInput'
        placeholder='Enter a theme or let fate decide...'
        maxLength='100'
        onChange={ handleThemeUpdate }
        onKeyDown={ (event) => (event.key) === 'Enter' && sendThemeToWriter() }
      />

      <button 
        className='themeButton'
        disabled={ requestPending ? true : false }
        onClick={ sendThemeToWriter }>
          Write an Episode
      </button>
      { episodeScript && <p className='episodeScript'>{renderTextWithNewlines(episodeScript)}</p> }
    </div>
  );
}

export default App;
