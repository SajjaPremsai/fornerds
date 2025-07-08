import { useState } from 'react'
import AsciiArt from './components/AsciiArt'
import InputBox from './components/InputBox'

function App() {
  const [isClear,setisClear] = useState(false);
  const handleClear = ()=>{
    setisClear(true);
  }
  return (
    <>
      {!isClear && <AsciiArt />}
      <InputBox handleAscii={handleClear}/>
    </>
  )
}

export default App