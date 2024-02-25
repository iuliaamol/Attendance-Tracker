import styles from './styles'

export default function StudentList({ studentList }) {
  const studentNames = Object.keys(studentList)

  return (
    <ul className='student-list'>
      {studentNames.map((name, index) => {
        return <li key={index}>{name}</li>
      })}
      <style jsx>{styles}</style>
    </ul>
  )
}
