import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
import scheduleRoutes from './routes/scheduleRoutes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI as string)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error))

app.use('/api/users', userRoutes)
app.use('/api/schedules', scheduleRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})