import { useState } from 'react'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <div className='min-h-screen min-w-screen flex flex-col items-center bg-black'>
    <div className='max-w-6xl w-full bg-white'>
      <Header/>
a
    </div>
  </div>
    </>
  )
}

export default App
