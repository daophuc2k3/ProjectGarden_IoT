
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Garden
 * 
 */
export type Garden = $Result.DefaultSelection<Prisma.$GardenPayload>
/**
 * Model Vegetable
 * 
 */
export type Vegetable = $Result.DefaultSelection<Prisma.$VegetablePayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model SensorData
 * 
 */
export type SensorData = $Result.DefaultSelection<Prisma.$SensorDataPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.garden`: Exposes CRUD operations for the **Garden** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gardens
    * const gardens = await prisma.garden.findMany()
    * ```
    */
  get garden(): Prisma.GardenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vegetable`: Exposes CRUD operations for the **Vegetable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vegetables
    * const vegetables = await prisma.vegetable.findMany()
    * ```
    */
  get vegetable(): Prisma.VegetableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sensorData`: Exposes CRUD operations for the **SensorData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SensorData
    * const sensorData = await prisma.sensorData.findMany()
    * ```
    */
  get sensorData(): Prisma.SensorDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Garden: 'Garden',
    Vegetable: 'Vegetable',
    Sale: 'Sale',
    SensorData: 'SensorData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "garden" | "vegetable" | "sale" | "sensorData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Garden: {
        payload: Prisma.$GardenPayload<ExtArgs>
        fields: Prisma.GardenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GardenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GardenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          findFirst: {
            args: Prisma.GardenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GardenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          findMany: {
            args: Prisma.GardenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>[]
          }
          create: {
            args: Prisma.GardenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          createMany: {
            args: Prisma.GardenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GardenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>[]
          }
          delete: {
            args: Prisma.GardenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          update: {
            args: Prisma.GardenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          deleteMany: {
            args: Prisma.GardenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GardenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GardenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>[]
          }
          upsert: {
            args: Prisma.GardenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GardenPayload>
          }
          aggregate: {
            args: Prisma.GardenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGarden>
          }
          groupBy: {
            args: Prisma.GardenGroupByArgs<ExtArgs>
            result: $Utils.Optional<GardenGroupByOutputType>[]
          }
          count: {
            args: Prisma.GardenCountArgs<ExtArgs>
            result: $Utils.Optional<GardenCountAggregateOutputType> | number
          }
        }
      }
      Vegetable: {
        payload: Prisma.$VegetablePayload<ExtArgs>
        fields: Prisma.VegetableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VegetableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VegetableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          findFirst: {
            args: Prisma.VegetableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VegetableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          findMany: {
            args: Prisma.VegetableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>[]
          }
          create: {
            args: Prisma.VegetableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          createMany: {
            args: Prisma.VegetableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VegetableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>[]
          }
          delete: {
            args: Prisma.VegetableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          update: {
            args: Prisma.VegetableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          deleteMany: {
            args: Prisma.VegetableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VegetableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VegetableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>[]
          }
          upsert: {
            args: Prisma.VegetableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VegetablePayload>
          }
          aggregate: {
            args: Prisma.VegetableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVegetable>
          }
          groupBy: {
            args: Prisma.VegetableGroupByArgs<ExtArgs>
            result: $Utils.Optional<VegetableGroupByOutputType>[]
          }
          count: {
            args: Prisma.VegetableCountArgs<ExtArgs>
            result: $Utils.Optional<VegetableCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      SensorData: {
        payload: Prisma.$SensorDataPayload<ExtArgs>
        fields: Prisma.SensorDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SensorDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SensorDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          findFirst: {
            args: Prisma.SensorDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SensorDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          findMany: {
            args: Prisma.SensorDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>[]
          }
          create: {
            args: Prisma.SensorDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          createMany: {
            args: Prisma.SensorDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SensorDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>[]
          }
          delete: {
            args: Prisma.SensorDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          update: {
            args: Prisma.SensorDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          deleteMany: {
            args: Prisma.SensorDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SensorDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SensorDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>[]
          }
          upsert: {
            args: Prisma.SensorDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SensorDataPayload>
          }
          aggregate: {
            args: Prisma.SensorDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSensorData>
          }
          groupBy: {
            args: Prisma.SensorDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<SensorDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.SensorDataCountArgs<ExtArgs>
            result: $Utils.Optional<SensorDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    garden?: GardenOmit
    vegetable?: VegetableOmit
    sale?: SaleOmit
    sensorData?: SensorDataOmit
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    garden: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garden?: boolean | UserCountOutputTypeCountGardenArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGardenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GardenWhereInput
  }


  /**
   * Count Type GardenCountOutputType
   */

  export type GardenCountOutputType = {
    sale: number
    sensorData: number
    vegetable: number
  }

  export type GardenCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | GardenCountOutputTypeCountSaleArgs
    sensorData?: boolean | GardenCountOutputTypeCountSensorDataArgs
    vegetable?: boolean | GardenCountOutputTypeCountVegetableArgs
  }

  // Custom InputTypes
  /**
   * GardenCountOutputType without action
   */
  export type GardenCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GardenCountOutputType
     */
    select?: GardenCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GardenCountOutputType without action
   */
  export type GardenCountOutputTypeCountSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * GardenCountOutputType without action
   */
  export type GardenCountOutputTypeCountSensorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorDataWhereInput
  }

  /**
   * GardenCountOutputType without action
   */
  export type GardenCountOutputTypeCountVegetableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VegetableWhereInput
  }


  /**
   * Count Type VegetableCountOutputType
   */

  export type VegetableCountOutputType = {
    sale: number
  }

  export type VegetableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | VegetableCountOutputTypeCountSaleArgs
  }

  // Custom InputTypes
  /**
   * VegetableCountOutputType without action
   */
  export type VegetableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VegetableCountOutputType
     */
    select?: VegetableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VegetableCountOutputType without action
   */
  export type VegetableCountOutputTypeCountSaleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    role: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    garden?: boolean | User$gardenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garden?: boolean | User$gardenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      garden: Prisma.$GardenPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      role: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    garden<T extends User$gardenArgs<ExtArgs> = {}>(args?: Subset<T, User$gardenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.garden
   */
  export type User$gardenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    where?: GardenWhereInput
    orderBy?: GardenOrderByWithRelationInput | GardenOrderByWithRelationInput[]
    cursor?: GardenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GardenScalarFieldEnum | GardenScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Garden
   */

  export type AggregateGarden = {
    _count: GardenCountAggregateOutputType | null
    _avg: GardenAvgAggregateOutputType | null
    _sum: GardenSumAggregateOutputType | null
    _min: GardenMinAggregateOutputType | null
    _max: GardenMaxAggregateOutputType | null
  }

  export type GardenAvgAggregateOutputType = {
    id: number | null
    userid: number | null
  }

  export type GardenSumAggregateOutputType = {
    id: number | null
    userid: number | null
  }

  export type GardenMinAggregateOutputType = {
    id: number | null
    userid: number | null
    name: string | null
  }

  export type GardenMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    name: string | null
  }

  export type GardenCountAggregateOutputType = {
    id: number
    userid: number
    name: number
    _all: number
  }


  export type GardenAvgAggregateInputType = {
    id?: true
    userid?: true
  }

  export type GardenSumAggregateInputType = {
    id?: true
    userid?: true
  }

  export type GardenMinAggregateInputType = {
    id?: true
    userid?: true
    name?: true
  }

  export type GardenMaxAggregateInputType = {
    id?: true
    userid?: true
    name?: true
  }

  export type GardenCountAggregateInputType = {
    id?: true
    userid?: true
    name?: true
    _all?: true
  }

  export type GardenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Garden to aggregate.
     */
    where?: GardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gardens to fetch.
     */
    orderBy?: GardenOrderByWithRelationInput | GardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gardens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gardens
    **/
    _count?: true | GardenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GardenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GardenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GardenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GardenMaxAggregateInputType
  }

  export type GetGardenAggregateType<T extends GardenAggregateArgs> = {
        [P in keyof T & keyof AggregateGarden]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGarden[P]>
      : GetScalarType<T[P], AggregateGarden[P]>
  }




  export type GardenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GardenWhereInput
    orderBy?: GardenOrderByWithAggregationInput | GardenOrderByWithAggregationInput[]
    by: GardenScalarFieldEnum[] | GardenScalarFieldEnum
    having?: GardenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GardenCountAggregateInputType | true
    _avg?: GardenAvgAggregateInputType
    _sum?: GardenSumAggregateInputType
    _min?: GardenMinAggregateInputType
    _max?: GardenMaxAggregateInputType
  }

  export type GardenGroupByOutputType = {
    id: number
    userid: number
    name: string
    _count: GardenCountAggregateOutputType | null
    _avg: GardenAvgAggregateOutputType | null
    _sum: GardenSumAggregateOutputType | null
    _min: GardenMinAggregateOutputType | null
    _max: GardenMaxAggregateOutputType | null
  }

  type GetGardenGroupByPayload<T extends GardenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GardenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GardenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GardenGroupByOutputType[P]>
            : GetScalarType<T[P], GardenGroupByOutputType[P]>
        }
      >
    >


  export type GardenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    sale?: boolean | Garden$saleArgs<ExtArgs>
    sensorData?: boolean | Garden$sensorDataArgs<ExtArgs>
    vegetable?: boolean | Garden$vegetableArgs<ExtArgs>
    _count?: boolean | GardenCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["garden"]>

  export type GardenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["garden"]>

  export type GardenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    name?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["garden"]>

  export type GardenSelectScalar = {
    id?: boolean
    userid?: boolean
    name?: boolean
  }

  export type GardenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userid" | "name", ExtArgs["result"]["garden"]>
  export type GardenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    sale?: boolean | Garden$saleArgs<ExtArgs>
    sensorData?: boolean | Garden$sensorDataArgs<ExtArgs>
    vegetable?: boolean | Garden$vegetableArgs<ExtArgs>
    _count?: boolean | GardenCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GardenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GardenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GardenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Garden"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      sale: Prisma.$SalePayload<ExtArgs>[]
      sensorData: Prisma.$SensorDataPayload<ExtArgs>[]
      vegetable: Prisma.$VegetablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: number
      name: string
    }, ExtArgs["result"]["garden"]>
    composites: {}
  }

  type GardenGetPayload<S extends boolean | null | undefined | GardenDefaultArgs> = $Result.GetResult<Prisma.$GardenPayload, S>

  type GardenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GardenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GardenCountAggregateInputType | true
    }

  export interface GardenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Garden'], meta: { name: 'Garden' } }
    /**
     * Find zero or one Garden that matches the filter.
     * @param {GardenFindUniqueArgs} args - Arguments to find a Garden
     * @example
     * // Get one Garden
     * const garden = await prisma.garden.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GardenFindUniqueArgs>(args: SelectSubset<T, GardenFindUniqueArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Garden that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GardenFindUniqueOrThrowArgs} args - Arguments to find a Garden
     * @example
     * // Get one Garden
     * const garden = await prisma.garden.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GardenFindUniqueOrThrowArgs>(args: SelectSubset<T, GardenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Garden that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenFindFirstArgs} args - Arguments to find a Garden
     * @example
     * // Get one Garden
     * const garden = await prisma.garden.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GardenFindFirstArgs>(args?: SelectSubset<T, GardenFindFirstArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Garden that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenFindFirstOrThrowArgs} args - Arguments to find a Garden
     * @example
     * // Get one Garden
     * const garden = await prisma.garden.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GardenFindFirstOrThrowArgs>(args?: SelectSubset<T, GardenFindFirstOrThrowArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gardens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gardens
     * const gardens = await prisma.garden.findMany()
     * 
     * // Get first 10 Gardens
     * const gardens = await prisma.garden.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gardenWithIdOnly = await prisma.garden.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GardenFindManyArgs>(args?: SelectSubset<T, GardenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Garden.
     * @param {GardenCreateArgs} args - Arguments to create a Garden.
     * @example
     * // Create one Garden
     * const Garden = await prisma.garden.create({
     *   data: {
     *     // ... data to create a Garden
     *   }
     * })
     * 
     */
    create<T extends GardenCreateArgs>(args: SelectSubset<T, GardenCreateArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gardens.
     * @param {GardenCreateManyArgs} args - Arguments to create many Gardens.
     * @example
     * // Create many Gardens
     * const garden = await prisma.garden.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GardenCreateManyArgs>(args?: SelectSubset<T, GardenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gardens and returns the data saved in the database.
     * @param {GardenCreateManyAndReturnArgs} args - Arguments to create many Gardens.
     * @example
     * // Create many Gardens
     * const garden = await prisma.garden.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gardens and only return the `id`
     * const gardenWithIdOnly = await prisma.garden.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GardenCreateManyAndReturnArgs>(args?: SelectSubset<T, GardenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Garden.
     * @param {GardenDeleteArgs} args - Arguments to delete one Garden.
     * @example
     * // Delete one Garden
     * const Garden = await prisma.garden.delete({
     *   where: {
     *     // ... filter to delete one Garden
     *   }
     * })
     * 
     */
    delete<T extends GardenDeleteArgs>(args: SelectSubset<T, GardenDeleteArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Garden.
     * @param {GardenUpdateArgs} args - Arguments to update one Garden.
     * @example
     * // Update one Garden
     * const garden = await prisma.garden.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GardenUpdateArgs>(args: SelectSubset<T, GardenUpdateArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gardens.
     * @param {GardenDeleteManyArgs} args - Arguments to filter Gardens to delete.
     * @example
     * // Delete a few Gardens
     * const { count } = await prisma.garden.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GardenDeleteManyArgs>(args?: SelectSubset<T, GardenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gardens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gardens
     * const garden = await prisma.garden.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GardenUpdateManyArgs>(args: SelectSubset<T, GardenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gardens and returns the data updated in the database.
     * @param {GardenUpdateManyAndReturnArgs} args - Arguments to update many Gardens.
     * @example
     * // Update many Gardens
     * const garden = await prisma.garden.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gardens and only return the `id`
     * const gardenWithIdOnly = await prisma.garden.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GardenUpdateManyAndReturnArgs>(args: SelectSubset<T, GardenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Garden.
     * @param {GardenUpsertArgs} args - Arguments to update or create a Garden.
     * @example
     * // Update or create a Garden
     * const garden = await prisma.garden.upsert({
     *   create: {
     *     // ... data to create a Garden
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Garden we want to update
     *   }
     * })
     */
    upsert<T extends GardenUpsertArgs>(args: SelectSubset<T, GardenUpsertArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gardens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenCountArgs} args - Arguments to filter Gardens to count.
     * @example
     * // Count the number of Gardens
     * const count = await prisma.garden.count({
     *   where: {
     *     // ... the filter for the Gardens we want to count
     *   }
     * })
    **/
    count<T extends GardenCountArgs>(
      args?: Subset<T, GardenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GardenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Garden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GardenAggregateArgs>(args: Subset<T, GardenAggregateArgs>): Prisma.PrismaPromise<GetGardenAggregateType<T>>

    /**
     * Group by Garden.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GardenGroupByArgs} args - Group by arguments.
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
      T extends GardenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GardenGroupByArgs['orderBy'] }
        : { orderBy?: GardenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GardenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGardenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Garden model
   */
  readonly fields: GardenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Garden.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GardenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sale<T extends Garden$saleArgs<ExtArgs> = {}>(args?: Subset<T, Garden$saleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sensorData<T extends Garden$sensorDataArgs<ExtArgs> = {}>(args?: Subset<T, Garden$sensorDataArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vegetable<T extends Garden$vegetableArgs<ExtArgs> = {}>(args?: Subset<T, Garden$vegetableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Garden model
   */
  interface GardenFieldRefs {
    readonly id: FieldRef<"Garden", 'Int'>
    readonly userid: FieldRef<"Garden", 'Int'>
    readonly name: FieldRef<"Garden", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Garden findUnique
   */
  export type GardenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter, which Garden to fetch.
     */
    where: GardenWhereUniqueInput
  }

  /**
   * Garden findUniqueOrThrow
   */
  export type GardenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter, which Garden to fetch.
     */
    where: GardenWhereUniqueInput
  }

  /**
   * Garden findFirst
   */
  export type GardenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter, which Garden to fetch.
     */
    where?: GardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gardens to fetch.
     */
    orderBy?: GardenOrderByWithRelationInput | GardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gardens.
     */
    cursor?: GardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gardens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gardens.
     */
    distinct?: GardenScalarFieldEnum | GardenScalarFieldEnum[]
  }

  /**
   * Garden findFirstOrThrow
   */
  export type GardenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter, which Garden to fetch.
     */
    where?: GardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gardens to fetch.
     */
    orderBy?: GardenOrderByWithRelationInput | GardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gardens.
     */
    cursor?: GardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gardens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gardens.
     */
    distinct?: GardenScalarFieldEnum | GardenScalarFieldEnum[]
  }

  /**
   * Garden findMany
   */
  export type GardenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter, which Gardens to fetch.
     */
    where?: GardenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gardens to fetch.
     */
    orderBy?: GardenOrderByWithRelationInput | GardenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gardens.
     */
    cursor?: GardenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gardens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gardens.
     */
    skip?: number
    distinct?: GardenScalarFieldEnum | GardenScalarFieldEnum[]
  }

  /**
   * Garden create
   */
  export type GardenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * The data needed to create a Garden.
     */
    data: XOR<GardenCreateInput, GardenUncheckedCreateInput>
  }

  /**
   * Garden createMany
   */
  export type GardenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gardens.
     */
    data: GardenCreateManyInput | GardenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Garden createManyAndReturn
   */
  export type GardenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * The data used to create many Gardens.
     */
    data: GardenCreateManyInput | GardenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Garden update
   */
  export type GardenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * The data needed to update a Garden.
     */
    data: XOR<GardenUpdateInput, GardenUncheckedUpdateInput>
    /**
     * Choose, which Garden to update.
     */
    where: GardenWhereUniqueInput
  }

  /**
   * Garden updateMany
   */
  export type GardenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gardens.
     */
    data: XOR<GardenUpdateManyMutationInput, GardenUncheckedUpdateManyInput>
    /**
     * Filter which Gardens to update
     */
    where?: GardenWhereInput
    /**
     * Limit how many Gardens to update.
     */
    limit?: number
  }

  /**
   * Garden updateManyAndReturn
   */
  export type GardenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * The data used to update Gardens.
     */
    data: XOR<GardenUpdateManyMutationInput, GardenUncheckedUpdateManyInput>
    /**
     * Filter which Gardens to update
     */
    where?: GardenWhereInput
    /**
     * Limit how many Gardens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Garden upsert
   */
  export type GardenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * The filter to search for the Garden to update in case it exists.
     */
    where: GardenWhereUniqueInput
    /**
     * In case the Garden found by the `where` argument doesn't exist, create a new Garden with this data.
     */
    create: XOR<GardenCreateInput, GardenUncheckedCreateInput>
    /**
     * In case the Garden was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GardenUpdateInput, GardenUncheckedUpdateInput>
  }

  /**
   * Garden delete
   */
  export type GardenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
    /**
     * Filter which Garden to delete.
     */
    where: GardenWhereUniqueInput
  }

  /**
   * Garden deleteMany
   */
  export type GardenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gardens to delete
     */
    where?: GardenWhereInput
    /**
     * Limit how many Gardens to delete.
     */
    limit?: number
  }

  /**
   * Garden.sale
   */
  export type Garden$saleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Garden.sensorData
   */
  export type Garden$sensorDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    where?: SensorDataWhereInput
    orderBy?: SensorDataOrderByWithRelationInput | SensorDataOrderByWithRelationInput[]
    cursor?: SensorDataWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SensorDataScalarFieldEnum | SensorDataScalarFieldEnum[]
  }

  /**
   * Garden.vegetable
   */
  export type Garden$vegetableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableInclude<ExtArgs> | null
    where?: VegetableWhereInput
    orderBy?: VegetableOrderByWithRelationInput | VegetableOrderByWithRelationInput[]
    cursor?: VegetableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VegetableScalarFieldEnum | VegetableScalarFieldEnum[]
  }

  /**
   * Garden without action
   */
  export type GardenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Garden
     */
    select?: GardenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Garden
     */
    omit?: GardenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GardenInclude<ExtArgs> | null
  }


  /**
   * Model Vegetable
   */

  export type AggregateVegetable = {
    _count: VegetableCountAggregateOutputType | null
    _avg: VegetableAvgAggregateOutputType | null
    _sum: VegetableSumAggregateOutputType | null
    _min: VegetableMinAggregateOutputType | null
    _max: VegetableMaxAggregateOutputType | null
  }

  export type VegetableAvgAggregateOutputType = {
    id: number | null
    gardenid: number | null
    import: number | null
    export: number | null
    price: number | null
  }

  export type VegetableSumAggregateOutputType = {
    id: number | null
    gardenid: number | null
    import: number | null
    export: number | null
    price: number | null
  }

  export type VegetableMinAggregateOutputType = {
    id: number | null
    gardenid: number | null
    name: string | null
    import: number | null
    export: number | null
    price: number | null
  }

  export type VegetableMaxAggregateOutputType = {
    id: number | null
    gardenid: number | null
    name: string | null
    import: number | null
    export: number | null
    price: number | null
  }

  export type VegetableCountAggregateOutputType = {
    id: number
    gardenid: number
    name: number
    import: number
    export: number
    price: number
    _all: number
  }


  export type VegetableAvgAggregateInputType = {
    id?: true
    gardenid?: true
    import?: true
    export?: true
    price?: true
  }

  export type VegetableSumAggregateInputType = {
    id?: true
    gardenid?: true
    import?: true
    export?: true
    price?: true
  }

  export type VegetableMinAggregateInputType = {
    id?: true
    gardenid?: true
    name?: true
    import?: true
    export?: true
    price?: true
  }

  export type VegetableMaxAggregateInputType = {
    id?: true
    gardenid?: true
    name?: true
    import?: true
    export?: true
    price?: true
  }

  export type VegetableCountAggregateInputType = {
    id?: true
    gardenid?: true
    name?: true
    import?: true
    export?: true
    price?: true
    _all?: true
  }

  export type VegetableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vegetable to aggregate.
     */
    where?: VegetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vegetables to fetch.
     */
    orderBy?: VegetableOrderByWithRelationInput | VegetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VegetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vegetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vegetables
    **/
    _count?: true | VegetableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VegetableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VegetableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VegetableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VegetableMaxAggregateInputType
  }

  export type GetVegetableAggregateType<T extends VegetableAggregateArgs> = {
        [P in keyof T & keyof AggregateVegetable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVegetable[P]>
      : GetScalarType<T[P], AggregateVegetable[P]>
  }




  export type VegetableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VegetableWhereInput
    orderBy?: VegetableOrderByWithAggregationInput | VegetableOrderByWithAggregationInput[]
    by: VegetableScalarFieldEnum[] | VegetableScalarFieldEnum
    having?: VegetableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VegetableCountAggregateInputType | true
    _avg?: VegetableAvgAggregateInputType
    _sum?: VegetableSumAggregateInputType
    _min?: VegetableMinAggregateInputType
    _max?: VegetableMaxAggregateInputType
  }

  export type VegetableGroupByOutputType = {
    id: number
    gardenid: number
    name: string
    import: number
    export: number
    price: number
    _count: VegetableCountAggregateOutputType | null
    _avg: VegetableAvgAggregateOutputType | null
    _sum: VegetableSumAggregateOutputType | null
    _min: VegetableMinAggregateOutputType | null
    _max: VegetableMaxAggregateOutputType | null
  }

  type GetVegetableGroupByPayload<T extends VegetableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VegetableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VegetableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VegetableGroupByOutputType[P]>
            : GetScalarType<T[P], VegetableGroupByOutputType[P]>
        }
      >
    >


  export type VegetableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gardenid?: boolean
    name?: boolean
    import?: boolean
    export?: boolean
    price?: boolean
    sale?: boolean | Vegetable$saleArgs<ExtArgs>
    garden?: boolean | GardenDefaultArgs<ExtArgs>
    _count?: boolean | VegetableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vegetable"]>

  export type VegetableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gardenid?: boolean
    name?: boolean
    import?: boolean
    export?: boolean
    price?: boolean
    garden?: boolean | GardenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vegetable"]>

  export type VegetableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gardenid?: boolean
    name?: boolean
    import?: boolean
    export?: boolean
    price?: boolean
    garden?: boolean | GardenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vegetable"]>

  export type VegetableSelectScalar = {
    id?: boolean
    gardenid?: boolean
    name?: boolean
    import?: boolean
    export?: boolean
    price?: boolean
  }

  export type VegetableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gardenid" | "name" | "import" | "export" | "price", ExtArgs["result"]["vegetable"]>
  export type VegetableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | Vegetable$saleArgs<ExtArgs>
    garden?: boolean | GardenDefaultArgs<ExtArgs>
    _count?: boolean | VegetableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VegetableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garden?: boolean | GardenDefaultArgs<ExtArgs>
  }
  export type VegetableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garden?: boolean | GardenDefaultArgs<ExtArgs>
  }

  export type $VegetablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vegetable"
    objects: {
      sale: Prisma.$SalePayload<ExtArgs>[]
      garden: Prisma.$GardenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gardenid: number
      name: string
      import: number
      export: number
      price: number
    }, ExtArgs["result"]["vegetable"]>
    composites: {}
  }

  type VegetableGetPayload<S extends boolean | null | undefined | VegetableDefaultArgs> = $Result.GetResult<Prisma.$VegetablePayload, S>

  type VegetableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VegetableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VegetableCountAggregateInputType | true
    }

  export interface VegetableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vegetable'], meta: { name: 'Vegetable' } }
    /**
     * Find zero or one Vegetable that matches the filter.
     * @param {VegetableFindUniqueArgs} args - Arguments to find a Vegetable
     * @example
     * // Get one Vegetable
     * const vegetable = await prisma.vegetable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VegetableFindUniqueArgs>(args: SelectSubset<T, VegetableFindUniqueArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vegetable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VegetableFindUniqueOrThrowArgs} args - Arguments to find a Vegetable
     * @example
     * // Get one Vegetable
     * const vegetable = await prisma.vegetable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VegetableFindUniqueOrThrowArgs>(args: SelectSubset<T, VegetableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vegetable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableFindFirstArgs} args - Arguments to find a Vegetable
     * @example
     * // Get one Vegetable
     * const vegetable = await prisma.vegetable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VegetableFindFirstArgs>(args?: SelectSubset<T, VegetableFindFirstArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vegetable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableFindFirstOrThrowArgs} args - Arguments to find a Vegetable
     * @example
     * // Get one Vegetable
     * const vegetable = await prisma.vegetable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VegetableFindFirstOrThrowArgs>(args?: SelectSubset<T, VegetableFindFirstOrThrowArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vegetables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vegetables
     * const vegetables = await prisma.vegetable.findMany()
     * 
     * // Get first 10 Vegetables
     * const vegetables = await prisma.vegetable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vegetableWithIdOnly = await prisma.vegetable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VegetableFindManyArgs>(args?: SelectSubset<T, VegetableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vegetable.
     * @param {VegetableCreateArgs} args - Arguments to create a Vegetable.
     * @example
     * // Create one Vegetable
     * const Vegetable = await prisma.vegetable.create({
     *   data: {
     *     // ... data to create a Vegetable
     *   }
     * })
     * 
     */
    create<T extends VegetableCreateArgs>(args: SelectSubset<T, VegetableCreateArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vegetables.
     * @param {VegetableCreateManyArgs} args - Arguments to create many Vegetables.
     * @example
     * // Create many Vegetables
     * const vegetable = await prisma.vegetable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VegetableCreateManyArgs>(args?: SelectSubset<T, VegetableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vegetables and returns the data saved in the database.
     * @param {VegetableCreateManyAndReturnArgs} args - Arguments to create many Vegetables.
     * @example
     * // Create many Vegetables
     * const vegetable = await prisma.vegetable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vegetables and only return the `id`
     * const vegetableWithIdOnly = await prisma.vegetable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VegetableCreateManyAndReturnArgs>(args?: SelectSubset<T, VegetableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vegetable.
     * @param {VegetableDeleteArgs} args - Arguments to delete one Vegetable.
     * @example
     * // Delete one Vegetable
     * const Vegetable = await prisma.vegetable.delete({
     *   where: {
     *     // ... filter to delete one Vegetable
     *   }
     * })
     * 
     */
    delete<T extends VegetableDeleteArgs>(args: SelectSubset<T, VegetableDeleteArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vegetable.
     * @param {VegetableUpdateArgs} args - Arguments to update one Vegetable.
     * @example
     * // Update one Vegetable
     * const vegetable = await prisma.vegetable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VegetableUpdateArgs>(args: SelectSubset<T, VegetableUpdateArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vegetables.
     * @param {VegetableDeleteManyArgs} args - Arguments to filter Vegetables to delete.
     * @example
     * // Delete a few Vegetables
     * const { count } = await prisma.vegetable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VegetableDeleteManyArgs>(args?: SelectSubset<T, VegetableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vegetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vegetables
     * const vegetable = await prisma.vegetable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VegetableUpdateManyArgs>(args: SelectSubset<T, VegetableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vegetables and returns the data updated in the database.
     * @param {VegetableUpdateManyAndReturnArgs} args - Arguments to update many Vegetables.
     * @example
     * // Update many Vegetables
     * const vegetable = await prisma.vegetable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vegetables and only return the `id`
     * const vegetableWithIdOnly = await prisma.vegetable.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VegetableUpdateManyAndReturnArgs>(args: SelectSubset<T, VegetableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vegetable.
     * @param {VegetableUpsertArgs} args - Arguments to update or create a Vegetable.
     * @example
     * // Update or create a Vegetable
     * const vegetable = await prisma.vegetable.upsert({
     *   create: {
     *     // ... data to create a Vegetable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vegetable we want to update
     *   }
     * })
     */
    upsert<T extends VegetableUpsertArgs>(args: SelectSubset<T, VegetableUpsertArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vegetables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableCountArgs} args - Arguments to filter Vegetables to count.
     * @example
     * // Count the number of Vegetables
     * const count = await prisma.vegetable.count({
     *   where: {
     *     // ... the filter for the Vegetables we want to count
     *   }
     * })
    **/
    count<T extends VegetableCountArgs>(
      args?: Subset<T, VegetableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VegetableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vegetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VegetableAggregateArgs>(args: Subset<T, VegetableAggregateArgs>): Prisma.PrismaPromise<GetVegetableAggregateType<T>>

    /**
     * Group by Vegetable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VegetableGroupByArgs} args - Group by arguments.
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
      T extends VegetableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VegetableGroupByArgs['orderBy'] }
        : { orderBy?: VegetableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, VegetableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVegetableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vegetable model
   */
  readonly fields: VegetableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vegetable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VegetableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends Vegetable$saleArgs<ExtArgs> = {}>(args?: Subset<T, Vegetable$saleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    garden<T extends GardenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GardenDefaultArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vegetable model
   */
  interface VegetableFieldRefs {
    readonly id: FieldRef<"Vegetable", 'Int'>
    readonly gardenid: FieldRef<"Vegetable", 'Int'>
    readonly name: FieldRef<"Vegetable", 'String'>
    readonly import: FieldRef<"Vegetable", 'Int'>
    readonly export: FieldRef<"Vegetable", 'Int'>
    readonly price: FieldRef<"Vegetable", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Vegetable findUnique
   */
  export type VegetableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableInclude<ExtArgs> | null
    /**
     * Filter, which Vegetable to fetch.
     */
    where: VegetableWhereUniqueInput
  }

  /**
   * Vegetable findUniqueOrThrow
   */
  export type VegetableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableInclude<ExtArgs> | null
    /**
     * Filter, which Vegetable to fetch.
     */
    where: VegetableWhereUniqueInput
  }

  /**
   * Vegetable findFirst
   */
  export type VegetableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableInclude<ExtArgs> | null
    /**
     * Filter, which Vegetable to fetch.
     */
    where?: VegetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vegetables to fetch.
     */
    orderBy?: VegetableOrderByWithRelationInput | VegetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vegetables.
     */
    cursor?: VegetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vegetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vegetables.
     */
    distinct?: VegetableScalarFieldEnum | VegetableScalarFieldEnum[]
  }

  /**
   * Vegetable findFirstOrThrow
   */
  export type VegetableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableInclude<ExtArgs> | null
    /**
     * Filter, which Vegetable to fetch.
     */
    where?: VegetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vegetables to fetch.
     */
    orderBy?: VegetableOrderByWithRelationInput | VegetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vegetables.
     */
    cursor?: VegetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vegetables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vegetables.
     */
    distinct?: VegetableScalarFieldEnum | VegetableScalarFieldEnum[]
  }

  /**
   * Vegetable findMany
   */
  export type VegetableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableInclude<ExtArgs> | null
    /**
     * Filter, which Vegetables to fetch.
     */
    where?: VegetableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vegetables to fetch.
     */
    orderBy?: VegetableOrderByWithRelationInput | VegetableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vegetables.
     */
    cursor?: VegetableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vegetables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vegetables.
     */
    skip?: number
    distinct?: VegetableScalarFieldEnum | VegetableScalarFieldEnum[]
  }

  /**
   * Vegetable create
   */
  export type VegetableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableInclude<ExtArgs> | null
    /**
     * The data needed to create a Vegetable.
     */
    data: XOR<VegetableCreateInput, VegetableUncheckedCreateInput>
  }

  /**
   * Vegetable createMany
   */
  export type VegetableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vegetables.
     */
    data: VegetableCreateManyInput | VegetableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vegetable createManyAndReturn
   */
  export type VegetableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * The data used to create many Vegetables.
     */
    data: VegetableCreateManyInput | VegetableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vegetable update
   */
  export type VegetableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableInclude<ExtArgs> | null
    /**
     * The data needed to update a Vegetable.
     */
    data: XOR<VegetableUpdateInput, VegetableUncheckedUpdateInput>
    /**
     * Choose, which Vegetable to update.
     */
    where: VegetableWhereUniqueInput
  }

  /**
   * Vegetable updateMany
   */
  export type VegetableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vegetables.
     */
    data: XOR<VegetableUpdateManyMutationInput, VegetableUncheckedUpdateManyInput>
    /**
     * Filter which Vegetables to update
     */
    where?: VegetableWhereInput
    /**
     * Limit how many Vegetables to update.
     */
    limit?: number
  }

  /**
   * Vegetable updateManyAndReturn
   */
  export type VegetableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * The data used to update Vegetables.
     */
    data: XOR<VegetableUpdateManyMutationInput, VegetableUncheckedUpdateManyInput>
    /**
     * Filter which Vegetables to update
     */
    where?: VegetableWhereInput
    /**
     * Limit how many Vegetables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vegetable upsert
   */
  export type VegetableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableInclude<ExtArgs> | null
    /**
     * The filter to search for the Vegetable to update in case it exists.
     */
    where: VegetableWhereUniqueInput
    /**
     * In case the Vegetable found by the `where` argument doesn't exist, create a new Vegetable with this data.
     */
    create: XOR<VegetableCreateInput, VegetableUncheckedCreateInput>
    /**
     * In case the Vegetable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VegetableUpdateInput, VegetableUncheckedUpdateInput>
  }

  /**
   * Vegetable delete
   */
  export type VegetableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableInclude<ExtArgs> | null
    /**
     * Filter which Vegetable to delete.
     */
    where: VegetableWhereUniqueInput
  }

  /**
   * Vegetable deleteMany
   */
  export type VegetableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vegetables to delete
     */
    where?: VegetableWhereInput
    /**
     * Limit how many Vegetables to delete.
     */
    limit?: number
  }

  /**
   * Vegetable.sale
   */
  export type Vegetable$saleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Vegetable without action
   */
  export type VegetableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vegetable
     */
    select?: VegetableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vegetable
     */
    omit?: VegetableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VegetableInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    id: number | null
    vegetableid: number | null
    gardenid: number | null
    quantity: number | null
    total: number | null
  }

  export type SaleSumAggregateOutputType = {
    id: number | null
    vegetableid: number | null
    gardenid: number | null
    quantity: number | null
    total: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: number | null
    vegetableid: number | null
    gardenid: number | null
    time: Date | null
    quantity: number | null
    total: number | null
  }

  export type SaleMaxAggregateOutputType = {
    id: number | null
    vegetableid: number | null
    gardenid: number | null
    time: Date | null
    quantity: number | null
    total: number | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    vegetableid: number
    gardenid: number
    time: number
    quantity: number
    total: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    id?: true
    vegetableid?: true
    gardenid?: true
    quantity?: true
    total?: true
  }

  export type SaleSumAggregateInputType = {
    id?: true
    vegetableid?: true
    gardenid?: true
    quantity?: true
    total?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    vegetableid?: true
    gardenid?: true
    time?: true
    quantity?: true
    total?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    vegetableid?: true
    gardenid?: true
    time?: true
    quantity?: true
    total?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    vegetableid?: true
    gardenid?: true
    time?: true
    quantity?: true
    total?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: number
    vegetableid: number
    gardenid: number
    time: Date | null
    quantity: number
    total: number
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vegetableid?: boolean
    gardenid?: boolean
    time?: boolean
    quantity?: boolean
    total?: boolean
    garden?: boolean | GardenDefaultArgs<ExtArgs>
    vegetable?: boolean | VegetableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vegetableid?: boolean
    gardenid?: boolean
    time?: boolean
    quantity?: boolean
    total?: boolean
    garden?: boolean | GardenDefaultArgs<ExtArgs>
    vegetable?: boolean | VegetableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vegetableid?: boolean
    gardenid?: boolean
    time?: boolean
    quantity?: boolean
    total?: boolean
    garden?: boolean | GardenDefaultArgs<ExtArgs>
    vegetable?: boolean | VegetableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    vegetableid?: boolean
    gardenid?: boolean
    time?: boolean
    quantity?: boolean
    total?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vegetableid" | "gardenid" | "time" | "quantity" | "total", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garden?: boolean | GardenDefaultArgs<ExtArgs>
    vegetable?: boolean | VegetableDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garden?: boolean | GardenDefaultArgs<ExtArgs>
    vegetable?: boolean | VegetableDefaultArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garden?: boolean | GardenDefaultArgs<ExtArgs>
    vegetable?: boolean | VegetableDefaultArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      garden: Prisma.$GardenPayload<ExtArgs>
      vegetable: Prisma.$VegetablePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      vegetableid: number
      gardenid: number
      time: Date | null
      quantity: number
      total: number
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
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
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    garden<T extends GardenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GardenDefaultArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vegetable<T extends VegetableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VegetableDefaultArgs<ExtArgs>>): Prisma__VegetableClient<$Result.GetResult<Prisma.$VegetablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'Int'>
    readonly vegetableid: FieldRef<"Sale", 'Int'>
    readonly gardenid: FieldRef<"Sale", 'Int'>
    readonly time: FieldRef<"Sale", 'DateTime'>
    readonly quantity: FieldRef<"Sale", 'Int'>
    readonly total: FieldRef<"Sale", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model SensorData
   */

  export type AggregateSensorData = {
    _count: SensorDataCountAggregateOutputType | null
    _avg: SensorDataAvgAggregateOutputType | null
    _sum: SensorDataSumAggregateOutputType | null
    _min: SensorDataMinAggregateOutputType | null
    _max: SensorDataMaxAggregateOutputType | null
  }

  export type SensorDataAvgAggregateOutputType = {
    id: number | null
    gardenid: number | null
    humidity: number | null
    temperature: number | null
  }

  export type SensorDataSumAggregateOutputType = {
    id: number | null
    gardenid: number | null
    humidity: number | null
    temperature: number | null
  }

  export type SensorDataMinAggregateOutputType = {
    id: number | null
    gardenid: number | null
    humidity: number | null
    temperature: number | null
    time: Date | null
  }

  export type SensorDataMaxAggregateOutputType = {
    id: number | null
    gardenid: number | null
    humidity: number | null
    temperature: number | null
    time: Date | null
  }

  export type SensorDataCountAggregateOutputType = {
    id: number
    gardenid: number
    humidity: number
    temperature: number
    time: number
    _all: number
  }


  export type SensorDataAvgAggregateInputType = {
    id?: true
    gardenid?: true
    humidity?: true
    temperature?: true
  }

  export type SensorDataSumAggregateInputType = {
    id?: true
    gardenid?: true
    humidity?: true
    temperature?: true
  }

  export type SensorDataMinAggregateInputType = {
    id?: true
    gardenid?: true
    humidity?: true
    temperature?: true
    time?: true
  }

  export type SensorDataMaxAggregateInputType = {
    id?: true
    gardenid?: true
    humidity?: true
    temperature?: true
    time?: true
  }

  export type SensorDataCountAggregateInputType = {
    id?: true
    gardenid?: true
    humidity?: true
    temperature?: true
    time?: true
    _all?: true
  }

  export type SensorDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorData to aggregate.
     */
    where?: SensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorData to fetch.
     */
    orderBy?: SensorDataOrderByWithRelationInput | SensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SensorData
    **/
    _count?: true | SensorDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SensorDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SensorDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SensorDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SensorDataMaxAggregateInputType
  }

  export type GetSensorDataAggregateType<T extends SensorDataAggregateArgs> = {
        [P in keyof T & keyof AggregateSensorData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSensorData[P]>
      : GetScalarType<T[P], AggregateSensorData[P]>
  }




  export type SensorDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SensorDataWhereInput
    orderBy?: SensorDataOrderByWithAggregationInput | SensorDataOrderByWithAggregationInput[]
    by: SensorDataScalarFieldEnum[] | SensorDataScalarFieldEnum
    having?: SensorDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SensorDataCountAggregateInputType | true
    _avg?: SensorDataAvgAggregateInputType
    _sum?: SensorDataSumAggregateInputType
    _min?: SensorDataMinAggregateInputType
    _max?: SensorDataMaxAggregateInputType
  }

  export type SensorDataGroupByOutputType = {
    id: number
    gardenid: number
    humidity: number
    temperature: number
    time: Date
    _count: SensorDataCountAggregateOutputType | null
    _avg: SensorDataAvgAggregateOutputType | null
    _sum: SensorDataSumAggregateOutputType | null
    _min: SensorDataMinAggregateOutputType | null
    _max: SensorDataMaxAggregateOutputType | null
  }

  type GetSensorDataGroupByPayload<T extends SensorDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SensorDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SensorDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SensorDataGroupByOutputType[P]>
            : GetScalarType<T[P], SensorDataGroupByOutputType[P]>
        }
      >
    >


  export type SensorDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gardenid?: boolean
    humidity?: boolean
    temperature?: boolean
    time?: boolean
    garden?: boolean | GardenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorData"]>

  export type SensorDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gardenid?: boolean
    humidity?: boolean
    temperature?: boolean
    time?: boolean
    garden?: boolean | GardenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorData"]>

  export type SensorDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gardenid?: boolean
    humidity?: boolean
    temperature?: boolean
    time?: boolean
    garden?: boolean | GardenDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sensorData"]>

  export type SensorDataSelectScalar = {
    id?: boolean
    gardenid?: boolean
    humidity?: boolean
    temperature?: boolean
    time?: boolean
  }

  export type SensorDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gardenid" | "humidity" | "temperature" | "time", ExtArgs["result"]["sensorData"]>
  export type SensorDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garden?: boolean | GardenDefaultArgs<ExtArgs>
  }
  export type SensorDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garden?: boolean | GardenDefaultArgs<ExtArgs>
  }
  export type SensorDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    garden?: boolean | GardenDefaultArgs<ExtArgs>
  }

  export type $SensorDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SensorData"
    objects: {
      garden: Prisma.$GardenPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gardenid: number
      humidity: number
      temperature: number
      time: Date
    }, ExtArgs["result"]["sensorData"]>
    composites: {}
  }

  type SensorDataGetPayload<S extends boolean | null | undefined | SensorDataDefaultArgs> = $Result.GetResult<Prisma.$SensorDataPayload, S>

  type SensorDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SensorDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SensorDataCountAggregateInputType | true
    }

  export interface SensorDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SensorData'], meta: { name: 'SensorData' } }
    /**
     * Find zero or one SensorData that matches the filter.
     * @param {SensorDataFindUniqueArgs} args - Arguments to find a SensorData
     * @example
     * // Get one SensorData
     * const sensorData = await prisma.sensorData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SensorDataFindUniqueArgs>(args: SelectSubset<T, SensorDataFindUniqueArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SensorData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SensorDataFindUniqueOrThrowArgs} args - Arguments to find a SensorData
     * @example
     * // Get one SensorData
     * const sensorData = await prisma.sensorData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SensorDataFindUniqueOrThrowArgs>(args: SelectSubset<T, SensorDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataFindFirstArgs} args - Arguments to find a SensorData
     * @example
     * // Get one SensorData
     * const sensorData = await prisma.sensorData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SensorDataFindFirstArgs>(args?: SelectSubset<T, SensorDataFindFirstArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SensorData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataFindFirstOrThrowArgs} args - Arguments to find a SensorData
     * @example
     * // Get one SensorData
     * const sensorData = await prisma.sensorData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SensorDataFindFirstOrThrowArgs>(args?: SelectSubset<T, SensorDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SensorData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SensorData
     * const sensorData = await prisma.sensorData.findMany()
     * 
     * // Get first 10 SensorData
     * const sensorData = await prisma.sensorData.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sensorDataWithIdOnly = await prisma.sensorData.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SensorDataFindManyArgs>(args?: SelectSubset<T, SensorDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SensorData.
     * @param {SensorDataCreateArgs} args - Arguments to create a SensorData.
     * @example
     * // Create one SensorData
     * const SensorData = await prisma.sensorData.create({
     *   data: {
     *     // ... data to create a SensorData
     *   }
     * })
     * 
     */
    create<T extends SensorDataCreateArgs>(args: SelectSubset<T, SensorDataCreateArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SensorData.
     * @param {SensorDataCreateManyArgs} args - Arguments to create many SensorData.
     * @example
     * // Create many SensorData
     * const sensorData = await prisma.sensorData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SensorDataCreateManyArgs>(args?: SelectSubset<T, SensorDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SensorData and returns the data saved in the database.
     * @param {SensorDataCreateManyAndReturnArgs} args - Arguments to create many SensorData.
     * @example
     * // Create many SensorData
     * const sensorData = await prisma.sensorData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SensorData and only return the `id`
     * const sensorDataWithIdOnly = await prisma.sensorData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SensorDataCreateManyAndReturnArgs>(args?: SelectSubset<T, SensorDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SensorData.
     * @param {SensorDataDeleteArgs} args - Arguments to delete one SensorData.
     * @example
     * // Delete one SensorData
     * const SensorData = await prisma.sensorData.delete({
     *   where: {
     *     // ... filter to delete one SensorData
     *   }
     * })
     * 
     */
    delete<T extends SensorDataDeleteArgs>(args: SelectSubset<T, SensorDataDeleteArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SensorData.
     * @param {SensorDataUpdateArgs} args - Arguments to update one SensorData.
     * @example
     * // Update one SensorData
     * const sensorData = await prisma.sensorData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SensorDataUpdateArgs>(args: SelectSubset<T, SensorDataUpdateArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SensorData.
     * @param {SensorDataDeleteManyArgs} args - Arguments to filter SensorData to delete.
     * @example
     * // Delete a few SensorData
     * const { count } = await prisma.sensorData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SensorDataDeleteManyArgs>(args?: SelectSubset<T, SensorDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SensorData
     * const sensorData = await prisma.sensorData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SensorDataUpdateManyArgs>(args: SelectSubset<T, SensorDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SensorData and returns the data updated in the database.
     * @param {SensorDataUpdateManyAndReturnArgs} args - Arguments to update many SensorData.
     * @example
     * // Update many SensorData
     * const sensorData = await prisma.sensorData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SensorData and only return the `id`
     * const sensorDataWithIdOnly = await prisma.sensorData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SensorDataUpdateManyAndReturnArgs>(args: SelectSubset<T, SensorDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SensorData.
     * @param {SensorDataUpsertArgs} args - Arguments to update or create a SensorData.
     * @example
     * // Update or create a SensorData
     * const sensorData = await prisma.sensorData.upsert({
     *   create: {
     *     // ... data to create a SensorData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SensorData we want to update
     *   }
     * })
     */
    upsert<T extends SensorDataUpsertArgs>(args: SelectSubset<T, SensorDataUpsertArgs<ExtArgs>>): Prisma__SensorDataClient<$Result.GetResult<Prisma.$SensorDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataCountArgs} args - Arguments to filter SensorData to count.
     * @example
     * // Count the number of SensorData
     * const count = await prisma.sensorData.count({
     *   where: {
     *     // ... the filter for the SensorData we want to count
     *   }
     * })
    **/
    count<T extends SensorDataCountArgs>(
      args?: Subset<T, SensorDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SensorDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SensorDataAggregateArgs>(args: Subset<T, SensorDataAggregateArgs>): Prisma.PrismaPromise<GetSensorDataAggregateType<T>>

    /**
     * Group by SensorData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SensorDataGroupByArgs} args - Group by arguments.
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
      T extends SensorDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SensorDataGroupByArgs['orderBy'] }
        : { orderBy?: SensorDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SensorDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSensorDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SensorData model
   */
  readonly fields: SensorDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SensorData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SensorDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    garden<T extends GardenDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GardenDefaultArgs<ExtArgs>>): Prisma__GardenClient<$Result.GetResult<Prisma.$GardenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SensorData model
   */
  interface SensorDataFieldRefs {
    readonly id: FieldRef<"SensorData", 'Int'>
    readonly gardenid: FieldRef<"SensorData", 'Int'>
    readonly humidity: FieldRef<"SensorData", 'Float'>
    readonly temperature: FieldRef<"SensorData", 'Float'>
    readonly time: FieldRef<"SensorData", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SensorData findUnique
   */
  export type SensorDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter, which SensorData to fetch.
     */
    where: SensorDataWhereUniqueInput
  }

  /**
   * SensorData findUniqueOrThrow
   */
  export type SensorDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter, which SensorData to fetch.
     */
    where: SensorDataWhereUniqueInput
  }

  /**
   * SensorData findFirst
   */
  export type SensorDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter, which SensorData to fetch.
     */
    where?: SensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorData to fetch.
     */
    orderBy?: SensorDataOrderByWithRelationInput | SensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorData.
     */
    cursor?: SensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorData.
     */
    distinct?: SensorDataScalarFieldEnum | SensorDataScalarFieldEnum[]
  }

  /**
   * SensorData findFirstOrThrow
   */
  export type SensorDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter, which SensorData to fetch.
     */
    where?: SensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorData to fetch.
     */
    orderBy?: SensorDataOrderByWithRelationInput | SensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SensorData.
     */
    cursor?: SensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SensorData.
     */
    distinct?: SensorDataScalarFieldEnum | SensorDataScalarFieldEnum[]
  }

  /**
   * SensorData findMany
   */
  export type SensorDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter, which SensorData to fetch.
     */
    where?: SensorDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SensorData to fetch.
     */
    orderBy?: SensorDataOrderByWithRelationInput | SensorDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SensorData.
     */
    cursor?: SensorDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SensorData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SensorData.
     */
    skip?: number
    distinct?: SensorDataScalarFieldEnum | SensorDataScalarFieldEnum[]
  }

  /**
   * SensorData create
   */
  export type SensorDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * The data needed to create a SensorData.
     */
    data: XOR<SensorDataCreateInput, SensorDataUncheckedCreateInput>
  }

  /**
   * SensorData createMany
   */
  export type SensorDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SensorData.
     */
    data: SensorDataCreateManyInput | SensorDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SensorData createManyAndReturn
   */
  export type SensorDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * The data used to create many SensorData.
     */
    data: SensorDataCreateManyInput | SensorDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorData update
   */
  export type SensorDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * The data needed to update a SensorData.
     */
    data: XOR<SensorDataUpdateInput, SensorDataUncheckedUpdateInput>
    /**
     * Choose, which SensorData to update.
     */
    where: SensorDataWhereUniqueInput
  }

  /**
   * SensorData updateMany
   */
  export type SensorDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SensorData.
     */
    data: XOR<SensorDataUpdateManyMutationInput, SensorDataUncheckedUpdateManyInput>
    /**
     * Filter which SensorData to update
     */
    where?: SensorDataWhereInput
    /**
     * Limit how many SensorData to update.
     */
    limit?: number
  }

  /**
   * SensorData updateManyAndReturn
   */
  export type SensorDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * The data used to update SensorData.
     */
    data: XOR<SensorDataUpdateManyMutationInput, SensorDataUncheckedUpdateManyInput>
    /**
     * Filter which SensorData to update
     */
    where?: SensorDataWhereInput
    /**
     * Limit how many SensorData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SensorData upsert
   */
  export type SensorDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * The filter to search for the SensorData to update in case it exists.
     */
    where: SensorDataWhereUniqueInput
    /**
     * In case the SensorData found by the `where` argument doesn't exist, create a new SensorData with this data.
     */
    create: XOR<SensorDataCreateInput, SensorDataUncheckedCreateInput>
    /**
     * In case the SensorData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SensorDataUpdateInput, SensorDataUncheckedUpdateInput>
  }

  /**
   * SensorData delete
   */
  export type SensorDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
    /**
     * Filter which SensorData to delete.
     */
    where: SensorDataWhereUniqueInput
  }

  /**
   * SensorData deleteMany
   */
  export type SensorDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SensorData to delete
     */
    where?: SensorDataWhereInput
    /**
     * Limit how many SensorData to delete.
     */
    limit?: number
  }

  /**
   * SensorData without action
   */
  export type SensorDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SensorData
     */
    select?: SensorDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SensorData
     */
    omit?: SensorDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SensorDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GardenScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    name: 'name'
  };

  export type GardenScalarFieldEnum = (typeof GardenScalarFieldEnum)[keyof typeof GardenScalarFieldEnum]


  export const VegetableScalarFieldEnum: {
    id: 'id',
    gardenid: 'gardenid',
    name: 'name',
    import: 'import',
    export: 'export',
    price: 'price'
  };

  export type VegetableScalarFieldEnum = (typeof VegetableScalarFieldEnum)[keyof typeof VegetableScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    vegetableid: 'vegetableid',
    gardenid: 'gardenid',
    time: 'time',
    quantity: 'quantity',
    total: 'total'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SensorDataScalarFieldEnum: {
    id: 'id',
    gardenid: 'gardenid',
    humidity: 'humidity',
    temperature: 'temperature',
    time: 'time'
  };

  export type SensorDataScalarFieldEnum = (typeof SensorDataScalarFieldEnum)[keyof typeof SensorDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringNullableFilter<"User"> | string | null
    garden?: GardenListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    garden?: GardenOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringNullableFilter<"User"> | string | null
    garden?: GardenListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type GardenWhereInput = {
    AND?: GardenWhereInput | GardenWhereInput[]
    OR?: GardenWhereInput[]
    NOT?: GardenWhereInput | GardenWhereInput[]
    id?: IntFilter<"Garden"> | number
    userid?: IntFilter<"Garden"> | number
    name?: StringFilter<"Garden"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sale?: SaleListRelationFilter
    sensorData?: SensorDataListRelationFilter
    vegetable?: VegetableListRelationFilter
  }

  export type GardenOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    name?: SortOrder
    user?: UserOrderByWithRelationInput
    sale?: SaleOrderByRelationAggregateInput
    sensorData?: SensorDataOrderByRelationAggregateInput
    vegetable?: VegetableOrderByRelationAggregateInput
  }

  export type GardenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GardenWhereInput | GardenWhereInput[]
    OR?: GardenWhereInput[]
    NOT?: GardenWhereInput | GardenWhereInput[]
    userid?: IntFilter<"Garden"> | number
    name?: StringFilter<"Garden"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    sale?: SaleListRelationFilter
    sensorData?: SensorDataListRelationFilter
    vegetable?: VegetableListRelationFilter
  }, "id">

  export type GardenOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    name?: SortOrder
    _count?: GardenCountOrderByAggregateInput
    _avg?: GardenAvgOrderByAggregateInput
    _max?: GardenMaxOrderByAggregateInput
    _min?: GardenMinOrderByAggregateInput
    _sum?: GardenSumOrderByAggregateInput
  }

  export type GardenScalarWhereWithAggregatesInput = {
    AND?: GardenScalarWhereWithAggregatesInput | GardenScalarWhereWithAggregatesInput[]
    OR?: GardenScalarWhereWithAggregatesInput[]
    NOT?: GardenScalarWhereWithAggregatesInput | GardenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Garden"> | number
    userid?: IntWithAggregatesFilter<"Garden"> | number
    name?: StringWithAggregatesFilter<"Garden"> | string
  }

  export type VegetableWhereInput = {
    AND?: VegetableWhereInput | VegetableWhereInput[]
    OR?: VegetableWhereInput[]
    NOT?: VegetableWhereInput | VegetableWhereInput[]
    id?: IntFilter<"Vegetable"> | number
    gardenid?: IntFilter<"Vegetable"> | number
    name?: StringFilter<"Vegetable"> | string
    import?: IntFilter<"Vegetable"> | number
    export?: IntFilter<"Vegetable"> | number
    price?: FloatFilter<"Vegetable"> | number
    sale?: SaleListRelationFilter
    garden?: XOR<GardenScalarRelationFilter, GardenWhereInput>
  }

  export type VegetableOrderByWithRelationInput = {
    id?: SortOrder
    gardenid?: SortOrder
    name?: SortOrder
    import?: SortOrder
    export?: SortOrder
    price?: SortOrder
    sale?: SaleOrderByRelationAggregateInput
    garden?: GardenOrderByWithRelationInput
  }

  export type VegetableWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VegetableWhereInput | VegetableWhereInput[]
    OR?: VegetableWhereInput[]
    NOT?: VegetableWhereInput | VegetableWhereInput[]
    gardenid?: IntFilter<"Vegetable"> | number
    name?: StringFilter<"Vegetable"> | string
    import?: IntFilter<"Vegetable"> | number
    export?: IntFilter<"Vegetable"> | number
    price?: FloatFilter<"Vegetable"> | number
    sale?: SaleListRelationFilter
    garden?: XOR<GardenScalarRelationFilter, GardenWhereInput>
  }, "id">

  export type VegetableOrderByWithAggregationInput = {
    id?: SortOrder
    gardenid?: SortOrder
    name?: SortOrder
    import?: SortOrder
    export?: SortOrder
    price?: SortOrder
    _count?: VegetableCountOrderByAggregateInput
    _avg?: VegetableAvgOrderByAggregateInput
    _max?: VegetableMaxOrderByAggregateInput
    _min?: VegetableMinOrderByAggregateInput
    _sum?: VegetableSumOrderByAggregateInput
  }

  export type VegetableScalarWhereWithAggregatesInput = {
    AND?: VegetableScalarWhereWithAggregatesInput | VegetableScalarWhereWithAggregatesInput[]
    OR?: VegetableScalarWhereWithAggregatesInput[]
    NOT?: VegetableScalarWhereWithAggregatesInput | VegetableScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vegetable"> | number
    gardenid?: IntWithAggregatesFilter<"Vegetable"> | number
    name?: StringWithAggregatesFilter<"Vegetable"> | string
    import?: IntWithAggregatesFilter<"Vegetable"> | number
    export?: IntWithAggregatesFilter<"Vegetable"> | number
    price?: FloatWithAggregatesFilter<"Vegetable"> | number
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: IntFilter<"Sale"> | number
    vegetableid?: IntFilter<"Sale"> | number
    gardenid?: IntFilter<"Sale"> | number
    time?: DateTimeNullableFilter<"Sale"> | Date | string | null
    quantity?: IntFilter<"Sale"> | number
    total?: IntFilter<"Sale"> | number
    garden?: XOR<GardenScalarRelationFilter, GardenWhereInput>
    vegetable?: XOR<VegetableScalarRelationFilter, VegetableWhereInput>
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    vegetableid?: SortOrder
    gardenid?: SortOrder
    time?: SortOrderInput | SortOrder
    quantity?: SortOrder
    total?: SortOrder
    garden?: GardenOrderByWithRelationInput
    vegetable?: VegetableOrderByWithRelationInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    vegetableid?: IntFilter<"Sale"> | number
    gardenid?: IntFilter<"Sale"> | number
    time?: DateTimeNullableFilter<"Sale"> | Date | string | null
    quantity?: IntFilter<"Sale"> | number
    total?: IntFilter<"Sale"> | number
    garden?: XOR<GardenScalarRelationFilter, GardenWhereInput>
    vegetable?: XOR<VegetableScalarRelationFilter, VegetableWhereInput>
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    vegetableid?: SortOrder
    gardenid?: SortOrder
    time?: SortOrderInput | SortOrder
    quantity?: SortOrder
    total?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sale"> | number
    vegetableid?: IntWithAggregatesFilter<"Sale"> | number
    gardenid?: IntWithAggregatesFilter<"Sale"> | number
    time?: DateTimeNullableWithAggregatesFilter<"Sale"> | Date | string | null
    quantity?: IntWithAggregatesFilter<"Sale"> | number
    total?: IntWithAggregatesFilter<"Sale"> | number
  }

  export type SensorDataWhereInput = {
    AND?: SensorDataWhereInput | SensorDataWhereInput[]
    OR?: SensorDataWhereInput[]
    NOT?: SensorDataWhereInput | SensorDataWhereInput[]
    id?: IntFilter<"SensorData"> | number
    gardenid?: IntFilter<"SensorData"> | number
    humidity?: FloatFilter<"SensorData"> | number
    temperature?: FloatFilter<"SensorData"> | number
    time?: DateTimeFilter<"SensorData"> | Date | string
    garden?: XOR<GardenScalarRelationFilter, GardenWhereInput>
  }

  export type SensorDataOrderByWithRelationInput = {
    id?: SortOrder
    gardenid?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    time?: SortOrder
    garden?: GardenOrderByWithRelationInput
  }

  export type SensorDataWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SensorDataWhereInput | SensorDataWhereInput[]
    OR?: SensorDataWhereInput[]
    NOT?: SensorDataWhereInput | SensorDataWhereInput[]
    gardenid?: IntFilter<"SensorData"> | number
    humidity?: FloatFilter<"SensorData"> | number
    temperature?: FloatFilter<"SensorData"> | number
    time?: DateTimeFilter<"SensorData"> | Date | string
    garden?: XOR<GardenScalarRelationFilter, GardenWhereInput>
  }, "id">

  export type SensorDataOrderByWithAggregationInput = {
    id?: SortOrder
    gardenid?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    time?: SortOrder
    _count?: SensorDataCountOrderByAggregateInput
    _avg?: SensorDataAvgOrderByAggregateInput
    _max?: SensorDataMaxOrderByAggregateInput
    _min?: SensorDataMinOrderByAggregateInput
    _sum?: SensorDataSumOrderByAggregateInput
  }

  export type SensorDataScalarWhereWithAggregatesInput = {
    AND?: SensorDataScalarWhereWithAggregatesInput | SensorDataScalarWhereWithAggregatesInput[]
    OR?: SensorDataScalarWhereWithAggregatesInput[]
    NOT?: SensorDataScalarWhereWithAggregatesInput | SensorDataScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SensorData"> | number
    gardenid?: IntWithAggregatesFilter<"SensorData"> | number
    humidity?: FloatWithAggregatesFilter<"SensorData"> | number
    temperature?: FloatWithAggregatesFilter<"SensorData"> | number
    time?: DateTimeWithAggregatesFilter<"SensorData"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    role?: string | null
    garden?: GardenCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string | null
    garden?: GardenUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    garden?: GardenUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    garden?: GardenUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GardenCreateInput = {
    name: string
    user: UserCreateNestedOneWithoutGardenInput
    sale?: SaleCreateNestedManyWithoutGardenInput
    sensorData?: SensorDataCreateNestedManyWithoutGardenInput
    vegetable?: VegetableCreateNestedManyWithoutGardenInput
  }

  export type GardenUncheckedCreateInput = {
    id?: number
    userid: number
    name: string
    sale?: SaleUncheckedCreateNestedManyWithoutGardenInput
    sensorData?: SensorDataUncheckedCreateNestedManyWithoutGardenInput
    vegetable?: VegetableUncheckedCreateNestedManyWithoutGardenInput
  }

  export type GardenUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGardenNestedInput
    sale?: SaleUpdateManyWithoutGardenNestedInput
    sensorData?: SensorDataUpdateManyWithoutGardenNestedInput
    vegetable?: VegetableUpdateManyWithoutGardenNestedInput
  }

  export type GardenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sale?: SaleUncheckedUpdateManyWithoutGardenNestedInput
    sensorData?: SensorDataUncheckedUpdateManyWithoutGardenNestedInput
    vegetable?: VegetableUncheckedUpdateManyWithoutGardenNestedInput
  }

  export type GardenCreateManyInput = {
    id?: number
    userid: number
    name: string
  }

  export type GardenUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GardenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VegetableCreateInput = {
    name: string
    import: number
    export: number
    price: number
    sale?: SaleCreateNestedManyWithoutVegetableInput
    garden: GardenCreateNestedOneWithoutVegetableInput
  }

  export type VegetableUncheckedCreateInput = {
    id?: number
    gardenid: number
    name: string
    import: number
    export: number
    price: number
    sale?: SaleUncheckedCreateNestedManyWithoutVegetableInput
  }

  export type VegetableUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    import?: IntFieldUpdateOperationsInput | number
    export?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    sale?: SaleUpdateManyWithoutVegetableNestedInput
    garden?: GardenUpdateOneRequiredWithoutVegetableNestedInput
  }

  export type VegetableUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gardenid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    import?: IntFieldUpdateOperationsInput | number
    export?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    sale?: SaleUncheckedUpdateManyWithoutVegetableNestedInput
  }

  export type VegetableCreateManyInput = {
    id?: number
    gardenid: number
    name: string
    import: number
    export: number
    price: number
  }

  export type VegetableUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    import?: IntFieldUpdateOperationsInput | number
    export?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type VegetableUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gardenid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    import?: IntFieldUpdateOperationsInput | number
    export?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type SaleCreateInput = {
    time?: Date | string | null
    quantity: number
    total: number
    garden: GardenCreateNestedOneWithoutSaleInput
    vegetable: VegetableCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id?: number
    vegetableid: number
    gardenid: number
    time?: Date | string | null
    quantity: number
    total: number
  }

  export type SaleUpdateInput = {
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    garden?: GardenUpdateOneRequiredWithoutSaleNestedInput
    vegetable?: VegetableUpdateOneRequiredWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    vegetableid?: IntFieldUpdateOperationsInput | number
    gardenid?: IntFieldUpdateOperationsInput | number
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type SaleCreateManyInput = {
    id?: number
    vegetableid: number
    gardenid: number
    time?: Date | string | null
    quantity: number
    total: number
  }

  export type SaleUpdateManyMutationInput = {
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    vegetableid?: IntFieldUpdateOperationsInput | number
    gardenid?: IntFieldUpdateOperationsInput | number
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type SensorDataCreateInput = {
    humidity: number
    temperature: number
    time: Date | string
    garden: GardenCreateNestedOneWithoutSensorDataInput
  }

  export type SensorDataUncheckedCreateInput = {
    id?: number
    gardenid: number
    humidity: number
    temperature: number
    time: Date | string
  }

  export type SensorDataUpdateInput = {
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    garden?: GardenUpdateOneRequiredWithoutSensorDataNestedInput
  }

  export type SensorDataUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gardenid?: IntFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorDataCreateManyInput = {
    id?: number
    gardenid: number
    humidity: number
    temperature: number
    time: Date | string
  }

  export type SensorDataUpdateManyMutationInput = {
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorDataUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gardenid?: IntFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type GardenListRelationFilter = {
    every?: GardenWhereInput
    some?: GardenWhereInput
    none?: GardenWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GardenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type SensorDataListRelationFilter = {
    every?: SensorDataWhereInput
    some?: SensorDataWhereInput
    none?: SensorDataWhereInput
  }

  export type VegetableListRelationFilter = {
    every?: VegetableWhereInput
    some?: VegetableWhereInput
    none?: VegetableWhereInput
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SensorDataOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VegetableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GardenCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    name?: SortOrder
  }

  export type GardenAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type GardenMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    name?: SortOrder
  }

  export type GardenMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    name?: SortOrder
  }

  export type GardenSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type GardenScalarRelationFilter = {
    is?: GardenWhereInput
    isNot?: GardenWhereInput
  }

  export type VegetableCountOrderByAggregateInput = {
    id?: SortOrder
    gardenid?: SortOrder
    name?: SortOrder
    import?: SortOrder
    export?: SortOrder
    price?: SortOrder
  }

  export type VegetableAvgOrderByAggregateInput = {
    id?: SortOrder
    gardenid?: SortOrder
    import?: SortOrder
    export?: SortOrder
    price?: SortOrder
  }

  export type VegetableMaxOrderByAggregateInput = {
    id?: SortOrder
    gardenid?: SortOrder
    name?: SortOrder
    import?: SortOrder
    export?: SortOrder
    price?: SortOrder
  }

  export type VegetableMinOrderByAggregateInput = {
    id?: SortOrder
    gardenid?: SortOrder
    name?: SortOrder
    import?: SortOrder
    export?: SortOrder
    price?: SortOrder
  }

  export type VegetableSumOrderByAggregateInput = {
    id?: SortOrder
    gardenid?: SortOrder
    import?: SortOrder
    export?: SortOrder
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VegetableScalarRelationFilter = {
    is?: VegetableWhereInput
    isNot?: VegetableWhereInput
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    vegetableid?: SortOrder
    gardenid?: SortOrder
    time?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    id?: SortOrder
    vegetableid?: SortOrder
    gardenid?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    vegetableid?: SortOrder
    gardenid?: SortOrder
    time?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    vegetableid?: SortOrder
    gardenid?: SortOrder
    time?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    id?: SortOrder
    vegetableid?: SortOrder
    gardenid?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SensorDataCountOrderByAggregateInput = {
    id?: SortOrder
    gardenid?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    time?: SortOrder
  }

  export type SensorDataAvgOrderByAggregateInput = {
    id?: SortOrder
    gardenid?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
  }

  export type SensorDataMaxOrderByAggregateInput = {
    id?: SortOrder
    gardenid?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    time?: SortOrder
  }

  export type SensorDataMinOrderByAggregateInput = {
    id?: SortOrder
    gardenid?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
    time?: SortOrder
  }

  export type SensorDataSumOrderByAggregateInput = {
    id?: SortOrder
    gardenid?: SortOrder
    humidity?: SortOrder
    temperature?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GardenCreateNestedManyWithoutUserInput = {
    create?: XOR<GardenCreateWithoutUserInput, GardenUncheckedCreateWithoutUserInput> | GardenCreateWithoutUserInput[] | GardenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GardenCreateOrConnectWithoutUserInput | GardenCreateOrConnectWithoutUserInput[]
    createMany?: GardenCreateManyUserInputEnvelope
    connect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
  }

  export type GardenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<GardenCreateWithoutUserInput, GardenUncheckedCreateWithoutUserInput> | GardenCreateWithoutUserInput[] | GardenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GardenCreateOrConnectWithoutUserInput | GardenCreateOrConnectWithoutUserInput[]
    createMany?: GardenCreateManyUserInputEnvelope
    connect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GardenUpdateManyWithoutUserNestedInput = {
    create?: XOR<GardenCreateWithoutUserInput, GardenUncheckedCreateWithoutUserInput> | GardenCreateWithoutUserInput[] | GardenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GardenCreateOrConnectWithoutUserInput | GardenCreateOrConnectWithoutUserInput[]
    upsert?: GardenUpsertWithWhereUniqueWithoutUserInput | GardenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GardenCreateManyUserInputEnvelope
    set?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    disconnect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    delete?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    connect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    update?: GardenUpdateWithWhereUniqueWithoutUserInput | GardenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GardenUpdateManyWithWhereWithoutUserInput | GardenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GardenScalarWhereInput | GardenScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GardenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<GardenCreateWithoutUserInput, GardenUncheckedCreateWithoutUserInput> | GardenCreateWithoutUserInput[] | GardenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: GardenCreateOrConnectWithoutUserInput | GardenCreateOrConnectWithoutUserInput[]
    upsert?: GardenUpsertWithWhereUniqueWithoutUserInput | GardenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: GardenCreateManyUserInputEnvelope
    set?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    disconnect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    delete?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    connect?: GardenWhereUniqueInput | GardenWhereUniqueInput[]
    update?: GardenUpdateWithWhereUniqueWithoutUserInput | GardenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: GardenUpdateManyWithWhereWithoutUserInput | GardenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: GardenScalarWhereInput | GardenScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutGardenInput = {
    create?: XOR<UserCreateWithoutGardenInput, UserUncheckedCreateWithoutGardenInput>
    connectOrCreate?: UserCreateOrConnectWithoutGardenInput
    connect?: UserWhereUniqueInput
  }

  export type SaleCreateNestedManyWithoutGardenInput = {
    create?: XOR<SaleCreateWithoutGardenInput, SaleUncheckedCreateWithoutGardenInput> | SaleCreateWithoutGardenInput[] | SaleUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutGardenInput | SaleCreateOrConnectWithoutGardenInput[]
    createMany?: SaleCreateManyGardenInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SensorDataCreateNestedManyWithoutGardenInput = {
    create?: XOR<SensorDataCreateWithoutGardenInput, SensorDataUncheckedCreateWithoutGardenInput> | SensorDataCreateWithoutGardenInput[] | SensorDataUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: SensorDataCreateOrConnectWithoutGardenInput | SensorDataCreateOrConnectWithoutGardenInput[]
    createMany?: SensorDataCreateManyGardenInputEnvelope
    connect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
  }

  export type VegetableCreateNestedManyWithoutGardenInput = {
    create?: XOR<VegetableCreateWithoutGardenInput, VegetableUncheckedCreateWithoutGardenInput> | VegetableCreateWithoutGardenInput[] | VegetableUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: VegetableCreateOrConnectWithoutGardenInput | VegetableCreateOrConnectWithoutGardenInput[]
    createMany?: VegetableCreateManyGardenInputEnvelope
    connect?: VegetableWhereUniqueInput | VegetableWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutGardenInput = {
    create?: XOR<SaleCreateWithoutGardenInput, SaleUncheckedCreateWithoutGardenInput> | SaleCreateWithoutGardenInput[] | SaleUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutGardenInput | SaleCreateOrConnectWithoutGardenInput[]
    createMany?: SaleCreateManyGardenInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SensorDataUncheckedCreateNestedManyWithoutGardenInput = {
    create?: XOR<SensorDataCreateWithoutGardenInput, SensorDataUncheckedCreateWithoutGardenInput> | SensorDataCreateWithoutGardenInput[] | SensorDataUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: SensorDataCreateOrConnectWithoutGardenInput | SensorDataCreateOrConnectWithoutGardenInput[]
    createMany?: SensorDataCreateManyGardenInputEnvelope
    connect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
  }

  export type VegetableUncheckedCreateNestedManyWithoutGardenInput = {
    create?: XOR<VegetableCreateWithoutGardenInput, VegetableUncheckedCreateWithoutGardenInput> | VegetableCreateWithoutGardenInput[] | VegetableUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: VegetableCreateOrConnectWithoutGardenInput | VegetableCreateOrConnectWithoutGardenInput[]
    createMany?: VegetableCreateManyGardenInputEnvelope
    connect?: VegetableWhereUniqueInput | VegetableWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutGardenNestedInput = {
    create?: XOR<UserCreateWithoutGardenInput, UserUncheckedCreateWithoutGardenInput>
    connectOrCreate?: UserCreateOrConnectWithoutGardenInput
    upsert?: UserUpsertWithoutGardenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGardenInput, UserUpdateWithoutGardenInput>, UserUncheckedUpdateWithoutGardenInput>
  }

  export type SaleUpdateManyWithoutGardenNestedInput = {
    create?: XOR<SaleCreateWithoutGardenInput, SaleUncheckedCreateWithoutGardenInput> | SaleCreateWithoutGardenInput[] | SaleUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutGardenInput | SaleCreateOrConnectWithoutGardenInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutGardenInput | SaleUpsertWithWhereUniqueWithoutGardenInput[]
    createMany?: SaleCreateManyGardenInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutGardenInput | SaleUpdateWithWhereUniqueWithoutGardenInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutGardenInput | SaleUpdateManyWithWhereWithoutGardenInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SensorDataUpdateManyWithoutGardenNestedInput = {
    create?: XOR<SensorDataCreateWithoutGardenInput, SensorDataUncheckedCreateWithoutGardenInput> | SensorDataCreateWithoutGardenInput[] | SensorDataUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: SensorDataCreateOrConnectWithoutGardenInput | SensorDataCreateOrConnectWithoutGardenInput[]
    upsert?: SensorDataUpsertWithWhereUniqueWithoutGardenInput | SensorDataUpsertWithWhereUniqueWithoutGardenInput[]
    createMany?: SensorDataCreateManyGardenInputEnvelope
    set?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    disconnect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    delete?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    connect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    update?: SensorDataUpdateWithWhereUniqueWithoutGardenInput | SensorDataUpdateWithWhereUniqueWithoutGardenInput[]
    updateMany?: SensorDataUpdateManyWithWhereWithoutGardenInput | SensorDataUpdateManyWithWhereWithoutGardenInput[]
    deleteMany?: SensorDataScalarWhereInput | SensorDataScalarWhereInput[]
  }

  export type VegetableUpdateManyWithoutGardenNestedInput = {
    create?: XOR<VegetableCreateWithoutGardenInput, VegetableUncheckedCreateWithoutGardenInput> | VegetableCreateWithoutGardenInput[] | VegetableUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: VegetableCreateOrConnectWithoutGardenInput | VegetableCreateOrConnectWithoutGardenInput[]
    upsert?: VegetableUpsertWithWhereUniqueWithoutGardenInput | VegetableUpsertWithWhereUniqueWithoutGardenInput[]
    createMany?: VegetableCreateManyGardenInputEnvelope
    set?: VegetableWhereUniqueInput | VegetableWhereUniqueInput[]
    disconnect?: VegetableWhereUniqueInput | VegetableWhereUniqueInput[]
    delete?: VegetableWhereUniqueInput | VegetableWhereUniqueInput[]
    connect?: VegetableWhereUniqueInput | VegetableWhereUniqueInput[]
    update?: VegetableUpdateWithWhereUniqueWithoutGardenInput | VegetableUpdateWithWhereUniqueWithoutGardenInput[]
    updateMany?: VegetableUpdateManyWithWhereWithoutGardenInput | VegetableUpdateManyWithWhereWithoutGardenInput[]
    deleteMany?: VegetableScalarWhereInput | VegetableScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutGardenNestedInput = {
    create?: XOR<SaleCreateWithoutGardenInput, SaleUncheckedCreateWithoutGardenInput> | SaleCreateWithoutGardenInput[] | SaleUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutGardenInput | SaleCreateOrConnectWithoutGardenInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutGardenInput | SaleUpsertWithWhereUniqueWithoutGardenInput[]
    createMany?: SaleCreateManyGardenInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutGardenInput | SaleUpdateWithWhereUniqueWithoutGardenInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutGardenInput | SaleUpdateManyWithWhereWithoutGardenInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SensorDataUncheckedUpdateManyWithoutGardenNestedInput = {
    create?: XOR<SensorDataCreateWithoutGardenInput, SensorDataUncheckedCreateWithoutGardenInput> | SensorDataCreateWithoutGardenInput[] | SensorDataUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: SensorDataCreateOrConnectWithoutGardenInput | SensorDataCreateOrConnectWithoutGardenInput[]
    upsert?: SensorDataUpsertWithWhereUniqueWithoutGardenInput | SensorDataUpsertWithWhereUniqueWithoutGardenInput[]
    createMany?: SensorDataCreateManyGardenInputEnvelope
    set?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    disconnect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    delete?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    connect?: SensorDataWhereUniqueInput | SensorDataWhereUniqueInput[]
    update?: SensorDataUpdateWithWhereUniqueWithoutGardenInput | SensorDataUpdateWithWhereUniqueWithoutGardenInput[]
    updateMany?: SensorDataUpdateManyWithWhereWithoutGardenInput | SensorDataUpdateManyWithWhereWithoutGardenInput[]
    deleteMany?: SensorDataScalarWhereInput | SensorDataScalarWhereInput[]
  }

  export type VegetableUncheckedUpdateManyWithoutGardenNestedInput = {
    create?: XOR<VegetableCreateWithoutGardenInput, VegetableUncheckedCreateWithoutGardenInput> | VegetableCreateWithoutGardenInput[] | VegetableUncheckedCreateWithoutGardenInput[]
    connectOrCreate?: VegetableCreateOrConnectWithoutGardenInput | VegetableCreateOrConnectWithoutGardenInput[]
    upsert?: VegetableUpsertWithWhereUniqueWithoutGardenInput | VegetableUpsertWithWhereUniqueWithoutGardenInput[]
    createMany?: VegetableCreateManyGardenInputEnvelope
    set?: VegetableWhereUniqueInput | VegetableWhereUniqueInput[]
    disconnect?: VegetableWhereUniqueInput | VegetableWhereUniqueInput[]
    delete?: VegetableWhereUniqueInput | VegetableWhereUniqueInput[]
    connect?: VegetableWhereUniqueInput | VegetableWhereUniqueInput[]
    update?: VegetableUpdateWithWhereUniqueWithoutGardenInput | VegetableUpdateWithWhereUniqueWithoutGardenInput[]
    updateMany?: VegetableUpdateManyWithWhereWithoutGardenInput | VegetableUpdateManyWithWhereWithoutGardenInput[]
    deleteMany?: VegetableScalarWhereInput | VegetableScalarWhereInput[]
  }

  export type SaleCreateNestedManyWithoutVegetableInput = {
    create?: XOR<SaleCreateWithoutVegetableInput, SaleUncheckedCreateWithoutVegetableInput> | SaleCreateWithoutVegetableInput[] | SaleUncheckedCreateWithoutVegetableInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutVegetableInput | SaleCreateOrConnectWithoutVegetableInput[]
    createMany?: SaleCreateManyVegetableInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type GardenCreateNestedOneWithoutVegetableInput = {
    create?: XOR<GardenCreateWithoutVegetableInput, GardenUncheckedCreateWithoutVegetableInput>
    connectOrCreate?: GardenCreateOrConnectWithoutVegetableInput
    connect?: GardenWhereUniqueInput
  }

  export type SaleUncheckedCreateNestedManyWithoutVegetableInput = {
    create?: XOR<SaleCreateWithoutVegetableInput, SaleUncheckedCreateWithoutVegetableInput> | SaleCreateWithoutVegetableInput[] | SaleUncheckedCreateWithoutVegetableInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutVegetableInput | SaleCreateOrConnectWithoutVegetableInput[]
    createMany?: SaleCreateManyVegetableInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SaleUpdateManyWithoutVegetableNestedInput = {
    create?: XOR<SaleCreateWithoutVegetableInput, SaleUncheckedCreateWithoutVegetableInput> | SaleCreateWithoutVegetableInput[] | SaleUncheckedCreateWithoutVegetableInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutVegetableInput | SaleCreateOrConnectWithoutVegetableInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutVegetableInput | SaleUpsertWithWhereUniqueWithoutVegetableInput[]
    createMany?: SaleCreateManyVegetableInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutVegetableInput | SaleUpdateWithWhereUniqueWithoutVegetableInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutVegetableInput | SaleUpdateManyWithWhereWithoutVegetableInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type GardenUpdateOneRequiredWithoutVegetableNestedInput = {
    create?: XOR<GardenCreateWithoutVegetableInput, GardenUncheckedCreateWithoutVegetableInput>
    connectOrCreate?: GardenCreateOrConnectWithoutVegetableInput
    upsert?: GardenUpsertWithoutVegetableInput
    connect?: GardenWhereUniqueInput
    update?: XOR<XOR<GardenUpdateToOneWithWhereWithoutVegetableInput, GardenUpdateWithoutVegetableInput>, GardenUncheckedUpdateWithoutVegetableInput>
  }

  export type SaleUncheckedUpdateManyWithoutVegetableNestedInput = {
    create?: XOR<SaleCreateWithoutVegetableInput, SaleUncheckedCreateWithoutVegetableInput> | SaleCreateWithoutVegetableInput[] | SaleUncheckedCreateWithoutVegetableInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutVegetableInput | SaleCreateOrConnectWithoutVegetableInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutVegetableInput | SaleUpsertWithWhereUniqueWithoutVegetableInput[]
    createMany?: SaleCreateManyVegetableInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutVegetableInput | SaleUpdateWithWhereUniqueWithoutVegetableInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutVegetableInput | SaleUpdateManyWithWhereWithoutVegetableInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type GardenCreateNestedOneWithoutSaleInput = {
    create?: XOR<GardenCreateWithoutSaleInput, GardenUncheckedCreateWithoutSaleInput>
    connectOrCreate?: GardenCreateOrConnectWithoutSaleInput
    connect?: GardenWhereUniqueInput
  }

  export type VegetableCreateNestedOneWithoutSaleInput = {
    create?: XOR<VegetableCreateWithoutSaleInput, VegetableUncheckedCreateWithoutSaleInput>
    connectOrCreate?: VegetableCreateOrConnectWithoutSaleInput
    connect?: VegetableWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type GardenUpdateOneRequiredWithoutSaleNestedInput = {
    create?: XOR<GardenCreateWithoutSaleInput, GardenUncheckedCreateWithoutSaleInput>
    connectOrCreate?: GardenCreateOrConnectWithoutSaleInput
    upsert?: GardenUpsertWithoutSaleInput
    connect?: GardenWhereUniqueInput
    update?: XOR<XOR<GardenUpdateToOneWithWhereWithoutSaleInput, GardenUpdateWithoutSaleInput>, GardenUncheckedUpdateWithoutSaleInput>
  }

  export type VegetableUpdateOneRequiredWithoutSaleNestedInput = {
    create?: XOR<VegetableCreateWithoutSaleInput, VegetableUncheckedCreateWithoutSaleInput>
    connectOrCreate?: VegetableCreateOrConnectWithoutSaleInput
    upsert?: VegetableUpsertWithoutSaleInput
    connect?: VegetableWhereUniqueInput
    update?: XOR<XOR<VegetableUpdateToOneWithWhereWithoutSaleInput, VegetableUpdateWithoutSaleInput>, VegetableUncheckedUpdateWithoutSaleInput>
  }

  export type GardenCreateNestedOneWithoutSensorDataInput = {
    create?: XOR<GardenCreateWithoutSensorDataInput, GardenUncheckedCreateWithoutSensorDataInput>
    connectOrCreate?: GardenCreateOrConnectWithoutSensorDataInput
    connect?: GardenWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GardenUpdateOneRequiredWithoutSensorDataNestedInput = {
    create?: XOR<GardenCreateWithoutSensorDataInput, GardenUncheckedCreateWithoutSensorDataInput>
    connectOrCreate?: GardenCreateOrConnectWithoutSensorDataInput
    upsert?: GardenUpsertWithoutSensorDataInput
    connect?: GardenWhereUniqueInput
    update?: XOR<XOR<GardenUpdateToOneWithWhereWithoutSensorDataInput, GardenUpdateWithoutSensorDataInput>, GardenUncheckedUpdateWithoutSensorDataInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GardenCreateWithoutUserInput = {
    name: string
    sale?: SaleCreateNestedManyWithoutGardenInput
    sensorData?: SensorDataCreateNestedManyWithoutGardenInput
    vegetable?: VegetableCreateNestedManyWithoutGardenInput
  }

  export type GardenUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    sale?: SaleUncheckedCreateNestedManyWithoutGardenInput
    sensorData?: SensorDataUncheckedCreateNestedManyWithoutGardenInput
    vegetable?: VegetableUncheckedCreateNestedManyWithoutGardenInput
  }

  export type GardenCreateOrConnectWithoutUserInput = {
    where: GardenWhereUniqueInput
    create: XOR<GardenCreateWithoutUserInput, GardenUncheckedCreateWithoutUserInput>
  }

  export type GardenCreateManyUserInputEnvelope = {
    data: GardenCreateManyUserInput | GardenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type GardenUpsertWithWhereUniqueWithoutUserInput = {
    where: GardenWhereUniqueInput
    update: XOR<GardenUpdateWithoutUserInput, GardenUncheckedUpdateWithoutUserInput>
    create: XOR<GardenCreateWithoutUserInput, GardenUncheckedCreateWithoutUserInput>
  }

  export type GardenUpdateWithWhereUniqueWithoutUserInput = {
    where: GardenWhereUniqueInput
    data: XOR<GardenUpdateWithoutUserInput, GardenUncheckedUpdateWithoutUserInput>
  }

  export type GardenUpdateManyWithWhereWithoutUserInput = {
    where: GardenScalarWhereInput
    data: XOR<GardenUpdateManyMutationInput, GardenUncheckedUpdateManyWithoutUserInput>
  }

  export type GardenScalarWhereInput = {
    AND?: GardenScalarWhereInput | GardenScalarWhereInput[]
    OR?: GardenScalarWhereInput[]
    NOT?: GardenScalarWhereInput | GardenScalarWhereInput[]
    id?: IntFilter<"Garden"> | number
    userid?: IntFilter<"Garden"> | number
    name?: StringFilter<"Garden"> | string
  }

  export type UserCreateWithoutGardenInput = {
    name: string
    email: string
    password: string
    role?: string | null
  }

  export type UserUncheckedCreateWithoutGardenInput = {
    id?: number
    name: string
    email: string
    password: string
    role?: string | null
  }

  export type UserCreateOrConnectWithoutGardenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGardenInput, UserUncheckedCreateWithoutGardenInput>
  }

  export type SaleCreateWithoutGardenInput = {
    time?: Date | string | null
    quantity: number
    total: number
    vegetable: VegetableCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutGardenInput = {
    id?: number
    vegetableid: number
    time?: Date | string | null
    quantity: number
    total: number
  }

  export type SaleCreateOrConnectWithoutGardenInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutGardenInput, SaleUncheckedCreateWithoutGardenInput>
  }

  export type SaleCreateManyGardenInputEnvelope = {
    data: SaleCreateManyGardenInput | SaleCreateManyGardenInput[]
    skipDuplicates?: boolean
  }

  export type SensorDataCreateWithoutGardenInput = {
    humidity: number
    temperature: number
    time: Date | string
  }

  export type SensorDataUncheckedCreateWithoutGardenInput = {
    id?: number
    humidity: number
    temperature: number
    time: Date | string
  }

  export type SensorDataCreateOrConnectWithoutGardenInput = {
    where: SensorDataWhereUniqueInput
    create: XOR<SensorDataCreateWithoutGardenInput, SensorDataUncheckedCreateWithoutGardenInput>
  }

  export type SensorDataCreateManyGardenInputEnvelope = {
    data: SensorDataCreateManyGardenInput | SensorDataCreateManyGardenInput[]
    skipDuplicates?: boolean
  }

  export type VegetableCreateWithoutGardenInput = {
    name: string
    import: number
    export: number
    price: number
    sale?: SaleCreateNestedManyWithoutVegetableInput
  }

  export type VegetableUncheckedCreateWithoutGardenInput = {
    id?: number
    name: string
    import: number
    export: number
    price: number
    sale?: SaleUncheckedCreateNestedManyWithoutVegetableInput
  }

  export type VegetableCreateOrConnectWithoutGardenInput = {
    where: VegetableWhereUniqueInput
    create: XOR<VegetableCreateWithoutGardenInput, VegetableUncheckedCreateWithoutGardenInput>
  }

  export type VegetableCreateManyGardenInputEnvelope = {
    data: VegetableCreateManyGardenInput | VegetableCreateManyGardenInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGardenInput = {
    update: XOR<UserUpdateWithoutGardenInput, UserUncheckedUpdateWithoutGardenInput>
    create: XOR<UserCreateWithoutGardenInput, UserUncheckedCreateWithoutGardenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGardenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGardenInput, UserUncheckedUpdateWithoutGardenInput>
  }

  export type UserUpdateWithoutGardenInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutGardenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SaleUpsertWithWhereUniqueWithoutGardenInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutGardenInput, SaleUncheckedUpdateWithoutGardenInput>
    create: XOR<SaleCreateWithoutGardenInput, SaleUncheckedCreateWithoutGardenInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutGardenInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutGardenInput, SaleUncheckedUpdateWithoutGardenInput>
  }

  export type SaleUpdateManyWithWhereWithoutGardenInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutGardenInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: IntFilter<"Sale"> | number
    vegetableid?: IntFilter<"Sale"> | number
    gardenid?: IntFilter<"Sale"> | number
    time?: DateTimeNullableFilter<"Sale"> | Date | string | null
    quantity?: IntFilter<"Sale"> | number
    total?: IntFilter<"Sale"> | number
  }

  export type SensorDataUpsertWithWhereUniqueWithoutGardenInput = {
    where: SensorDataWhereUniqueInput
    update: XOR<SensorDataUpdateWithoutGardenInput, SensorDataUncheckedUpdateWithoutGardenInput>
    create: XOR<SensorDataCreateWithoutGardenInput, SensorDataUncheckedCreateWithoutGardenInput>
  }

  export type SensorDataUpdateWithWhereUniqueWithoutGardenInput = {
    where: SensorDataWhereUniqueInput
    data: XOR<SensorDataUpdateWithoutGardenInput, SensorDataUncheckedUpdateWithoutGardenInput>
  }

  export type SensorDataUpdateManyWithWhereWithoutGardenInput = {
    where: SensorDataScalarWhereInput
    data: XOR<SensorDataUpdateManyMutationInput, SensorDataUncheckedUpdateManyWithoutGardenInput>
  }

  export type SensorDataScalarWhereInput = {
    AND?: SensorDataScalarWhereInput | SensorDataScalarWhereInput[]
    OR?: SensorDataScalarWhereInput[]
    NOT?: SensorDataScalarWhereInput | SensorDataScalarWhereInput[]
    id?: IntFilter<"SensorData"> | number
    gardenid?: IntFilter<"SensorData"> | number
    humidity?: FloatFilter<"SensorData"> | number
    temperature?: FloatFilter<"SensorData"> | number
    time?: DateTimeFilter<"SensorData"> | Date | string
  }

  export type VegetableUpsertWithWhereUniqueWithoutGardenInput = {
    where: VegetableWhereUniqueInput
    update: XOR<VegetableUpdateWithoutGardenInput, VegetableUncheckedUpdateWithoutGardenInput>
    create: XOR<VegetableCreateWithoutGardenInput, VegetableUncheckedCreateWithoutGardenInput>
  }

  export type VegetableUpdateWithWhereUniqueWithoutGardenInput = {
    where: VegetableWhereUniqueInput
    data: XOR<VegetableUpdateWithoutGardenInput, VegetableUncheckedUpdateWithoutGardenInput>
  }

  export type VegetableUpdateManyWithWhereWithoutGardenInput = {
    where: VegetableScalarWhereInput
    data: XOR<VegetableUpdateManyMutationInput, VegetableUncheckedUpdateManyWithoutGardenInput>
  }

  export type VegetableScalarWhereInput = {
    AND?: VegetableScalarWhereInput | VegetableScalarWhereInput[]
    OR?: VegetableScalarWhereInput[]
    NOT?: VegetableScalarWhereInput | VegetableScalarWhereInput[]
    id?: IntFilter<"Vegetable"> | number
    gardenid?: IntFilter<"Vegetable"> | number
    name?: StringFilter<"Vegetable"> | string
    import?: IntFilter<"Vegetable"> | number
    export?: IntFilter<"Vegetable"> | number
    price?: FloatFilter<"Vegetable"> | number
  }

  export type SaleCreateWithoutVegetableInput = {
    time?: Date | string | null
    quantity: number
    total: number
    garden: GardenCreateNestedOneWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutVegetableInput = {
    id?: number
    gardenid: number
    time?: Date | string | null
    quantity: number
    total: number
  }

  export type SaleCreateOrConnectWithoutVegetableInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutVegetableInput, SaleUncheckedCreateWithoutVegetableInput>
  }

  export type SaleCreateManyVegetableInputEnvelope = {
    data: SaleCreateManyVegetableInput | SaleCreateManyVegetableInput[]
    skipDuplicates?: boolean
  }

  export type GardenCreateWithoutVegetableInput = {
    name: string
    user: UserCreateNestedOneWithoutGardenInput
    sale?: SaleCreateNestedManyWithoutGardenInput
    sensorData?: SensorDataCreateNestedManyWithoutGardenInput
  }

  export type GardenUncheckedCreateWithoutVegetableInput = {
    id?: number
    userid: number
    name: string
    sale?: SaleUncheckedCreateNestedManyWithoutGardenInput
    sensorData?: SensorDataUncheckedCreateNestedManyWithoutGardenInput
  }

  export type GardenCreateOrConnectWithoutVegetableInput = {
    where: GardenWhereUniqueInput
    create: XOR<GardenCreateWithoutVegetableInput, GardenUncheckedCreateWithoutVegetableInput>
  }

  export type SaleUpsertWithWhereUniqueWithoutVegetableInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutVegetableInput, SaleUncheckedUpdateWithoutVegetableInput>
    create: XOR<SaleCreateWithoutVegetableInput, SaleUncheckedCreateWithoutVegetableInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutVegetableInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutVegetableInput, SaleUncheckedUpdateWithoutVegetableInput>
  }

  export type SaleUpdateManyWithWhereWithoutVegetableInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutVegetableInput>
  }

  export type GardenUpsertWithoutVegetableInput = {
    update: XOR<GardenUpdateWithoutVegetableInput, GardenUncheckedUpdateWithoutVegetableInput>
    create: XOR<GardenCreateWithoutVegetableInput, GardenUncheckedCreateWithoutVegetableInput>
    where?: GardenWhereInput
  }

  export type GardenUpdateToOneWithWhereWithoutVegetableInput = {
    where?: GardenWhereInput
    data: XOR<GardenUpdateWithoutVegetableInput, GardenUncheckedUpdateWithoutVegetableInput>
  }

  export type GardenUpdateWithoutVegetableInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGardenNestedInput
    sale?: SaleUpdateManyWithoutGardenNestedInput
    sensorData?: SensorDataUpdateManyWithoutGardenNestedInput
  }

  export type GardenUncheckedUpdateWithoutVegetableInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sale?: SaleUncheckedUpdateManyWithoutGardenNestedInput
    sensorData?: SensorDataUncheckedUpdateManyWithoutGardenNestedInput
  }

  export type GardenCreateWithoutSaleInput = {
    name: string
    user: UserCreateNestedOneWithoutGardenInput
    sensorData?: SensorDataCreateNestedManyWithoutGardenInput
    vegetable?: VegetableCreateNestedManyWithoutGardenInput
  }

  export type GardenUncheckedCreateWithoutSaleInput = {
    id?: number
    userid: number
    name: string
    sensorData?: SensorDataUncheckedCreateNestedManyWithoutGardenInput
    vegetable?: VegetableUncheckedCreateNestedManyWithoutGardenInput
  }

  export type GardenCreateOrConnectWithoutSaleInput = {
    where: GardenWhereUniqueInput
    create: XOR<GardenCreateWithoutSaleInput, GardenUncheckedCreateWithoutSaleInput>
  }

  export type VegetableCreateWithoutSaleInput = {
    name: string
    import: number
    export: number
    price: number
    garden: GardenCreateNestedOneWithoutVegetableInput
  }

  export type VegetableUncheckedCreateWithoutSaleInput = {
    id?: number
    gardenid: number
    name: string
    import: number
    export: number
    price: number
  }

  export type VegetableCreateOrConnectWithoutSaleInput = {
    where: VegetableWhereUniqueInput
    create: XOR<VegetableCreateWithoutSaleInput, VegetableUncheckedCreateWithoutSaleInput>
  }

  export type GardenUpsertWithoutSaleInput = {
    update: XOR<GardenUpdateWithoutSaleInput, GardenUncheckedUpdateWithoutSaleInput>
    create: XOR<GardenCreateWithoutSaleInput, GardenUncheckedCreateWithoutSaleInput>
    where?: GardenWhereInput
  }

  export type GardenUpdateToOneWithWhereWithoutSaleInput = {
    where?: GardenWhereInput
    data: XOR<GardenUpdateWithoutSaleInput, GardenUncheckedUpdateWithoutSaleInput>
  }

  export type GardenUpdateWithoutSaleInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGardenNestedInput
    sensorData?: SensorDataUpdateManyWithoutGardenNestedInput
    vegetable?: VegetableUpdateManyWithoutGardenNestedInput
  }

  export type GardenUncheckedUpdateWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sensorData?: SensorDataUncheckedUpdateManyWithoutGardenNestedInput
    vegetable?: VegetableUncheckedUpdateManyWithoutGardenNestedInput
  }

  export type VegetableUpsertWithoutSaleInput = {
    update: XOR<VegetableUpdateWithoutSaleInput, VegetableUncheckedUpdateWithoutSaleInput>
    create: XOR<VegetableCreateWithoutSaleInput, VegetableUncheckedCreateWithoutSaleInput>
    where?: VegetableWhereInput
  }

  export type VegetableUpdateToOneWithWhereWithoutSaleInput = {
    where?: VegetableWhereInput
    data: XOR<VegetableUpdateWithoutSaleInput, VegetableUncheckedUpdateWithoutSaleInput>
  }

  export type VegetableUpdateWithoutSaleInput = {
    name?: StringFieldUpdateOperationsInput | string
    import?: IntFieldUpdateOperationsInput | number
    export?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    garden?: GardenUpdateOneRequiredWithoutVegetableNestedInput
  }

  export type VegetableUncheckedUpdateWithoutSaleInput = {
    id?: IntFieldUpdateOperationsInput | number
    gardenid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    import?: IntFieldUpdateOperationsInput | number
    export?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type GardenCreateWithoutSensorDataInput = {
    name: string
    user: UserCreateNestedOneWithoutGardenInput
    sale?: SaleCreateNestedManyWithoutGardenInput
    vegetable?: VegetableCreateNestedManyWithoutGardenInput
  }

  export type GardenUncheckedCreateWithoutSensorDataInput = {
    id?: number
    userid: number
    name: string
    sale?: SaleUncheckedCreateNestedManyWithoutGardenInput
    vegetable?: VegetableUncheckedCreateNestedManyWithoutGardenInput
  }

  export type GardenCreateOrConnectWithoutSensorDataInput = {
    where: GardenWhereUniqueInput
    create: XOR<GardenCreateWithoutSensorDataInput, GardenUncheckedCreateWithoutSensorDataInput>
  }

  export type GardenUpsertWithoutSensorDataInput = {
    update: XOR<GardenUpdateWithoutSensorDataInput, GardenUncheckedUpdateWithoutSensorDataInput>
    create: XOR<GardenCreateWithoutSensorDataInput, GardenUncheckedCreateWithoutSensorDataInput>
    where?: GardenWhereInput
  }

  export type GardenUpdateToOneWithWhereWithoutSensorDataInput = {
    where?: GardenWhereInput
    data: XOR<GardenUpdateWithoutSensorDataInput, GardenUncheckedUpdateWithoutSensorDataInput>
  }

  export type GardenUpdateWithoutSensorDataInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutGardenNestedInput
    sale?: SaleUpdateManyWithoutGardenNestedInput
    vegetable?: VegetableUpdateManyWithoutGardenNestedInput
  }

  export type GardenUncheckedUpdateWithoutSensorDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sale?: SaleUncheckedUpdateManyWithoutGardenNestedInput
    vegetable?: VegetableUncheckedUpdateManyWithoutGardenNestedInput
  }

  export type GardenCreateManyUserInput = {
    id?: number
    name: string
  }

  export type GardenUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    sale?: SaleUpdateManyWithoutGardenNestedInput
    sensorData?: SensorDataUpdateManyWithoutGardenNestedInput
    vegetable?: VegetableUpdateManyWithoutGardenNestedInput
  }

  export type GardenUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sale?: SaleUncheckedUpdateManyWithoutGardenNestedInput
    sensorData?: SensorDataUncheckedUpdateManyWithoutGardenNestedInput
    vegetable?: VegetableUncheckedUpdateManyWithoutGardenNestedInput
  }

  export type GardenUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SaleCreateManyGardenInput = {
    id?: number
    vegetableid: number
    time?: Date | string | null
    quantity: number
    total: number
  }

  export type SensorDataCreateManyGardenInput = {
    id?: number
    humidity: number
    temperature: number
    time: Date | string
  }

  export type VegetableCreateManyGardenInput = {
    id?: number
    name: string
    import: number
    export: number
    price: number
  }

  export type SaleUpdateWithoutGardenInput = {
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    vegetable?: VegetableUpdateOneRequiredWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutGardenInput = {
    id?: IntFieldUpdateOperationsInput | number
    vegetableid?: IntFieldUpdateOperationsInput | number
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type SaleUncheckedUpdateManyWithoutGardenInput = {
    id?: IntFieldUpdateOperationsInput | number
    vegetableid?: IntFieldUpdateOperationsInput | number
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type SensorDataUpdateWithoutGardenInput = {
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorDataUncheckedUpdateWithoutGardenInput = {
    id?: IntFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SensorDataUncheckedUpdateManyWithoutGardenInput = {
    id?: IntFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    time?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VegetableUpdateWithoutGardenInput = {
    name?: StringFieldUpdateOperationsInput | string
    import?: IntFieldUpdateOperationsInput | number
    export?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    sale?: SaleUpdateManyWithoutVegetableNestedInput
  }

  export type VegetableUncheckedUpdateWithoutGardenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    import?: IntFieldUpdateOperationsInput | number
    export?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    sale?: SaleUncheckedUpdateManyWithoutVegetableNestedInput
  }

  export type VegetableUncheckedUpdateManyWithoutGardenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    import?: IntFieldUpdateOperationsInput | number
    export?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type SaleCreateManyVegetableInput = {
    id?: number
    gardenid: number
    time?: Date | string | null
    quantity: number
    total: number
  }

  export type SaleUpdateWithoutVegetableInput = {
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    garden?: GardenUpdateOneRequiredWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutVegetableInput = {
    id?: IntFieldUpdateOperationsInput | number
    gardenid?: IntFieldUpdateOperationsInput | number
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
  }

  export type SaleUncheckedUpdateManyWithoutVegetableInput = {
    id?: IntFieldUpdateOperationsInput | number
    gardenid?: IntFieldUpdateOperationsInput | number
    time?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
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