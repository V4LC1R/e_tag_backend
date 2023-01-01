
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.8.0
 * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
 */
Prisma.prismaVersion = {
  client: "4.8.0",
  engine: "d6e67a83f971b175a593ccc12e15c4a757f93ffe"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.BrandsScalarFieldEnum = makeEnum({
  id: 'id',
  name_brand: 'name_brand',
  prefix: 'prefix',
  class: 'class'
});

exports.Prisma.ImagesScalarFieldEnum = makeEnum({
  id: 'id',
  url: 'url',
  is_main: 'is_main',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ImagesToBradsScalarFieldEnum = makeEnum({
  id: 'id',
  id_image: 'id_image',
  id_brand: 'id_brand',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ImagesToProductsScalarFieldEnum = makeEnum({
  id: 'id',
  id_image: 'id_image',
  id_product: 'id_product',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ImagesToVehiclesScalarFieldEnum = makeEnum({
  id: 'id',
  id_image: 'id_image',
  id_vehicle: 'id_vehicle',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ProductsScalarFieldEnum = makeEnum({
  id: 'id',
  name_product: 'name_product',
  id_brand: 'id_brand',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.ProductsToVehicleScalarFieldEnum = makeEnum({
  id: 'id',
  id_product: 'id_product',
  id_vehicle: 'id_vehicle',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.VehiclesScalarFieldEnum = makeEnum({
  id: 'id',
  name_vehicles: 'name_vehicles',
  id_brand: 'id_brand',
  description: 'description',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});


exports.Prisma.ModelName = makeEnum({
  Brands: 'Brands',
  Vehicles: 'Vehicles',
  Products: 'Products',
  Images: 'Images',
  ImagesToProducts: 'ImagesToProducts',
  ImagesToVehicles: 'ImagesToVehicles',
  ImagesToBrads: 'ImagesToBrads',
  ProductsToVehicle: 'ProductsToVehicle'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
