import express, { Request, Response } from 'express'
import Schedule, { ISchedule } from '../models/Schedule'

const router = express.Router()

// Crear un nuevo horario
router.post('/', async (req: Request, res: Response) => {
  try {
    const { user, day, hour } = req.body
    const schedule: ISchedule = new Schedule({ user, day, hour })
    await schedule.save()
    res.status(201).json(schedule)
  } catch (error) {
    res.status(400).json({ message: (error as Error).message })
  }
})

// Obtener todos los horarios
router.get('/', async (req: Request, res: Response) => {
  try {
    const schedules: ISchedule[] = await Schedule.find().populate('user', 'name')
    res.json(schedules)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
})

// Actualizar un horario
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { day, hour } = req.body
    const schedule: ISchedule | null = await Schedule.findByIdAndUpdate(id, { day, hour }, { new: true })
    if (schedule) {
      res.json(schedule)
    } else {
      res.status(404).json({ message: 'Horario no encontrado' })
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message })
  }
})

// Obtener resumen de horarios
router.get('/summary', async (req: Request, res: Response) => {
  try {
    const summary = await Schedule.aggregate([
      {
        $group: {
          _id: { day: '$day', hour: '$hour' },
          count: { $sum: 1 }
        }
      },
      {
        $sort: { '_id.day': 1, '_id.hour': 1 }
      }
    ])
    res.json(summary)
  } catch (error) {
    res.status(500).json({ message: (error as Error).message })
  }
})

export default router