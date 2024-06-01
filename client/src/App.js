import './App.css';
import { useState } from 'react';

function App() {
  const [currentTheme, setCurrentTheme] = useState('');
  const [episodeScript, setEpisodeScript] = useState('');

  function handleThemeUpdate(event) {
    setCurrentTheme(event.target.value);
  }

  function sendThemeToWriter() {
    console.log(currentTheme);
    setEpisodeScript(`Once upon a time..., the theme was ${currentTheme}`);
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
      { episodeScript && <p className='episodeScript'>{episodeScript}</p> }
    </div>
  );
}

export default App;
