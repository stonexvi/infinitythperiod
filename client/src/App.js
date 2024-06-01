import { useState } from 'react';
import { ReactComponent as Infinity} from './svg/infinity.svg';
import { ReactComponent as ThPeriod} from './svg/thperiod.svg';
import { ReactComponent as Funnel} from './svg/funnel.svg';
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

function renderTextWithMarkdown(text) {
  // Replace newline characters with <br /> tags
  let html = text.replace(/\n/g, '<br />');

  // Replace **text** with <b>text</b>
  html = html.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');

  // Replace _text_ with <i>text</i>
  html = html.replace(/_(.*?)_/g, '<i>$1</i>');

  html = html.replace(/\*(.*?)\*/g, '<i>$1</i>');

  return html;
}

function App() {
  const [currentTheme, setCurrentTheme] = useState('');
  const [episodeScript, setEpisodeScript] = useState('');
  const [requestPending, setRequestPending] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(episodeScript);
      console.log('Copied episode!');
    } catch (err) {
      console.log('Failed to copy text');
    }
  };

  function handleThemeUpdate(event) {
    setCurrentTheme(event.target.value);
  }

  async function sendThemeToWriter() {
    console.log(`Request issued for theme: ${currentTheme}`);

    if (requestPending) {
      console.log('Existing request pending, try again later.');
    } else {
      try {
        // reset the current episondeScript
        setEpisodeScript('')

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
      { !requestPending && episodeScript && <button className='copyButton' onClick={copyToClipboard}>Copy</button> }
      { episodeScript && <div className='episodeScript' dangerouslySetInnerHTML={{ __html: renderTextWithMarkdown(episodeScript) }} /> }
      { requestPending && <Funnel className='funnel'/>}

    </div>
  );
}

export default App;
