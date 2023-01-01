import { Brands } from "@prisma/client"
import { prisma } from "@prismaClient/client"

type BrandServiceData={
  id?: number
  name:string,
  prefix:string,
  classType:number
}

export class BrandService{
    async create({name,prefix,classType}:BrandServiceData):Promise<Brands>{
        try{

            const brand = await prisma.brands.create({data:{
                name_brand:name,
                prefix,
                class:classType
            }})

            return brand
        }catch(e){
            console.log(e)
            throw new Error('Err to create Brand!')
        }
    }

    async delete(id:number):Promise<void | Error>{
        try{

            const brand = await this.getOne(id);

            if(brand.products.length > 0 || brand.vehicles.length > 0)
                throw new Error("This brand can't be deleted!")

            await prisma.brands.delete({where:{id:id}})
        }catch(e){
            console.log(e)
            throw new Error('Err to delete brand!')
        }
    }

    async update({id,classType,name,prefix}:BrandServiceData):Promise<Brands>{
        try{
            return await prisma.brands.update(
                {
                    where:{id:id},
                    data:{
                        name_brand:name,
                        prefix,
                        class:classType
                    }
                }
            )
        }catch(e){
            console.log(e)
            throw new Error('Err to update brand!')
        }
    }

    async getOne(id:number):Promise<Brands>{
        try{
            return await prisma.brands.findUnique(
                {
                    where:{id:id},
                    include:{products:true,vehicles:true}
                }
            )
        }catch(e){
            console.log(e)
            throw new Error('Err to find brand!')
        }
    }

    async getAll():Promise<Brands[]>{
        try{
            return await prisma.brands.findMany()
        }catch(e){
            console.log(e)
            throw new Error('Err to find Brands!')
        }
    }
}