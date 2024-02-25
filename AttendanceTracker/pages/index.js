import { useState, useEffect } from 'react'
import Head from 'next/head'
import Airtable from 'airtable'

import styles from '../styles/Home'
import Tabs from '../components/Tabs/tabs'

const AIRTABLE_GRID_VIEW = 'Grid view'
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY
const AIRTABLE_BASE = process.env.AIRTABLE_BASE

export default function Home({ students }) {
  const [studentList, setStudentList] = useState()

  useEffect(() => {
    const base = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE)
    const list = {}
    const currentMonth = 'January'

    base(currentMonth)
      .select({
        view: AIRTABLE_GRID_VIEW,
      })
      .firstPage(function (err, records) {
        if (err) {
          console.error(err)
          return
        }
        records.forEach(function (record) {
          if (!record.fields) {
            return
          }

          if (record?.fields?.name) {
            list[record.fields.name] = { id: record.id, ...record.fields }
          }
        })

        setStudentList(list)
      })
  }, [])

  return (
    <div className='container'>
      <Head>
        <title>AFTERSCHOOL</title>
      </Head>

      <main className='main'>
        <Tabs studentList={studentList} />
      </main>

      <style jsx>{styles}</style>
    </div>
  )
}
