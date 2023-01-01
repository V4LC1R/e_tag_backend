import {Router} from 'express'
import { RegisterServiceProvider } from './app/domains/register/Providers/RouteServiceProvider'


const globalRouter  = Router()

//registro de Rotas de dominio
globalRouter.use(new RegisterServiceProvider().getRoutes())

globalRouter.post('/ttt',(req,res)=>{
    console.log(">::",req)
})

export {globalRouter}