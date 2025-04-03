import React from 'react'

const tabs = ['Expository', 'Commentary', 'Doctrine', 'Journal', 'Liturgy']

type TabSwitcherProps = {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const TabSwitcher = ({ activeTab, setActiveTab }: TabSwitcherProps) => {
  return (
    <div className="flex border-b mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 text-sm font-semibold ${
            activeTab === tab
              ? 'border-b-2 border-blue-500 text-blue-600'
              : 'text-gray-500 hover:text-gray-800'
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default TabSwitcher
