import { Toaster } from 'sonner'
import './App.css'
import { HomePage } from './sections/index.js'

function App() {
  return (
    <>
      <HomePage />
      <Toaster position="top-center" richColors />
    </>
  )
}

export default App
