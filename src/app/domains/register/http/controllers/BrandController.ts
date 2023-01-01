import { BrandService } from './../../services/BrandService';
import {Request,Response} from 'express'


export class BrandController {
    
    async index(req:Request,res:Response){
        try {
          const brandService = new BrandService()

          const brands = await brandService.getAll();

          return res.status(200).json(brands)
          
        } catch (e) {
          console.log(e)
          return res.status(500).json({message:'Err to ',err:e})
        }
    }

    async show(req:Request,res:Response){
        try {
            const {id} = req.params

            const brandService = new BrandService()

            const brand = await brandService.getOne(parseInt(id))

            return res.status(200).json(brand)

        } catch (e) {
          console.log(e)
          return res.status(500).json({message:e.message})
        }
    }

    async store(req:Request,res:Response){
      try {
            const {name,prefix,classType} = req.body

            const brandService = new BrandService()

            const brand = await brandService.create({name,prefix,classType})

            return res.status(200).json(brand)
      } catch (e) {
        console.log(e)
        return res.status(500).json({message:'Err to ',err:e})
      }
    }

    async delete(req:Request,res:Response){
        try {
            const {id} = req.params

            const brandService = new BrandService()

            const brand = await brandService.delete(parseInt(id))

            return res.status(200).json({message:'Brand deleted!'})
        } catch (e) {
          console.log(e)
          return res.status(500).json({message:'Err to ',err:e})
        }
    }

    async update(req:Request,res:Response){
        try {
            const {id} = req.params

            const {name,prefix,classType} = req.body

            const brandService = new BrandService()

            const brand = await brandService.update({id:parseInt(id),name,prefix,classType})

            return res.status(200).json(brand)
        } catch (e) {
          console.log(e)
          return res.status(500).json({message:'Err to ',err:e})
        }
    }
}