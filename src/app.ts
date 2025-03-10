import express, { Application, Request, Response } from 'express'

import cors from 'cors'
import router from './routes'
import globalErrorHandler from './middleware/globalErrorHandler'
import notFoundRoute from './middleware/notFoundRoute'

const app: Application = express()
app.use(express.json())


app.use(cors({ origin: [], credentials: true, }))
app.use(express.urlencoded({ extended: true }));
app.use('/api', router)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Portfolio Server Live',
  })
})

//global error handeler
 app.use(globalErrorHandler)
// //not found error
 app.use(notFoundRoute)

export default app
