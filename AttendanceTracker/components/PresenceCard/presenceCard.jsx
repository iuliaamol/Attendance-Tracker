import { useState, useEffect } from 'react'
import Airtable from 'airtable'

import styles from './styles'

const currentDay = new Date().getUTCDate()
const PAYMENT_VALUE = 22

const AIRTABLE_GRID_VIEW = 'Grid view'
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE = process.env.AIRTABLE_BASE

export default function PresenceCard({ studentList, currentMonthBase }) {
  const [currentStudent, updateCurrentStudent] = useState()

  // const [verifiedStudents, updateverifiedStudents] = useState()
  // const [absentStudents, updateAbsentStudents] = useState()

  console.log()
  const verifiedStudents = []
  const absentStudents = []

  useEffect(() => {
    if (!studentList) {
      return
    }
    const studentNames = Object.keys(studentList)

    studentNames.forEach((name, index) => {
      if (studentList[name][currentDay]) {
        verifiedStudents.push(studentList[name])
        return
      }
      absentStudents.push(studentList[name])
    })

    updateCurrentStudent(absentStudents[0].name)
  })

  function handlePresentButton(event) {
    console.log(studentList[currentStudent])
    const { id, discount, ...rest } = studentList[currentStudent]
    const payload = [
      {
        id,
        fields: {
          discount,
          [currentDay]: discount ? discount : PAYMENT_VALUE,
          ...rest,
        },
      },
    ]

    updateDataInAirtable(payload)
  }

  function handleAbasentButton() {}

  function handlePostponeButton() {}

  function updateDataInAirtable(payload) {
    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE)
    const currentMonth = 'January'
    base(currentMonth).update(payload, () => {
      console.log(absentStudents)
      absentStudents.shift()
      updateCurrentStudent(absentStudents[0].name)
    })
  }

  return (
    <div className='card'>
      <div className='row space-betweem'>
        <button>Back</button>
        <span>Status</span>
      </div>
      <br></br>
      <br></br>

      <h2>{currentStudent}</h2>

      <br></br>
      <br></br>
      <br></br>
      <div className='pressence-buttons '>
        <button className='button absent' id='button1'>
          Absent
        </button>
        <button className='button present' onClick={handlePresentButton}>
          Present
        </button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <button className='button postpone'>Button 3</button>

      <style jsx>{styles}</style>
    </div>
  )
}
