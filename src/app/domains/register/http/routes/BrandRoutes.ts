import { Router } from 'express';
import { BrandController } from '../controllers/BrandController';


export function BrandRouter():Router{
    const router = Router()

    //instancia das classes de contrutores
    const brandController =  new BrandController()

    //setting de rotas 
    router.get('/',brandController.index)
    router.get('/:id',brandController.show)
    router.put('/update/:id',brandController.update)
    router.post('/create',brandController.store)
    router.delete('/delete/:id',brandController.delete)

    return router

}