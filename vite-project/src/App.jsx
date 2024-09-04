import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GreetingText from './components/GreetingText'
import FontSizeButtons from './components/FontSizeButtons'
import LanguageButtons from './components/LanguageButtons'

function App() {
  const [lan, setLan] = useState('English');
  const [size, setSize] = useState(1);

  const languageHandler = (e) => {
    setLan((currLan) => e.target.textContent);
  }

  const sizeHandler = (e) => {
    e.target.textContent === '+' ? 
    setSize((currSize) => currSize + 1) : 
    setSize((currSize) => currSize - 1);
  }

  return (
    <>
      <div>
        <FontSizeButtons handler={sizeHandler} />
      </div>
      <div>
        <GreetingText lan={lan} size={size} />
      </div>
      <div>
        <LanguageButtons handler={languageHandler} />
      </div>
    </>
  )
}

export default App
