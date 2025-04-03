import { useState } from 'react'
import BibleViewer from './components/bible/BibleViewer'
import TabSwitcher from './components/layout/TabSwitcher'

const App = () => {
  const [activeTab, setActiveTab] = useState('Expository')

  return (
    <div className="fixed inset-0 flex flex-row overflow-hidden bg-gray-100 text-gray-900 font-sans">
      {/* LEFT COLUMN: Bible Viewer */}
      <div className="w-1/2 h-full bg-white border-r overflow-y-auto p-6 shadow-inner">
        <BibleViewer />
      </div>

      {/* RIGHT COLUMN: Tabbed Editor */}
      <div className="w-1/2 h-full bg-white overflow-y-auto p-6 shadow-inner">
        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-6">
          {activeTab === 'Expository' && <div className="text-lg">📝 Expository Sermon editor goes here</div>}
          {activeTab === 'Commentary' && <div className="text-lg">📚 Commentary notes go here</div>}
          {activeTab === 'Doctrine' && <div className="text-lg">📖 Systematic Theology section</div>}
          {activeTab === 'Journal' && <div className="text-lg">🗒️ Personal journal entries</div>}
          {activeTab === 'Liturgy' && <div className="text-lg">⛪ Revised Common Lectionary readings</div>}
        </div>
      </div>
    </div>
  )
}

export default App
