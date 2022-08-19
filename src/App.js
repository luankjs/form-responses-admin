import { useEffect } from 'react'
import './App.css'

import Layout from './components/Layout'

function App() {
  useEffect(() => {
    document.body.classList.add('bg-gray-200')
  }, [])

  return (
    <Layout>
      <p>Tabs</p>
      <p>List</p>
    </Layout>
  )
}

export default App
