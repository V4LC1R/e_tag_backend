import express from "express"
import dotenv from 'dotenv'

import { print } from "./app/units/RouterPrinter"
import { globalRouter } from "./routes"

dotenv.config()

const app = express()

app.use(express.json())

app.use(globalRouter)

app.listen(3333,()=>{   
    // function to see all register routes
  app._router.stack.forEach(print.bind(null, []))
  console.log('Server Run!')
})