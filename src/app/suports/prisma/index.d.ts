
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Brands
 * 
 */
export type Brands = {
  id: number
  name_brand: string
  prefix: string
  class: number
}

/**
 * Model Vehicles
 * 
 */
export type Vehicles = {
  id: number
  name_vehicles: string
  id_brand: number
  description: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Products
 * 
 */
export type Products = {
  id: number
  name_product: string
  id_brand: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Images
 * 
 */
export type Images = {
  id: number
  url: string
  is_main: boolean
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ImagesToProducts
 * 
 */
export type ImagesToProducts = {
  id: number
  id_image: number
  id_product: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ImagesToVehicles
 * 
 */
export type ImagesToVehicles = {
  id: number
  id_image: number
  id_vehicle: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ImagesToBrads
 * 
 */
export type ImagesToBrads = {
  id: number
  id_image: number
  id_brand: number
  createdAt: Date
  updatedAt: Date
}

/**
 * Model ProductsToVehicle
 * 
 */
export type ProductsToVehicle = {
  id: number
  id_product: number
  id_vehicle: number
  description: string | null
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Brands
 * const brands = await prisma.brands.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Brands
   * const brands = await prisma.brands.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

  $transaction<R>(fn: (prisma: Prisma.TransactionClient) => Promise<R>, options?: {maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel}): Promise<R>;

      /**
   * `prisma.brands`: Exposes CRUD operations for the **Brands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brands.findMany()
    * ```
    */
  get brands(): Prisma.BrandsDelegate<GlobalReject>;

  /**
   * `prisma.vehicles`: Exposes CRUD operations for the **Vehicles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicles.findMany()
    * ```
    */
  get vehicles(): Prisma.VehiclesDelegate<GlobalReject>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<GlobalReject>;

  /**
   * `prisma.images`: Exposes CRUD operations for the **Images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.images.findMany()
    * ```
    */
  get images(): Prisma.ImagesDelegate<GlobalReject>;

  /**
   * `prisma.imagesToProducts`: Exposes CRUD operations for the **ImagesToProducts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImagesToProducts
    * const imagesToProducts = await prisma.imagesToProducts.findMany()
    * ```
    */
  get imagesToProducts(): Prisma.ImagesToProductsDelegate<GlobalReject>;

  /**
   * `prisma.imagesToVehicles`: Exposes CRUD operations for the **ImagesToVehicles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImagesToVehicles
    * const imagesToVehicles = await prisma.imagesToVehicles.findMany()
    * ```
    */
  get imagesToVehicles(): Prisma.ImagesToVehiclesDelegate<GlobalReject>;

  /**
   * `prisma.imagesToBrads`: Exposes CRUD operations for the **ImagesToBrads** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImagesToBrads
    * const imagesToBrads = await prisma.imagesToBrads.findMany()
    * ```
    */
  get imagesToBrads(): Prisma.ImagesToBradsDelegate<GlobalReject>;

  /**
   * `prisma.productsToVehicle`: Exposes CRUD operations for the **ProductsToVehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsToVehicles
    * const productsToVehicles = await prisma.productsToVehicle.findMany()
    * ```
    */
  get productsToVehicle(): Prisma.ProductsToVehicleDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.8.0
   * Query Engine version: d6e67a83f971b175a593ccc12e15c4a757f93ffe
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Brands: 'Brands',
    Vehicles: 'Vehicles',
    Products: 'Products',
    Images: 'Images',
    ImagesToProducts: 'ImagesToProducts',
    ImagesToVehicles: 'ImagesToVehicles',
    ImagesToBrads: 'ImagesToBrads',
    ProductsToVehicle: 'ProductsToVehicle'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BrandsCountOutputType
   */


  export type BrandsCountOutputType = {
    products: number
    vehicles: number
    imagesBrands: number
  }

  export type BrandsCountOutputTypeSelect = {
    products?: boolean
    vehicles?: boolean
    imagesBrands?: boolean
  }

  export type BrandsCountOutputTypeGetPayload<S extends boolean | null | undefined | BrandsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? BrandsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (BrandsCountOutputTypeArgs)
    ? BrandsCountOutputType 
    : S extends { select: any } & (BrandsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof BrandsCountOutputType ? BrandsCountOutputType[P] : never
  } 
      : BrandsCountOutputType




  // Custom InputTypes

  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BrandsCountOutputType
     * 
    **/
    select?: BrandsCountOutputTypeSelect | null
  }



  /**
   * Count Type VehiclesCountOutputType
   */


  export type VehiclesCountOutputType = {
    imagesVehicles: number
    productsVehicle: number
  }

  export type VehiclesCountOutputTypeSelect = {
    imagesVehicles?: boolean
    productsVehicle?: boolean
  }

  export type VehiclesCountOutputTypeGetPayload<S extends boolean | null | undefined | VehiclesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? VehiclesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (VehiclesCountOutputTypeArgs)
    ? VehiclesCountOutputType 
    : S extends { select: any } & (VehiclesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof VehiclesCountOutputType ? VehiclesCountOutputType[P] : never
  } 
      : VehiclesCountOutputType




  // Custom InputTypes

  /**
   * VehiclesCountOutputType without action
   */
  export type VehiclesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the VehiclesCountOutputType
     * 
    **/
    select?: VehiclesCountOutputTypeSelect | null
  }



  /**
   * Count Type ProductsCountOutputType
   */


  export type ProductsCountOutputType = {
    imagesProducts: number
    productsVehicle: number
  }

  export type ProductsCountOutputTypeSelect = {
    imagesProducts?: boolean
    productsVehicle?: boolean
  }

  export type ProductsCountOutputTypeGetPayload<S extends boolean | null | undefined | ProductsCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductsCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ProductsCountOutputTypeArgs)
    ? ProductsCountOutputType 
    : S extends { select: any } & (ProductsCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ProductsCountOutputType ? ProductsCountOutputType[P] : never
  } 
      : ProductsCountOutputType




  // Custom InputTypes

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     * 
    **/
    select?: ProductsCountOutputTypeSelect | null
  }



  /**
   * Count Type ImagesCountOutputType
   */


  export type ImagesCountOutputType = {
    imagesProducts: number
    imagesVehicles: number
    imagesBrands: number
  }

  export type ImagesCountOutputTypeSelect = {
    imagesProducts?: boolean
    imagesVehicles?: boolean
    imagesBrands?: boolean
  }

  export type ImagesCountOutputTypeGetPayload<S extends boolean | null | undefined | ImagesCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ImagesCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ImagesCountOutputTypeArgs)
    ? ImagesCountOutputType 
    : S extends { select: any } & (ImagesCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ImagesCountOutputType ? ImagesCountOutputType[P] : never
  } 
      : ImagesCountOutputType




  // Custom InputTypes

  /**
   * ImagesCountOutputType without action
   */
  export type ImagesCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ImagesCountOutputType
     * 
    **/
    select?: ImagesCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Brands
   */


  export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null
    _avg: BrandsAvgAggregateOutputType | null
    _sum: BrandsSumAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  export type BrandsAvgAggregateOutputType = {
    id: number | null
    class: number | null
  }

  export type BrandsSumAggregateOutputType = {
    id: number | null
    class: number | null
  }

  export type BrandsMinAggregateOutputType = {
    id: number | null
    name_brand: string | null
    prefix: string | null
    class: number | null
  }

  export type BrandsMaxAggregateOutputType = {
    id: number | null
    name_brand: string | null
    prefix: string | null
    class: number | null
  }

  export type BrandsCountAggregateOutputType = {
    id: number
    name_brand: number
    prefix: number
    class: number
    _all: number
  }


  export type BrandsAvgAggregateInputType = {
    id?: true
    class?: true
  }

  export type BrandsSumAggregateInputType = {
    id?: true
    class?: true
  }

  export type BrandsMinAggregateInputType = {
    id?: true
    name_brand?: true
    prefix?: true
    class?: true
  }

  export type BrandsMaxAggregateInputType = {
    id?: true
    name_brand?: true
    prefix?: true
    class?: true
  }

  export type BrandsCountAggregateInputType = {
    id?: true
    name_brand?: true
    prefix?: true
    class?: true
    _all?: true
  }

  export type BrandsAggregateArgs = {
    /**
     * Filter which Brands to aggregate.
     * 
    **/
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     * 
    **/
    orderBy?: Enumerable<BrandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrandsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrandsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandsMaxAggregateInputType
  }

  export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
        [P in keyof T & keyof AggregateBrands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrands[P]>
      : GetScalarType<T[P], AggregateBrands[P]>
  }




  export type BrandsGroupByArgs = {
    where?: BrandsWhereInput
    orderBy?: Enumerable<BrandsOrderByWithAggregationInput>
    by: Array<BrandsScalarFieldEnum>
    having?: BrandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandsCountAggregateInputType | true
    _avg?: BrandsAvgAggregateInputType
    _sum?: BrandsSumAggregateInputType
    _min?: BrandsMinAggregateInputType
    _max?: BrandsMaxAggregateInputType
  }


  export type BrandsGroupByOutputType = {
    id: number
    name_brand: string
    prefix: string
    class: number
    _count: BrandsCountAggregateOutputType | null
    _avg: BrandsAvgAggregateOutputType | null
    _sum: BrandsSumAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  type GetBrandsGroupByPayload<T extends BrandsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BrandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsGroupByOutputType[P]>
        }
      >
    >


  export type BrandsSelect = {
    id?: boolean
    name_brand?: boolean
    prefix?: boolean
    class?: boolean
    products?: boolean | BrandsProductsArgs
    vehicles?: boolean | BrandsVehiclesArgs
    imagesBrands?: boolean | BrandsImagesBrandsArgs
    _count?: boolean | BrandsCountOutputTypeArgs
  }


  export type BrandsInclude = {
    products?: boolean | BrandsProductsArgs
    vehicles?: boolean | BrandsVehiclesArgs
    imagesBrands?: boolean | BrandsImagesBrandsArgs
    _count?: boolean | BrandsCountOutputTypeArgs
  } 

  export type BrandsGetPayload<S extends boolean | null | undefined | BrandsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Brands :
    S extends undefined ? never :
    S extends { include: any } & (BrandsArgs | BrandsFindManyArgs)
    ? Brands  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'products' ? Array < ProductsGetPayload<S['include'][P]>>  :
        P extends 'vehicles' ? Array < VehiclesGetPayload<S['include'][P]>>  :
        P extends 'imagesBrands' ? Array < ImagesToBradsGetPayload<S['include'][P]>>  :
        P extends '_count' ? BrandsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (BrandsArgs | BrandsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'products' ? Array < ProductsGetPayload<S['select'][P]>>  :
        P extends 'vehicles' ? Array < VehiclesGetPayload<S['select'][P]>>  :
        P extends 'imagesBrands' ? Array < ImagesToBradsGetPayload<S['select'][P]>>  :
        P extends '_count' ? BrandsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Brands ? Brands[P] : never
  } 
      : Brands


  type BrandsCountArgs = Merge<
    Omit<BrandsFindManyArgs, 'select' | 'include'> & {
      select?: BrandsCountAggregateInputType | true
    }
  >

  export interface BrandsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Brands that matches the filter.
     * @param {BrandsFindUniqueArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BrandsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BrandsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Brands'> extends True ? Prisma__BrandsClient<BrandsGetPayload<T>> : Prisma__BrandsClient<BrandsGetPayload<T> | null, null>

    /**
     * Find one Brands that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BrandsFindUniqueOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BrandsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, BrandsFindUniqueOrThrowArgs>
    ): Prisma__BrandsClient<BrandsGetPayload<T>>

    /**
     * Find the first Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BrandsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BrandsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Brands'> extends True ? Prisma__BrandsClient<BrandsGetPayload<T>> : Prisma__BrandsClient<BrandsGetPayload<T> | null, null>

    /**
     * Find the first Brands that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BrandsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, BrandsFindFirstOrThrowArgs>
    ): Prisma__BrandsClient<BrandsGetPayload<T>>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brands.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandsWithIdOnly = await prisma.brands.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BrandsFindManyArgs>(
      args?: SelectSubset<T, BrandsFindManyArgs>
    ): PrismaPromise<Array<BrandsGetPayload<T>>>

    /**
     * Create a Brands.
     * @param {BrandsCreateArgs} args - Arguments to create a Brands.
     * @example
     * // Create one Brands
     * const Brands = await prisma.brands.create({
     *   data: {
     *     // ... data to create a Brands
     *   }
     * })
     * 
    **/
    create<T extends BrandsCreateArgs>(
      args: SelectSubset<T, BrandsCreateArgs>
    ): Prisma__BrandsClient<BrandsGetPayload<T>>

    /**
     * Create many Brands.
     *     @param {BrandsCreateManyArgs} args - Arguments to create many Brands.
     *     @example
     *     // Create many Brands
     *     const brands = await prisma.brands.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BrandsCreateManyArgs>(
      args?: SelectSubset<T, BrandsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Brands.
     * @param {BrandsDeleteArgs} args - Arguments to delete one Brands.
     * @example
     * // Delete one Brands
     * const Brands = await prisma.brands.delete({
     *   where: {
     *     // ... filter to delete one Brands
     *   }
     * })
     * 
    **/
    delete<T extends BrandsDeleteArgs>(
      args: SelectSubset<T, BrandsDeleteArgs>
    ): Prisma__BrandsClient<BrandsGetPayload<T>>

    /**
     * Update one Brands.
     * @param {BrandsUpdateArgs} args - Arguments to update one Brands.
     * @example
     * // Update one Brands
     * const brands = await prisma.brands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BrandsUpdateArgs>(
      args: SelectSubset<T, BrandsUpdateArgs>
    ): Prisma__BrandsClient<BrandsGetPayload<T>>

    /**
     * Delete zero or more Brands.
     * @param {BrandsDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BrandsDeleteManyArgs>(
      args?: SelectSubset<T, BrandsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BrandsUpdateManyArgs>(
      args: SelectSubset<T, BrandsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Brands.
     * @param {BrandsUpsertArgs} args - Arguments to update or create a Brands.
     * @example
     * // Update or create a Brands
     * const brands = await prisma.brands.upsert({
     *   create: {
     *     // ... data to create a Brands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brands we want to update
     *   }
     * })
    **/
    upsert<T extends BrandsUpsertArgs>(
      args: SelectSubset<T, BrandsUpsertArgs>
    ): Prisma__BrandsClient<BrandsGetPayload<T>>

    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brands.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandsCountArgs>(
      args?: Subset<T, BrandsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BrandsAggregateArgs>(args: Subset<T, BrandsAggregateArgs>): PrismaPromise<GetBrandsAggregateType<T>>

    /**
     * Group by Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BrandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandsGroupByArgs['orderBy'] }
        : { orderBy?: BrandsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BrandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Brands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BrandsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    products<T extends BrandsProductsArgs= {}>(args?: Subset<T, BrandsProductsArgs>): PrismaPromise<Array<ProductsGetPayload<T>>| Null>;

    vehicles<T extends BrandsVehiclesArgs= {}>(args?: Subset<T, BrandsVehiclesArgs>): PrismaPromise<Array<VehiclesGetPayload<T>>| Null>;

    imagesBrands<T extends BrandsImagesBrandsArgs= {}>(args?: Subset<T, BrandsImagesBrandsArgs>): PrismaPromise<Array<ImagesToBradsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Brands base type for findUnique actions
   */
  export type BrandsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Brands
     * 
    **/
    select?: BrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandsInclude | null
    /**
     * Filter, which Brands to fetch.
     * 
    **/
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands findUnique
   */
  export interface BrandsFindUniqueArgs extends BrandsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Brands findUniqueOrThrow
   */
  export type BrandsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Brands
     * 
    **/
    select?: BrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandsInclude | null
    /**
     * Filter, which Brands to fetch.
     * 
    **/
    where: BrandsWhereUniqueInput
  }


  /**
   * Brands base type for findFirst actions
   */
  export type BrandsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Brands
     * 
    **/
    select?: BrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandsInclude | null
    /**
     * Filter, which Brands to fetch.
     * 
    **/
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     * 
    **/
    orderBy?: Enumerable<BrandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     * 
    **/
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     * 
    **/
    distinct?: Enumerable<BrandsScalarFieldEnum>
  }

  /**
   * Brands findFirst
   */
  export interface BrandsFindFirstArgs extends BrandsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Brands findFirstOrThrow
   */
  export type BrandsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Brands
     * 
    **/
    select?: BrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandsInclude | null
    /**
     * Filter, which Brands to fetch.
     * 
    **/
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     * 
    **/
    orderBy?: Enumerable<BrandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     * 
    **/
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     * 
    **/
    distinct?: Enumerable<BrandsScalarFieldEnum>
  }


  /**
   * Brands findMany
   */
  export type BrandsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Brands
     * 
    **/
    select?: BrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandsInclude | null
    /**
     * Filter, which Brands to fetch.
     * 
    **/
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     * 
    **/
    orderBy?: Enumerable<BrandsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     * 
    **/
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BrandsScalarFieldEnum>
  }


  /**
   * Brands create
   */
  export type BrandsCreateArgs = {
    /**
     * Select specific fields to fetch from the Brands
     * 
    **/
    select?: BrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandsInclude | null
    /**
     * The data needed to create a Brands.
     * 
    **/
    data: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
  }


  /**
   * Brands createMany
   */
  export type BrandsCreateManyArgs = {
    /**
     * The data used to create many Brands.
     * 
    **/
    data: Enumerable<BrandsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Brands update
   */
  export type BrandsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Brands
     * 
    **/
    select?: BrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandsInclude | null
    /**
     * The data needed to update a Brands.
     * 
    **/
    data: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
    /**
     * Choose, which Brands to update.
     * 
    **/
    where: BrandsWhereUniqueInput
  }


  /**
   * Brands updateMany
   */
  export type BrandsUpdateManyArgs = {
    /**
     * The data used to update Brands.
     * 
    **/
    data: XOR<BrandsUpdateManyMutationInput, BrandsUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     * 
    **/
    where?: BrandsWhereInput
  }


  /**
   * Brands upsert
   */
  export type BrandsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Brands
     * 
    **/
    select?: BrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandsInclude | null
    /**
     * The filter to search for the Brands to update in case it exists.
     * 
    **/
    where: BrandsWhereUniqueInput
    /**
     * In case the Brands found by the `where` argument doesn't exist, create a new Brands with this data.
     * 
    **/
    create: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
    /**
     * In case the Brands was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
  }


  /**
   * Brands delete
   */
  export type BrandsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Brands
     * 
    **/
    select?: BrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandsInclude | null
    /**
     * Filter which Brands to delete.
     * 
    **/
    where: BrandsWhereUniqueInput
  }


  /**
   * Brands deleteMany
   */
  export type BrandsDeleteManyArgs = {
    /**
     * Filter which Brands to delete
     * 
    **/
    where?: BrandsWhereInput
  }


  /**
   * Brands.products
   */
  export type BrandsProductsArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    where?: ProductsWhereInput
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * Brands.vehicles
   */
  export type BrandsVehiclesArgs = {
    /**
     * Select specific fields to fetch from the Vehicles
     * 
    **/
    select?: VehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehiclesInclude | null
    where?: VehiclesWhereInput
    orderBy?: Enumerable<VehiclesOrderByWithRelationInput>
    cursor?: VehiclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<VehiclesScalarFieldEnum>
  }


  /**
   * Brands.imagesBrands
   */
  export type BrandsImagesBrandsArgs = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
    where?: ImagesToBradsWhereInput
    orderBy?: Enumerable<ImagesToBradsOrderByWithRelationInput>
    cursor?: ImagesToBradsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ImagesToBradsScalarFieldEnum>
  }


  /**
   * Brands without action
   */
  export type BrandsArgs = {
    /**
     * Select specific fields to fetch from the Brands
     * 
    **/
    select?: BrandsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BrandsInclude | null
  }



  /**
   * Model Vehicles
   */


  export type AggregateVehicles = {
    _count: VehiclesCountAggregateOutputType | null
    _avg: VehiclesAvgAggregateOutputType | null
    _sum: VehiclesSumAggregateOutputType | null
    _min: VehiclesMinAggregateOutputType | null
    _max: VehiclesMaxAggregateOutputType | null
  }

  export type VehiclesAvgAggregateOutputType = {
    id: number | null
    id_brand: number | null
  }

  export type VehiclesSumAggregateOutputType = {
    id: number | null
    id_brand: number | null
  }

  export type VehiclesMinAggregateOutputType = {
    id: number | null
    name_vehicles: string | null
    id_brand: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehiclesMaxAggregateOutputType = {
    id: number | null
    name_vehicles: string | null
    id_brand: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VehiclesCountAggregateOutputType = {
    id: number
    name_vehicles: number
    id_brand: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VehiclesAvgAggregateInputType = {
    id?: true
    id_brand?: true
  }

  export type VehiclesSumAggregateInputType = {
    id?: true
    id_brand?: true
  }

  export type VehiclesMinAggregateInputType = {
    id?: true
    name_vehicles?: true
    id_brand?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehiclesMaxAggregateInputType = {
    id?: true
    name_vehicles?: true
    id_brand?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VehiclesCountAggregateInputType = {
    id?: true
    name_vehicles?: true
    id_brand?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VehiclesAggregateArgs = {
    /**
     * Filter which Vehicles to aggregate.
     * 
    **/
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<VehiclesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehiclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiclesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiclesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiclesMaxAggregateInputType
  }

  export type GetVehiclesAggregateType<T extends VehiclesAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicles[P]>
      : GetScalarType<T[P], AggregateVehicles[P]>
  }




  export type VehiclesGroupByArgs = {
    where?: VehiclesWhereInput
    orderBy?: Enumerable<VehiclesOrderByWithAggregationInput>
    by: Array<VehiclesScalarFieldEnum>
    having?: VehiclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiclesCountAggregateInputType | true
    _avg?: VehiclesAvgAggregateInputType
    _sum?: VehiclesSumAggregateInputType
    _min?: VehiclesMinAggregateInputType
    _max?: VehiclesMaxAggregateInputType
  }


  export type VehiclesGroupByOutputType = {
    id: number
    name_vehicles: string
    id_brand: number
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: VehiclesCountAggregateOutputType | null
    _avg: VehiclesAvgAggregateOutputType | null
    _sum: VehiclesSumAggregateOutputType | null
    _min: VehiclesMinAggregateOutputType | null
    _max: VehiclesMaxAggregateOutputType | null
  }

  type GetVehiclesGroupByPayload<T extends VehiclesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VehiclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiclesGroupByOutputType[P]>
            : GetScalarType<T[P], VehiclesGroupByOutputType[P]>
        }
      >
    >


  export type VehiclesSelect = {
    id?: boolean
    name_vehicles?: boolean
    id_brand?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandsArgs
    imagesVehicles?: boolean | VehiclesImagesVehiclesArgs
    productsVehicle?: boolean | VehiclesProductsVehicleArgs
    _count?: boolean | VehiclesCountOutputTypeArgs
  }


  export type VehiclesInclude = {
    brand?: boolean | BrandsArgs
    imagesVehicles?: boolean | VehiclesImagesVehiclesArgs
    productsVehicle?: boolean | VehiclesProductsVehicleArgs
    _count?: boolean | VehiclesCountOutputTypeArgs
  } 

  export type VehiclesGetPayload<S extends boolean | null | undefined | VehiclesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Vehicles :
    S extends undefined ? never :
    S extends { include: any } & (VehiclesArgs | VehiclesFindManyArgs)
    ? Vehicles  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'brand' ? BrandsGetPayload<S['include'][P]> :
        P extends 'imagesVehicles' ? Array < ImagesToVehiclesGetPayload<S['include'][P]>>  :
        P extends 'productsVehicle' ? Array < ProductsToVehicleGetPayload<S['include'][P]>>  :
        P extends '_count' ? VehiclesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (VehiclesArgs | VehiclesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'brand' ? BrandsGetPayload<S['select'][P]> :
        P extends 'imagesVehicles' ? Array < ImagesToVehiclesGetPayload<S['select'][P]>>  :
        P extends 'productsVehicle' ? Array < ProductsToVehicleGetPayload<S['select'][P]>>  :
        P extends '_count' ? VehiclesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Vehicles ? Vehicles[P] : never
  } 
      : Vehicles


  type VehiclesCountArgs = Merge<
    Omit<VehiclesFindManyArgs, 'select' | 'include'> & {
      select?: VehiclesCountAggregateInputType | true
    }
  >

  export interface VehiclesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Vehicles that matches the filter.
     * @param {VehiclesFindUniqueArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VehiclesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VehiclesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Vehicles'> extends True ? Prisma__VehiclesClient<VehiclesGetPayload<T>> : Prisma__VehiclesClient<VehiclesGetPayload<T> | null, null>

    /**
     * Find one Vehicles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VehiclesFindUniqueOrThrowArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VehiclesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VehiclesFindUniqueOrThrowArgs>
    ): Prisma__VehiclesClient<VehiclesGetPayload<T>>

    /**
     * Find the first Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesFindFirstArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VehiclesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VehiclesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Vehicles'> extends True ? Prisma__VehiclesClient<VehiclesGetPayload<T>> : Prisma__VehiclesClient<VehiclesGetPayload<T> | null, null>

    /**
     * Find the first Vehicles that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesFindFirstOrThrowArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VehiclesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VehiclesFindFirstOrThrowArgs>
    ): Prisma__VehiclesClient<VehiclesGetPayload<T>>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicles.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiclesWithIdOnly = await prisma.vehicles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VehiclesFindManyArgs>(
      args?: SelectSubset<T, VehiclesFindManyArgs>
    ): PrismaPromise<Array<VehiclesGetPayload<T>>>

    /**
     * Create a Vehicles.
     * @param {VehiclesCreateArgs} args - Arguments to create a Vehicles.
     * @example
     * // Create one Vehicles
     * const Vehicles = await prisma.vehicles.create({
     *   data: {
     *     // ... data to create a Vehicles
     *   }
     * })
     * 
    **/
    create<T extends VehiclesCreateArgs>(
      args: SelectSubset<T, VehiclesCreateArgs>
    ): Prisma__VehiclesClient<VehiclesGetPayload<T>>

    /**
     * Create many Vehicles.
     *     @param {VehiclesCreateManyArgs} args - Arguments to create many Vehicles.
     *     @example
     *     // Create many Vehicles
     *     const vehicles = await prisma.vehicles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VehiclesCreateManyArgs>(
      args?: SelectSubset<T, VehiclesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicles.
     * @param {VehiclesDeleteArgs} args - Arguments to delete one Vehicles.
     * @example
     * // Delete one Vehicles
     * const Vehicles = await prisma.vehicles.delete({
     *   where: {
     *     // ... filter to delete one Vehicles
     *   }
     * })
     * 
    **/
    delete<T extends VehiclesDeleteArgs>(
      args: SelectSubset<T, VehiclesDeleteArgs>
    ): Prisma__VehiclesClient<VehiclesGetPayload<T>>

    /**
     * Update one Vehicles.
     * @param {VehiclesUpdateArgs} args - Arguments to update one Vehicles.
     * @example
     * // Update one Vehicles
     * const vehicles = await prisma.vehicles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VehiclesUpdateArgs>(
      args: SelectSubset<T, VehiclesUpdateArgs>
    ): Prisma__VehiclesClient<VehiclesGetPayload<T>>

    /**
     * Delete zero or more Vehicles.
     * @param {VehiclesDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VehiclesDeleteManyArgs>(
      args?: SelectSubset<T, VehiclesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicles = await prisma.vehicles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VehiclesUpdateManyArgs>(
      args: SelectSubset<T, VehiclesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicles.
     * @param {VehiclesUpsertArgs} args - Arguments to update or create a Vehicles.
     * @example
     * // Update or create a Vehicles
     * const vehicles = await prisma.vehicles.upsert({
     *   create: {
     *     // ... data to create a Vehicles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicles we want to update
     *   }
     * })
    **/
    upsert<T extends VehiclesUpsertArgs>(
      args: SelectSubset<T, VehiclesUpsertArgs>
    ): Prisma__VehiclesClient<VehiclesGetPayload<T>>

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicles.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehiclesCountArgs>(
      args?: Subset<T, VehiclesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehiclesAggregateArgs>(args: Subset<T, VehiclesAggregateArgs>): PrismaPromise<GetVehiclesAggregateType<T>>

    /**
     * Group by Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehiclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiclesGroupByArgs['orderBy'] }
        : { orderBy?: VehiclesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehiclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiclesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VehiclesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    brand<T extends BrandsArgs= {}>(args?: Subset<T, BrandsArgs>): Prisma__BrandsClient<BrandsGetPayload<T> | Null>;

    imagesVehicles<T extends VehiclesImagesVehiclesArgs= {}>(args?: Subset<T, VehiclesImagesVehiclesArgs>): PrismaPromise<Array<ImagesToVehiclesGetPayload<T>>| Null>;

    productsVehicle<T extends VehiclesProductsVehicleArgs= {}>(args?: Subset<T, VehiclesProductsVehicleArgs>): PrismaPromise<Array<ProductsToVehicleGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Vehicles base type for findUnique actions
   */
  export type VehiclesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Vehicles
     * 
    **/
    select?: VehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehiclesInclude | null
    /**
     * Filter, which Vehicles to fetch.
     * 
    **/
    where: VehiclesWhereUniqueInput
  }

  /**
   * Vehicles findUnique
   */
  export interface VehiclesFindUniqueArgs extends VehiclesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Vehicles findUniqueOrThrow
   */
  export type VehiclesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Vehicles
     * 
    **/
    select?: VehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehiclesInclude | null
    /**
     * Filter, which Vehicles to fetch.
     * 
    **/
    where: VehiclesWhereUniqueInput
  }


  /**
   * Vehicles base type for findFirst actions
   */
  export type VehiclesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Vehicles
     * 
    **/
    select?: VehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehiclesInclude | null
    /**
     * Filter, which Vehicles to fetch.
     * 
    **/
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<VehiclesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     * 
    **/
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     * 
    **/
    distinct?: Enumerable<VehiclesScalarFieldEnum>
  }

  /**
   * Vehicles findFirst
   */
  export interface VehiclesFindFirstArgs extends VehiclesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Vehicles findFirstOrThrow
   */
  export type VehiclesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Vehicles
     * 
    **/
    select?: VehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehiclesInclude | null
    /**
     * Filter, which Vehicles to fetch.
     * 
    **/
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<VehiclesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     * 
    **/
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     * 
    **/
    distinct?: Enumerable<VehiclesScalarFieldEnum>
  }


  /**
   * Vehicles findMany
   */
  export type VehiclesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Vehicles
     * 
    **/
    select?: VehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehiclesInclude | null
    /**
     * Filter, which Vehicles to fetch.
     * 
    **/
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<VehiclesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     * 
    **/
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VehiclesScalarFieldEnum>
  }


  /**
   * Vehicles create
   */
  export type VehiclesCreateArgs = {
    /**
     * Select specific fields to fetch from the Vehicles
     * 
    **/
    select?: VehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehiclesInclude | null
    /**
     * The data needed to create a Vehicles.
     * 
    **/
    data: XOR<VehiclesCreateInput, VehiclesUncheckedCreateInput>
  }


  /**
   * Vehicles createMany
   */
  export type VehiclesCreateManyArgs = {
    /**
     * The data used to create many Vehicles.
     * 
    **/
    data: Enumerable<VehiclesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Vehicles update
   */
  export type VehiclesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Vehicles
     * 
    **/
    select?: VehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehiclesInclude | null
    /**
     * The data needed to update a Vehicles.
     * 
    **/
    data: XOR<VehiclesUpdateInput, VehiclesUncheckedUpdateInput>
    /**
     * Choose, which Vehicles to update.
     * 
    **/
    where: VehiclesWhereUniqueInput
  }


  /**
   * Vehicles updateMany
   */
  export type VehiclesUpdateManyArgs = {
    /**
     * The data used to update Vehicles.
     * 
    **/
    data: XOR<VehiclesUpdateManyMutationInput, VehiclesUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     * 
    **/
    where?: VehiclesWhereInput
  }


  /**
   * Vehicles upsert
   */
  export type VehiclesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Vehicles
     * 
    **/
    select?: VehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehiclesInclude | null
    /**
     * The filter to search for the Vehicles to update in case it exists.
     * 
    **/
    where: VehiclesWhereUniqueInput
    /**
     * In case the Vehicles found by the `where` argument doesn't exist, create a new Vehicles with this data.
     * 
    **/
    create: XOR<VehiclesCreateInput, VehiclesUncheckedCreateInput>
    /**
     * In case the Vehicles was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VehiclesUpdateInput, VehiclesUncheckedUpdateInput>
  }


  /**
   * Vehicles delete
   */
  export type VehiclesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Vehicles
     * 
    **/
    select?: VehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehiclesInclude | null
    /**
     * Filter which Vehicles to delete.
     * 
    **/
    where: VehiclesWhereUniqueInput
  }


  /**
   * Vehicles deleteMany
   */
  export type VehiclesDeleteManyArgs = {
    /**
     * Filter which Vehicles to delete
     * 
    **/
    where?: VehiclesWhereInput
  }


  /**
   * Vehicles.imagesVehicles
   */
  export type VehiclesImagesVehiclesArgs = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
    where?: ImagesToVehiclesWhereInput
    orderBy?: Enumerable<ImagesToVehiclesOrderByWithRelationInput>
    cursor?: ImagesToVehiclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ImagesToVehiclesScalarFieldEnum>
  }


  /**
   * Vehicles.productsVehicle
   */
  export type VehiclesProductsVehicleArgs = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
    where?: ProductsToVehicleWhereInput
    orderBy?: Enumerable<ProductsToVehicleOrderByWithRelationInput>
    cursor?: ProductsToVehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductsToVehicleScalarFieldEnum>
  }


  /**
   * Vehicles without action
   */
  export type VehiclesArgs = {
    /**
     * Select specific fields to fetch from the Vehicles
     * 
    **/
    select?: VehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VehiclesInclude | null
  }



  /**
   * Model Products
   */


  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    id_brand: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    id_brand: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name_product: string | null
    id_brand: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name_product: string | null
    id_brand: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name_product: number
    id_brand: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    id_brand?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    id_brand?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name_product?: true
    id_brand?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name_product?: true
    id_brand?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name_product?: true
    id_brand?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductsAggregateArgs = {
    /**
     * Filter which Products to aggregate.
     * 
    **/
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs = {
    where?: ProductsWhereInput
    orderBy?: Enumerable<ProductsOrderByWithAggregationInput>
    by: Array<ProductsScalarFieldEnum>
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }


  export type ProductsGroupByOutputType = {
    id: number
    name_product: string
    id_brand: number
    createdAt: Date
    updatedAt: Date
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect = {
    id?: boolean
    name_product?: boolean
    id_brand?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    brand?: boolean | BrandsArgs
    imagesProducts?: boolean | ProductsImagesProductsArgs
    productsVehicle?: boolean | ProductsProductsVehicleArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  }


  export type ProductsInclude = {
    brand?: boolean | BrandsArgs
    imagesProducts?: boolean | ProductsImagesProductsArgs
    productsVehicle?: boolean | ProductsProductsVehicleArgs
    _count?: boolean | ProductsCountOutputTypeArgs
  } 

  export type ProductsGetPayload<S extends boolean | null | undefined | ProductsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Products :
    S extends undefined ? never :
    S extends { include: any } & (ProductsArgs | ProductsFindManyArgs)
    ? Products  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'brand' ? BrandsGetPayload<S['include'][P]> :
        P extends 'imagesProducts' ? Array < ImagesToProductsGetPayload<S['include'][P]>>  :
        P extends 'productsVehicle' ? Array < ProductsToVehicleGetPayload<S['include'][P]>>  :
        P extends '_count' ? ProductsCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductsArgs | ProductsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'brand' ? BrandsGetPayload<S['select'][P]> :
        P extends 'imagesProducts' ? Array < ImagesToProductsGetPayload<S['select'][P]>>  :
        P extends 'productsVehicle' ? Array < ProductsToVehicleGetPayload<S['select'][P]>>  :
        P extends '_count' ? ProductsCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Products ? Products[P] : never
  } 
      : Products


  type ProductsCountArgs = Merge<
    Omit<ProductsFindManyArgs, 'select' | 'include'> & {
      select?: ProductsCountAggregateInputType | true
    }
  >

  export interface ProductsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Products'> extends True ? Prisma__ProductsClient<ProductsGetPayload<T>> : Prisma__ProductsClient<ProductsGetPayload<T> | null, null>

    /**
     * Find one Products that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductsFindUniqueOrThrowArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Products'> extends True ? Prisma__ProductsClient<ProductsGetPayload<T>> : Prisma__ProductsClient<ProductsGetPayload<T> | null, null>

    /**
     * Find the first Products that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductsFindFirstOrThrowArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductsFindManyArgs>(
      args?: SelectSubset<T, ProductsFindManyArgs>
    ): PrismaPromise<Array<ProductsGetPayload<T>>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
    **/
    create<T extends ProductsCreateArgs>(
      args: SelectSubset<T, ProductsCreateArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Create many Products.
     *     @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const products = await prisma.products.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductsCreateManyArgs>(
      args?: SelectSubset<T, ProductsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
    **/
    delete<T extends ProductsDeleteArgs>(
      args: SelectSubset<T, ProductsDeleteArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductsUpdateArgs>(
      args: SelectSubset<T, ProductsUpdateArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductsDeleteManyArgs>(
      args?: SelectSubset<T, ProductsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductsUpdateManyArgs>(
      args: SelectSubset<T, ProductsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
    **/
    upsert<T extends ProductsUpsertArgs>(
      args: SelectSubset<T, ProductsUpsertArgs>
    ): Prisma__ProductsClient<ProductsGetPayload<T>>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    brand<T extends BrandsArgs= {}>(args?: Subset<T, BrandsArgs>): Prisma__BrandsClient<BrandsGetPayload<T> | Null>;

    imagesProducts<T extends ProductsImagesProductsArgs= {}>(args?: Subset<T, ProductsImagesProductsArgs>): PrismaPromise<Array<ImagesToProductsGetPayload<T>>| Null>;

    productsVehicle<T extends ProductsProductsVehicleArgs= {}>(args?: Subset<T, ProductsProductsVehicleArgs>): PrismaPromise<Array<ProductsToVehicleGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Products base type for findUnique actions
   */
  export type ProductsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUnique
   */
  export interface ProductsFindUniqueArgs extends ProductsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where: ProductsWhereUniqueInput
  }


  /**
   * Products base type for findFirst actions
   */
  export type ProductsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }

  /**
   * Products findFirst
   */
  export interface ProductsFindFirstArgs extends ProductsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     * 
    **/
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     * 
    **/
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * Products findMany
   */
  export type ProductsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter, which Products to fetch.
     * 
    **/
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     * 
    **/
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductsScalarFieldEnum>
  }


  /**
   * Products create
   */
  export type ProductsCreateArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * The data needed to create a Products.
     * 
    **/
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }


  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs = {
    /**
     * The data used to create many Products.
     * 
    **/
    data: Enumerable<ProductsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Products update
   */
  export type ProductsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * The data needed to update a Products.
     * 
    **/
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     * 
    **/
    where: ProductsWhereUniqueInput
  }


  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs = {
    /**
     * The data used to update Products.
     * 
    **/
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     * 
    **/
    where?: ProductsWhereInput
  }


  /**
   * Products upsert
   */
  export type ProductsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * The filter to search for the Products to update in case it exists.
     * 
    **/
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     * 
    **/
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }


  /**
   * Products delete
   */
  export type ProductsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
    /**
     * Filter which Products to delete.
     * 
    **/
    where: ProductsWhereUniqueInput
  }


  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs = {
    /**
     * Filter which Products to delete
     * 
    **/
    where?: ProductsWhereInput
  }


  /**
   * Products.imagesProducts
   */
  export type ProductsImagesProductsArgs = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
    where?: ImagesToProductsWhereInput
    orderBy?: Enumerable<ImagesToProductsOrderByWithRelationInput>
    cursor?: ImagesToProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ImagesToProductsScalarFieldEnum>
  }


  /**
   * Products.productsVehicle
   */
  export type ProductsProductsVehicleArgs = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
    where?: ProductsToVehicleWhereInput
    orderBy?: Enumerable<ProductsToVehicleOrderByWithRelationInput>
    cursor?: ProductsToVehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProductsToVehicleScalarFieldEnum>
  }


  /**
   * Products without action
   */
  export type ProductsArgs = {
    /**
     * Select specific fields to fetch from the Products
     * 
    **/
    select?: ProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsInclude | null
  }



  /**
   * Model Images
   */


  export type AggregateImages = {
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  export type ImagesAvgAggregateOutputType = {
    id: number | null
  }

  export type ImagesSumAggregateOutputType = {
    id: number | null
  }

  export type ImagesMinAggregateOutputType = {
    id: number | null
    url: string | null
    is_main: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesMaxAggregateOutputType = {
    id: number | null
    url: string | null
    is_main: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesCountAggregateOutputType = {
    id: number
    url: number
    is_main: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImagesAvgAggregateInputType = {
    id?: true
  }

  export type ImagesSumAggregateInputType = {
    id?: true
  }

  export type ImagesMinAggregateInputType = {
    id?: true
    url?: true
    is_main?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesMaxAggregateInputType = {
    id?: true
    url?: true
    is_main?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesCountAggregateInputType = {
    id?: true
    url?: true
    is_main?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImagesAggregateArgs = {
    /**
     * Filter which Images to aggregate.
     * 
    **/
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesMaxAggregateInputType
  }

  export type GetImagesAggregateType<T extends ImagesAggregateArgs> = {
        [P in keyof T & keyof AggregateImages]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImages[P]>
      : GetScalarType<T[P], AggregateImages[P]>
  }




  export type ImagesGroupByArgs = {
    where?: ImagesWhereInput
    orderBy?: Enumerable<ImagesOrderByWithAggregationInput>
    by: Array<ImagesScalarFieldEnum>
    having?: ImagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesCountAggregateInputType | true
    _avg?: ImagesAvgAggregateInputType
    _sum?: ImagesSumAggregateInputType
    _min?: ImagesMinAggregateInputType
    _max?: ImagesMaxAggregateInputType
  }


  export type ImagesGroupByOutputType = {
    id: number
    url: string
    is_main: boolean
    createdAt: Date
    updatedAt: Date
    _count: ImagesCountAggregateOutputType | null
    _avg: ImagesAvgAggregateOutputType | null
    _sum: ImagesSumAggregateOutputType | null
    _min: ImagesMinAggregateOutputType | null
    _max: ImagesMaxAggregateOutputType | null
  }

  type GetImagesGroupByPayload<T extends ImagesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ImagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesSelect = {
    id?: boolean
    url?: boolean
    is_main?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imagesProducts?: boolean | ImagesImagesProductsArgs
    imagesVehicles?: boolean | ImagesImagesVehiclesArgs
    imagesBrands?: boolean | ImagesImagesBrandsArgs
    _count?: boolean | ImagesCountOutputTypeArgs
  }


  export type ImagesInclude = {
    imagesProducts?: boolean | ImagesImagesProductsArgs
    imagesVehicles?: boolean | ImagesImagesVehiclesArgs
    imagesBrands?: boolean | ImagesImagesBrandsArgs
    _count?: boolean | ImagesCountOutputTypeArgs
  } 

  export type ImagesGetPayload<S extends boolean | null | undefined | ImagesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Images :
    S extends undefined ? never :
    S extends { include: any } & (ImagesArgs | ImagesFindManyArgs)
    ? Images  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'imagesProducts' ? Array < ImagesToProductsGetPayload<S['include'][P]>>  :
        P extends 'imagesVehicles' ? Array < ImagesToVehiclesGetPayload<S['include'][P]>>  :
        P extends 'imagesBrands' ? Array < ImagesToBradsGetPayload<S['include'][P]>>  :
        P extends '_count' ? ImagesCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ImagesArgs | ImagesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'imagesProducts' ? Array < ImagesToProductsGetPayload<S['select'][P]>>  :
        P extends 'imagesVehicles' ? Array < ImagesToVehiclesGetPayload<S['select'][P]>>  :
        P extends 'imagesBrands' ? Array < ImagesToBradsGetPayload<S['select'][P]>>  :
        P extends '_count' ? ImagesCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Images ? Images[P] : never
  } 
      : Images


  type ImagesCountArgs = Merge<
    Omit<ImagesFindManyArgs, 'select' | 'include'> & {
      select?: ImagesCountAggregateInputType | true
    }
  >

  export interface ImagesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Images that matches the filter.
     * @param {ImagesFindUniqueArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImagesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImagesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Images'> extends True ? Prisma__ImagesClient<ImagesGetPayload<T>> : Prisma__ImagesClient<ImagesGetPayload<T> | null, null>

    /**
     * Find one Images that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImagesFindUniqueOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImagesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ImagesFindUniqueOrThrowArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Find the first Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImagesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImagesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Images'> extends True ? Prisma__ImagesClient<ImagesGetPayload<T>> : Prisma__ImagesClient<ImagesGetPayload<T> | null, null>

    /**
     * Find the first Images that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindFirstOrThrowArgs} args - Arguments to find a Images
     * @example
     * // Get one Images
     * const images = await prisma.images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImagesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImagesFindFirstOrThrowArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.images.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesWithIdOnly = await prisma.images.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImagesFindManyArgs>(
      args?: SelectSubset<T, ImagesFindManyArgs>
    ): PrismaPromise<Array<ImagesGetPayload<T>>>

    /**
     * Create a Images.
     * @param {ImagesCreateArgs} args - Arguments to create a Images.
     * @example
     * // Create one Images
     * const Images = await prisma.images.create({
     *   data: {
     *     // ... data to create a Images
     *   }
     * })
     * 
    **/
    create<T extends ImagesCreateArgs>(
      args: SelectSubset<T, ImagesCreateArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Create many Images.
     *     @param {ImagesCreateManyArgs} args - Arguments to create many Images.
     *     @example
     *     // Create many Images
     *     const images = await prisma.images.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImagesCreateManyArgs>(
      args?: SelectSubset<T, ImagesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Images.
     * @param {ImagesDeleteArgs} args - Arguments to delete one Images.
     * @example
     * // Delete one Images
     * const Images = await prisma.images.delete({
     *   where: {
     *     // ... filter to delete one Images
     *   }
     * })
     * 
    **/
    delete<T extends ImagesDeleteArgs>(
      args: SelectSubset<T, ImagesDeleteArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Update one Images.
     * @param {ImagesUpdateArgs} args - Arguments to update one Images.
     * @example
     * // Update one Images
     * const images = await prisma.images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImagesUpdateArgs>(
      args: SelectSubset<T, ImagesUpdateArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Delete zero or more Images.
     * @param {ImagesDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImagesDeleteManyArgs>(
      args?: SelectSubset<T, ImagesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const images = await prisma.images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImagesUpdateManyArgs>(
      args: SelectSubset<T, ImagesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Images.
     * @param {ImagesUpsertArgs} args - Arguments to update or create a Images.
     * @example
     * // Update or create a Images
     * const images = await prisma.images.upsert({
     *   create: {
     *     // ... data to create a Images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Images we want to update
     *   }
     * })
    **/
    upsert<T extends ImagesUpsertArgs>(
      args: SelectSubset<T, ImagesUpsertArgs>
    ): Prisma__ImagesClient<ImagesGetPayload<T>>

    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.images.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImagesCountArgs>(
      args?: Subset<T, ImagesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesAggregateArgs>(args: Subset<T, ImagesAggregateArgs>): PrismaPromise<GetImagesAggregateType<T>>

    /**
     * Group by Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImagesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    imagesProducts<T extends ImagesImagesProductsArgs= {}>(args?: Subset<T, ImagesImagesProductsArgs>): PrismaPromise<Array<ImagesToProductsGetPayload<T>>| Null>;

    imagesVehicles<T extends ImagesImagesVehiclesArgs= {}>(args?: Subset<T, ImagesImagesVehiclesArgs>): PrismaPromise<Array<ImagesToVehiclesGetPayload<T>>| Null>;

    imagesBrands<T extends ImagesImagesBrandsArgs= {}>(args?: Subset<T, ImagesImagesBrandsArgs>): PrismaPromise<Array<ImagesToBradsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Images base type for findUnique actions
   */
  export type ImagesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where: ImagesWhereUniqueInput
  }

  /**
   * Images findUnique
   */
  export interface ImagesFindUniqueArgs extends ImagesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Images findUniqueOrThrow
   */
  export type ImagesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where: ImagesWhereUniqueInput
  }


  /**
   * Images base type for findFirst actions
   */
  export type ImagesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     * 
    **/
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     * 
    **/
    distinct?: Enumerable<ImagesScalarFieldEnum>
  }

  /**
   * Images findFirst
   */
  export interface ImagesFindFirstArgs extends ImagesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Images findFirstOrThrow
   */
  export type ImagesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     * 
    **/
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     * 
    **/
    distinct?: Enumerable<ImagesScalarFieldEnum>
  }


  /**
   * Images findMany
   */
  export type ImagesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter, which Images to fetch.
     * 
    **/
    where?: ImagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     * 
    **/
    cursor?: ImagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImagesScalarFieldEnum>
  }


  /**
   * Images create
   */
  export type ImagesCreateArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * The data needed to create a Images.
     * 
    **/
    data: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
  }


  /**
   * Images createMany
   */
  export type ImagesCreateManyArgs = {
    /**
     * The data used to create many Images.
     * 
    **/
    data: Enumerable<ImagesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Images update
   */
  export type ImagesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * The data needed to update a Images.
     * 
    **/
    data: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
    /**
     * Choose, which Images to update.
     * 
    **/
    where: ImagesWhereUniqueInput
  }


  /**
   * Images updateMany
   */
  export type ImagesUpdateManyArgs = {
    /**
     * The data used to update Images.
     * 
    **/
    data: XOR<ImagesUpdateManyMutationInput, ImagesUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     * 
    **/
    where?: ImagesWhereInput
  }


  /**
   * Images upsert
   */
  export type ImagesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * The filter to search for the Images to update in case it exists.
     * 
    **/
    where: ImagesWhereUniqueInput
    /**
     * In case the Images found by the `where` argument doesn't exist, create a new Images with this data.
     * 
    **/
    create: XOR<ImagesCreateInput, ImagesUncheckedCreateInput>
    /**
     * In case the Images was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImagesUpdateInput, ImagesUncheckedUpdateInput>
  }


  /**
   * Images delete
   */
  export type ImagesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
    /**
     * Filter which Images to delete.
     * 
    **/
    where: ImagesWhereUniqueInput
  }


  /**
   * Images deleteMany
   */
  export type ImagesDeleteManyArgs = {
    /**
     * Filter which Images to delete
     * 
    **/
    where?: ImagesWhereInput
  }


  /**
   * Images.imagesProducts
   */
  export type ImagesImagesProductsArgs = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
    where?: ImagesToProductsWhereInput
    orderBy?: Enumerable<ImagesToProductsOrderByWithRelationInput>
    cursor?: ImagesToProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ImagesToProductsScalarFieldEnum>
  }


  /**
   * Images.imagesVehicles
   */
  export type ImagesImagesVehiclesArgs = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
    where?: ImagesToVehiclesWhereInput
    orderBy?: Enumerable<ImagesToVehiclesOrderByWithRelationInput>
    cursor?: ImagesToVehiclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ImagesToVehiclesScalarFieldEnum>
  }


  /**
   * Images.imagesBrands
   */
  export type ImagesImagesBrandsArgs = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
    where?: ImagesToBradsWhereInput
    orderBy?: Enumerable<ImagesToBradsOrderByWithRelationInput>
    cursor?: ImagesToBradsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ImagesToBradsScalarFieldEnum>
  }


  /**
   * Images without action
   */
  export type ImagesArgs = {
    /**
     * Select specific fields to fetch from the Images
     * 
    **/
    select?: ImagesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesInclude | null
  }



  /**
   * Model ImagesToProducts
   */


  export type AggregateImagesToProducts = {
    _count: ImagesToProductsCountAggregateOutputType | null
    _avg: ImagesToProductsAvgAggregateOutputType | null
    _sum: ImagesToProductsSumAggregateOutputType | null
    _min: ImagesToProductsMinAggregateOutputType | null
    _max: ImagesToProductsMaxAggregateOutputType | null
  }

  export type ImagesToProductsAvgAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_product: number | null
  }

  export type ImagesToProductsSumAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_product: number | null
  }

  export type ImagesToProductsMinAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_product: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesToProductsMaxAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_product: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesToProductsCountAggregateOutputType = {
    id: number
    id_image: number
    id_product: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImagesToProductsAvgAggregateInputType = {
    id?: true
    id_image?: true
    id_product?: true
  }

  export type ImagesToProductsSumAggregateInputType = {
    id?: true
    id_image?: true
    id_product?: true
  }

  export type ImagesToProductsMinAggregateInputType = {
    id?: true
    id_image?: true
    id_product?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesToProductsMaxAggregateInputType = {
    id?: true
    id_image?: true
    id_product?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesToProductsCountAggregateInputType = {
    id?: true
    id_image?: true
    id_product?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImagesToProductsAggregateArgs = {
    /**
     * Filter which ImagesToProducts to aggregate.
     * 
    **/
    where?: ImagesToProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImagesToProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImagesToProducts
    **/
    _count?: true | ImagesToProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesToProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesToProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesToProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesToProductsMaxAggregateInputType
  }

  export type GetImagesToProductsAggregateType<T extends ImagesToProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateImagesToProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagesToProducts[P]>
      : GetScalarType<T[P], AggregateImagesToProducts[P]>
  }




  export type ImagesToProductsGroupByArgs = {
    where?: ImagesToProductsWhereInput
    orderBy?: Enumerable<ImagesToProductsOrderByWithAggregationInput>
    by: Array<ImagesToProductsScalarFieldEnum>
    having?: ImagesToProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesToProductsCountAggregateInputType | true
    _avg?: ImagesToProductsAvgAggregateInputType
    _sum?: ImagesToProductsSumAggregateInputType
    _min?: ImagesToProductsMinAggregateInputType
    _max?: ImagesToProductsMaxAggregateInputType
  }


  export type ImagesToProductsGroupByOutputType = {
    id: number
    id_image: number
    id_product: number
    createdAt: Date
    updatedAt: Date
    _count: ImagesToProductsCountAggregateOutputType | null
    _avg: ImagesToProductsAvgAggregateOutputType | null
    _sum: ImagesToProductsSumAggregateOutputType | null
    _min: ImagesToProductsMinAggregateOutputType | null
    _max: ImagesToProductsMaxAggregateOutputType | null
  }

  type GetImagesToProductsGroupByPayload<T extends ImagesToProductsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ImagesToProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesToProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesToProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesToProductsGroupByOutputType[P]>
        }
      >
    >


  export type ImagesToProductsSelect = {
    id?: boolean
    id_image?: boolean
    id_product?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean | ImagesArgs
    product?: boolean | ProductsArgs
  }


  export type ImagesToProductsInclude = {
    image?: boolean | ImagesArgs
    product?: boolean | ProductsArgs
  } 

  export type ImagesToProductsGetPayload<S extends boolean | null | undefined | ImagesToProductsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ImagesToProducts :
    S extends undefined ? never :
    S extends { include: any } & (ImagesToProductsArgs | ImagesToProductsFindManyArgs)
    ? ImagesToProducts  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'image' ? ImagesGetPayload<S['include'][P]> :
        P extends 'product' ? ProductsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ImagesToProductsArgs | ImagesToProductsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'image' ? ImagesGetPayload<S['select'][P]> :
        P extends 'product' ? ProductsGetPayload<S['select'][P]> :  P extends keyof ImagesToProducts ? ImagesToProducts[P] : never
  } 
      : ImagesToProducts


  type ImagesToProductsCountArgs = Merge<
    Omit<ImagesToProductsFindManyArgs, 'select' | 'include'> & {
      select?: ImagesToProductsCountAggregateInputType | true
    }
  >

  export interface ImagesToProductsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ImagesToProducts that matches the filter.
     * @param {ImagesToProductsFindUniqueArgs} args - Arguments to find a ImagesToProducts
     * @example
     * // Get one ImagesToProducts
     * const imagesToProducts = await prisma.imagesToProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImagesToProductsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImagesToProductsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ImagesToProducts'> extends True ? Prisma__ImagesToProductsClient<ImagesToProductsGetPayload<T>> : Prisma__ImagesToProductsClient<ImagesToProductsGetPayload<T> | null, null>

    /**
     * Find one ImagesToProducts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImagesToProductsFindUniqueOrThrowArgs} args - Arguments to find a ImagesToProducts
     * @example
     * // Get one ImagesToProducts
     * const imagesToProducts = await prisma.imagesToProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImagesToProductsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ImagesToProductsFindUniqueOrThrowArgs>
    ): Prisma__ImagesToProductsClient<ImagesToProductsGetPayload<T>>

    /**
     * Find the first ImagesToProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToProductsFindFirstArgs} args - Arguments to find a ImagesToProducts
     * @example
     * // Get one ImagesToProducts
     * const imagesToProducts = await prisma.imagesToProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImagesToProductsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImagesToProductsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ImagesToProducts'> extends True ? Prisma__ImagesToProductsClient<ImagesToProductsGetPayload<T>> : Prisma__ImagesToProductsClient<ImagesToProductsGetPayload<T> | null, null>

    /**
     * Find the first ImagesToProducts that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToProductsFindFirstOrThrowArgs} args - Arguments to find a ImagesToProducts
     * @example
     * // Get one ImagesToProducts
     * const imagesToProducts = await prisma.imagesToProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImagesToProductsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImagesToProductsFindFirstOrThrowArgs>
    ): Prisma__ImagesToProductsClient<ImagesToProductsGetPayload<T>>

    /**
     * Find zero or more ImagesToProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToProductsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImagesToProducts
     * const imagesToProducts = await prisma.imagesToProducts.findMany()
     * 
     * // Get first 10 ImagesToProducts
     * const imagesToProducts = await prisma.imagesToProducts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesToProductsWithIdOnly = await prisma.imagesToProducts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImagesToProductsFindManyArgs>(
      args?: SelectSubset<T, ImagesToProductsFindManyArgs>
    ): PrismaPromise<Array<ImagesToProductsGetPayload<T>>>

    /**
     * Create a ImagesToProducts.
     * @param {ImagesToProductsCreateArgs} args - Arguments to create a ImagesToProducts.
     * @example
     * // Create one ImagesToProducts
     * const ImagesToProducts = await prisma.imagesToProducts.create({
     *   data: {
     *     // ... data to create a ImagesToProducts
     *   }
     * })
     * 
    **/
    create<T extends ImagesToProductsCreateArgs>(
      args: SelectSubset<T, ImagesToProductsCreateArgs>
    ): Prisma__ImagesToProductsClient<ImagesToProductsGetPayload<T>>

    /**
     * Create many ImagesToProducts.
     *     @param {ImagesToProductsCreateManyArgs} args - Arguments to create many ImagesToProducts.
     *     @example
     *     // Create many ImagesToProducts
     *     const imagesToProducts = await prisma.imagesToProducts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImagesToProductsCreateManyArgs>(
      args?: SelectSubset<T, ImagesToProductsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ImagesToProducts.
     * @param {ImagesToProductsDeleteArgs} args - Arguments to delete one ImagesToProducts.
     * @example
     * // Delete one ImagesToProducts
     * const ImagesToProducts = await prisma.imagesToProducts.delete({
     *   where: {
     *     // ... filter to delete one ImagesToProducts
     *   }
     * })
     * 
    **/
    delete<T extends ImagesToProductsDeleteArgs>(
      args: SelectSubset<T, ImagesToProductsDeleteArgs>
    ): Prisma__ImagesToProductsClient<ImagesToProductsGetPayload<T>>

    /**
     * Update one ImagesToProducts.
     * @param {ImagesToProductsUpdateArgs} args - Arguments to update one ImagesToProducts.
     * @example
     * // Update one ImagesToProducts
     * const imagesToProducts = await prisma.imagesToProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImagesToProductsUpdateArgs>(
      args: SelectSubset<T, ImagesToProductsUpdateArgs>
    ): Prisma__ImagesToProductsClient<ImagesToProductsGetPayload<T>>

    /**
     * Delete zero or more ImagesToProducts.
     * @param {ImagesToProductsDeleteManyArgs} args - Arguments to filter ImagesToProducts to delete.
     * @example
     * // Delete a few ImagesToProducts
     * const { count } = await prisma.imagesToProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImagesToProductsDeleteManyArgs>(
      args?: SelectSubset<T, ImagesToProductsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImagesToProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImagesToProducts
     * const imagesToProducts = await prisma.imagesToProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImagesToProductsUpdateManyArgs>(
      args: SelectSubset<T, ImagesToProductsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ImagesToProducts.
     * @param {ImagesToProductsUpsertArgs} args - Arguments to update or create a ImagesToProducts.
     * @example
     * // Update or create a ImagesToProducts
     * const imagesToProducts = await prisma.imagesToProducts.upsert({
     *   create: {
     *     // ... data to create a ImagesToProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImagesToProducts we want to update
     *   }
     * })
    **/
    upsert<T extends ImagesToProductsUpsertArgs>(
      args: SelectSubset<T, ImagesToProductsUpsertArgs>
    ): Prisma__ImagesToProductsClient<ImagesToProductsGetPayload<T>>

    /**
     * Count the number of ImagesToProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToProductsCountArgs} args - Arguments to filter ImagesToProducts to count.
     * @example
     * // Count the number of ImagesToProducts
     * const count = await prisma.imagesToProducts.count({
     *   where: {
     *     // ... the filter for the ImagesToProducts we want to count
     *   }
     * })
    **/
    count<T extends ImagesToProductsCountArgs>(
      args?: Subset<T, ImagesToProductsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesToProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImagesToProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesToProductsAggregateArgs>(args: Subset<T, ImagesToProductsAggregateArgs>): PrismaPromise<GetImagesToProductsAggregateType<T>>

    /**
     * Group by ImagesToProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesToProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesToProductsGroupByArgs['orderBy'] }
        : { orderBy?: ImagesToProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesToProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesToProductsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ImagesToProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImagesToProductsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    image<T extends ImagesArgs= {}>(args?: Subset<T, ImagesArgs>): Prisma__ImagesClient<ImagesGetPayload<T> | Null>;

    product<T extends ProductsArgs= {}>(args?: Subset<T, ProductsArgs>): Prisma__ProductsClient<ProductsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ImagesToProducts base type for findUnique actions
   */
  export type ImagesToProductsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
    /**
     * Filter, which ImagesToProducts to fetch.
     * 
    **/
    where: ImagesToProductsWhereUniqueInput
  }

  /**
   * ImagesToProducts findUnique
   */
  export interface ImagesToProductsFindUniqueArgs extends ImagesToProductsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ImagesToProducts findUniqueOrThrow
   */
  export type ImagesToProductsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
    /**
     * Filter, which ImagesToProducts to fetch.
     * 
    **/
    where: ImagesToProductsWhereUniqueInput
  }


  /**
   * ImagesToProducts base type for findFirst actions
   */
  export type ImagesToProductsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
    /**
     * Filter, which ImagesToProducts to fetch.
     * 
    **/
    where?: ImagesToProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagesToProducts.
     * 
    **/
    cursor?: ImagesToProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagesToProducts.
     * 
    **/
    distinct?: Enumerable<ImagesToProductsScalarFieldEnum>
  }

  /**
   * ImagesToProducts findFirst
   */
  export interface ImagesToProductsFindFirstArgs extends ImagesToProductsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ImagesToProducts findFirstOrThrow
   */
  export type ImagesToProductsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
    /**
     * Filter, which ImagesToProducts to fetch.
     * 
    **/
    where?: ImagesToProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagesToProducts.
     * 
    **/
    cursor?: ImagesToProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToProducts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagesToProducts.
     * 
    **/
    distinct?: Enumerable<ImagesToProductsScalarFieldEnum>
  }


  /**
   * ImagesToProducts findMany
   */
  export type ImagesToProductsFindManyArgs = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
    /**
     * Filter, which ImagesToProducts to fetch.
     * 
    **/
    where?: ImagesToProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToProducts to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToProductsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImagesToProducts.
     * 
    **/
    cursor?: ImagesToProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToProducts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToProducts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImagesToProductsScalarFieldEnum>
  }


  /**
   * ImagesToProducts create
   */
  export type ImagesToProductsCreateArgs = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
    /**
     * The data needed to create a ImagesToProducts.
     * 
    **/
    data: XOR<ImagesToProductsCreateInput, ImagesToProductsUncheckedCreateInput>
  }


  /**
   * ImagesToProducts createMany
   */
  export type ImagesToProductsCreateManyArgs = {
    /**
     * The data used to create many ImagesToProducts.
     * 
    **/
    data: Enumerable<ImagesToProductsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ImagesToProducts update
   */
  export type ImagesToProductsUpdateArgs = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
    /**
     * The data needed to update a ImagesToProducts.
     * 
    **/
    data: XOR<ImagesToProductsUpdateInput, ImagesToProductsUncheckedUpdateInput>
    /**
     * Choose, which ImagesToProducts to update.
     * 
    **/
    where: ImagesToProductsWhereUniqueInput
  }


  /**
   * ImagesToProducts updateMany
   */
  export type ImagesToProductsUpdateManyArgs = {
    /**
     * The data used to update ImagesToProducts.
     * 
    **/
    data: XOR<ImagesToProductsUpdateManyMutationInput, ImagesToProductsUncheckedUpdateManyInput>
    /**
     * Filter which ImagesToProducts to update
     * 
    **/
    where?: ImagesToProductsWhereInput
  }


  /**
   * ImagesToProducts upsert
   */
  export type ImagesToProductsUpsertArgs = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
    /**
     * The filter to search for the ImagesToProducts to update in case it exists.
     * 
    **/
    where: ImagesToProductsWhereUniqueInput
    /**
     * In case the ImagesToProducts found by the `where` argument doesn't exist, create a new ImagesToProducts with this data.
     * 
    **/
    create: XOR<ImagesToProductsCreateInput, ImagesToProductsUncheckedCreateInput>
    /**
     * In case the ImagesToProducts was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImagesToProductsUpdateInput, ImagesToProductsUncheckedUpdateInput>
  }


  /**
   * ImagesToProducts delete
   */
  export type ImagesToProductsDeleteArgs = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
    /**
     * Filter which ImagesToProducts to delete.
     * 
    **/
    where: ImagesToProductsWhereUniqueInput
  }


  /**
   * ImagesToProducts deleteMany
   */
  export type ImagesToProductsDeleteManyArgs = {
    /**
     * Filter which ImagesToProducts to delete
     * 
    **/
    where?: ImagesToProductsWhereInput
  }


  /**
   * ImagesToProducts without action
   */
  export type ImagesToProductsArgs = {
    /**
     * Select specific fields to fetch from the ImagesToProducts
     * 
    **/
    select?: ImagesToProductsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToProductsInclude | null
  }



  /**
   * Model ImagesToVehicles
   */


  export type AggregateImagesToVehicles = {
    _count: ImagesToVehiclesCountAggregateOutputType | null
    _avg: ImagesToVehiclesAvgAggregateOutputType | null
    _sum: ImagesToVehiclesSumAggregateOutputType | null
    _min: ImagesToVehiclesMinAggregateOutputType | null
    _max: ImagesToVehiclesMaxAggregateOutputType | null
  }

  export type ImagesToVehiclesAvgAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_vehicle: number | null
  }

  export type ImagesToVehiclesSumAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_vehicle: number | null
  }

  export type ImagesToVehiclesMinAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_vehicle: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesToVehiclesMaxAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_vehicle: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesToVehiclesCountAggregateOutputType = {
    id: number
    id_image: number
    id_vehicle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImagesToVehiclesAvgAggregateInputType = {
    id?: true
    id_image?: true
    id_vehicle?: true
  }

  export type ImagesToVehiclesSumAggregateInputType = {
    id?: true
    id_image?: true
    id_vehicle?: true
  }

  export type ImagesToVehiclesMinAggregateInputType = {
    id?: true
    id_image?: true
    id_vehicle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesToVehiclesMaxAggregateInputType = {
    id?: true
    id_image?: true
    id_vehicle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesToVehiclesCountAggregateInputType = {
    id?: true
    id_image?: true
    id_vehicle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImagesToVehiclesAggregateArgs = {
    /**
     * Filter which ImagesToVehicles to aggregate.
     * 
    **/
    where?: ImagesToVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToVehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToVehiclesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImagesToVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToVehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToVehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImagesToVehicles
    **/
    _count?: true | ImagesToVehiclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesToVehiclesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesToVehiclesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesToVehiclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesToVehiclesMaxAggregateInputType
  }

  export type GetImagesToVehiclesAggregateType<T extends ImagesToVehiclesAggregateArgs> = {
        [P in keyof T & keyof AggregateImagesToVehicles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagesToVehicles[P]>
      : GetScalarType<T[P], AggregateImagesToVehicles[P]>
  }




  export type ImagesToVehiclesGroupByArgs = {
    where?: ImagesToVehiclesWhereInput
    orderBy?: Enumerable<ImagesToVehiclesOrderByWithAggregationInput>
    by: Array<ImagesToVehiclesScalarFieldEnum>
    having?: ImagesToVehiclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesToVehiclesCountAggregateInputType | true
    _avg?: ImagesToVehiclesAvgAggregateInputType
    _sum?: ImagesToVehiclesSumAggregateInputType
    _min?: ImagesToVehiclesMinAggregateInputType
    _max?: ImagesToVehiclesMaxAggregateInputType
  }


  export type ImagesToVehiclesGroupByOutputType = {
    id: number
    id_image: number
    id_vehicle: number
    createdAt: Date
    updatedAt: Date
    _count: ImagesToVehiclesCountAggregateOutputType | null
    _avg: ImagesToVehiclesAvgAggregateOutputType | null
    _sum: ImagesToVehiclesSumAggregateOutputType | null
    _min: ImagesToVehiclesMinAggregateOutputType | null
    _max: ImagesToVehiclesMaxAggregateOutputType | null
  }

  type GetImagesToVehiclesGroupByPayload<T extends ImagesToVehiclesGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ImagesToVehiclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesToVehiclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesToVehiclesGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesToVehiclesGroupByOutputType[P]>
        }
      >
    >


  export type ImagesToVehiclesSelect = {
    id?: boolean
    id_image?: boolean
    id_vehicle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean | ImagesArgs
    vehicles?: boolean | VehiclesArgs
  }


  export type ImagesToVehiclesInclude = {
    image?: boolean | ImagesArgs
    vehicles?: boolean | VehiclesArgs
  } 

  export type ImagesToVehiclesGetPayload<S extends boolean | null | undefined | ImagesToVehiclesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ImagesToVehicles :
    S extends undefined ? never :
    S extends { include: any } & (ImagesToVehiclesArgs | ImagesToVehiclesFindManyArgs)
    ? ImagesToVehicles  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'image' ? ImagesGetPayload<S['include'][P]> :
        P extends 'vehicles' ? VehiclesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ImagesToVehiclesArgs | ImagesToVehiclesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'image' ? ImagesGetPayload<S['select'][P]> :
        P extends 'vehicles' ? VehiclesGetPayload<S['select'][P]> :  P extends keyof ImagesToVehicles ? ImagesToVehicles[P] : never
  } 
      : ImagesToVehicles


  type ImagesToVehiclesCountArgs = Merge<
    Omit<ImagesToVehiclesFindManyArgs, 'select' | 'include'> & {
      select?: ImagesToVehiclesCountAggregateInputType | true
    }
  >

  export interface ImagesToVehiclesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ImagesToVehicles that matches the filter.
     * @param {ImagesToVehiclesFindUniqueArgs} args - Arguments to find a ImagesToVehicles
     * @example
     * // Get one ImagesToVehicles
     * const imagesToVehicles = await prisma.imagesToVehicles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImagesToVehiclesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImagesToVehiclesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ImagesToVehicles'> extends True ? Prisma__ImagesToVehiclesClient<ImagesToVehiclesGetPayload<T>> : Prisma__ImagesToVehiclesClient<ImagesToVehiclesGetPayload<T> | null, null>

    /**
     * Find one ImagesToVehicles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImagesToVehiclesFindUniqueOrThrowArgs} args - Arguments to find a ImagesToVehicles
     * @example
     * // Get one ImagesToVehicles
     * const imagesToVehicles = await prisma.imagesToVehicles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImagesToVehiclesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ImagesToVehiclesFindUniqueOrThrowArgs>
    ): Prisma__ImagesToVehiclesClient<ImagesToVehiclesGetPayload<T>>

    /**
     * Find the first ImagesToVehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToVehiclesFindFirstArgs} args - Arguments to find a ImagesToVehicles
     * @example
     * // Get one ImagesToVehicles
     * const imagesToVehicles = await prisma.imagesToVehicles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImagesToVehiclesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImagesToVehiclesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ImagesToVehicles'> extends True ? Prisma__ImagesToVehiclesClient<ImagesToVehiclesGetPayload<T>> : Prisma__ImagesToVehiclesClient<ImagesToVehiclesGetPayload<T> | null, null>

    /**
     * Find the first ImagesToVehicles that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToVehiclesFindFirstOrThrowArgs} args - Arguments to find a ImagesToVehicles
     * @example
     * // Get one ImagesToVehicles
     * const imagesToVehicles = await prisma.imagesToVehicles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImagesToVehiclesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImagesToVehiclesFindFirstOrThrowArgs>
    ): Prisma__ImagesToVehiclesClient<ImagesToVehiclesGetPayload<T>>

    /**
     * Find zero or more ImagesToVehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToVehiclesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImagesToVehicles
     * const imagesToVehicles = await prisma.imagesToVehicles.findMany()
     * 
     * // Get first 10 ImagesToVehicles
     * const imagesToVehicles = await prisma.imagesToVehicles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesToVehiclesWithIdOnly = await prisma.imagesToVehicles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImagesToVehiclesFindManyArgs>(
      args?: SelectSubset<T, ImagesToVehiclesFindManyArgs>
    ): PrismaPromise<Array<ImagesToVehiclesGetPayload<T>>>

    /**
     * Create a ImagesToVehicles.
     * @param {ImagesToVehiclesCreateArgs} args - Arguments to create a ImagesToVehicles.
     * @example
     * // Create one ImagesToVehicles
     * const ImagesToVehicles = await prisma.imagesToVehicles.create({
     *   data: {
     *     // ... data to create a ImagesToVehicles
     *   }
     * })
     * 
    **/
    create<T extends ImagesToVehiclesCreateArgs>(
      args: SelectSubset<T, ImagesToVehiclesCreateArgs>
    ): Prisma__ImagesToVehiclesClient<ImagesToVehiclesGetPayload<T>>

    /**
     * Create many ImagesToVehicles.
     *     @param {ImagesToVehiclesCreateManyArgs} args - Arguments to create many ImagesToVehicles.
     *     @example
     *     // Create many ImagesToVehicles
     *     const imagesToVehicles = await prisma.imagesToVehicles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImagesToVehiclesCreateManyArgs>(
      args?: SelectSubset<T, ImagesToVehiclesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ImagesToVehicles.
     * @param {ImagesToVehiclesDeleteArgs} args - Arguments to delete one ImagesToVehicles.
     * @example
     * // Delete one ImagesToVehicles
     * const ImagesToVehicles = await prisma.imagesToVehicles.delete({
     *   where: {
     *     // ... filter to delete one ImagesToVehicles
     *   }
     * })
     * 
    **/
    delete<T extends ImagesToVehiclesDeleteArgs>(
      args: SelectSubset<T, ImagesToVehiclesDeleteArgs>
    ): Prisma__ImagesToVehiclesClient<ImagesToVehiclesGetPayload<T>>

    /**
     * Update one ImagesToVehicles.
     * @param {ImagesToVehiclesUpdateArgs} args - Arguments to update one ImagesToVehicles.
     * @example
     * // Update one ImagesToVehicles
     * const imagesToVehicles = await prisma.imagesToVehicles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImagesToVehiclesUpdateArgs>(
      args: SelectSubset<T, ImagesToVehiclesUpdateArgs>
    ): Prisma__ImagesToVehiclesClient<ImagesToVehiclesGetPayload<T>>

    /**
     * Delete zero or more ImagesToVehicles.
     * @param {ImagesToVehiclesDeleteManyArgs} args - Arguments to filter ImagesToVehicles to delete.
     * @example
     * // Delete a few ImagesToVehicles
     * const { count } = await prisma.imagesToVehicles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImagesToVehiclesDeleteManyArgs>(
      args?: SelectSubset<T, ImagesToVehiclesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImagesToVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToVehiclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImagesToVehicles
     * const imagesToVehicles = await prisma.imagesToVehicles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImagesToVehiclesUpdateManyArgs>(
      args: SelectSubset<T, ImagesToVehiclesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ImagesToVehicles.
     * @param {ImagesToVehiclesUpsertArgs} args - Arguments to update or create a ImagesToVehicles.
     * @example
     * // Update or create a ImagesToVehicles
     * const imagesToVehicles = await prisma.imagesToVehicles.upsert({
     *   create: {
     *     // ... data to create a ImagesToVehicles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImagesToVehicles we want to update
     *   }
     * })
    **/
    upsert<T extends ImagesToVehiclesUpsertArgs>(
      args: SelectSubset<T, ImagesToVehiclesUpsertArgs>
    ): Prisma__ImagesToVehiclesClient<ImagesToVehiclesGetPayload<T>>

    /**
     * Count the number of ImagesToVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToVehiclesCountArgs} args - Arguments to filter ImagesToVehicles to count.
     * @example
     * // Count the number of ImagesToVehicles
     * const count = await prisma.imagesToVehicles.count({
     *   where: {
     *     // ... the filter for the ImagesToVehicles we want to count
     *   }
     * })
    **/
    count<T extends ImagesToVehiclesCountArgs>(
      args?: Subset<T, ImagesToVehiclesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesToVehiclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImagesToVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToVehiclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesToVehiclesAggregateArgs>(args: Subset<T, ImagesToVehiclesAggregateArgs>): PrismaPromise<GetImagesToVehiclesAggregateType<T>>

    /**
     * Group by ImagesToVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToVehiclesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesToVehiclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesToVehiclesGroupByArgs['orderBy'] }
        : { orderBy?: ImagesToVehiclesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesToVehiclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesToVehiclesGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ImagesToVehicles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImagesToVehiclesClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    image<T extends ImagesArgs= {}>(args?: Subset<T, ImagesArgs>): Prisma__ImagesClient<ImagesGetPayload<T> | Null>;

    vehicles<T extends VehiclesArgs= {}>(args?: Subset<T, VehiclesArgs>): Prisma__VehiclesClient<VehiclesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ImagesToVehicles base type for findUnique actions
   */
  export type ImagesToVehiclesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
    /**
     * Filter, which ImagesToVehicles to fetch.
     * 
    **/
    where: ImagesToVehiclesWhereUniqueInput
  }

  /**
   * ImagesToVehicles findUnique
   */
  export interface ImagesToVehiclesFindUniqueArgs extends ImagesToVehiclesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ImagesToVehicles findUniqueOrThrow
   */
  export type ImagesToVehiclesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
    /**
     * Filter, which ImagesToVehicles to fetch.
     * 
    **/
    where: ImagesToVehiclesWhereUniqueInput
  }


  /**
   * ImagesToVehicles base type for findFirst actions
   */
  export type ImagesToVehiclesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
    /**
     * Filter, which ImagesToVehicles to fetch.
     * 
    **/
    where?: ImagesToVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToVehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToVehiclesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagesToVehicles.
     * 
    **/
    cursor?: ImagesToVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToVehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToVehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagesToVehicles.
     * 
    **/
    distinct?: Enumerable<ImagesToVehiclesScalarFieldEnum>
  }

  /**
   * ImagesToVehicles findFirst
   */
  export interface ImagesToVehiclesFindFirstArgs extends ImagesToVehiclesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ImagesToVehicles findFirstOrThrow
   */
  export type ImagesToVehiclesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
    /**
     * Filter, which ImagesToVehicles to fetch.
     * 
    **/
    where?: ImagesToVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToVehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToVehiclesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagesToVehicles.
     * 
    **/
    cursor?: ImagesToVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToVehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToVehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagesToVehicles.
     * 
    **/
    distinct?: Enumerable<ImagesToVehiclesScalarFieldEnum>
  }


  /**
   * ImagesToVehicles findMany
   */
  export type ImagesToVehiclesFindManyArgs = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
    /**
     * Filter, which ImagesToVehicles to fetch.
     * 
    **/
    where?: ImagesToVehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToVehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToVehiclesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImagesToVehicles.
     * 
    **/
    cursor?: ImagesToVehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToVehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToVehicles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImagesToVehiclesScalarFieldEnum>
  }


  /**
   * ImagesToVehicles create
   */
  export type ImagesToVehiclesCreateArgs = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
    /**
     * The data needed to create a ImagesToVehicles.
     * 
    **/
    data: XOR<ImagesToVehiclesCreateInput, ImagesToVehiclesUncheckedCreateInput>
  }


  /**
   * ImagesToVehicles createMany
   */
  export type ImagesToVehiclesCreateManyArgs = {
    /**
     * The data used to create many ImagesToVehicles.
     * 
    **/
    data: Enumerable<ImagesToVehiclesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ImagesToVehicles update
   */
  export type ImagesToVehiclesUpdateArgs = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
    /**
     * The data needed to update a ImagesToVehicles.
     * 
    **/
    data: XOR<ImagesToVehiclesUpdateInput, ImagesToVehiclesUncheckedUpdateInput>
    /**
     * Choose, which ImagesToVehicles to update.
     * 
    **/
    where: ImagesToVehiclesWhereUniqueInput
  }


  /**
   * ImagesToVehicles updateMany
   */
  export type ImagesToVehiclesUpdateManyArgs = {
    /**
     * The data used to update ImagesToVehicles.
     * 
    **/
    data: XOR<ImagesToVehiclesUpdateManyMutationInput, ImagesToVehiclesUncheckedUpdateManyInput>
    /**
     * Filter which ImagesToVehicles to update
     * 
    **/
    where?: ImagesToVehiclesWhereInput
  }


  /**
   * ImagesToVehicles upsert
   */
  export type ImagesToVehiclesUpsertArgs = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
    /**
     * The filter to search for the ImagesToVehicles to update in case it exists.
     * 
    **/
    where: ImagesToVehiclesWhereUniqueInput
    /**
     * In case the ImagesToVehicles found by the `where` argument doesn't exist, create a new ImagesToVehicles with this data.
     * 
    **/
    create: XOR<ImagesToVehiclesCreateInput, ImagesToVehiclesUncheckedCreateInput>
    /**
     * In case the ImagesToVehicles was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImagesToVehiclesUpdateInput, ImagesToVehiclesUncheckedUpdateInput>
  }


  /**
   * ImagesToVehicles delete
   */
  export type ImagesToVehiclesDeleteArgs = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
    /**
     * Filter which ImagesToVehicles to delete.
     * 
    **/
    where: ImagesToVehiclesWhereUniqueInput
  }


  /**
   * ImagesToVehicles deleteMany
   */
  export type ImagesToVehiclesDeleteManyArgs = {
    /**
     * Filter which ImagesToVehicles to delete
     * 
    **/
    where?: ImagesToVehiclesWhereInput
  }


  /**
   * ImagesToVehicles without action
   */
  export type ImagesToVehiclesArgs = {
    /**
     * Select specific fields to fetch from the ImagesToVehicles
     * 
    **/
    select?: ImagesToVehiclesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToVehiclesInclude | null
  }



  /**
   * Model ImagesToBrads
   */


  export type AggregateImagesToBrads = {
    _count: ImagesToBradsCountAggregateOutputType | null
    _avg: ImagesToBradsAvgAggregateOutputType | null
    _sum: ImagesToBradsSumAggregateOutputType | null
    _min: ImagesToBradsMinAggregateOutputType | null
    _max: ImagesToBradsMaxAggregateOutputType | null
  }

  export type ImagesToBradsAvgAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_brand: number | null
  }

  export type ImagesToBradsSumAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_brand: number | null
  }

  export type ImagesToBradsMinAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_brand: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesToBradsMaxAggregateOutputType = {
    id: number | null
    id_image: number | null
    id_brand: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ImagesToBradsCountAggregateOutputType = {
    id: number
    id_image: number
    id_brand: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ImagesToBradsAvgAggregateInputType = {
    id?: true
    id_image?: true
    id_brand?: true
  }

  export type ImagesToBradsSumAggregateInputType = {
    id?: true
    id_image?: true
    id_brand?: true
  }

  export type ImagesToBradsMinAggregateInputType = {
    id?: true
    id_image?: true
    id_brand?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesToBradsMaxAggregateInputType = {
    id?: true
    id_image?: true
    id_brand?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ImagesToBradsCountAggregateInputType = {
    id?: true
    id_image?: true
    id_brand?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ImagesToBradsAggregateArgs = {
    /**
     * Filter which ImagesToBrads to aggregate.
     * 
    **/
    where?: ImagesToBradsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToBrads to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToBradsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ImagesToBradsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToBrads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToBrads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ImagesToBrads
    **/
    _count?: true | ImagesToBradsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImagesToBradsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImagesToBradsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImagesToBradsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImagesToBradsMaxAggregateInputType
  }

  export type GetImagesToBradsAggregateType<T extends ImagesToBradsAggregateArgs> = {
        [P in keyof T & keyof AggregateImagesToBrads]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImagesToBrads[P]>
      : GetScalarType<T[P], AggregateImagesToBrads[P]>
  }




  export type ImagesToBradsGroupByArgs = {
    where?: ImagesToBradsWhereInput
    orderBy?: Enumerable<ImagesToBradsOrderByWithAggregationInput>
    by: Array<ImagesToBradsScalarFieldEnum>
    having?: ImagesToBradsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImagesToBradsCountAggregateInputType | true
    _avg?: ImagesToBradsAvgAggregateInputType
    _sum?: ImagesToBradsSumAggregateInputType
    _min?: ImagesToBradsMinAggregateInputType
    _max?: ImagesToBradsMaxAggregateInputType
  }


  export type ImagesToBradsGroupByOutputType = {
    id: number
    id_image: number
    id_brand: number
    createdAt: Date
    updatedAt: Date
    _count: ImagesToBradsCountAggregateOutputType | null
    _avg: ImagesToBradsAvgAggregateOutputType | null
    _sum: ImagesToBradsSumAggregateOutputType | null
    _min: ImagesToBradsMinAggregateOutputType | null
    _max: ImagesToBradsMaxAggregateOutputType | null
  }

  type GetImagesToBradsGroupByPayload<T extends ImagesToBradsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ImagesToBradsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImagesToBradsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImagesToBradsGroupByOutputType[P]>
            : GetScalarType<T[P], ImagesToBradsGroupByOutputType[P]>
        }
      >
    >


  export type ImagesToBradsSelect = {
    id?: boolean
    id_image?: boolean
    id_brand?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image?: boolean | ImagesArgs
    brand?: boolean | BrandsArgs
  }


  export type ImagesToBradsInclude = {
    image?: boolean | ImagesArgs
    brand?: boolean | BrandsArgs
  } 

  export type ImagesToBradsGetPayload<S extends boolean | null | undefined | ImagesToBradsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ImagesToBrads :
    S extends undefined ? never :
    S extends { include: any } & (ImagesToBradsArgs | ImagesToBradsFindManyArgs)
    ? ImagesToBrads  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'image' ? ImagesGetPayload<S['include'][P]> :
        P extends 'brand' ? BrandsGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ImagesToBradsArgs | ImagesToBradsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'image' ? ImagesGetPayload<S['select'][P]> :
        P extends 'brand' ? BrandsGetPayload<S['select'][P]> :  P extends keyof ImagesToBrads ? ImagesToBrads[P] : never
  } 
      : ImagesToBrads


  type ImagesToBradsCountArgs = Merge<
    Omit<ImagesToBradsFindManyArgs, 'select' | 'include'> & {
      select?: ImagesToBradsCountAggregateInputType | true
    }
  >

  export interface ImagesToBradsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ImagesToBrads that matches the filter.
     * @param {ImagesToBradsFindUniqueArgs} args - Arguments to find a ImagesToBrads
     * @example
     * // Get one ImagesToBrads
     * const imagesToBrads = await prisma.imagesToBrads.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ImagesToBradsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ImagesToBradsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ImagesToBrads'> extends True ? Prisma__ImagesToBradsClient<ImagesToBradsGetPayload<T>> : Prisma__ImagesToBradsClient<ImagesToBradsGetPayload<T> | null, null>

    /**
     * Find one ImagesToBrads that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ImagesToBradsFindUniqueOrThrowArgs} args - Arguments to find a ImagesToBrads
     * @example
     * // Get one ImagesToBrads
     * const imagesToBrads = await prisma.imagesToBrads.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ImagesToBradsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ImagesToBradsFindUniqueOrThrowArgs>
    ): Prisma__ImagesToBradsClient<ImagesToBradsGetPayload<T>>

    /**
     * Find the first ImagesToBrads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToBradsFindFirstArgs} args - Arguments to find a ImagesToBrads
     * @example
     * // Get one ImagesToBrads
     * const imagesToBrads = await prisma.imagesToBrads.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ImagesToBradsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ImagesToBradsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ImagesToBrads'> extends True ? Prisma__ImagesToBradsClient<ImagesToBradsGetPayload<T>> : Prisma__ImagesToBradsClient<ImagesToBradsGetPayload<T> | null, null>

    /**
     * Find the first ImagesToBrads that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToBradsFindFirstOrThrowArgs} args - Arguments to find a ImagesToBrads
     * @example
     * // Get one ImagesToBrads
     * const imagesToBrads = await prisma.imagesToBrads.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ImagesToBradsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ImagesToBradsFindFirstOrThrowArgs>
    ): Prisma__ImagesToBradsClient<ImagesToBradsGetPayload<T>>

    /**
     * Find zero or more ImagesToBrads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToBradsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImagesToBrads
     * const imagesToBrads = await prisma.imagesToBrads.findMany()
     * 
     * // Get first 10 ImagesToBrads
     * const imagesToBrads = await prisma.imagesToBrads.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imagesToBradsWithIdOnly = await prisma.imagesToBrads.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ImagesToBradsFindManyArgs>(
      args?: SelectSubset<T, ImagesToBradsFindManyArgs>
    ): PrismaPromise<Array<ImagesToBradsGetPayload<T>>>

    /**
     * Create a ImagesToBrads.
     * @param {ImagesToBradsCreateArgs} args - Arguments to create a ImagesToBrads.
     * @example
     * // Create one ImagesToBrads
     * const ImagesToBrads = await prisma.imagesToBrads.create({
     *   data: {
     *     // ... data to create a ImagesToBrads
     *   }
     * })
     * 
    **/
    create<T extends ImagesToBradsCreateArgs>(
      args: SelectSubset<T, ImagesToBradsCreateArgs>
    ): Prisma__ImagesToBradsClient<ImagesToBradsGetPayload<T>>

    /**
     * Create many ImagesToBrads.
     *     @param {ImagesToBradsCreateManyArgs} args - Arguments to create many ImagesToBrads.
     *     @example
     *     // Create many ImagesToBrads
     *     const imagesToBrads = await prisma.imagesToBrads.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ImagesToBradsCreateManyArgs>(
      args?: SelectSubset<T, ImagesToBradsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ImagesToBrads.
     * @param {ImagesToBradsDeleteArgs} args - Arguments to delete one ImagesToBrads.
     * @example
     * // Delete one ImagesToBrads
     * const ImagesToBrads = await prisma.imagesToBrads.delete({
     *   where: {
     *     // ... filter to delete one ImagesToBrads
     *   }
     * })
     * 
    **/
    delete<T extends ImagesToBradsDeleteArgs>(
      args: SelectSubset<T, ImagesToBradsDeleteArgs>
    ): Prisma__ImagesToBradsClient<ImagesToBradsGetPayload<T>>

    /**
     * Update one ImagesToBrads.
     * @param {ImagesToBradsUpdateArgs} args - Arguments to update one ImagesToBrads.
     * @example
     * // Update one ImagesToBrads
     * const imagesToBrads = await prisma.imagesToBrads.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ImagesToBradsUpdateArgs>(
      args: SelectSubset<T, ImagesToBradsUpdateArgs>
    ): Prisma__ImagesToBradsClient<ImagesToBradsGetPayload<T>>

    /**
     * Delete zero or more ImagesToBrads.
     * @param {ImagesToBradsDeleteManyArgs} args - Arguments to filter ImagesToBrads to delete.
     * @example
     * // Delete a few ImagesToBrads
     * const { count } = await prisma.imagesToBrads.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ImagesToBradsDeleteManyArgs>(
      args?: SelectSubset<T, ImagesToBradsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImagesToBrads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToBradsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImagesToBrads
     * const imagesToBrads = await prisma.imagesToBrads.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ImagesToBradsUpdateManyArgs>(
      args: SelectSubset<T, ImagesToBradsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ImagesToBrads.
     * @param {ImagesToBradsUpsertArgs} args - Arguments to update or create a ImagesToBrads.
     * @example
     * // Update or create a ImagesToBrads
     * const imagesToBrads = await prisma.imagesToBrads.upsert({
     *   create: {
     *     // ... data to create a ImagesToBrads
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImagesToBrads we want to update
     *   }
     * })
    **/
    upsert<T extends ImagesToBradsUpsertArgs>(
      args: SelectSubset<T, ImagesToBradsUpsertArgs>
    ): Prisma__ImagesToBradsClient<ImagesToBradsGetPayload<T>>

    /**
     * Count the number of ImagesToBrads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToBradsCountArgs} args - Arguments to filter ImagesToBrads to count.
     * @example
     * // Count the number of ImagesToBrads
     * const count = await prisma.imagesToBrads.count({
     *   where: {
     *     // ... the filter for the ImagesToBrads we want to count
     *   }
     * })
    **/
    count<T extends ImagesToBradsCountArgs>(
      args?: Subset<T, ImagesToBradsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImagesToBradsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImagesToBrads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToBradsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImagesToBradsAggregateArgs>(args: Subset<T, ImagesToBradsAggregateArgs>): PrismaPromise<GetImagesToBradsAggregateType<T>>

    /**
     * Group by ImagesToBrads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImagesToBradsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImagesToBradsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImagesToBradsGroupByArgs['orderBy'] }
        : { orderBy?: ImagesToBradsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImagesToBradsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImagesToBradsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ImagesToBrads.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ImagesToBradsClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    image<T extends ImagesArgs= {}>(args?: Subset<T, ImagesArgs>): Prisma__ImagesClient<ImagesGetPayload<T> | Null>;

    brand<T extends BrandsArgs= {}>(args?: Subset<T, BrandsArgs>): Prisma__BrandsClient<BrandsGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ImagesToBrads base type for findUnique actions
   */
  export type ImagesToBradsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
    /**
     * Filter, which ImagesToBrads to fetch.
     * 
    **/
    where: ImagesToBradsWhereUniqueInput
  }

  /**
   * ImagesToBrads findUnique
   */
  export interface ImagesToBradsFindUniqueArgs extends ImagesToBradsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ImagesToBrads findUniqueOrThrow
   */
  export type ImagesToBradsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
    /**
     * Filter, which ImagesToBrads to fetch.
     * 
    **/
    where: ImagesToBradsWhereUniqueInput
  }


  /**
   * ImagesToBrads base type for findFirst actions
   */
  export type ImagesToBradsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
    /**
     * Filter, which ImagesToBrads to fetch.
     * 
    **/
    where?: ImagesToBradsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToBrads to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToBradsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagesToBrads.
     * 
    **/
    cursor?: ImagesToBradsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToBrads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToBrads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagesToBrads.
     * 
    **/
    distinct?: Enumerable<ImagesToBradsScalarFieldEnum>
  }

  /**
   * ImagesToBrads findFirst
   */
  export interface ImagesToBradsFindFirstArgs extends ImagesToBradsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ImagesToBrads findFirstOrThrow
   */
  export type ImagesToBradsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
    /**
     * Filter, which ImagesToBrads to fetch.
     * 
    **/
    where?: ImagesToBradsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToBrads to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToBradsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ImagesToBrads.
     * 
    **/
    cursor?: ImagesToBradsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToBrads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToBrads.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ImagesToBrads.
     * 
    **/
    distinct?: Enumerable<ImagesToBradsScalarFieldEnum>
  }


  /**
   * ImagesToBrads findMany
   */
  export type ImagesToBradsFindManyArgs = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
    /**
     * Filter, which ImagesToBrads to fetch.
     * 
    **/
    where?: ImagesToBradsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ImagesToBrads to fetch.
     * 
    **/
    orderBy?: Enumerable<ImagesToBradsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ImagesToBrads.
     * 
    **/
    cursor?: ImagesToBradsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ImagesToBrads from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ImagesToBrads.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ImagesToBradsScalarFieldEnum>
  }


  /**
   * ImagesToBrads create
   */
  export type ImagesToBradsCreateArgs = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
    /**
     * The data needed to create a ImagesToBrads.
     * 
    **/
    data: XOR<ImagesToBradsCreateInput, ImagesToBradsUncheckedCreateInput>
  }


  /**
   * ImagesToBrads createMany
   */
  export type ImagesToBradsCreateManyArgs = {
    /**
     * The data used to create many ImagesToBrads.
     * 
    **/
    data: Enumerable<ImagesToBradsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ImagesToBrads update
   */
  export type ImagesToBradsUpdateArgs = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
    /**
     * The data needed to update a ImagesToBrads.
     * 
    **/
    data: XOR<ImagesToBradsUpdateInput, ImagesToBradsUncheckedUpdateInput>
    /**
     * Choose, which ImagesToBrads to update.
     * 
    **/
    where: ImagesToBradsWhereUniqueInput
  }


  /**
   * ImagesToBrads updateMany
   */
  export type ImagesToBradsUpdateManyArgs = {
    /**
     * The data used to update ImagesToBrads.
     * 
    **/
    data: XOR<ImagesToBradsUpdateManyMutationInput, ImagesToBradsUncheckedUpdateManyInput>
    /**
     * Filter which ImagesToBrads to update
     * 
    **/
    where?: ImagesToBradsWhereInput
  }


  /**
   * ImagesToBrads upsert
   */
  export type ImagesToBradsUpsertArgs = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
    /**
     * The filter to search for the ImagesToBrads to update in case it exists.
     * 
    **/
    where: ImagesToBradsWhereUniqueInput
    /**
     * In case the ImagesToBrads found by the `where` argument doesn't exist, create a new ImagesToBrads with this data.
     * 
    **/
    create: XOR<ImagesToBradsCreateInput, ImagesToBradsUncheckedCreateInput>
    /**
     * In case the ImagesToBrads was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ImagesToBradsUpdateInput, ImagesToBradsUncheckedUpdateInput>
  }


  /**
   * ImagesToBrads delete
   */
  export type ImagesToBradsDeleteArgs = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
    /**
     * Filter which ImagesToBrads to delete.
     * 
    **/
    where: ImagesToBradsWhereUniqueInput
  }


  /**
   * ImagesToBrads deleteMany
   */
  export type ImagesToBradsDeleteManyArgs = {
    /**
     * Filter which ImagesToBrads to delete
     * 
    **/
    where?: ImagesToBradsWhereInput
  }


  /**
   * ImagesToBrads without action
   */
  export type ImagesToBradsArgs = {
    /**
     * Select specific fields to fetch from the ImagesToBrads
     * 
    **/
    select?: ImagesToBradsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ImagesToBradsInclude | null
  }



  /**
   * Model ProductsToVehicle
   */


  export type AggregateProductsToVehicle = {
    _count: ProductsToVehicleCountAggregateOutputType | null
    _avg: ProductsToVehicleAvgAggregateOutputType | null
    _sum: ProductsToVehicleSumAggregateOutputType | null
    _min: ProductsToVehicleMinAggregateOutputType | null
    _max: ProductsToVehicleMaxAggregateOutputType | null
  }

  export type ProductsToVehicleAvgAggregateOutputType = {
    id: number | null
    id_product: number | null
    id_vehicle: number | null
  }

  export type ProductsToVehicleSumAggregateOutputType = {
    id: number | null
    id_product: number | null
    id_vehicle: number | null
  }

  export type ProductsToVehicleMinAggregateOutputType = {
    id: number | null
    id_product: number | null
    id_vehicle: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsToVehicleMaxAggregateOutputType = {
    id: number | null
    id_product: number | null
    id_vehicle: number | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductsToVehicleCountAggregateOutputType = {
    id: number
    id_product: number
    id_vehicle: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductsToVehicleAvgAggregateInputType = {
    id?: true
    id_product?: true
    id_vehicle?: true
  }

  export type ProductsToVehicleSumAggregateInputType = {
    id?: true
    id_product?: true
    id_vehicle?: true
  }

  export type ProductsToVehicleMinAggregateInputType = {
    id?: true
    id_product?: true
    id_vehicle?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsToVehicleMaxAggregateInputType = {
    id?: true
    id_product?: true
    id_vehicle?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductsToVehicleCountAggregateInputType = {
    id?: true
    id_product?: true
    id_vehicle?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductsToVehicleAggregateArgs = {
    /**
     * Filter which ProductsToVehicle to aggregate.
     * 
    **/
    where?: ProductsToVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsToVehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsToVehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: ProductsToVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsToVehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsToVehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductsToVehicles
    **/
    _count?: true | ProductsToVehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsToVehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsToVehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsToVehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsToVehicleMaxAggregateInputType
  }

  export type GetProductsToVehicleAggregateType<T extends ProductsToVehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsToVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsToVehicle[P]>
      : GetScalarType<T[P], AggregateProductsToVehicle[P]>
  }




  export type ProductsToVehicleGroupByArgs = {
    where?: ProductsToVehicleWhereInput
    orderBy?: Enumerable<ProductsToVehicleOrderByWithAggregationInput>
    by: Array<ProductsToVehicleScalarFieldEnum>
    having?: ProductsToVehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsToVehicleCountAggregateInputType | true
    _avg?: ProductsToVehicleAvgAggregateInputType
    _sum?: ProductsToVehicleSumAggregateInputType
    _min?: ProductsToVehicleMinAggregateInputType
    _max?: ProductsToVehicleMaxAggregateInputType
  }


  export type ProductsToVehicleGroupByOutputType = {
    id: number
    id_product: number
    id_vehicle: number
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProductsToVehicleCountAggregateOutputType | null
    _avg: ProductsToVehicleAvgAggregateOutputType | null
    _sum: ProductsToVehicleSumAggregateOutputType | null
    _min: ProductsToVehicleMinAggregateOutputType | null
    _max: ProductsToVehicleMaxAggregateOutputType | null
  }

  type GetProductsToVehicleGroupByPayload<T extends ProductsToVehicleGroupByArgs> = PrismaPromise<
    Array<
      PickArray<ProductsToVehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsToVehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsToVehicleGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsToVehicleGroupByOutputType[P]>
        }
      >
    >


  export type ProductsToVehicleSelect = {
    id?: boolean
    id_product?: boolean
    id_vehicle?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductsArgs
    vehicles?: boolean | VehiclesArgs
  }


  export type ProductsToVehicleInclude = {
    product?: boolean | ProductsArgs
    vehicles?: boolean | VehiclesArgs
  } 

  export type ProductsToVehicleGetPayload<S extends boolean | null | undefined | ProductsToVehicleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ProductsToVehicle :
    S extends undefined ? never :
    S extends { include: any } & (ProductsToVehicleArgs | ProductsToVehicleFindManyArgs)
    ? ProductsToVehicle  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'product' ? ProductsGetPayload<S['include'][P]> :
        P extends 'vehicles' ? VehiclesGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ProductsToVehicleArgs | ProductsToVehicleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'product' ? ProductsGetPayload<S['select'][P]> :
        P extends 'vehicles' ? VehiclesGetPayload<S['select'][P]> :  P extends keyof ProductsToVehicle ? ProductsToVehicle[P] : never
  } 
      : ProductsToVehicle


  type ProductsToVehicleCountArgs = Merge<
    Omit<ProductsToVehicleFindManyArgs, 'select' | 'include'> & {
      select?: ProductsToVehicleCountAggregateInputType | true
    }
  >

  export interface ProductsToVehicleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one ProductsToVehicle that matches the filter.
     * @param {ProductsToVehicleFindUniqueArgs} args - Arguments to find a ProductsToVehicle
     * @example
     * // Get one ProductsToVehicle
     * const productsToVehicle = await prisma.productsToVehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductsToVehicleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProductsToVehicleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ProductsToVehicle'> extends True ? Prisma__ProductsToVehicleClient<ProductsToVehicleGetPayload<T>> : Prisma__ProductsToVehicleClient<ProductsToVehicleGetPayload<T> | null, null>

    /**
     * Find one ProductsToVehicle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductsToVehicleFindUniqueOrThrowArgs} args - Arguments to find a ProductsToVehicle
     * @example
     * // Get one ProductsToVehicle
     * const productsToVehicle = await prisma.productsToVehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductsToVehicleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ProductsToVehicleFindUniqueOrThrowArgs>
    ): Prisma__ProductsToVehicleClient<ProductsToVehicleGetPayload<T>>

    /**
     * Find the first ProductsToVehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsToVehicleFindFirstArgs} args - Arguments to find a ProductsToVehicle
     * @example
     * // Get one ProductsToVehicle
     * const productsToVehicle = await prisma.productsToVehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductsToVehicleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProductsToVehicleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ProductsToVehicle'> extends True ? Prisma__ProductsToVehicleClient<ProductsToVehicleGetPayload<T>> : Prisma__ProductsToVehicleClient<ProductsToVehicleGetPayload<T> | null, null>

    /**
     * Find the first ProductsToVehicle that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsToVehicleFindFirstOrThrowArgs} args - Arguments to find a ProductsToVehicle
     * @example
     * // Get one ProductsToVehicle
     * const productsToVehicle = await prisma.productsToVehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductsToVehicleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ProductsToVehicleFindFirstOrThrowArgs>
    ): Prisma__ProductsToVehicleClient<ProductsToVehicleGetPayload<T>>

    /**
     * Find zero or more ProductsToVehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsToVehicleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsToVehicles
     * const productsToVehicles = await prisma.productsToVehicle.findMany()
     * 
     * // Get first 10 ProductsToVehicles
     * const productsToVehicles = await prisma.productsToVehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsToVehicleWithIdOnly = await prisma.productsToVehicle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductsToVehicleFindManyArgs>(
      args?: SelectSubset<T, ProductsToVehicleFindManyArgs>
    ): PrismaPromise<Array<ProductsToVehicleGetPayload<T>>>

    /**
     * Create a ProductsToVehicle.
     * @param {ProductsToVehicleCreateArgs} args - Arguments to create a ProductsToVehicle.
     * @example
     * // Create one ProductsToVehicle
     * const ProductsToVehicle = await prisma.productsToVehicle.create({
     *   data: {
     *     // ... data to create a ProductsToVehicle
     *   }
     * })
     * 
    **/
    create<T extends ProductsToVehicleCreateArgs>(
      args: SelectSubset<T, ProductsToVehicleCreateArgs>
    ): Prisma__ProductsToVehicleClient<ProductsToVehicleGetPayload<T>>

    /**
     * Create many ProductsToVehicles.
     *     @param {ProductsToVehicleCreateManyArgs} args - Arguments to create many ProductsToVehicles.
     *     @example
     *     // Create many ProductsToVehicles
     *     const productsToVehicle = await prisma.productsToVehicle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductsToVehicleCreateManyArgs>(
      args?: SelectSubset<T, ProductsToVehicleCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a ProductsToVehicle.
     * @param {ProductsToVehicleDeleteArgs} args - Arguments to delete one ProductsToVehicle.
     * @example
     * // Delete one ProductsToVehicle
     * const ProductsToVehicle = await prisma.productsToVehicle.delete({
     *   where: {
     *     // ... filter to delete one ProductsToVehicle
     *   }
     * })
     * 
    **/
    delete<T extends ProductsToVehicleDeleteArgs>(
      args: SelectSubset<T, ProductsToVehicleDeleteArgs>
    ): Prisma__ProductsToVehicleClient<ProductsToVehicleGetPayload<T>>

    /**
     * Update one ProductsToVehicle.
     * @param {ProductsToVehicleUpdateArgs} args - Arguments to update one ProductsToVehicle.
     * @example
     * // Update one ProductsToVehicle
     * const productsToVehicle = await prisma.productsToVehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductsToVehicleUpdateArgs>(
      args: SelectSubset<T, ProductsToVehicleUpdateArgs>
    ): Prisma__ProductsToVehicleClient<ProductsToVehicleGetPayload<T>>

    /**
     * Delete zero or more ProductsToVehicles.
     * @param {ProductsToVehicleDeleteManyArgs} args - Arguments to filter ProductsToVehicles to delete.
     * @example
     * // Delete a few ProductsToVehicles
     * const { count } = await prisma.productsToVehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductsToVehicleDeleteManyArgs>(
      args?: SelectSubset<T, ProductsToVehicleDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsToVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsToVehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsToVehicles
     * const productsToVehicle = await prisma.productsToVehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductsToVehicleUpdateManyArgs>(
      args: SelectSubset<T, ProductsToVehicleUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one ProductsToVehicle.
     * @param {ProductsToVehicleUpsertArgs} args - Arguments to update or create a ProductsToVehicle.
     * @example
     * // Update or create a ProductsToVehicle
     * const productsToVehicle = await prisma.productsToVehicle.upsert({
     *   create: {
     *     // ... data to create a ProductsToVehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsToVehicle we want to update
     *   }
     * })
    **/
    upsert<T extends ProductsToVehicleUpsertArgs>(
      args: SelectSubset<T, ProductsToVehicleUpsertArgs>
    ): Prisma__ProductsToVehicleClient<ProductsToVehicleGetPayload<T>>

    /**
     * Count the number of ProductsToVehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsToVehicleCountArgs} args - Arguments to filter ProductsToVehicles to count.
     * @example
     * // Count the number of ProductsToVehicles
     * const count = await prisma.productsToVehicle.count({
     *   where: {
     *     // ... the filter for the ProductsToVehicles we want to count
     *   }
     * })
    **/
    count<T extends ProductsToVehicleCountArgs>(
      args?: Subset<T, ProductsToVehicleCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsToVehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsToVehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsToVehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsToVehicleAggregateArgs>(args: Subset<T, ProductsToVehicleAggregateArgs>): PrismaPromise<GetProductsToVehicleAggregateType<T>>

    /**
     * Group by ProductsToVehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsToVehicleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsToVehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsToVehicleGroupByArgs['orderBy'] }
        : { orderBy?: ProductsToVehicleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsToVehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsToVehicleGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductsToVehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProductsToVehicleClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    product<T extends ProductsArgs= {}>(args?: Subset<T, ProductsArgs>): Prisma__ProductsClient<ProductsGetPayload<T> | Null>;

    vehicles<T extends VehiclesArgs= {}>(args?: Subset<T, VehiclesArgs>): Prisma__VehiclesClient<VehiclesGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ProductsToVehicle base type for findUnique actions
   */
  export type ProductsToVehicleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
    /**
     * Filter, which ProductsToVehicle to fetch.
     * 
    **/
    where: ProductsToVehicleWhereUniqueInput
  }

  /**
   * ProductsToVehicle findUnique
   */
  export interface ProductsToVehicleFindUniqueArgs extends ProductsToVehicleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductsToVehicle findUniqueOrThrow
   */
  export type ProductsToVehicleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
    /**
     * Filter, which ProductsToVehicle to fetch.
     * 
    **/
    where: ProductsToVehicleWhereUniqueInput
  }


  /**
   * ProductsToVehicle base type for findFirst actions
   */
  export type ProductsToVehicleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
    /**
     * Filter, which ProductsToVehicle to fetch.
     * 
    **/
    where?: ProductsToVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsToVehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsToVehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsToVehicles.
     * 
    **/
    cursor?: ProductsToVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsToVehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsToVehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsToVehicles.
     * 
    **/
    distinct?: Enumerable<ProductsToVehicleScalarFieldEnum>
  }

  /**
   * ProductsToVehicle findFirst
   */
  export interface ProductsToVehicleFindFirstArgs extends ProductsToVehicleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ProductsToVehicle findFirstOrThrow
   */
  export type ProductsToVehicleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
    /**
     * Filter, which ProductsToVehicle to fetch.
     * 
    **/
    where?: ProductsToVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsToVehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsToVehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsToVehicles.
     * 
    **/
    cursor?: ProductsToVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsToVehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsToVehicles.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsToVehicles.
     * 
    **/
    distinct?: Enumerable<ProductsToVehicleScalarFieldEnum>
  }


  /**
   * ProductsToVehicle findMany
   */
  export type ProductsToVehicleFindManyArgs = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
    /**
     * Filter, which ProductsToVehicles to fetch.
     * 
    **/
    where?: ProductsToVehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsToVehicles to fetch.
     * 
    **/
    orderBy?: Enumerable<ProductsToVehicleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductsToVehicles.
     * 
    **/
    cursor?: ProductsToVehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsToVehicles from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsToVehicles.
     * 
    **/
    skip?: number
    distinct?: Enumerable<ProductsToVehicleScalarFieldEnum>
  }


  /**
   * ProductsToVehicle create
   */
  export type ProductsToVehicleCreateArgs = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
    /**
     * The data needed to create a ProductsToVehicle.
     * 
    **/
    data: XOR<ProductsToVehicleCreateInput, ProductsToVehicleUncheckedCreateInput>
  }


  /**
   * ProductsToVehicle createMany
   */
  export type ProductsToVehicleCreateManyArgs = {
    /**
     * The data used to create many ProductsToVehicles.
     * 
    **/
    data: Enumerable<ProductsToVehicleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ProductsToVehicle update
   */
  export type ProductsToVehicleUpdateArgs = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
    /**
     * The data needed to update a ProductsToVehicle.
     * 
    **/
    data: XOR<ProductsToVehicleUpdateInput, ProductsToVehicleUncheckedUpdateInput>
    /**
     * Choose, which ProductsToVehicle to update.
     * 
    **/
    where: ProductsToVehicleWhereUniqueInput
  }


  /**
   * ProductsToVehicle updateMany
   */
  export type ProductsToVehicleUpdateManyArgs = {
    /**
     * The data used to update ProductsToVehicles.
     * 
    **/
    data: XOR<ProductsToVehicleUpdateManyMutationInput, ProductsToVehicleUncheckedUpdateManyInput>
    /**
     * Filter which ProductsToVehicles to update
     * 
    **/
    where?: ProductsToVehicleWhereInput
  }


  /**
   * ProductsToVehicle upsert
   */
  export type ProductsToVehicleUpsertArgs = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
    /**
     * The filter to search for the ProductsToVehicle to update in case it exists.
     * 
    **/
    where: ProductsToVehicleWhereUniqueInput
    /**
     * In case the ProductsToVehicle found by the `where` argument doesn't exist, create a new ProductsToVehicle with this data.
     * 
    **/
    create: XOR<ProductsToVehicleCreateInput, ProductsToVehicleUncheckedCreateInput>
    /**
     * In case the ProductsToVehicle was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<ProductsToVehicleUpdateInput, ProductsToVehicleUncheckedUpdateInput>
  }


  /**
   * ProductsToVehicle delete
   */
  export type ProductsToVehicleDeleteArgs = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
    /**
     * Filter which ProductsToVehicle to delete.
     * 
    **/
    where: ProductsToVehicleWhereUniqueInput
  }


  /**
   * ProductsToVehicle deleteMany
   */
  export type ProductsToVehicleDeleteManyArgs = {
    /**
     * Filter which ProductsToVehicles to delete
     * 
    **/
    where?: ProductsToVehicleWhereInput
  }


  /**
   * ProductsToVehicle without action
   */
  export type ProductsToVehicleArgs = {
    /**
     * Select specific fields to fetch from the ProductsToVehicle
     * 
    **/
    select?: ProductsToVehicleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: ProductsToVehicleInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const BrandsScalarFieldEnum: {
    id: 'id',
    name_brand: 'name_brand',
    prefix: 'prefix',
    class: 'class'
  };

  export type BrandsScalarFieldEnum = (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum]


  export const ImagesScalarFieldEnum: {
    id: 'id',
    url: 'url',
    is_main: 'is_main',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImagesScalarFieldEnum = (typeof ImagesScalarFieldEnum)[keyof typeof ImagesScalarFieldEnum]


  export const ImagesToBradsScalarFieldEnum: {
    id: 'id',
    id_image: 'id_image',
    id_brand: 'id_brand',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImagesToBradsScalarFieldEnum = (typeof ImagesToBradsScalarFieldEnum)[keyof typeof ImagesToBradsScalarFieldEnum]


  export const ImagesToProductsScalarFieldEnum: {
    id: 'id',
    id_image: 'id_image',
    id_product: 'id_product',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImagesToProductsScalarFieldEnum = (typeof ImagesToProductsScalarFieldEnum)[keyof typeof ImagesToProductsScalarFieldEnum]


  export const ImagesToVehiclesScalarFieldEnum: {
    id: 'id',
    id_image: 'id_image',
    id_vehicle: 'id_vehicle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ImagesToVehiclesScalarFieldEnum = (typeof ImagesToVehiclesScalarFieldEnum)[keyof typeof ImagesToVehiclesScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name_product: 'name_product',
    id_brand: 'id_brand',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const ProductsToVehicleScalarFieldEnum: {
    id: 'id',
    id_product: 'id_product',
    id_vehicle: 'id_vehicle',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductsToVehicleScalarFieldEnum = (typeof ProductsToVehicleScalarFieldEnum)[keyof typeof ProductsToVehicleScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VehiclesScalarFieldEnum: {
    id: 'id',
    name_vehicles: 'name_vehicles',
    id_brand: 'id_brand',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VehiclesScalarFieldEnum = (typeof VehiclesScalarFieldEnum)[keyof typeof VehiclesScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type BrandsWhereInput = {
    AND?: Enumerable<BrandsWhereInput>
    OR?: Enumerable<BrandsWhereInput>
    NOT?: Enumerable<BrandsWhereInput>
    id?: IntFilter | number
    name_brand?: StringFilter | string
    prefix?: StringFilter | string
    class?: IntFilter | number
    products?: ProductsListRelationFilter
    vehicles?: VehiclesListRelationFilter
    imagesBrands?: ImagesToBradsListRelationFilter
  }

  export type BrandsOrderByWithRelationInput = {
    id?: SortOrder
    name_brand?: SortOrder
    prefix?: SortOrder
    class?: SortOrder
    products?: ProductsOrderByRelationAggregateInput
    vehicles?: VehiclesOrderByRelationAggregateInput
    imagesBrands?: ImagesToBradsOrderByRelationAggregateInput
  }

  export type BrandsWhereUniqueInput = {
    id?: number
  }

  export type BrandsOrderByWithAggregationInput = {
    id?: SortOrder
    name_brand?: SortOrder
    prefix?: SortOrder
    class?: SortOrder
    _count?: BrandsCountOrderByAggregateInput
    _avg?: BrandsAvgOrderByAggregateInput
    _max?: BrandsMaxOrderByAggregateInput
    _min?: BrandsMinOrderByAggregateInput
    _sum?: BrandsSumOrderByAggregateInput
  }

  export type BrandsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BrandsScalarWhereWithAggregatesInput>
    OR?: Enumerable<BrandsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BrandsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name_brand?: StringWithAggregatesFilter | string
    prefix?: StringWithAggregatesFilter | string
    class?: IntWithAggregatesFilter | number
  }

  export type VehiclesWhereInput = {
    AND?: Enumerable<VehiclesWhereInput>
    OR?: Enumerable<VehiclesWhereInput>
    NOT?: Enumerable<VehiclesWhereInput>
    id?: IntFilter | number
    name_vehicles?: StringFilter | string
    id_brand?: IntFilter | number
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    brand?: XOR<BrandsRelationFilter, BrandsWhereInput>
    imagesVehicles?: ImagesToVehiclesListRelationFilter
    productsVehicle?: ProductsToVehicleListRelationFilter
  }

  export type VehiclesOrderByWithRelationInput = {
    id?: SortOrder
    name_vehicles?: SortOrder
    id_brand?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: BrandsOrderByWithRelationInput
    imagesVehicles?: ImagesToVehiclesOrderByRelationAggregateInput
    productsVehicle?: ProductsToVehicleOrderByRelationAggregateInput
  }

  export type VehiclesWhereUniqueInput = {
    id?: number
  }

  export type VehiclesOrderByWithAggregationInput = {
    id?: SortOrder
    name_vehicles?: SortOrder
    id_brand?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VehiclesCountOrderByAggregateInput
    _avg?: VehiclesAvgOrderByAggregateInput
    _max?: VehiclesMaxOrderByAggregateInput
    _min?: VehiclesMinOrderByAggregateInput
    _sum?: VehiclesSumOrderByAggregateInput
  }

  export type VehiclesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VehiclesScalarWhereWithAggregatesInput>
    OR?: Enumerable<VehiclesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VehiclesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name_vehicles?: StringWithAggregatesFilter | string
    id_brand?: IntWithAggregatesFilter | number
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductsWhereInput = {
    AND?: Enumerable<ProductsWhereInput>
    OR?: Enumerable<ProductsWhereInput>
    NOT?: Enumerable<ProductsWhereInput>
    id?: IntFilter | number
    name_product?: StringFilter | string
    id_brand?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    brand?: XOR<BrandsRelationFilter, BrandsWhereInput>
    imagesProducts?: ImagesToProductsListRelationFilter
    productsVehicle?: ProductsToVehicleListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name_product?: SortOrder
    id_brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    brand?: BrandsOrderByWithRelationInput
    imagesProducts?: ImagesToProductsOrderByRelationAggregateInput
    productsVehicle?: ProductsToVehicleOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = {
    id?: number
  }

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name_product?: SortOrder
    id_brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _avg?: ProductsAvgOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
    _sum?: ProductsSumOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name_product?: StringWithAggregatesFilter | string
    id_brand?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ImagesWhereInput = {
    AND?: Enumerable<ImagesWhereInput>
    OR?: Enumerable<ImagesWhereInput>
    NOT?: Enumerable<ImagesWhereInput>
    id?: IntFilter | number
    url?: StringFilter | string
    is_main?: BoolFilter | boolean
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    imagesProducts?: ImagesToProductsListRelationFilter
    imagesVehicles?: ImagesToVehiclesListRelationFilter
    imagesBrands?: ImagesToBradsListRelationFilter
  }

  export type ImagesOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imagesProducts?: ImagesToProductsOrderByRelationAggregateInput
    imagesVehicles?: ImagesToVehiclesOrderByRelationAggregateInput
    imagesBrands?: ImagesToBradsOrderByRelationAggregateInput
  }

  export type ImagesWhereUniqueInput = {
    id?: number
  }

  export type ImagesOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImagesCountOrderByAggregateInput
    _avg?: ImagesAvgOrderByAggregateInput
    _max?: ImagesMaxOrderByAggregateInput
    _min?: ImagesMinOrderByAggregateInput
    _sum?: ImagesSumOrderByAggregateInput
  }

  export type ImagesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImagesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImagesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImagesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    url?: StringWithAggregatesFilter | string
    is_main?: BoolWithAggregatesFilter | boolean
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ImagesToProductsWhereInput = {
    AND?: Enumerable<ImagesToProductsWhereInput>
    OR?: Enumerable<ImagesToProductsWhereInput>
    NOT?: Enumerable<ImagesToProductsWhereInput>
    id?: IntFilter | number
    id_image?: IntFilter | number
    id_product?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    image?: XOR<ImagesRelationFilter, ImagesWhereInput>
    product?: XOR<ProductsRelationFilter, ProductsWhereInput>
  }

  export type ImagesToProductsOrderByWithRelationInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_product?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: ImagesOrderByWithRelationInput
    product?: ProductsOrderByWithRelationInput
  }

  export type ImagesToProductsWhereUniqueInput = {
    id_image_id_product?: ImagesToProductsId_imageId_productCompoundUniqueInput
  }

  export type ImagesToProductsOrderByWithAggregationInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_product?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImagesToProductsCountOrderByAggregateInput
    _avg?: ImagesToProductsAvgOrderByAggregateInput
    _max?: ImagesToProductsMaxOrderByAggregateInput
    _min?: ImagesToProductsMinOrderByAggregateInput
    _sum?: ImagesToProductsSumOrderByAggregateInput
  }

  export type ImagesToProductsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImagesToProductsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImagesToProductsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImagesToProductsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    id_image?: IntWithAggregatesFilter | number
    id_product?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ImagesToVehiclesWhereInput = {
    AND?: Enumerable<ImagesToVehiclesWhereInput>
    OR?: Enumerable<ImagesToVehiclesWhereInput>
    NOT?: Enumerable<ImagesToVehiclesWhereInput>
    id?: IntFilter | number
    id_image?: IntFilter | number
    id_vehicle?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    image?: XOR<ImagesRelationFilter, ImagesWhereInput>
    vehicles?: XOR<VehiclesRelationFilter, VehiclesWhereInput>
  }

  export type ImagesToVehiclesOrderByWithRelationInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_vehicle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: ImagesOrderByWithRelationInput
    vehicles?: VehiclesOrderByWithRelationInput
  }

  export type ImagesToVehiclesWhereUniqueInput = {
    id_image_id_vehicle?: ImagesToVehiclesId_imageId_vehicleCompoundUniqueInput
  }

  export type ImagesToVehiclesOrderByWithAggregationInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_vehicle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImagesToVehiclesCountOrderByAggregateInput
    _avg?: ImagesToVehiclesAvgOrderByAggregateInput
    _max?: ImagesToVehiclesMaxOrderByAggregateInput
    _min?: ImagesToVehiclesMinOrderByAggregateInput
    _sum?: ImagesToVehiclesSumOrderByAggregateInput
  }

  export type ImagesToVehiclesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImagesToVehiclesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImagesToVehiclesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImagesToVehiclesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    id_image?: IntWithAggregatesFilter | number
    id_vehicle?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ImagesToBradsWhereInput = {
    AND?: Enumerable<ImagesToBradsWhereInput>
    OR?: Enumerable<ImagesToBradsWhereInput>
    NOT?: Enumerable<ImagesToBradsWhereInput>
    id?: IntFilter | number
    id_image?: IntFilter | number
    id_brand?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    image?: XOR<ImagesRelationFilter, ImagesWhereInput>
    brand?: XOR<BrandsRelationFilter, BrandsWhereInput>
  }

  export type ImagesToBradsOrderByWithRelationInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image?: ImagesOrderByWithRelationInput
    brand?: BrandsOrderByWithRelationInput
  }

  export type ImagesToBradsWhereUniqueInput = {
    id_image_id_brand?: ImagesToBradsId_imageId_brandCompoundUniqueInput
  }

  export type ImagesToBradsOrderByWithAggregationInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ImagesToBradsCountOrderByAggregateInput
    _avg?: ImagesToBradsAvgOrderByAggregateInput
    _max?: ImagesToBradsMaxOrderByAggregateInput
    _min?: ImagesToBradsMinOrderByAggregateInput
    _sum?: ImagesToBradsSumOrderByAggregateInput
  }

  export type ImagesToBradsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ImagesToBradsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ImagesToBradsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ImagesToBradsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    id_image?: IntWithAggregatesFilter | number
    id_brand?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type ProductsToVehicleWhereInput = {
    AND?: Enumerable<ProductsToVehicleWhereInput>
    OR?: Enumerable<ProductsToVehicleWhereInput>
    NOT?: Enumerable<ProductsToVehicleWhereInput>
    id?: IntFilter | number
    id_product?: IntFilter | number
    id_vehicle?: IntFilter | number
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    product?: XOR<ProductsRelationFilter, ProductsWhereInput>
    vehicles?: XOR<VehiclesRelationFilter, VehiclesWhereInput>
  }

  export type ProductsToVehicleOrderByWithRelationInput = {
    id?: SortOrder
    id_product?: SortOrder
    id_vehicle?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductsOrderByWithRelationInput
    vehicles?: VehiclesOrderByWithRelationInput
  }

  export type ProductsToVehicleWhereUniqueInput = {
    id_product_id_vehicle?: ProductsToVehicleId_productId_vehicleCompoundUniqueInput
  }

  export type ProductsToVehicleOrderByWithAggregationInput = {
    id?: SortOrder
    id_product?: SortOrder
    id_vehicle?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductsToVehicleCountOrderByAggregateInput
    _avg?: ProductsToVehicleAvgOrderByAggregateInput
    _max?: ProductsToVehicleMaxOrderByAggregateInput
    _min?: ProductsToVehicleMinOrderByAggregateInput
    _sum?: ProductsToVehicleSumOrderByAggregateInput
  }

  export type ProductsToVehicleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProductsToVehicleScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProductsToVehicleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProductsToVehicleScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    id_product?: IntWithAggregatesFilter | number
    id_vehicle?: IntWithAggregatesFilter | number
    description?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type BrandsCreateInput = {
    name_brand: string
    prefix: string
    class: number
    products?: ProductsCreateNestedManyWithoutBrandInput
    vehicles?: VehiclesCreateNestedManyWithoutBrandInput
    imagesBrands?: ImagesToBradsCreateNestedManyWithoutBrandInput
  }

  export type BrandsUncheckedCreateInput = {
    id?: number
    name_brand: string
    prefix: string
    class: number
    products?: ProductsUncheckedCreateNestedManyWithoutBrandInput
    vehicles?: VehiclesUncheckedCreateNestedManyWithoutBrandInput
    imagesBrands?: ImagesToBradsUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandsUpdateInput = {
    name_brand?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    class?: IntFieldUpdateOperationsInput | number
    products?: ProductsUpdateManyWithoutBrandNestedInput
    vehicles?: VehiclesUpdateManyWithoutBrandNestedInput
    imagesBrands?: ImagesToBradsUpdateManyWithoutBrandNestedInput
  }

  export type BrandsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_brand?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    class?: IntFieldUpdateOperationsInput | number
    products?: ProductsUncheckedUpdateManyWithoutBrandNestedInput
    vehicles?: VehiclesUncheckedUpdateManyWithoutBrandNestedInput
    imagesBrands?: ImagesToBradsUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandsCreateManyInput = {
    id?: number
    name_brand: string
    prefix: string
    class: number
  }

  export type BrandsUpdateManyMutationInput = {
    name_brand?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    class?: IntFieldUpdateOperationsInput | number
  }

  export type BrandsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_brand?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    class?: IntFieldUpdateOperationsInput | number
  }

  export type VehiclesCreateInput = {
    name_vehicles: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandsCreateNestedOneWithoutVehiclesInput
    imagesVehicles?: ImagesToVehiclesCreateNestedManyWithoutVehiclesInput
    productsVehicle?: ProductsToVehicleCreateNestedManyWithoutVehiclesInput
  }

  export type VehiclesUncheckedCreateInput = {
    id?: number
    name_vehicles: string
    id_brand: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesVehicles?: ImagesToVehiclesUncheckedCreateNestedManyWithoutVehiclesInput
    productsVehicle?: ProductsToVehicleUncheckedCreateNestedManyWithoutVehiclesInput
  }

  export type VehiclesUpdateInput = {
    name_vehicles?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandsUpdateOneRequiredWithoutVehiclesNestedInput
    imagesVehicles?: ImagesToVehiclesUpdateManyWithoutVehiclesNestedInput
    productsVehicle?: ProductsToVehicleUpdateManyWithoutVehiclesNestedInput
  }

  export type VehiclesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_vehicles?: StringFieldUpdateOperationsInput | string
    id_brand?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesVehicles?: ImagesToVehiclesUncheckedUpdateManyWithoutVehiclesNestedInput
    productsVehicle?: ProductsToVehicleUncheckedUpdateManyWithoutVehiclesNestedInput
  }

  export type VehiclesCreateManyInput = {
    id?: number
    name_vehicles: string
    id_brand: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehiclesUpdateManyMutationInput = {
    name_vehicles?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiclesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_vehicles?: StringFieldUpdateOperationsInput | string
    id_brand?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsCreateInput = {
    name_product: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandsCreateNestedOneWithoutProductsInput
    imagesProducts?: ImagesToProductsCreateNestedManyWithoutProductInput
    productsVehicle?: ProductsToVehicleCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: number
    name_product: string
    id_brand: number
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesProducts?: ImagesToProductsUncheckedCreateNestedManyWithoutProductInput
    productsVehicle?: ProductsToVehicleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsUpdateInput = {
    name_product?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput
    imagesProducts?: ImagesToProductsUpdateManyWithoutProductNestedInput
    productsVehicle?: ProductsToVehicleUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_product?: StringFieldUpdateOperationsInput | string
    id_brand?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesProducts?: ImagesToProductsUncheckedUpdateManyWithoutProductNestedInput
    productsVehicle?: ProductsToVehicleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: number
    name_product: string
    id_brand: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUpdateManyMutationInput = {
    name_product?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_product?: StringFieldUpdateOperationsInput | string
    id_brand?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesCreateInput = {
    url: string
    is_main?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesProducts?: ImagesToProductsCreateNestedManyWithoutImageInput
    imagesVehicles?: ImagesToVehiclesCreateNestedManyWithoutImageInput
    imagesBrands?: ImagesToBradsCreateNestedManyWithoutImageInput
  }

  export type ImagesUncheckedCreateInput = {
    id?: number
    url: string
    is_main?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesProducts?: ImagesToProductsUncheckedCreateNestedManyWithoutImageInput
    imagesVehicles?: ImagesToVehiclesUncheckedCreateNestedManyWithoutImageInput
    imagesBrands?: ImagesToBradsUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImagesUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesProducts?: ImagesToProductsUpdateManyWithoutImageNestedInput
    imagesVehicles?: ImagesToVehiclesUpdateManyWithoutImageNestedInput
    imagesBrands?: ImagesToBradsUpdateManyWithoutImageNestedInput
  }

  export type ImagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesProducts?: ImagesToProductsUncheckedUpdateManyWithoutImageNestedInput
    imagesVehicles?: ImagesToVehiclesUncheckedUpdateManyWithoutImageNestedInput
    imagesBrands?: ImagesToBradsUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ImagesCreateManyInput = {
    id?: number
    url: string
    is_main?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToProductsCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    image: ImagesCreateNestedOneWithoutImagesProductsInput
    product: ProductsCreateNestedOneWithoutImagesProductsInput
  }

  export type ImagesToProductsUncheckedCreateInput = {
    id?: number
    id_image: number
    id_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToProductsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImagesUpdateOneRequiredWithoutImagesProductsNestedInput
    product?: ProductsUpdateOneRequiredWithoutImagesProductsNestedInput
  }

  export type ImagesToProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToProductsCreateManyInput = {
    id?: number
    id_image: number
    id_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToProductsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToVehiclesCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    image: ImagesCreateNestedOneWithoutImagesVehiclesInput
    vehicles: VehiclesCreateNestedOneWithoutImagesVehiclesInput
  }

  export type ImagesToVehiclesUncheckedCreateInput = {
    id?: number
    id_image: number
    id_vehicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToVehiclesUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImagesUpdateOneRequiredWithoutImagesVehiclesNestedInput
    vehicles?: VehiclesUpdateOneRequiredWithoutImagesVehiclesNestedInput
  }

  export type ImagesToVehiclesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    id_vehicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToVehiclesCreateManyInput = {
    id?: number
    id_image: number
    id_vehicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToVehiclesUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToVehiclesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    id_vehicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToBradsCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    image: ImagesCreateNestedOneWithoutImagesBrandsInput
    brand: BrandsCreateNestedOneWithoutImagesBrandsInput
  }

  export type ImagesToBradsUncheckedCreateInput = {
    id?: number
    id_image: number
    id_brand: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToBradsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImagesUpdateOneRequiredWithoutImagesBrandsNestedInput
    brand?: BrandsUpdateOneRequiredWithoutImagesBrandsNestedInput
  }

  export type ImagesToBradsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    id_brand?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToBradsCreateManyInput = {
    id?: number
    id_image: number
    id_brand: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToBradsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToBradsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    id_brand?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsToVehicleCreateInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutProductsVehicleInput
    vehicles: VehiclesCreateNestedOneWithoutProductsVehicleInput
  }

  export type ProductsToVehicleUncheckedCreateInput = {
    id?: number
    id_product: number
    id_vehicle: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsToVehicleUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutProductsVehicleNestedInput
    vehicles?: VehiclesUpdateOneRequiredWithoutProductsVehicleNestedInput
  }

  export type ProductsToVehicleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    id_vehicle?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsToVehicleCreateManyInput = {
    id?: number
    id_product: number
    id_vehicle: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsToVehicleUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsToVehicleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    id_vehicle?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type VehiclesListRelationFilter = {
    every?: VehiclesWhereInput
    some?: VehiclesWhereInput
    none?: VehiclesWhereInput
  }

  export type ImagesToBradsListRelationFilter = {
    every?: ImagesToBradsWhereInput
    some?: ImagesToBradsWhereInput
    none?: ImagesToBradsWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehiclesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImagesToBradsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BrandsCountOrderByAggregateInput = {
    id?: SortOrder
    name_brand?: SortOrder
    prefix?: SortOrder
    class?: SortOrder
  }

  export type BrandsAvgOrderByAggregateInput = {
    id?: SortOrder
    class?: SortOrder
  }

  export type BrandsMaxOrderByAggregateInput = {
    id?: SortOrder
    name_brand?: SortOrder
    prefix?: SortOrder
    class?: SortOrder
  }

  export type BrandsMinOrderByAggregateInput = {
    id?: SortOrder
    name_brand?: SortOrder
    prefix?: SortOrder
    class?: SortOrder
  }

  export type BrandsSumOrderByAggregateInput = {
    id?: SortOrder
    class?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type BrandsRelationFilter = {
    is?: BrandsWhereInput
    isNot?: BrandsWhereInput
  }

  export type ImagesToVehiclesListRelationFilter = {
    every?: ImagesToVehiclesWhereInput
    some?: ImagesToVehiclesWhereInput
    none?: ImagesToVehiclesWhereInput
  }

  export type ProductsToVehicleListRelationFilter = {
    every?: ProductsToVehicleWhereInput
    some?: ProductsToVehicleWhereInput
    none?: ProductsToVehicleWhereInput
  }

  export type ImagesToVehiclesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsToVehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehiclesCountOrderByAggregateInput = {
    id?: SortOrder
    name_vehicles?: SortOrder
    id_brand?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehiclesAvgOrderByAggregateInput = {
    id?: SortOrder
    id_brand?: SortOrder
  }

  export type VehiclesMaxOrderByAggregateInput = {
    id?: SortOrder
    name_vehicles?: SortOrder
    id_brand?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehiclesMinOrderByAggregateInput = {
    id?: SortOrder
    name_vehicles?: SortOrder
    id_brand?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VehiclesSumOrderByAggregateInput = {
    id?: SortOrder
    id_brand?: SortOrder
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ImagesToProductsListRelationFilter = {
    every?: ImagesToProductsWhereInput
    some?: ImagesToProductsWhereInput
    none?: ImagesToProductsWhereInput
  }

  export type ImagesToProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name_product?: SortOrder
    id_brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_brand?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name_product?: SortOrder
    id_brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name_product?: SortOrder
    id_brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsSumOrderByAggregateInput = {
    id?: SortOrder
    id_brand?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type ImagesCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ImagesMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    is_main?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ImagesRelationFilter = {
    is?: ImagesWhereInput
    isNot?: ImagesWhereInput
  }

  export type ProductsRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type ImagesToProductsId_imageId_productCompoundUniqueInput = {
    id_image: number
    id_product: number
  }

  export type ImagesToProductsCountOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_product?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesToProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_product?: SortOrder
  }

  export type ImagesToProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_product?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesToProductsMinOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_product?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesToProductsSumOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_product?: SortOrder
  }

  export type VehiclesRelationFilter = {
    is?: VehiclesWhereInput
    isNot?: VehiclesWhereInput
  }

  export type ImagesToVehiclesId_imageId_vehicleCompoundUniqueInput = {
    id_image: number
    id_vehicle: number
  }

  export type ImagesToVehiclesCountOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_vehicle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesToVehiclesAvgOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_vehicle?: SortOrder
  }

  export type ImagesToVehiclesMaxOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_vehicle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesToVehiclesMinOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_vehicle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesToVehiclesSumOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_vehicle?: SortOrder
  }

  export type ImagesToBradsId_imageId_brandCompoundUniqueInput = {
    id_image: number
    id_brand: number
  }

  export type ImagesToBradsCountOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesToBradsAvgOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_brand?: SortOrder
  }

  export type ImagesToBradsMaxOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesToBradsMinOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_brand?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ImagesToBradsSumOrderByAggregateInput = {
    id?: SortOrder
    id_image?: SortOrder
    id_brand?: SortOrder
  }

  export type ProductsToVehicleId_productId_vehicleCompoundUniqueInput = {
    id_product: number
    id_vehicle: number
  }

  export type ProductsToVehicleCountOrderByAggregateInput = {
    id?: SortOrder
    id_product?: SortOrder
    id_vehicle?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsToVehicleAvgOrderByAggregateInput = {
    id?: SortOrder
    id_product?: SortOrder
    id_vehicle?: SortOrder
  }

  export type ProductsToVehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    id_product?: SortOrder
    id_vehicle?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsToVehicleMinOrderByAggregateInput = {
    id?: SortOrder
    id_product?: SortOrder
    id_vehicle?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductsToVehicleSumOrderByAggregateInput = {
    id?: SortOrder
    id_product?: SortOrder
    id_vehicle?: SortOrder
  }

  export type ProductsCreateNestedManyWithoutBrandInput = {
    create?: XOR<Enumerable<ProductsCreateWithoutBrandInput>, Enumerable<ProductsUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductsCreateOrConnectWithoutBrandInput>
    createMany?: ProductsCreateManyBrandInputEnvelope
    connect?: Enumerable<ProductsWhereUniqueInput>
  }

  export type VehiclesCreateNestedManyWithoutBrandInput = {
    create?: XOR<Enumerable<VehiclesCreateWithoutBrandInput>, Enumerable<VehiclesUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<VehiclesCreateOrConnectWithoutBrandInput>
    createMany?: VehiclesCreateManyBrandInputEnvelope
    connect?: Enumerable<VehiclesWhereUniqueInput>
  }

  export type ImagesToBradsCreateNestedManyWithoutBrandInput = {
    create?: XOR<Enumerable<ImagesToBradsCreateWithoutBrandInput>, Enumerable<ImagesToBradsUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ImagesToBradsCreateOrConnectWithoutBrandInput>
    createMany?: ImagesToBradsCreateManyBrandInputEnvelope
    connect?: Enumerable<ImagesToBradsWhereUniqueInput>
  }

  export type ProductsUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<Enumerable<ProductsCreateWithoutBrandInput>, Enumerable<ProductsUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductsCreateOrConnectWithoutBrandInput>
    createMany?: ProductsCreateManyBrandInputEnvelope
    connect?: Enumerable<ProductsWhereUniqueInput>
  }

  export type VehiclesUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<Enumerable<VehiclesCreateWithoutBrandInput>, Enumerable<VehiclesUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<VehiclesCreateOrConnectWithoutBrandInput>
    createMany?: VehiclesCreateManyBrandInputEnvelope
    connect?: Enumerable<VehiclesWhereUniqueInput>
  }

  export type ImagesToBradsUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<Enumerable<ImagesToBradsCreateWithoutBrandInput>, Enumerable<ImagesToBradsUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ImagesToBradsCreateOrConnectWithoutBrandInput>
    createMany?: ImagesToBradsCreateManyBrandInputEnvelope
    connect?: Enumerable<ImagesToBradsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUpdateManyWithoutBrandNestedInput = {
    create?: XOR<Enumerable<ProductsCreateWithoutBrandInput>, Enumerable<ProductsUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductsCreateOrConnectWithoutBrandInput>
    upsert?: Enumerable<ProductsUpsertWithWhereUniqueWithoutBrandInput>
    createMany?: ProductsCreateManyBrandInputEnvelope
    set?: Enumerable<ProductsWhereUniqueInput>
    disconnect?: Enumerable<ProductsWhereUniqueInput>
    delete?: Enumerable<ProductsWhereUniqueInput>
    connect?: Enumerable<ProductsWhereUniqueInput>
    update?: Enumerable<ProductsUpdateWithWhereUniqueWithoutBrandInput>
    updateMany?: Enumerable<ProductsUpdateManyWithWhereWithoutBrandInput>
    deleteMany?: Enumerable<ProductsScalarWhereInput>
  }

  export type VehiclesUpdateManyWithoutBrandNestedInput = {
    create?: XOR<Enumerable<VehiclesCreateWithoutBrandInput>, Enumerable<VehiclesUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<VehiclesCreateOrConnectWithoutBrandInput>
    upsert?: Enumerable<VehiclesUpsertWithWhereUniqueWithoutBrandInput>
    createMany?: VehiclesCreateManyBrandInputEnvelope
    set?: Enumerable<VehiclesWhereUniqueInput>
    disconnect?: Enumerable<VehiclesWhereUniqueInput>
    delete?: Enumerable<VehiclesWhereUniqueInput>
    connect?: Enumerable<VehiclesWhereUniqueInput>
    update?: Enumerable<VehiclesUpdateWithWhereUniqueWithoutBrandInput>
    updateMany?: Enumerable<VehiclesUpdateManyWithWhereWithoutBrandInput>
    deleteMany?: Enumerable<VehiclesScalarWhereInput>
  }

  export type ImagesToBradsUpdateManyWithoutBrandNestedInput = {
    create?: XOR<Enumerable<ImagesToBradsCreateWithoutBrandInput>, Enumerable<ImagesToBradsUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ImagesToBradsCreateOrConnectWithoutBrandInput>
    upsert?: Enumerable<ImagesToBradsUpsertWithWhereUniqueWithoutBrandInput>
    createMany?: ImagesToBradsCreateManyBrandInputEnvelope
    set?: Enumerable<ImagesToBradsWhereUniqueInput>
    disconnect?: Enumerable<ImagesToBradsWhereUniqueInput>
    delete?: Enumerable<ImagesToBradsWhereUniqueInput>
    connect?: Enumerable<ImagesToBradsWhereUniqueInput>
    update?: Enumerable<ImagesToBradsUpdateWithWhereUniqueWithoutBrandInput>
    updateMany?: Enumerable<ImagesToBradsUpdateManyWithWhereWithoutBrandInput>
    deleteMany?: Enumerable<ImagesToBradsScalarWhereInput>
  }

  export type ProductsUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<Enumerable<ProductsCreateWithoutBrandInput>, Enumerable<ProductsUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ProductsCreateOrConnectWithoutBrandInput>
    upsert?: Enumerable<ProductsUpsertWithWhereUniqueWithoutBrandInput>
    createMany?: ProductsCreateManyBrandInputEnvelope
    set?: Enumerable<ProductsWhereUniqueInput>
    disconnect?: Enumerable<ProductsWhereUniqueInput>
    delete?: Enumerable<ProductsWhereUniqueInput>
    connect?: Enumerable<ProductsWhereUniqueInput>
    update?: Enumerable<ProductsUpdateWithWhereUniqueWithoutBrandInput>
    updateMany?: Enumerable<ProductsUpdateManyWithWhereWithoutBrandInput>
    deleteMany?: Enumerable<ProductsScalarWhereInput>
  }

  export type VehiclesUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<Enumerable<VehiclesCreateWithoutBrandInput>, Enumerable<VehiclesUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<VehiclesCreateOrConnectWithoutBrandInput>
    upsert?: Enumerable<VehiclesUpsertWithWhereUniqueWithoutBrandInput>
    createMany?: VehiclesCreateManyBrandInputEnvelope
    set?: Enumerable<VehiclesWhereUniqueInput>
    disconnect?: Enumerable<VehiclesWhereUniqueInput>
    delete?: Enumerable<VehiclesWhereUniqueInput>
    connect?: Enumerable<VehiclesWhereUniqueInput>
    update?: Enumerable<VehiclesUpdateWithWhereUniqueWithoutBrandInput>
    updateMany?: Enumerable<VehiclesUpdateManyWithWhereWithoutBrandInput>
    deleteMany?: Enumerable<VehiclesScalarWhereInput>
  }

  export type ImagesToBradsUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<Enumerable<ImagesToBradsCreateWithoutBrandInput>, Enumerable<ImagesToBradsUncheckedCreateWithoutBrandInput>>
    connectOrCreate?: Enumerable<ImagesToBradsCreateOrConnectWithoutBrandInput>
    upsert?: Enumerable<ImagesToBradsUpsertWithWhereUniqueWithoutBrandInput>
    createMany?: ImagesToBradsCreateManyBrandInputEnvelope
    set?: Enumerable<ImagesToBradsWhereUniqueInput>
    disconnect?: Enumerable<ImagesToBradsWhereUniqueInput>
    delete?: Enumerable<ImagesToBradsWhereUniqueInput>
    connect?: Enumerable<ImagesToBradsWhereUniqueInput>
    update?: Enumerable<ImagesToBradsUpdateWithWhereUniqueWithoutBrandInput>
    updateMany?: Enumerable<ImagesToBradsUpdateManyWithWhereWithoutBrandInput>
    deleteMany?: Enumerable<ImagesToBradsScalarWhereInput>
  }

  export type BrandsCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<BrandsCreateWithoutVehiclesInput, BrandsUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutVehiclesInput
    connect?: BrandsWhereUniqueInput
  }

  export type ImagesToVehiclesCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<Enumerable<ImagesToVehiclesCreateWithoutVehiclesInput>, Enumerable<ImagesToVehiclesUncheckedCreateWithoutVehiclesInput>>
    connectOrCreate?: Enumerable<ImagesToVehiclesCreateOrConnectWithoutVehiclesInput>
    createMany?: ImagesToVehiclesCreateManyVehiclesInputEnvelope
    connect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
  }

  export type ProductsToVehicleCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<Enumerable<ProductsToVehicleCreateWithoutVehiclesInput>, Enumerable<ProductsToVehicleUncheckedCreateWithoutVehiclesInput>>
    connectOrCreate?: Enumerable<ProductsToVehicleCreateOrConnectWithoutVehiclesInput>
    createMany?: ProductsToVehicleCreateManyVehiclesInputEnvelope
    connect?: Enumerable<ProductsToVehicleWhereUniqueInput>
  }

  export type ImagesToVehiclesUncheckedCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<Enumerable<ImagesToVehiclesCreateWithoutVehiclesInput>, Enumerable<ImagesToVehiclesUncheckedCreateWithoutVehiclesInput>>
    connectOrCreate?: Enumerable<ImagesToVehiclesCreateOrConnectWithoutVehiclesInput>
    createMany?: ImagesToVehiclesCreateManyVehiclesInputEnvelope
    connect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
  }

  export type ProductsToVehicleUncheckedCreateNestedManyWithoutVehiclesInput = {
    create?: XOR<Enumerable<ProductsToVehicleCreateWithoutVehiclesInput>, Enumerable<ProductsToVehicleUncheckedCreateWithoutVehiclesInput>>
    connectOrCreate?: Enumerable<ProductsToVehicleCreateOrConnectWithoutVehiclesInput>
    createMany?: ProductsToVehicleCreateManyVehiclesInputEnvelope
    connect?: Enumerable<ProductsToVehicleWhereUniqueInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BrandsUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<BrandsCreateWithoutVehiclesInput, BrandsUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutVehiclesInput
    upsert?: BrandsUpsertWithoutVehiclesInput
    connect?: BrandsWhereUniqueInput
    update?: XOR<BrandsUpdateWithoutVehiclesInput, BrandsUncheckedUpdateWithoutVehiclesInput>
  }

  export type ImagesToVehiclesUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<Enumerable<ImagesToVehiclesCreateWithoutVehiclesInput>, Enumerable<ImagesToVehiclesUncheckedCreateWithoutVehiclesInput>>
    connectOrCreate?: Enumerable<ImagesToVehiclesCreateOrConnectWithoutVehiclesInput>
    upsert?: Enumerable<ImagesToVehiclesUpsertWithWhereUniqueWithoutVehiclesInput>
    createMany?: ImagesToVehiclesCreateManyVehiclesInputEnvelope
    set?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    disconnect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    delete?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    connect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    update?: Enumerable<ImagesToVehiclesUpdateWithWhereUniqueWithoutVehiclesInput>
    updateMany?: Enumerable<ImagesToVehiclesUpdateManyWithWhereWithoutVehiclesInput>
    deleteMany?: Enumerable<ImagesToVehiclesScalarWhereInput>
  }

  export type ProductsToVehicleUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<Enumerable<ProductsToVehicleCreateWithoutVehiclesInput>, Enumerable<ProductsToVehicleUncheckedCreateWithoutVehiclesInput>>
    connectOrCreate?: Enumerable<ProductsToVehicleCreateOrConnectWithoutVehiclesInput>
    upsert?: Enumerable<ProductsToVehicleUpsertWithWhereUniqueWithoutVehiclesInput>
    createMany?: ProductsToVehicleCreateManyVehiclesInputEnvelope
    set?: Enumerable<ProductsToVehicleWhereUniqueInput>
    disconnect?: Enumerable<ProductsToVehicleWhereUniqueInput>
    delete?: Enumerable<ProductsToVehicleWhereUniqueInput>
    connect?: Enumerable<ProductsToVehicleWhereUniqueInput>
    update?: Enumerable<ProductsToVehicleUpdateWithWhereUniqueWithoutVehiclesInput>
    updateMany?: Enumerable<ProductsToVehicleUpdateManyWithWhereWithoutVehiclesInput>
    deleteMany?: Enumerable<ProductsToVehicleScalarWhereInput>
  }

  export type ImagesToVehiclesUncheckedUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<Enumerable<ImagesToVehiclesCreateWithoutVehiclesInput>, Enumerable<ImagesToVehiclesUncheckedCreateWithoutVehiclesInput>>
    connectOrCreate?: Enumerable<ImagesToVehiclesCreateOrConnectWithoutVehiclesInput>
    upsert?: Enumerable<ImagesToVehiclesUpsertWithWhereUniqueWithoutVehiclesInput>
    createMany?: ImagesToVehiclesCreateManyVehiclesInputEnvelope
    set?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    disconnect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    delete?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    connect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    update?: Enumerable<ImagesToVehiclesUpdateWithWhereUniqueWithoutVehiclesInput>
    updateMany?: Enumerable<ImagesToVehiclesUpdateManyWithWhereWithoutVehiclesInput>
    deleteMany?: Enumerable<ImagesToVehiclesScalarWhereInput>
  }

  export type ProductsToVehicleUncheckedUpdateManyWithoutVehiclesNestedInput = {
    create?: XOR<Enumerable<ProductsToVehicleCreateWithoutVehiclesInput>, Enumerable<ProductsToVehicleUncheckedCreateWithoutVehiclesInput>>
    connectOrCreate?: Enumerable<ProductsToVehicleCreateOrConnectWithoutVehiclesInput>
    upsert?: Enumerable<ProductsToVehicleUpsertWithWhereUniqueWithoutVehiclesInput>
    createMany?: ProductsToVehicleCreateManyVehiclesInputEnvelope
    set?: Enumerable<ProductsToVehicleWhereUniqueInput>
    disconnect?: Enumerable<ProductsToVehicleWhereUniqueInput>
    delete?: Enumerable<ProductsToVehicleWhereUniqueInput>
    connect?: Enumerable<ProductsToVehicleWhereUniqueInput>
    update?: Enumerable<ProductsToVehicleUpdateWithWhereUniqueWithoutVehiclesInput>
    updateMany?: Enumerable<ProductsToVehicleUpdateManyWithWhereWithoutVehiclesInput>
    deleteMany?: Enumerable<ProductsToVehicleScalarWhereInput>
  }

  export type BrandsCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutProductsInput
    connect?: BrandsWhereUniqueInput
  }

  export type ImagesToProductsCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ImagesToProductsCreateWithoutProductInput>, Enumerable<ImagesToProductsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ImagesToProductsCreateOrConnectWithoutProductInput>
    createMany?: ImagesToProductsCreateManyProductInputEnvelope
    connect?: Enumerable<ImagesToProductsWhereUniqueInput>
  }

  export type ProductsToVehicleCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductsToVehicleCreateWithoutProductInput>, Enumerable<ProductsToVehicleUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductsToVehicleCreateOrConnectWithoutProductInput>
    createMany?: ProductsToVehicleCreateManyProductInputEnvelope
    connect?: Enumerable<ProductsToVehicleWhereUniqueInput>
  }

  export type ImagesToProductsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ImagesToProductsCreateWithoutProductInput>, Enumerable<ImagesToProductsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ImagesToProductsCreateOrConnectWithoutProductInput>
    createMany?: ImagesToProductsCreateManyProductInputEnvelope
    connect?: Enumerable<ImagesToProductsWhereUniqueInput>
  }

  export type ProductsToVehicleUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<Enumerable<ProductsToVehicleCreateWithoutProductInput>, Enumerable<ProductsToVehicleUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductsToVehicleCreateOrConnectWithoutProductInput>
    createMany?: ProductsToVehicleCreateManyProductInputEnvelope
    connect?: Enumerable<ProductsToVehicleWhereUniqueInput>
  }

  export type BrandsUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutProductsInput
    upsert?: BrandsUpsertWithoutProductsInput
    connect?: BrandsWhereUniqueInput
    update?: XOR<BrandsUpdateWithoutProductsInput, BrandsUncheckedUpdateWithoutProductsInput>
  }

  export type ImagesToProductsUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ImagesToProductsCreateWithoutProductInput>, Enumerable<ImagesToProductsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ImagesToProductsCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ImagesToProductsUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ImagesToProductsCreateManyProductInputEnvelope
    set?: Enumerable<ImagesToProductsWhereUniqueInput>
    disconnect?: Enumerable<ImagesToProductsWhereUniqueInput>
    delete?: Enumerable<ImagesToProductsWhereUniqueInput>
    connect?: Enumerable<ImagesToProductsWhereUniqueInput>
    update?: Enumerable<ImagesToProductsUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ImagesToProductsUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ImagesToProductsScalarWhereInput>
  }

  export type ProductsToVehicleUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductsToVehicleCreateWithoutProductInput>, Enumerable<ProductsToVehicleUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductsToVehicleCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductsToVehicleUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductsToVehicleCreateManyProductInputEnvelope
    set?: Enumerable<ProductsToVehicleWhereUniqueInput>
    disconnect?: Enumerable<ProductsToVehicleWhereUniqueInput>
    delete?: Enumerable<ProductsToVehicleWhereUniqueInput>
    connect?: Enumerable<ProductsToVehicleWhereUniqueInput>
    update?: Enumerable<ProductsToVehicleUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductsToVehicleUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductsToVehicleScalarWhereInput>
  }

  export type ImagesToProductsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ImagesToProductsCreateWithoutProductInput>, Enumerable<ImagesToProductsUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ImagesToProductsCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ImagesToProductsUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ImagesToProductsCreateManyProductInputEnvelope
    set?: Enumerable<ImagesToProductsWhereUniqueInput>
    disconnect?: Enumerable<ImagesToProductsWhereUniqueInput>
    delete?: Enumerable<ImagesToProductsWhereUniqueInput>
    connect?: Enumerable<ImagesToProductsWhereUniqueInput>
    update?: Enumerable<ImagesToProductsUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ImagesToProductsUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ImagesToProductsScalarWhereInput>
  }

  export type ProductsToVehicleUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<Enumerable<ProductsToVehicleCreateWithoutProductInput>, Enumerable<ProductsToVehicleUncheckedCreateWithoutProductInput>>
    connectOrCreate?: Enumerable<ProductsToVehicleCreateOrConnectWithoutProductInput>
    upsert?: Enumerable<ProductsToVehicleUpsertWithWhereUniqueWithoutProductInput>
    createMany?: ProductsToVehicleCreateManyProductInputEnvelope
    set?: Enumerable<ProductsToVehicleWhereUniqueInput>
    disconnect?: Enumerable<ProductsToVehicleWhereUniqueInput>
    delete?: Enumerable<ProductsToVehicleWhereUniqueInput>
    connect?: Enumerable<ProductsToVehicleWhereUniqueInput>
    update?: Enumerable<ProductsToVehicleUpdateWithWhereUniqueWithoutProductInput>
    updateMany?: Enumerable<ProductsToVehicleUpdateManyWithWhereWithoutProductInput>
    deleteMany?: Enumerable<ProductsToVehicleScalarWhereInput>
  }

  export type ImagesToProductsCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<ImagesToProductsCreateWithoutImageInput>, Enumerable<ImagesToProductsUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToProductsCreateOrConnectWithoutImageInput>
    createMany?: ImagesToProductsCreateManyImageInputEnvelope
    connect?: Enumerable<ImagesToProductsWhereUniqueInput>
  }

  export type ImagesToVehiclesCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<ImagesToVehiclesCreateWithoutImageInput>, Enumerable<ImagesToVehiclesUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToVehiclesCreateOrConnectWithoutImageInput>
    createMany?: ImagesToVehiclesCreateManyImageInputEnvelope
    connect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
  }

  export type ImagesToBradsCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<ImagesToBradsCreateWithoutImageInput>, Enumerable<ImagesToBradsUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToBradsCreateOrConnectWithoutImageInput>
    createMany?: ImagesToBradsCreateManyImageInputEnvelope
    connect?: Enumerable<ImagesToBradsWhereUniqueInput>
  }

  export type ImagesToProductsUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<ImagesToProductsCreateWithoutImageInput>, Enumerable<ImagesToProductsUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToProductsCreateOrConnectWithoutImageInput>
    createMany?: ImagesToProductsCreateManyImageInputEnvelope
    connect?: Enumerable<ImagesToProductsWhereUniqueInput>
  }

  export type ImagesToVehiclesUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<ImagesToVehiclesCreateWithoutImageInput>, Enumerable<ImagesToVehiclesUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToVehiclesCreateOrConnectWithoutImageInput>
    createMany?: ImagesToVehiclesCreateManyImageInputEnvelope
    connect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
  }

  export type ImagesToBradsUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<Enumerable<ImagesToBradsCreateWithoutImageInput>, Enumerable<ImagesToBradsUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToBradsCreateOrConnectWithoutImageInput>
    createMany?: ImagesToBradsCreateManyImageInputEnvelope
    connect?: Enumerable<ImagesToBradsWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ImagesToProductsUpdateManyWithoutImageNestedInput = {
    create?: XOR<Enumerable<ImagesToProductsCreateWithoutImageInput>, Enumerable<ImagesToProductsUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToProductsCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<ImagesToProductsUpsertWithWhereUniqueWithoutImageInput>
    createMany?: ImagesToProductsCreateManyImageInputEnvelope
    set?: Enumerable<ImagesToProductsWhereUniqueInput>
    disconnect?: Enumerable<ImagesToProductsWhereUniqueInput>
    delete?: Enumerable<ImagesToProductsWhereUniqueInput>
    connect?: Enumerable<ImagesToProductsWhereUniqueInput>
    update?: Enumerable<ImagesToProductsUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<ImagesToProductsUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<ImagesToProductsScalarWhereInput>
  }

  export type ImagesToVehiclesUpdateManyWithoutImageNestedInput = {
    create?: XOR<Enumerable<ImagesToVehiclesCreateWithoutImageInput>, Enumerable<ImagesToVehiclesUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToVehiclesCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<ImagesToVehiclesUpsertWithWhereUniqueWithoutImageInput>
    createMany?: ImagesToVehiclesCreateManyImageInputEnvelope
    set?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    disconnect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    delete?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    connect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    update?: Enumerable<ImagesToVehiclesUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<ImagesToVehiclesUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<ImagesToVehiclesScalarWhereInput>
  }

  export type ImagesToBradsUpdateManyWithoutImageNestedInput = {
    create?: XOR<Enumerable<ImagesToBradsCreateWithoutImageInput>, Enumerable<ImagesToBradsUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToBradsCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<ImagesToBradsUpsertWithWhereUniqueWithoutImageInput>
    createMany?: ImagesToBradsCreateManyImageInputEnvelope
    set?: Enumerable<ImagesToBradsWhereUniqueInput>
    disconnect?: Enumerable<ImagesToBradsWhereUniqueInput>
    delete?: Enumerable<ImagesToBradsWhereUniqueInput>
    connect?: Enumerable<ImagesToBradsWhereUniqueInput>
    update?: Enumerable<ImagesToBradsUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<ImagesToBradsUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<ImagesToBradsScalarWhereInput>
  }

  export type ImagesToProductsUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<Enumerable<ImagesToProductsCreateWithoutImageInput>, Enumerable<ImagesToProductsUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToProductsCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<ImagesToProductsUpsertWithWhereUniqueWithoutImageInput>
    createMany?: ImagesToProductsCreateManyImageInputEnvelope
    set?: Enumerable<ImagesToProductsWhereUniqueInput>
    disconnect?: Enumerable<ImagesToProductsWhereUniqueInput>
    delete?: Enumerable<ImagesToProductsWhereUniqueInput>
    connect?: Enumerable<ImagesToProductsWhereUniqueInput>
    update?: Enumerable<ImagesToProductsUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<ImagesToProductsUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<ImagesToProductsScalarWhereInput>
  }

  export type ImagesToVehiclesUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<Enumerable<ImagesToVehiclesCreateWithoutImageInput>, Enumerable<ImagesToVehiclesUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToVehiclesCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<ImagesToVehiclesUpsertWithWhereUniqueWithoutImageInput>
    createMany?: ImagesToVehiclesCreateManyImageInputEnvelope
    set?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    disconnect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    delete?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    connect?: Enumerable<ImagesToVehiclesWhereUniqueInput>
    update?: Enumerable<ImagesToVehiclesUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<ImagesToVehiclesUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<ImagesToVehiclesScalarWhereInput>
  }

  export type ImagesToBradsUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<Enumerable<ImagesToBradsCreateWithoutImageInput>, Enumerable<ImagesToBradsUncheckedCreateWithoutImageInput>>
    connectOrCreate?: Enumerable<ImagesToBradsCreateOrConnectWithoutImageInput>
    upsert?: Enumerable<ImagesToBradsUpsertWithWhereUniqueWithoutImageInput>
    createMany?: ImagesToBradsCreateManyImageInputEnvelope
    set?: Enumerable<ImagesToBradsWhereUniqueInput>
    disconnect?: Enumerable<ImagesToBradsWhereUniqueInput>
    delete?: Enumerable<ImagesToBradsWhereUniqueInput>
    connect?: Enumerable<ImagesToBradsWhereUniqueInput>
    update?: Enumerable<ImagesToBradsUpdateWithWhereUniqueWithoutImageInput>
    updateMany?: Enumerable<ImagesToBradsUpdateManyWithWhereWithoutImageInput>
    deleteMany?: Enumerable<ImagesToBradsScalarWhereInput>
  }

  export type ImagesCreateNestedOneWithoutImagesProductsInput = {
    create?: XOR<ImagesCreateWithoutImagesProductsInput, ImagesUncheckedCreateWithoutImagesProductsInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutImagesProductsInput
    connect?: ImagesWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutImagesProductsInput = {
    create?: XOR<ProductsCreateWithoutImagesProductsInput, ProductsUncheckedCreateWithoutImagesProductsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutImagesProductsInput
    connect?: ProductsWhereUniqueInput
  }

  export type ImagesUpdateOneRequiredWithoutImagesProductsNestedInput = {
    create?: XOR<ImagesCreateWithoutImagesProductsInput, ImagesUncheckedCreateWithoutImagesProductsInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutImagesProductsInput
    upsert?: ImagesUpsertWithoutImagesProductsInput
    connect?: ImagesWhereUniqueInput
    update?: XOR<ImagesUpdateWithoutImagesProductsInput, ImagesUncheckedUpdateWithoutImagesProductsInput>
  }

  export type ProductsUpdateOneRequiredWithoutImagesProductsNestedInput = {
    create?: XOR<ProductsCreateWithoutImagesProductsInput, ProductsUncheckedCreateWithoutImagesProductsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutImagesProductsInput
    upsert?: ProductsUpsertWithoutImagesProductsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<ProductsUpdateWithoutImagesProductsInput, ProductsUncheckedUpdateWithoutImagesProductsInput>
  }

  export type ImagesCreateNestedOneWithoutImagesVehiclesInput = {
    create?: XOR<ImagesCreateWithoutImagesVehiclesInput, ImagesUncheckedCreateWithoutImagesVehiclesInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutImagesVehiclesInput
    connect?: ImagesWhereUniqueInput
  }

  export type VehiclesCreateNestedOneWithoutImagesVehiclesInput = {
    create?: XOR<VehiclesCreateWithoutImagesVehiclesInput, VehiclesUncheckedCreateWithoutImagesVehiclesInput>
    connectOrCreate?: VehiclesCreateOrConnectWithoutImagesVehiclesInput
    connect?: VehiclesWhereUniqueInput
  }

  export type ImagesUpdateOneRequiredWithoutImagesVehiclesNestedInput = {
    create?: XOR<ImagesCreateWithoutImagesVehiclesInput, ImagesUncheckedCreateWithoutImagesVehiclesInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutImagesVehiclesInput
    upsert?: ImagesUpsertWithoutImagesVehiclesInput
    connect?: ImagesWhereUniqueInput
    update?: XOR<ImagesUpdateWithoutImagesVehiclesInput, ImagesUncheckedUpdateWithoutImagesVehiclesInput>
  }

  export type VehiclesUpdateOneRequiredWithoutImagesVehiclesNestedInput = {
    create?: XOR<VehiclesCreateWithoutImagesVehiclesInput, VehiclesUncheckedCreateWithoutImagesVehiclesInput>
    connectOrCreate?: VehiclesCreateOrConnectWithoutImagesVehiclesInput
    upsert?: VehiclesUpsertWithoutImagesVehiclesInput
    connect?: VehiclesWhereUniqueInput
    update?: XOR<VehiclesUpdateWithoutImagesVehiclesInput, VehiclesUncheckedUpdateWithoutImagesVehiclesInput>
  }

  export type ImagesCreateNestedOneWithoutImagesBrandsInput = {
    create?: XOR<ImagesCreateWithoutImagesBrandsInput, ImagesUncheckedCreateWithoutImagesBrandsInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutImagesBrandsInput
    connect?: ImagesWhereUniqueInput
  }

  export type BrandsCreateNestedOneWithoutImagesBrandsInput = {
    create?: XOR<BrandsCreateWithoutImagesBrandsInput, BrandsUncheckedCreateWithoutImagesBrandsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutImagesBrandsInput
    connect?: BrandsWhereUniqueInput
  }

  export type ImagesUpdateOneRequiredWithoutImagesBrandsNestedInput = {
    create?: XOR<ImagesCreateWithoutImagesBrandsInput, ImagesUncheckedCreateWithoutImagesBrandsInput>
    connectOrCreate?: ImagesCreateOrConnectWithoutImagesBrandsInput
    upsert?: ImagesUpsertWithoutImagesBrandsInput
    connect?: ImagesWhereUniqueInput
    update?: XOR<ImagesUpdateWithoutImagesBrandsInput, ImagesUncheckedUpdateWithoutImagesBrandsInput>
  }

  export type BrandsUpdateOneRequiredWithoutImagesBrandsNestedInput = {
    create?: XOR<BrandsCreateWithoutImagesBrandsInput, BrandsUncheckedCreateWithoutImagesBrandsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutImagesBrandsInput
    upsert?: BrandsUpsertWithoutImagesBrandsInput
    connect?: BrandsWhereUniqueInput
    update?: XOR<BrandsUpdateWithoutImagesBrandsInput, BrandsUncheckedUpdateWithoutImagesBrandsInput>
  }

  export type ProductsCreateNestedOneWithoutProductsVehicleInput = {
    create?: XOR<ProductsCreateWithoutProductsVehicleInput, ProductsUncheckedCreateWithoutProductsVehicleInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductsVehicleInput
    connect?: ProductsWhereUniqueInput
  }

  export type VehiclesCreateNestedOneWithoutProductsVehicleInput = {
    create?: XOR<VehiclesCreateWithoutProductsVehicleInput, VehiclesUncheckedCreateWithoutProductsVehicleInput>
    connectOrCreate?: VehiclesCreateOrConnectWithoutProductsVehicleInput
    connect?: VehiclesWhereUniqueInput
  }

  export type ProductsUpdateOneRequiredWithoutProductsVehicleNestedInput = {
    create?: XOR<ProductsCreateWithoutProductsVehicleInput, ProductsUncheckedCreateWithoutProductsVehicleInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutProductsVehicleInput
    upsert?: ProductsUpsertWithoutProductsVehicleInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<ProductsUpdateWithoutProductsVehicleInput, ProductsUncheckedUpdateWithoutProductsVehicleInput>
  }

  export type VehiclesUpdateOneRequiredWithoutProductsVehicleNestedInput = {
    create?: XOR<VehiclesCreateWithoutProductsVehicleInput, VehiclesUncheckedCreateWithoutProductsVehicleInput>
    connectOrCreate?: VehiclesCreateOrConnectWithoutProductsVehicleInput
    upsert?: VehiclesUpsertWithoutProductsVehicleInput
    connect?: VehiclesWhereUniqueInput
    update?: XOR<VehiclesUpdateWithoutProductsVehicleInput, VehiclesUncheckedUpdateWithoutProductsVehicleInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type ProductsCreateWithoutBrandInput = {
    name_product: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesProducts?: ImagesToProductsCreateNestedManyWithoutProductInput
    productsVehicle?: ProductsToVehicleCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutBrandInput = {
    id?: number
    name_product: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesProducts?: ImagesToProductsUncheckedCreateNestedManyWithoutProductInput
    productsVehicle?: ProductsToVehicleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutBrandInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput>
  }

  export type ProductsCreateManyBrandInputEnvelope = {
    data: Enumerable<ProductsCreateManyBrandInput>
    skipDuplicates?: boolean
  }

  export type VehiclesCreateWithoutBrandInput = {
    name_vehicles: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesVehicles?: ImagesToVehiclesCreateNestedManyWithoutVehiclesInput
    productsVehicle?: ProductsToVehicleCreateNestedManyWithoutVehiclesInput
  }

  export type VehiclesUncheckedCreateWithoutBrandInput = {
    id?: number
    name_vehicles: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesVehicles?: ImagesToVehiclesUncheckedCreateNestedManyWithoutVehiclesInput
    productsVehicle?: ProductsToVehicleUncheckedCreateNestedManyWithoutVehiclesInput
  }

  export type VehiclesCreateOrConnectWithoutBrandInput = {
    where: VehiclesWhereUniqueInput
    create: XOR<VehiclesCreateWithoutBrandInput, VehiclesUncheckedCreateWithoutBrandInput>
  }

  export type VehiclesCreateManyBrandInputEnvelope = {
    data: Enumerable<VehiclesCreateManyBrandInput>
    skipDuplicates?: boolean
  }

  export type ImagesToBradsCreateWithoutBrandInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    image: ImagesCreateNestedOneWithoutImagesBrandsInput
  }

  export type ImagesToBradsUncheckedCreateWithoutBrandInput = {
    id?: number
    id_image: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToBradsCreateOrConnectWithoutBrandInput = {
    where: ImagesToBradsWhereUniqueInput
    create: XOR<ImagesToBradsCreateWithoutBrandInput, ImagesToBradsUncheckedCreateWithoutBrandInput>
  }

  export type ImagesToBradsCreateManyBrandInputEnvelope = {
    data: Enumerable<ImagesToBradsCreateManyBrandInput>
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutBrandInput, ProductsUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutBrandInput, ProductsUncheckedUpdateWithoutBrandInput>
  }

  export type ProductsUpdateManyWithWhereWithoutBrandInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutProductsInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: Enumerable<ProductsScalarWhereInput>
    OR?: Enumerable<ProductsScalarWhereInput>
    NOT?: Enumerable<ProductsScalarWhereInput>
    id?: IntFilter | number
    name_product?: StringFilter | string
    id_brand?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type VehiclesUpsertWithWhereUniqueWithoutBrandInput = {
    where: VehiclesWhereUniqueInput
    update: XOR<VehiclesUpdateWithoutBrandInput, VehiclesUncheckedUpdateWithoutBrandInput>
    create: XOR<VehiclesCreateWithoutBrandInput, VehiclesUncheckedCreateWithoutBrandInput>
  }

  export type VehiclesUpdateWithWhereUniqueWithoutBrandInput = {
    where: VehiclesWhereUniqueInput
    data: XOR<VehiclesUpdateWithoutBrandInput, VehiclesUncheckedUpdateWithoutBrandInput>
  }

  export type VehiclesUpdateManyWithWhereWithoutBrandInput = {
    where: VehiclesScalarWhereInput
    data: XOR<VehiclesUpdateManyMutationInput, VehiclesUncheckedUpdateManyWithoutVehiclesInput>
  }

  export type VehiclesScalarWhereInput = {
    AND?: Enumerable<VehiclesScalarWhereInput>
    OR?: Enumerable<VehiclesScalarWhereInput>
    NOT?: Enumerable<VehiclesScalarWhereInput>
    id?: IntFilter | number
    name_vehicles?: StringFilter | string
    id_brand?: IntFilter | number
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ImagesToBradsUpsertWithWhereUniqueWithoutBrandInput = {
    where: ImagesToBradsWhereUniqueInput
    update: XOR<ImagesToBradsUpdateWithoutBrandInput, ImagesToBradsUncheckedUpdateWithoutBrandInput>
    create: XOR<ImagesToBradsCreateWithoutBrandInput, ImagesToBradsUncheckedCreateWithoutBrandInput>
  }

  export type ImagesToBradsUpdateWithWhereUniqueWithoutBrandInput = {
    where: ImagesToBradsWhereUniqueInput
    data: XOR<ImagesToBradsUpdateWithoutBrandInput, ImagesToBradsUncheckedUpdateWithoutBrandInput>
  }

  export type ImagesToBradsUpdateManyWithWhereWithoutBrandInput = {
    where: ImagesToBradsScalarWhereInput
    data: XOR<ImagesToBradsUpdateManyMutationInput, ImagesToBradsUncheckedUpdateManyWithoutImagesBrandsInput>
  }

  export type ImagesToBradsScalarWhereInput = {
    AND?: Enumerable<ImagesToBradsScalarWhereInput>
    OR?: Enumerable<ImagesToBradsScalarWhereInput>
    NOT?: Enumerable<ImagesToBradsScalarWhereInput>
    id?: IntFilter | number
    id_image?: IntFilter | number
    id_brand?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BrandsCreateWithoutVehiclesInput = {
    name_brand: string
    prefix: string
    class: number
    products?: ProductsCreateNestedManyWithoutBrandInput
    imagesBrands?: ImagesToBradsCreateNestedManyWithoutBrandInput
  }

  export type BrandsUncheckedCreateWithoutVehiclesInput = {
    id?: number
    name_brand: string
    prefix: string
    class: number
    products?: ProductsUncheckedCreateNestedManyWithoutBrandInput
    imagesBrands?: ImagesToBradsUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandsCreateOrConnectWithoutVehiclesInput = {
    where: BrandsWhereUniqueInput
    create: XOR<BrandsCreateWithoutVehiclesInput, BrandsUncheckedCreateWithoutVehiclesInput>
  }

  export type ImagesToVehiclesCreateWithoutVehiclesInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    image: ImagesCreateNestedOneWithoutImagesVehiclesInput
  }

  export type ImagesToVehiclesUncheckedCreateWithoutVehiclesInput = {
    id?: number
    id_image: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToVehiclesCreateOrConnectWithoutVehiclesInput = {
    where: ImagesToVehiclesWhereUniqueInput
    create: XOR<ImagesToVehiclesCreateWithoutVehiclesInput, ImagesToVehiclesUncheckedCreateWithoutVehiclesInput>
  }

  export type ImagesToVehiclesCreateManyVehiclesInputEnvelope = {
    data: Enumerable<ImagesToVehiclesCreateManyVehiclesInput>
    skipDuplicates?: boolean
  }

  export type ProductsToVehicleCreateWithoutVehiclesInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutProductsVehicleInput
  }

  export type ProductsToVehicleUncheckedCreateWithoutVehiclesInput = {
    id?: number
    id_product: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsToVehicleCreateOrConnectWithoutVehiclesInput = {
    where: ProductsToVehicleWhereUniqueInput
    create: XOR<ProductsToVehicleCreateWithoutVehiclesInput, ProductsToVehicleUncheckedCreateWithoutVehiclesInput>
  }

  export type ProductsToVehicleCreateManyVehiclesInputEnvelope = {
    data: Enumerable<ProductsToVehicleCreateManyVehiclesInput>
    skipDuplicates?: boolean
  }

  export type BrandsUpsertWithoutVehiclesInput = {
    update: XOR<BrandsUpdateWithoutVehiclesInput, BrandsUncheckedUpdateWithoutVehiclesInput>
    create: XOR<BrandsCreateWithoutVehiclesInput, BrandsUncheckedCreateWithoutVehiclesInput>
  }

  export type BrandsUpdateWithoutVehiclesInput = {
    name_brand?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    class?: IntFieldUpdateOperationsInput | number
    products?: ProductsUpdateManyWithoutBrandNestedInput
    imagesBrands?: ImagesToBradsUpdateManyWithoutBrandNestedInput
  }

  export type BrandsUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_brand?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    class?: IntFieldUpdateOperationsInput | number
    products?: ProductsUncheckedUpdateManyWithoutBrandNestedInput
    imagesBrands?: ImagesToBradsUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type ImagesToVehiclesUpsertWithWhereUniqueWithoutVehiclesInput = {
    where: ImagesToVehiclesWhereUniqueInput
    update: XOR<ImagesToVehiclesUpdateWithoutVehiclesInput, ImagesToVehiclesUncheckedUpdateWithoutVehiclesInput>
    create: XOR<ImagesToVehiclesCreateWithoutVehiclesInput, ImagesToVehiclesUncheckedCreateWithoutVehiclesInput>
  }

  export type ImagesToVehiclesUpdateWithWhereUniqueWithoutVehiclesInput = {
    where: ImagesToVehiclesWhereUniqueInput
    data: XOR<ImagesToVehiclesUpdateWithoutVehiclesInput, ImagesToVehiclesUncheckedUpdateWithoutVehiclesInput>
  }

  export type ImagesToVehiclesUpdateManyWithWhereWithoutVehiclesInput = {
    where: ImagesToVehiclesScalarWhereInput
    data: XOR<ImagesToVehiclesUpdateManyMutationInput, ImagesToVehiclesUncheckedUpdateManyWithoutImagesVehiclesInput>
  }

  export type ImagesToVehiclesScalarWhereInput = {
    AND?: Enumerable<ImagesToVehiclesScalarWhereInput>
    OR?: Enumerable<ImagesToVehiclesScalarWhereInput>
    NOT?: Enumerable<ImagesToVehiclesScalarWhereInput>
    id?: IntFilter | number
    id_image?: IntFilter | number
    id_vehicle?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProductsToVehicleUpsertWithWhereUniqueWithoutVehiclesInput = {
    where: ProductsToVehicleWhereUniqueInput
    update: XOR<ProductsToVehicleUpdateWithoutVehiclesInput, ProductsToVehicleUncheckedUpdateWithoutVehiclesInput>
    create: XOR<ProductsToVehicleCreateWithoutVehiclesInput, ProductsToVehicleUncheckedCreateWithoutVehiclesInput>
  }

  export type ProductsToVehicleUpdateWithWhereUniqueWithoutVehiclesInput = {
    where: ProductsToVehicleWhereUniqueInput
    data: XOR<ProductsToVehicleUpdateWithoutVehiclesInput, ProductsToVehicleUncheckedUpdateWithoutVehiclesInput>
  }

  export type ProductsToVehicleUpdateManyWithWhereWithoutVehiclesInput = {
    where: ProductsToVehicleScalarWhereInput
    data: XOR<ProductsToVehicleUpdateManyMutationInput, ProductsToVehicleUncheckedUpdateManyWithoutProductsVehicleInput>
  }

  export type ProductsToVehicleScalarWhereInput = {
    AND?: Enumerable<ProductsToVehicleScalarWhereInput>
    OR?: Enumerable<ProductsToVehicleScalarWhereInput>
    NOT?: Enumerable<ProductsToVehicleScalarWhereInput>
    id?: IntFilter | number
    id_product?: IntFilter | number
    id_vehicle?: IntFilter | number
    description?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type BrandsCreateWithoutProductsInput = {
    name_brand: string
    prefix: string
    class: number
    vehicles?: VehiclesCreateNestedManyWithoutBrandInput
    imagesBrands?: ImagesToBradsCreateNestedManyWithoutBrandInput
  }

  export type BrandsUncheckedCreateWithoutProductsInput = {
    id?: number
    name_brand: string
    prefix: string
    class: number
    vehicles?: VehiclesUncheckedCreateNestedManyWithoutBrandInput
    imagesBrands?: ImagesToBradsUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandsCreateOrConnectWithoutProductsInput = {
    where: BrandsWhereUniqueInput
    create: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput>
  }

  export type ImagesToProductsCreateWithoutProductInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    image: ImagesCreateNestedOneWithoutImagesProductsInput
  }

  export type ImagesToProductsUncheckedCreateWithoutProductInput = {
    id?: number
    id_image: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToProductsCreateOrConnectWithoutProductInput = {
    where: ImagesToProductsWhereUniqueInput
    create: XOR<ImagesToProductsCreateWithoutProductInput, ImagesToProductsUncheckedCreateWithoutProductInput>
  }

  export type ImagesToProductsCreateManyProductInputEnvelope = {
    data: Enumerable<ImagesToProductsCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type ProductsToVehicleCreateWithoutProductInput = {
    id?: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles: VehiclesCreateNestedOneWithoutProductsVehicleInput
  }

  export type ProductsToVehicleUncheckedCreateWithoutProductInput = {
    id?: number
    id_vehicle: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsToVehicleCreateOrConnectWithoutProductInput = {
    where: ProductsToVehicleWhereUniqueInput
    create: XOR<ProductsToVehicleCreateWithoutProductInput, ProductsToVehicleUncheckedCreateWithoutProductInput>
  }

  export type ProductsToVehicleCreateManyProductInputEnvelope = {
    data: Enumerable<ProductsToVehicleCreateManyProductInput>
    skipDuplicates?: boolean
  }

  export type BrandsUpsertWithoutProductsInput = {
    update: XOR<BrandsUpdateWithoutProductsInput, BrandsUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput>
  }

  export type BrandsUpdateWithoutProductsInput = {
    name_brand?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    class?: IntFieldUpdateOperationsInput | number
    vehicles?: VehiclesUpdateManyWithoutBrandNestedInput
    imagesBrands?: ImagesToBradsUpdateManyWithoutBrandNestedInput
  }

  export type BrandsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_brand?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    class?: IntFieldUpdateOperationsInput | number
    vehicles?: VehiclesUncheckedUpdateManyWithoutBrandNestedInput
    imagesBrands?: ImagesToBradsUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type ImagesToProductsUpsertWithWhereUniqueWithoutProductInput = {
    where: ImagesToProductsWhereUniqueInput
    update: XOR<ImagesToProductsUpdateWithoutProductInput, ImagesToProductsUncheckedUpdateWithoutProductInput>
    create: XOR<ImagesToProductsCreateWithoutProductInput, ImagesToProductsUncheckedCreateWithoutProductInput>
  }

  export type ImagesToProductsUpdateWithWhereUniqueWithoutProductInput = {
    where: ImagesToProductsWhereUniqueInput
    data: XOR<ImagesToProductsUpdateWithoutProductInput, ImagesToProductsUncheckedUpdateWithoutProductInput>
  }

  export type ImagesToProductsUpdateManyWithWhereWithoutProductInput = {
    where: ImagesToProductsScalarWhereInput
    data: XOR<ImagesToProductsUpdateManyMutationInput, ImagesToProductsUncheckedUpdateManyWithoutImagesProductsInput>
  }

  export type ImagesToProductsScalarWhereInput = {
    AND?: Enumerable<ImagesToProductsScalarWhereInput>
    OR?: Enumerable<ImagesToProductsScalarWhereInput>
    NOT?: Enumerable<ImagesToProductsScalarWhereInput>
    id?: IntFilter | number
    id_image?: IntFilter | number
    id_product?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type ProductsToVehicleUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductsToVehicleWhereUniqueInput
    update: XOR<ProductsToVehicleUpdateWithoutProductInput, ProductsToVehicleUncheckedUpdateWithoutProductInput>
    create: XOR<ProductsToVehicleCreateWithoutProductInput, ProductsToVehicleUncheckedCreateWithoutProductInput>
  }

  export type ProductsToVehicleUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductsToVehicleWhereUniqueInput
    data: XOR<ProductsToVehicleUpdateWithoutProductInput, ProductsToVehicleUncheckedUpdateWithoutProductInput>
  }

  export type ProductsToVehicleUpdateManyWithWhereWithoutProductInput = {
    where: ProductsToVehicleScalarWhereInput
    data: XOR<ProductsToVehicleUpdateManyMutationInput, ProductsToVehicleUncheckedUpdateManyWithoutProductsVehicleInput>
  }

  export type ImagesToProductsCreateWithoutImageInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductsCreateNestedOneWithoutImagesProductsInput
  }

  export type ImagesToProductsUncheckedCreateWithoutImageInput = {
    id?: number
    id_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToProductsCreateOrConnectWithoutImageInput = {
    where: ImagesToProductsWhereUniqueInput
    create: XOR<ImagesToProductsCreateWithoutImageInput, ImagesToProductsUncheckedCreateWithoutImageInput>
  }

  export type ImagesToProductsCreateManyImageInputEnvelope = {
    data: Enumerable<ImagesToProductsCreateManyImageInput>
    skipDuplicates?: boolean
  }

  export type ImagesToVehiclesCreateWithoutImageInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    vehicles: VehiclesCreateNestedOneWithoutImagesVehiclesInput
  }

  export type ImagesToVehiclesUncheckedCreateWithoutImageInput = {
    id?: number
    id_vehicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToVehiclesCreateOrConnectWithoutImageInput = {
    where: ImagesToVehiclesWhereUniqueInput
    create: XOR<ImagesToVehiclesCreateWithoutImageInput, ImagesToVehiclesUncheckedCreateWithoutImageInput>
  }

  export type ImagesToVehiclesCreateManyImageInputEnvelope = {
    data: Enumerable<ImagesToVehiclesCreateManyImageInput>
    skipDuplicates?: boolean
  }

  export type ImagesToBradsCreateWithoutImageInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandsCreateNestedOneWithoutImagesBrandsInput
  }

  export type ImagesToBradsUncheckedCreateWithoutImageInput = {
    id?: number
    id_brand: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToBradsCreateOrConnectWithoutImageInput = {
    where: ImagesToBradsWhereUniqueInput
    create: XOR<ImagesToBradsCreateWithoutImageInput, ImagesToBradsUncheckedCreateWithoutImageInput>
  }

  export type ImagesToBradsCreateManyImageInputEnvelope = {
    data: Enumerable<ImagesToBradsCreateManyImageInput>
    skipDuplicates?: boolean
  }

  export type ImagesToProductsUpsertWithWhereUniqueWithoutImageInput = {
    where: ImagesToProductsWhereUniqueInput
    update: XOR<ImagesToProductsUpdateWithoutImageInput, ImagesToProductsUncheckedUpdateWithoutImageInput>
    create: XOR<ImagesToProductsCreateWithoutImageInput, ImagesToProductsUncheckedCreateWithoutImageInput>
  }

  export type ImagesToProductsUpdateWithWhereUniqueWithoutImageInput = {
    where: ImagesToProductsWhereUniqueInput
    data: XOR<ImagesToProductsUpdateWithoutImageInput, ImagesToProductsUncheckedUpdateWithoutImageInput>
  }

  export type ImagesToProductsUpdateManyWithWhereWithoutImageInput = {
    where: ImagesToProductsScalarWhereInput
    data: XOR<ImagesToProductsUpdateManyMutationInput, ImagesToProductsUncheckedUpdateManyWithoutImagesProductsInput>
  }

  export type ImagesToVehiclesUpsertWithWhereUniqueWithoutImageInput = {
    where: ImagesToVehiclesWhereUniqueInput
    update: XOR<ImagesToVehiclesUpdateWithoutImageInput, ImagesToVehiclesUncheckedUpdateWithoutImageInput>
    create: XOR<ImagesToVehiclesCreateWithoutImageInput, ImagesToVehiclesUncheckedCreateWithoutImageInput>
  }

  export type ImagesToVehiclesUpdateWithWhereUniqueWithoutImageInput = {
    where: ImagesToVehiclesWhereUniqueInput
    data: XOR<ImagesToVehiclesUpdateWithoutImageInput, ImagesToVehiclesUncheckedUpdateWithoutImageInput>
  }

  export type ImagesToVehiclesUpdateManyWithWhereWithoutImageInput = {
    where: ImagesToVehiclesScalarWhereInput
    data: XOR<ImagesToVehiclesUpdateManyMutationInput, ImagesToVehiclesUncheckedUpdateManyWithoutImagesVehiclesInput>
  }

  export type ImagesToBradsUpsertWithWhereUniqueWithoutImageInput = {
    where: ImagesToBradsWhereUniqueInput
    update: XOR<ImagesToBradsUpdateWithoutImageInput, ImagesToBradsUncheckedUpdateWithoutImageInput>
    create: XOR<ImagesToBradsCreateWithoutImageInput, ImagesToBradsUncheckedCreateWithoutImageInput>
  }

  export type ImagesToBradsUpdateWithWhereUniqueWithoutImageInput = {
    where: ImagesToBradsWhereUniqueInput
    data: XOR<ImagesToBradsUpdateWithoutImageInput, ImagesToBradsUncheckedUpdateWithoutImageInput>
  }

  export type ImagesToBradsUpdateManyWithWhereWithoutImageInput = {
    where: ImagesToBradsScalarWhereInput
    data: XOR<ImagesToBradsUpdateManyMutationInput, ImagesToBradsUncheckedUpdateManyWithoutImagesBrandsInput>
  }

  export type ImagesCreateWithoutImagesProductsInput = {
    url: string
    is_main?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesVehicles?: ImagesToVehiclesCreateNestedManyWithoutImageInput
    imagesBrands?: ImagesToBradsCreateNestedManyWithoutImageInput
  }

  export type ImagesUncheckedCreateWithoutImagesProductsInput = {
    id?: number
    url: string
    is_main?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesVehicles?: ImagesToVehiclesUncheckedCreateNestedManyWithoutImageInput
    imagesBrands?: ImagesToBradsUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImagesCreateOrConnectWithoutImagesProductsInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutImagesProductsInput, ImagesUncheckedCreateWithoutImagesProductsInput>
  }

  export type ProductsCreateWithoutImagesProductsInput = {
    name_product: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandsCreateNestedOneWithoutProductsInput
    productsVehicle?: ProductsToVehicleCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutImagesProductsInput = {
    id?: number
    name_product: string
    id_brand: number
    createdAt?: Date | string
    updatedAt?: Date | string
    productsVehicle?: ProductsToVehicleUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutImagesProductsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutImagesProductsInput, ProductsUncheckedCreateWithoutImagesProductsInput>
  }

  export type ImagesUpsertWithoutImagesProductsInput = {
    update: XOR<ImagesUpdateWithoutImagesProductsInput, ImagesUncheckedUpdateWithoutImagesProductsInput>
    create: XOR<ImagesCreateWithoutImagesProductsInput, ImagesUncheckedCreateWithoutImagesProductsInput>
  }

  export type ImagesUpdateWithoutImagesProductsInput = {
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesVehicles?: ImagesToVehiclesUpdateManyWithoutImageNestedInput
    imagesBrands?: ImagesToBradsUpdateManyWithoutImageNestedInput
  }

  export type ImagesUncheckedUpdateWithoutImagesProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesVehicles?: ImagesToVehiclesUncheckedUpdateManyWithoutImageNestedInput
    imagesBrands?: ImagesToBradsUncheckedUpdateManyWithoutImageNestedInput
  }

  export type ProductsUpsertWithoutImagesProductsInput = {
    update: XOR<ProductsUpdateWithoutImagesProductsInput, ProductsUncheckedUpdateWithoutImagesProductsInput>
    create: XOR<ProductsCreateWithoutImagesProductsInput, ProductsUncheckedCreateWithoutImagesProductsInput>
  }

  export type ProductsUpdateWithoutImagesProductsInput = {
    name_product?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput
    productsVehicle?: ProductsToVehicleUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutImagesProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_product?: StringFieldUpdateOperationsInput | string
    id_brand?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productsVehicle?: ProductsToVehicleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ImagesCreateWithoutImagesVehiclesInput = {
    url: string
    is_main?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesProducts?: ImagesToProductsCreateNestedManyWithoutImageInput
    imagesBrands?: ImagesToBradsCreateNestedManyWithoutImageInput
  }

  export type ImagesUncheckedCreateWithoutImagesVehiclesInput = {
    id?: number
    url: string
    is_main?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesProducts?: ImagesToProductsUncheckedCreateNestedManyWithoutImageInput
    imagesBrands?: ImagesToBradsUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImagesCreateOrConnectWithoutImagesVehiclesInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutImagesVehiclesInput, ImagesUncheckedCreateWithoutImagesVehiclesInput>
  }

  export type VehiclesCreateWithoutImagesVehiclesInput = {
    name_vehicles: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandsCreateNestedOneWithoutVehiclesInput
    productsVehicle?: ProductsToVehicleCreateNestedManyWithoutVehiclesInput
  }

  export type VehiclesUncheckedCreateWithoutImagesVehiclesInput = {
    id?: number
    name_vehicles: string
    id_brand: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    productsVehicle?: ProductsToVehicleUncheckedCreateNestedManyWithoutVehiclesInput
  }

  export type VehiclesCreateOrConnectWithoutImagesVehiclesInput = {
    where: VehiclesWhereUniqueInput
    create: XOR<VehiclesCreateWithoutImagesVehiclesInput, VehiclesUncheckedCreateWithoutImagesVehiclesInput>
  }

  export type ImagesUpsertWithoutImagesVehiclesInput = {
    update: XOR<ImagesUpdateWithoutImagesVehiclesInput, ImagesUncheckedUpdateWithoutImagesVehiclesInput>
    create: XOR<ImagesCreateWithoutImagesVehiclesInput, ImagesUncheckedCreateWithoutImagesVehiclesInput>
  }

  export type ImagesUpdateWithoutImagesVehiclesInput = {
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesProducts?: ImagesToProductsUpdateManyWithoutImageNestedInput
    imagesBrands?: ImagesToBradsUpdateManyWithoutImageNestedInput
  }

  export type ImagesUncheckedUpdateWithoutImagesVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesProducts?: ImagesToProductsUncheckedUpdateManyWithoutImageNestedInput
    imagesBrands?: ImagesToBradsUncheckedUpdateManyWithoutImageNestedInput
  }

  export type VehiclesUpsertWithoutImagesVehiclesInput = {
    update: XOR<VehiclesUpdateWithoutImagesVehiclesInput, VehiclesUncheckedUpdateWithoutImagesVehiclesInput>
    create: XOR<VehiclesCreateWithoutImagesVehiclesInput, VehiclesUncheckedCreateWithoutImagesVehiclesInput>
  }

  export type VehiclesUpdateWithoutImagesVehiclesInput = {
    name_vehicles?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandsUpdateOneRequiredWithoutVehiclesNestedInput
    productsVehicle?: ProductsToVehicleUpdateManyWithoutVehiclesNestedInput
  }

  export type VehiclesUncheckedUpdateWithoutImagesVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_vehicles?: StringFieldUpdateOperationsInput | string
    id_brand?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productsVehicle?: ProductsToVehicleUncheckedUpdateManyWithoutVehiclesNestedInput
  }

  export type ImagesCreateWithoutImagesBrandsInput = {
    url: string
    is_main?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesProducts?: ImagesToProductsCreateNestedManyWithoutImageInput
    imagesVehicles?: ImagesToVehiclesCreateNestedManyWithoutImageInput
  }

  export type ImagesUncheckedCreateWithoutImagesBrandsInput = {
    id?: number
    url: string
    is_main?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesProducts?: ImagesToProductsUncheckedCreateNestedManyWithoutImageInput
    imagesVehicles?: ImagesToVehiclesUncheckedCreateNestedManyWithoutImageInput
  }

  export type ImagesCreateOrConnectWithoutImagesBrandsInput = {
    where: ImagesWhereUniqueInput
    create: XOR<ImagesCreateWithoutImagesBrandsInput, ImagesUncheckedCreateWithoutImagesBrandsInput>
  }

  export type BrandsCreateWithoutImagesBrandsInput = {
    name_brand: string
    prefix: string
    class: number
    products?: ProductsCreateNestedManyWithoutBrandInput
    vehicles?: VehiclesCreateNestedManyWithoutBrandInput
  }

  export type BrandsUncheckedCreateWithoutImagesBrandsInput = {
    id?: number
    name_brand: string
    prefix: string
    class: number
    products?: ProductsUncheckedCreateNestedManyWithoutBrandInput
    vehicles?: VehiclesUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandsCreateOrConnectWithoutImagesBrandsInput = {
    where: BrandsWhereUniqueInput
    create: XOR<BrandsCreateWithoutImagesBrandsInput, BrandsUncheckedCreateWithoutImagesBrandsInput>
  }

  export type ImagesUpsertWithoutImagesBrandsInput = {
    update: XOR<ImagesUpdateWithoutImagesBrandsInput, ImagesUncheckedUpdateWithoutImagesBrandsInput>
    create: XOR<ImagesCreateWithoutImagesBrandsInput, ImagesUncheckedCreateWithoutImagesBrandsInput>
  }

  export type ImagesUpdateWithoutImagesBrandsInput = {
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesProducts?: ImagesToProductsUpdateManyWithoutImageNestedInput
    imagesVehicles?: ImagesToVehiclesUpdateManyWithoutImageNestedInput
  }

  export type ImagesUncheckedUpdateWithoutImagesBrandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    is_main?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesProducts?: ImagesToProductsUncheckedUpdateManyWithoutImageNestedInput
    imagesVehicles?: ImagesToVehiclesUncheckedUpdateManyWithoutImageNestedInput
  }

  export type BrandsUpsertWithoutImagesBrandsInput = {
    update: XOR<BrandsUpdateWithoutImagesBrandsInput, BrandsUncheckedUpdateWithoutImagesBrandsInput>
    create: XOR<BrandsCreateWithoutImagesBrandsInput, BrandsUncheckedCreateWithoutImagesBrandsInput>
  }

  export type BrandsUpdateWithoutImagesBrandsInput = {
    name_brand?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    class?: IntFieldUpdateOperationsInput | number
    products?: ProductsUpdateManyWithoutBrandNestedInput
    vehicles?: VehiclesUpdateManyWithoutBrandNestedInput
  }

  export type BrandsUncheckedUpdateWithoutImagesBrandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_brand?: StringFieldUpdateOperationsInput | string
    prefix?: StringFieldUpdateOperationsInput | string
    class?: IntFieldUpdateOperationsInput | number
    products?: ProductsUncheckedUpdateManyWithoutBrandNestedInput
    vehicles?: VehiclesUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type ProductsCreateWithoutProductsVehicleInput = {
    name_product: string
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandsCreateNestedOneWithoutProductsInput
    imagesProducts?: ImagesToProductsCreateNestedManyWithoutProductInput
  }

  export type ProductsUncheckedCreateWithoutProductsVehicleInput = {
    id?: number
    name_product: string
    id_brand: number
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesProducts?: ImagesToProductsUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductsCreateOrConnectWithoutProductsVehicleInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutProductsVehicleInput, ProductsUncheckedCreateWithoutProductsVehicleInput>
  }

  export type VehiclesCreateWithoutProductsVehicleInput = {
    name_vehicles: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    brand: BrandsCreateNestedOneWithoutVehiclesInput
    imagesVehicles?: ImagesToVehiclesCreateNestedManyWithoutVehiclesInput
  }

  export type VehiclesUncheckedCreateWithoutProductsVehicleInput = {
    id?: number
    name_vehicles: string
    id_brand: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    imagesVehicles?: ImagesToVehiclesUncheckedCreateNestedManyWithoutVehiclesInput
  }

  export type VehiclesCreateOrConnectWithoutProductsVehicleInput = {
    where: VehiclesWhereUniqueInput
    create: XOR<VehiclesCreateWithoutProductsVehicleInput, VehiclesUncheckedCreateWithoutProductsVehicleInput>
  }

  export type ProductsUpsertWithoutProductsVehicleInput = {
    update: XOR<ProductsUpdateWithoutProductsVehicleInput, ProductsUncheckedUpdateWithoutProductsVehicleInput>
    create: XOR<ProductsCreateWithoutProductsVehicleInput, ProductsUncheckedCreateWithoutProductsVehicleInput>
  }

  export type ProductsUpdateWithoutProductsVehicleInput = {
    name_product?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput
    imagesProducts?: ImagesToProductsUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutProductsVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_product?: StringFieldUpdateOperationsInput | string
    id_brand?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesProducts?: ImagesToProductsUncheckedUpdateManyWithoutProductNestedInput
  }

  export type VehiclesUpsertWithoutProductsVehicleInput = {
    update: XOR<VehiclesUpdateWithoutProductsVehicleInput, VehiclesUncheckedUpdateWithoutProductsVehicleInput>
    create: XOR<VehiclesCreateWithoutProductsVehicleInput, VehiclesUncheckedCreateWithoutProductsVehicleInput>
  }

  export type VehiclesUpdateWithoutProductsVehicleInput = {
    name_vehicles?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandsUpdateOneRequiredWithoutVehiclesNestedInput
    imagesVehicles?: ImagesToVehiclesUpdateManyWithoutVehiclesNestedInput
  }

  export type VehiclesUncheckedUpdateWithoutProductsVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_vehicles?: StringFieldUpdateOperationsInput | string
    id_brand?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesVehicles?: ImagesToVehiclesUncheckedUpdateManyWithoutVehiclesNestedInput
  }

  export type ProductsCreateManyBrandInput = {
    id?: number
    name_product: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VehiclesCreateManyBrandInput = {
    id?: number
    name_vehicles: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToBradsCreateManyBrandInput = {
    id?: number
    id_image: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsUpdateWithoutBrandInput = {
    name_product?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesProducts?: ImagesToProductsUpdateManyWithoutProductNestedInput
    productsVehicle?: ProductsToVehicleUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_product?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesProducts?: ImagesToProductsUncheckedUpdateManyWithoutProductNestedInput
    productsVehicle?: ProductsToVehicleUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_product?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehiclesUpdateWithoutBrandInput = {
    name_vehicles?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesVehicles?: ImagesToVehiclesUpdateManyWithoutVehiclesNestedInput
    productsVehicle?: ProductsToVehicleUpdateManyWithoutVehiclesNestedInput
  }

  export type VehiclesUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_vehicles?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imagesVehicles?: ImagesToVehiclesUncheckedUpdateManyWithoutVehiclesNestedInput
    productsVehicle?: ProductsToVehicleUncheckedUpdateManyWithoutVehiclesNestedInput
  }

  export type VehiclesUncheckedUpdateManyWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name_vehicles?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToBradsUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImagesUpdateOneRequiredWithoutImagesBrandsNestedInput
  }

  export type ImagesToBradsUncheckedUpdateWithoutBrandInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToBradsUncheckedUpdateManyWithoutImagesBrandsInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToVehiclesCreateManyVehiclesInput = {
    id?: number
    id_image: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsToVehicleCreateManyVehiclesInput = {
    id?: number
    id_product: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToVehiclesUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImagesUpdateOneRequiredWithoutImagesVehiclesNestedInput
  }

  export type ImagesToVehiclesUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToVehiclesUncheckedUpdateManyWithoutImagesVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsToVehicleUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutProductsVehicleNestedInput
  }

  export type ProductsToVehicleUncheckedUpdateWithoutVehiclesInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsToVehicleUncheckedUpdateManyWithoutProductsVehicleInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToProductsCreateManyProductInput = {
    id?: number
    id_image: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductsToVehicleCreateManyProductInput = {
    id?: number
    id_vehicle: number
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToProductsUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    image?: ImagesUpdateOneRequiredWithoutImagesProductsNestedInput
  }

  export type ImagesToProductsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToProductsUncheckedUpdateManyWithoutImagesProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_image?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductsToVehicleUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehiclesUpdateOneRequiredWithoutProductsVehicleNestedInput
  }

  export type ProductsToVehicleUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_vehicle?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToProductsCreateManyImageInput = {
    id?: number
    id_product: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToVehiclesCreateManyImageInput = {
    id?: number
    id_vehicle: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToBradsCreateManyImageInput = {
    id?: number
    id_brand: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ImagesToProductsUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductsUpdateOneRequiredWithoutImagesProductsNestedInput
  }

  export type ImagesToProductsUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_product?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToVehiclesUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehiclesUpdateOneRequiredWithoutImagesVehiclesNestedInput
  }

  export type ImagesToVehiclesUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_vehicle?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImagesToBradsUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    brand?: BrandsUpdateOneRequiredWithoutImagesBrandsNestedInput
  }

  export type ImagesToBradsUncheckedUpdateWithoutImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    id_brand?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}