import { useEffect, useState } from 'react'
import './App.css'

import Layout from './components/Layout'
import Tabs from './components/Tabs'
import Newsletter from './domain/forms/Newsletter'

function App() {
  const tabs = [
    {
      slug: 'newsletter',
      label: 'Newsletter',
      content: <Newsletter />
    },
    {
      slug: 'notice',
      label: 'Aviso de Pauta',
      content: <div>Lista Aviso de Pauta</div>
    },
    {
      slug: 'attendance',
      label: 'Atendimento à imprensa',
      content: <div>Lista Atendimento à imprensa</div>
    },
    {
      slug: 'accreditation',
      label: 'Credenciamento',
      content: <div>Lista Credenciamento</div>
    }
  ]
  const [activeTab, setActiveTab] = useState('newsletter')

  useEffect(() => {
    document.body.classList.add('bg-gray-200')
  }, [])

  return (
    <Layout>
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onSelectTab={(selectedTab) => setActiveTab(selectedTab)}
      />
      <div className="mt-6">
        {
          tabs.find((tab) => {
            return tab.slug === activeTab
          }).content
        }
      </div>
    </Layout>
  )
}

export default App
