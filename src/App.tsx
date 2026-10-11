import { useState } from 'react'
import Gallery from './Gallery'
import Zoos from './Zoos'

function App() {

  const activeWindow = useState('birds')

  return (
    <>
      <div className="flex justify-center gap-4 bg-gray-900 text-white p-4 mb-4">
        <button className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => activeWindow[1]('birds')}>
          Birds</button>
        <button className="cursor-pointer bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => activeWindow[1]('zoos')}>
          Zoos</button>
      </div>
      <div className="bg-black antialiased pb-4">
        {activeWindow[0] === 'birds' ? <Gallery /> : <Zoos />}
      </div>
    </>
  )
}

export default App
