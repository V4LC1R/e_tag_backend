import { Router } from 'express'
import { RouterProviderInterface } from '../../../units/ProviderRouterInterface';
import { BrandRouter } from '../http/routes/BrandRoutes';


export class RegisterServiceProvider implements RouterProviderInterface{

    routes : Router = Router()

    constructor(){
        this.register()
    }

    register(){
        this.routes.use('/brand/',(req,res,next)=>{next()},BrandRouter())
        
    }

    getRoutes(): Router {
       return this.routes
    }

}




