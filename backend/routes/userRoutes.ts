import express, { Request, Response } from 'express'
import User, { IUser } from '../models/User'

const router = express.Router()

// Registro de usuario
router.post('/register', async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body
    const user: IUser = new User({ name, email, password })
    await user.save()
    res.status(201).json({ message: 'Usuario registrado exitosamente' })
  } catch (error) {
    res.status(400).json({ message: (error as Error).message })
  }
})

// Inicio de sesión
router.post('/login', async (req: Request, res: Response) => {
  // Implementar lógica de inicio de sesión
})

export default router