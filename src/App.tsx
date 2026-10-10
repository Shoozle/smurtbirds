import { useState } from 'react'
import Gallery from './Gallery'
import Zoos from './Zoos'

function App() {

  const activeWindow = useState('zoos')

  return (
    <>
      <div className="flex justify-center gap-4 bg-gray-900 text-white p-4 mb-4">
        <button onClick={() => activeWindow[1]('birds')}>Birds</button>
        <button onClick={() => activeWindow[1]('zoos')}>Zoos</button>
      </div>
      <div className="bg-black antialiased pb-4">
        {activeWindow[0] === 'birds' ? <Gallery /> : <Zoos />}
      </div>
    </>
  )
}

export default App
