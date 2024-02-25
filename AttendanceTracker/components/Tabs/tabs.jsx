import { useState } from 'react'
import styles from './style'

import StudentList from '../StudentList/studentList'
import PresenceCard from '../PresenceCard/presenceCard'

const ACTIVE_TAB = {
  STUDENTS: 0,
  PRESENCE: 1,
}

export default function Tabs(props) {
  const { studentList } = props
  const [activeTab, setActiveTab] = useState(ACTIVE_TAB.PRESENCE)

  function handleTabClick(index) {
    setActiveTab(index)
  }

  return (
    <div className='tabs'>
      <div className='tab-content'>
        {activeTab === ACTIVE_TAB.STUDENTS ? (
          <StudentList studentList={studentList} />
        ) : (
          <PresenceCard
            studentList={studentList}
          />
        )}
      </div>

      <div className='tab-buttons'>
        <button
          className={`tab-item ${
            activeTab === ACTIVE_TAB.STUDENTS ? 'active' : ''
          }`}
          onClick={() => handleTabClick(ACTIVE_TAB.STUDENTS)}
        >
          Students
        </button>
        <button
          className={`tab-item ${
            activeTab === ACTIVE_TAB.PRESENCE ? 'active' : ''
          }`}
          onClick={() => handleTabClick(ACTIVE_TAB.PRESENCE)}
        >
          Presence
        </button>
      </div>

      <style jsx>{styles}</style>
    </div>
  )
}
