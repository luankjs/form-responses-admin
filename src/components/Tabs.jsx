import React from 'react'

const Tabs = ({ tabs, activeTab, onSelectTab }) => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200">
      {tabs.map((tab) => (
        <li key={tab.slug} className="mr-2">
          <div
            onClick={() => onSelectTab(tab.slug)}
            aria-current={`${activeTab == tab.slug ? 'page' : ''}`}
            className={`inline-block p-4 rounded-t-lg cursor-pointer text-base text-left ${
              activeTab == tab.slug
                ? 'text-primary-900 bg-primary-200 active'
                : 'hover:text-gray-600 hover:bg-primary-100'
            }`}>
            {tab.label}
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Tabs
