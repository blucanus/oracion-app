import React, { useState } from 'react'

const ScheduleForm: React.FC = () => {
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementar lógica para enviar el horario al backend
  }

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Agregar Horario de Oración</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="day" className="block mb-1">Día:</label>
          <select
            id="day"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          >
            <option value="">Selecciona un día</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miércoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
            <option value="Sábado">Sábado</option>
            <option value="Domingo">Domingo</option>
          </select>
        </div>
        <div>
          <label htmlFor="hour" className="block mb-1">Hora:</label>
          <input
            type="number"
            id="hour"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            min="0"
            max="23"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Agregar Horario</button>
      </form>
    </div>
  )
}

export default ScheduleForm