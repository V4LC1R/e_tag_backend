import {Router} from 'express'
import { RegisterServiceProvider } from './app/domains/register/Providers/RouteServiceProvider'

const globalRouter  = Router()

//registro de Rotas de dominios
globalRouter.use(new RegisterServiceProvider().getRoutes())


export {globalRouter}