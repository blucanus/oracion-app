import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

interface Schedule {
  _id: string
  day: string
  hour: number
  user: {
    name: string
  }
}

interface SummaryItem {
  _id: {
    day: string
    hour: number
  }
  count: number
}

const Dashboard: React.FC = () => {
  const [schedules, setSchedules] = useState<Schedule[]>([])
  const [summary, setSummary] = useState<SummaryItem[]>([])

  useEffect(() => {
    // Fetch schedules and summary from the API
    // This is a placeholder for the actual API calls
    setSchedules([
      { _id: '1', day: 'Lunes', hour: 9, user: { name: 'Usuario 1' } },
      { _id: '2', day: 'Martes', hour: 14, user: { name: 'Usuario 2' } },
    ])
    setSummary([
      { _id: { day: 'Lunes', hour: 9 }, count: 3 },
      { _id: { day: 'Martes', hour: 14 }, count: 2 },
    ])
  }, [])

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Panel de Control</h2>
      <Link to="/schedule" className="bg-green-500 text-white py-2 px-4 rounded inline-block mb-4">
        Agregar Horario
      </Link>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-bold mb-2">Horarios Programados</h3>
          <ul className="space-y-2">
            {schedules.map((schedule) => (
              <li key={schedule._id} className="border p-2 rounded">
                {schedule.user.name}: {schedule.day} a las {schedule.hour}:00
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Resumen de Horarios</h3>
          <ul className="space-y-2">
            {summary.map((item) => (
              <li key={`${item._id.day}-${item._id.hour}`} className="border p-2 rounded">
                {item._id.day} a las {item._id.hour}:00 - {item.count} usuario(s)
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Dashboard