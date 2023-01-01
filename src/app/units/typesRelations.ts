import { Prisma } from '@prisma/client';

const brandWithVehiclesAndProducts = Prisma.validator<Prisma.BrandsArgs>()({include:{vehicles:true,products:true}})

