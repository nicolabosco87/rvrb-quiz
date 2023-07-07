
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Question
 * 
 */
export type Question = {
  id: number
  createdAt: Date
  question: string
  answer: string
}

/**
 * Model UserInfo
 * 
 */
export type UserInfo = {
  id: string
  userName: string
  createdAt: Date
  updatedAt: Date
}

/**
 * Model CorrectAnswers
 * 
 */
export type CorrectAnswers = {
  id: number
  createdAt: Date
  questionId: number
  userId: string
  responseTime: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Questions
 * const questions = await prisma.question.findMany()
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
   * // Fetch zero or more Questions
   * const questions = await prisma.question.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<GlobalReject>;

  /**
   * `prisma.userInfo`: Exposes CRUD operations for the **UserInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserInfos
    * const userInfos = await prisma.userInfo.findMany()
    * ```
    */
  get userInfo(): Prisma.UserInfoDelegate<GlobalReject>;

  /**
   * `prisma.correctAnswers`: Exposes CRUD operations for the **CorrectAnswers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CorrectAnswers
    * const correctAnswers = await prisma.correctAnswers.findMany()
    * ```
    */
  get correctAnswers(): Prisma.CorrectAnswersDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

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
   * Prisma Client JS version: 4.14.1
   * Query Engine version: d9a4c5988f480fa576d43970d5a23641aa77bc9c
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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

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


  export const ModelName: {
    Question: 'Question',
    UserInfo: 'UserInfo',
    CorrectAnswers: 'CorrectAnswers'
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
   * Count Type QuestionCountOutputType
   */


  export type QuestionCountOutputType = {
    CorrectAnswers: number
  }

  export type QuestionCountOutputTypeSelect = {
    CorrectAnswers?: boolean
  }

  export type QuestionCountOutputTypeGetPayload<S extends boolean | null | undefined | QuestionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? QuestionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (QuestionCountOutputTypeArgs)
    ? QuestionCountOutputType 
    : S extends { select: any } & (QuestionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof QuestionCountOutputType ? QuestionCountOutputType[P] : never
  } 
      : QuestionCountOutputType




  // Custom InputTypes

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect | null
  }



  /**
   * Count Type UserInfoCountOutputType
   */


  export type UserInfoCountOutputType = {
    CorrectAnswers: number
  }

  export type UserInfoCountOutputTypeSelect = {
    CorrectAnswers?: boolean
  }

  export type UserInfoCountOutputTypeGetPayload<S extends boolean | null | undefined | UserInfoCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserInfoCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserInfoCountOutputTypeArgs)
    ? UserInfoCountOutputType 
    : S extends { select: any } & (UserInfoCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserInfoCountOutputType ? UserInfoCountOutputType[P] : never
  } 
      : UserInfoCountOutputType




  // Custom InputTypes

  /**
   * UserInfoCountOutputType without action
   */
  export type UserInfoCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserInfoCountOutputType
     */
    select?: UserInfoCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Question
   */


  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    id: number | null
  }

  export type QuestionSumAggregateOutputType = {
    id: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    question: string | null
    answer: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    question: string | null
    answer: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    createdAt: number
    question: number
    answer: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    id?: true
  }

  export type QuestionSumAggregateInputType = {
    id?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    createdAt?: true
    question?: true
    answer?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    question?: true
    answer?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    createdAt?: true
    question?: true
    answer?: true
    _all?: true
  }

  export type QuestionAggregateArgs = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs = {
    where?: QuestionWhereInput
    orderBy?: Enumerable<QuestionOrderByWithAggregationInput>
    by: QuestionScalarFieldEnum[]
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }


  export type QuestionGroupByOutputType = {
    id: number
    createdAt: Date
    question: string
    answer: string
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect = {
    id?: boolean
    createdAt?: boolean
    question?: boolean
    answer?: boolean
    CorrectAnswers?: boolean | Question$CorrectAnswersArgs
    _count?: boolean | QuestionCountOutputTypeArgs
  }


  export type QuestionInclude = {
    CorrectAnswers?: boolean | Question$CorrectAnswersArgs
    _count?: boolean | QuestionCountOutputTypeArgs
  }

  export type QuestionGetPayload<S extends boolean | null | undefined | QuestionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Question :
    S extends undefined ? never :
    S extends { include: any } & (QuestionArgs | QuestionFindManyArgs)
    ? Question  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'CorrectAnswers' ? Array < CorrectAnswersGetPayload<S['include'][P]>>  :
        P extends '_count' ? QuestionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (QuestionArgs | QuestionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'CorrectAnswers' ? Array < CorrectAnswersGetPayload<S['select'][P]>>  :
        P extends '_count' ? QuestionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Question ? Question[P] : never
  } 
      : Question


  type QuestionCountArgs = 
    Omit<QuestionFindManyArgs, 'select' | 'include'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends QuestionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, QuestionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Question'> extends True ? Prisma__QuestionClient<QuestionGetPayload<T>> : Prisma__QuestionClient<QuestionGetPayload<T> | null, null>

    /**
     * Find one Question that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, QuestionFindUniqueOrThrowArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends QuestionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, QuestionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Question'> extends True ? Prisma__QuestionClient<QuestionGetPayload<T>> : Prisma__QuestionClient<QuestionGetPayload<T> | null, null>

    /**
     * Find the first Question that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, QuestionFindFirstOrThrowArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends QuestionFindManyArgs>(
      args?: SelectSubset<T, QuestionFindManyArgs>
    ): Prisma.PrismaPromise<Array<QuestionGetPayload<T>>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
    **/
    create<T extends QuestionCreateArgs>(
      args: SelectSubset<T, QuestionCreateArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
    **/
    delete<T extends QuestionDeleteArgs>(
      args: SelectSubset<T, QuestionDeleteArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends QuestionUpdateArgs>(
      args: SelectSubset<T, QuestionUpdateArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends QuestionDeleteManyArgs>(
      args?: SelectSubset<T, QuestionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends QuestionUpdateManyArgs>(
      args: SelectSubset<T, QuestionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
    **/
    upsert<T extends QuestionUpsertArgs>(
      args: SelectSubset<T, QuestionUpsertArgs>
    ): Prisma__QuestionClient<QuestionGetPayload<T>>

    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__QuestionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    CorrectAnswers<T extends Question$CorrectAnswersArgs= {}>(args?: Subset<T, Question$CorrectAnswersArgs>): Prisma.PrismaPromise<Array<CorrectAnswersGetPayload<T>>| Null>;

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
   * Question base type for findUnique actions
   */
  export type QuestionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUnique
   */
  export interface QuestionFindUniqueArgs extends QuestionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question base type for findFirst actions
   */
  export type QuestionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }

  /**
   * Question findFirst
   */
  export interface QuestionFindFirstArgs extends QuestionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * Question findMany
   */
  export type QuestionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: Enumerable<QuestionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: Enumerable<QuestionScalarFieldEnum>
  }


  /**
   * Question create
   */
  export type QuestionCreateArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }


  /**
   * Question update
   */
  export type QuestionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }


  /**
   * Question upsert
   */
  export type QuestionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }


  /**
   * Question delete
   */
  export type QuestionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }


  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }


  /**
   * Question.CorrectAnswers
   */
  export type Question$CorrectAnswersArgs = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
    where?: CorrectAnswersWhereInput
    orderBy?: Enumerable<CorrectAnswersOrderByWithRelationInput>
    cursor?: CorrectAnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CorrectAnswersScalarFieldEnum>
  }


  /**
   * Question without action
   */
  export type QuestionArgs = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: QuestionInclude | null
  }



  /**
   * Model UserInfo
   */


  export type AggregateUserInfo = {
    _count: UserInfoCountAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  export type UserInfoMinAggregateOutputType = {
    id: string | null
    userName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserInfoMaxAggregateOutputType = {
    id: string | null
    userName: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserInfoCountAggregateOutputType = {
    id: number
    userName: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserInfoMinAggregateInputType = {
    id?: true
    userName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserInfoMaxAggregateInputType = {
    id?: true
    userName?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserInfoCountAggregateInputType = {
    id?: true
    userName?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserInfoAggregateArgs = {
    /**
     * Filter which UserInfo to aggregate.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: Enumerable<UserInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserInfos
    **/
    _count?: true | UserInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserInfoMaxAggregateInputType
  }

  export type GetUserInfoAggregateType<T extends UserInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateUserInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserInfo[P]>
      : GetScalarType<T[P], AggregateUserInfo[P]>
  }




  export type UserInfoGroupByArgs = {
    where?: UserInfoWhereInput
    orderBy?: Enumerable<UserInfoOrderByWithAggregationInput>
    by: UserInfoScalarFieldEnum[]
    having?: UserInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserInfoCountAggregateInputType | true
    _min?: UserInfoMinAggregateInputType
    _max?: UserInfoMaxAggregateInputType
  }


  export type UserInfoGroupByOutputType = {
    id: string
    userName: string
    createdAt: Date
    updatedAt: Date
    _count: UserInfoCountAggregateOutputType | null
    _min: UserInfoMinAggregateOutputType | null
    _max: UserInfoMaxAggregateOutputType | null
  }

  type GetUserInfoGroupByPayload<T extends UserInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
            : GetScalarType<T[P], UserInfoGroupByOutputType[P]>
        }
      >
    >


  export type UserInfoSelect = {
    id?: boolean
    userName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    CorrectAnswers?: boolean | UserInfo$CorrectAnswersArgs
    _count?: boolean | UserInfoCountOutputTypeArgs
  }


  export type UserInfoInclude = {
    CorrectAnswers?: boolean | UserInfo$CorrectAnswersArgs
    _count?: boolean | UserInfoCountOutputTypeArgs
  }

  export type UserInfoGetPayload<S extends boolean | null | undefined | UserInfoArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserInfo :
    S extends undefined ? never :
    S extends { include: any } & (UserInfoArgs | UserInfoFindManyArgs)
    ? UserInfo  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'CorrectAnswers' ? Array < CorrectAnswersGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserInfoCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserInfoArgs | UserInfoFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'CorrectAnswers' ? Array < CorrectAnswersGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserInfoCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof UserInfo ? UserInfo[P] : never
  } 
      : UserInfo


  type UserInfoCountArgs = 
    Omit<UserInfoFindManyArgs, 'select' | 'include'> & {
      select?: UserInfoCountAggregateInputType | true
    }

  export interface UserInfoDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one UserInfo that matches the filter.
     * @param {UserInfoFindUniqueArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserInfoFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserInfoFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserInfo'> extends True ? Prisma__UserInfoClient<UserInfoGetPayload<T>> : Prisma__UserInfoClient<UserInfoGetPayload<T> | null, null>

    /**
     * Find one UserInfo that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserInfoFindUniqueOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserInfoFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserInfoFindUniqueOrThrowArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Find the first UserInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserInfoFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserInfoFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserInfo'> extends True ? Prisma__UserInfoClient<UserInfoGetPayload<T>> : Prisma__UserInfoClient<UserInfoGetPayload<T> | null, null>

    /**
     * Find the first UserInfo that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindFirstOrThrowArgs} args - Arguments to find a UserInfo
     * @example
     * // Get one UserInfo
     * const userInfo = await prisma.userInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserInfoFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserInfoFindFirstOrThrowArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Find zero or more UserInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserInfos
     * const userInfos = await prisma.userInfo.findMany()
     * 
     * // Get first 10 UserInfos
     * const userInfos = await prisma.userInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userInfoWithIdOnly = await prisma.userInfo.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserInfoFindManyArgs>(
      args?: SelectSubset<T, UserInfoFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserInfoGetPayload<T>>>

    /**
     * Create a UserInfo.
     * @param {UserInfoCreateArgs} args - Arguments to create a UserInfo.
     * @example
     * // Create one UserInfo
     * const UserInfo = await prisma.userInfo.create({
     *   data: {
     *     // ... data to create a UserInfo
     *   }
     * })
     * 
    **/
    create<T extends UserInfoCreateArgs>(
      args: SelectSubset<T, UserInfoCreateArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Delete a UserInfo.
     * @param {UserInfoDeleteArgs} args - Arguments to delete one UserInfo.
     * @example
     * // Delete one UserInfo
     * const UserInfo = await prisma.userInfo.delete({
     *   where: {
     *     // ... filter to delete one UserInfo
     *   }
     * })
     * 
    **/
    delete<T extends UserInfoDeleteArgs>(
      args: SelectSubset<T, UserInfoDeleteArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Update one UserInfo.
     * @param {UserInfoUpdateArgs} args - Arguments to update one UserInfo.
     * @example
     * // Update one UserInfo
     * const userInfo = await prisma.userInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserInfoUpdateArgs>(
      args: SelectSubset<T, UserInfoUpdateArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Delete zero or more UserInfos.
     * @param {UserInfoDeleteManyArgs} args - Arguments to filter UserInfos to delete.
     * @example
     * // Delete a few UserInfos
     * const { count } = await prisma.userInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserInfoDeleteManyArgs>(
      args?: SelectSubset<T, UserInfoDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserInfos
     * const userInfo = await prisma.userInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserInfoUpdateManyArgs>(
      args: SelectSubset<T, UserInfoUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserInfo.
     * @param {UserInfoUpsertArgs} args - Arguments to update or create a UserInfo.
     * @example
     * // Update or create a UserInfo
     * const userInfo = await prisma.userInfo.upsert({
     *   create: {
     *     // ... data to create a UserInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserInfo we want to update
     *   }
     * })
    **/
    upsert<T extends UserInfoUpsertArgs>(
      args: SelectSubset<T, UserInfoUpsertArgs>
    ): Prisma__UserInfoClient<UserInfoGetPayload<T>>

    /**
     * Count the number of UserInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoCountArgs} args - Arguments to filter UserInfos to count.
     * @example
     * // Count the number of UserInfos
     * const count = await prisma.userInfo.count({
     *   where: {
     *     // ... the filter for the UserInfos we want to count
     *   }
     * })
    **/
    count<T extends UserInfoCountArgs>(
      args?: Subset<T, UserInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserInfoAggregateArgs>(args: Subset<T, UserInfoAggregateArgs>): Prisma.PrismaPromise<GetUserInfoAggregateType<T>>

    /**
     * Group by UserInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserInfoGroupByArgs} args - Group by arguments.
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
      T extends UserInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserInfoGroupByArgs['orderBy'] }
        : { orderBy?: UserInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserInfoClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    CorrectAnswers<T extends UserInfo$CorrectAnswersArgs= {}>(args?: Subset<T, UserInfo$CorrectAnswersArgs>): Prisma.PrismaPromise<Array<CorrectAnswersGetPayload<T>>| Null>;

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
   * UserInfo base type for findUnique actions
   */
  export type UserInfoFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInfoInclude | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }

  /**
   * UserInfo findUnique
   */
  export interface UserInfoFindUniqueArgs extends UserInfoFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserInfo findUniqueOrThrow
   */
  export type UserInfoFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInfoInclude | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where: UserInfoWhereUniqueInput
  }


  /**
   * UserInfo base type for findFirst actions
   */
  export type UserInfoFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInfoInclude | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: Enumerable<UserInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: Enumerable<UserInfoScalarFieldEnum>
  }

  /**
   * UserInfo findFirst
   */
  export interface UserInfoFindFirstArgs extends UserInfoFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * UserInfo findFirstOrThrow
   */
  export type UserInfoFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInfoInclude | null
    /**
     * Filter, which UserInfo to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: Enumerable<UserInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserInfos.
     */
    distinct?: Enumerable<UserInfoScalarFieldEnum>
  }


  /**
   * UserInfo findMany
   */
  export type UserInfoFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInfoInclude | null
    /**
     * Filter, which UserInfos to fetch.
     */
    where?: UserInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserInfos to fetch.
     */
    orderBy?: Enumerable<UserInfoOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserInfos.
     */
    cursor?: UserInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserInfos.
     */
    skip?: number
    distinct?: Enumerable<UserInfoScalarFieldEnum>
  }


  /**
   * UserInfo create
   */
  export type UserInfoCreateArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInfoInclude | null
    /**
     * The data needed to create a UserInfo.
     */
    data: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
  }


  /**
   * UserInfo update
   */
  export type UserInfoUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInfoInclude | null
    /**
     * The data needed to update a UserInfo.
     */
    data: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
    /**
     * Choose, which UserInfo to update.
     */
    where: UserInfoWhereUniqueInput
  }


  /**
   * UserInfo updateMany
   */
  export type UserInfoUpdateManyArgs = {
    /**
     * The data used to update UserInfos.
     */
    data: XOR<UserInfoUpdateManyMutationInput, UserInfoUncheckedUpdateManyInput>
    /**
     * Filter which UserInfos to update
     */
    where?: UserInfoWhereInput
  }


  /**
   * UserInfo upsert
   */
  export type UserInfoUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInfoInclude | null
    /**
     * The filter to search for the UserInfo to update in case it exists.
     */
    where: UserInfoWhereUniqueInput
    /**
     * In case the UserInfo found by the `where` argument doesn't exist, create a new UserInfo with this data.
     */
    create: XOR<UserInfoCreateInput, UserInfoUncheckedCreateInput>
    /**
     * In case the UserInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserInfoUpdateInput, UserInfoUncheckedUpdateInput>
  }


  /**
   * UserInfo delete
   */
  export type UserInfoDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInfoInclude | null
    /**
     * Filter which UserInfo to delete.
     */
    where: UserInfoWhereUniqueInput
  }


  /**
   * UserInfo deleteMany
   */
  export type UserInfoDeleteManyArgs = {
    /**
     * Filter which UserInfos to delete
     */
    where?: UserInfoWhereInput
  }


  /**
   * UserInfo.CorrectAnswers
   */
  export type UserInfo$CorrectAnswersArgs = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
    where?: CorrectAnswersWhereInput
    orderBy?: Enumerable<CorrectAnswersOrderByWithRelationInput>
    cursor?: CorrectAnswersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<CorrectAnswersScalarFieldEnum>
  }


  /**
   * UserInfo without action
   */
  export type UserInfoArgs = {
    /**
     * Select specific fields to fetch from the UserInfo
     */
    select?: UserInfoSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInfoInclude | null
  }



  /**
   * Model CorrectAnswers
   */


  export type AggregateCorrectAnswers = {
    _count: CorrectAnswersCountAggregateOutputType | null
    _avg: CorrectAnswersAvgAggregateOutputType | null
    _sum: CorrectAnswersSumAggregateOutputType | null
    _min: CorrectAnswersMinAggregateOutputType | null
    _max: CorrectAnswersMaxAggregateOutputType | null
  }

  export type CorrectAnswersAvgAggregateOutputType = {
    id: number | null
    questionId: number | null
    responseTime: number | null
  }

  export type CorrectAnswersSumAggregateOutputType = {
    id: number | null
    questionId: number | null
    responseTime: number | null
  }

  export type CorrectAnswersMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    questionId: number | null
    userId: string | null
    responseTime: number | null
  }

  export type CorrectAnswersMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    questionId: number | null
    userId: string | null
    responseTime: number | null
  }

  export type CorrectAnswersCountAggregateOutputType = {
    id: number
    createdAt: number
    questionId: number
    userId: number
    responseTime: number
    _all: number
  }


  export type CorrectAnswersAvgAggregateInputType = {
    id?: true
    questionId?: true
    responseTime?: true
  }

  export type CorrectAnswersSumAggregateInputType = {
    id?: true
    questionId?: true
    responseTime?: true
  }

  export type CorrectAnswersMinAggregateInputType = {
    id?: true
    createdAt?: true
    questionId?: true
    userId?: true
    responseTime?: true
  }

  export type CorrectAnswersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    questionId?: true
    userId?: true
    responseTime?: true
  }

  export type CorrectAnswersCountAggregateInputType = {
    id?: true
    createdAt?: true
    questionId?: true
    userId?: true
    responseTime?: true
    _all?: true
  }

  export type CorrectAnswersAggregateArgs = {
    /**
     * Filter which CorrectAnswers to aggregate.
     */
    where?: CorrectAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorrectAnswers to fetch.
     */
    orderBy?: Enumerable<CorrectAnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CorrectAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorrectAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorrectAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CorrectAnswers
    **/
    _count?: true | CorrectAnswersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CorrectAnswersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CorrectAnswersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CorrectAnswersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CorrectAnswersMaxAggregateInputType
  }

  export type GetCorrectAnswersAggregateType<T extends CorrectAnswersAggregateArgs> = {
        [P in keyof T & keyof AggregateCorrectAnswers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCorrectAnswers[P]>
      : GetScalarType<T[P], AggregateCorrectAnswers[P]>
  }




  export type CorrectAnswersGroupByArgs = {
    where?: CorrectAnswersWhereInput
    orderBy?: Enumerable<CorrectAnswersOrderByWithAggregationInput>
    by: CorrectAnswersScalarFieldEnum[]
    having?: CorrectAnswersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CorrectAnswersCountAggregateInputType | true
    _avg?: CorrectAnswersAvgAggregateInputType
    _sum?: CorrectAnswersSumAggregateInputType
    _min?: CorrectAnswersMinAggregateInputType
    _max?: CorrectAnswersMaxAggregateInputType
  }


  export type CorrectAnswersGroupByOutputType = {
    id: number
    createdAt: Date
    questionId: number
    userId: string
    responseTime: number
    _count: CorrectAnswersCountAggregateOutputType | null
    _avg: CorrectAnswersAvgAggregateOutputType | null
    _sum: CorrectAnswersSumAggregateOutputType | null
    _min: CorrectAnswersMinAggregateOutputType | null
    _max: CorrectAnswersMaxAggregateOutputType | null
  }

  type GetCorrectAnswersGroupByPayload<T extends CorrectAnswersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CorrectAnswersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CorrectAnswersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CorrectAnswersGroupByOutputType[P]>
            : GetScalarType<T[P], CorrectAnswersGroupByOutputType[P]>
        }
      >
    >


  export type CorrectAnswersSelect = {
    id?: boolean
    createdAt?: boolean
    questionId?: boolean
    userId?: boolean
    responseTime?: boolean
    question?: boolean | QuestionArgs
    user?: boolean | UserInfoArgs
  }


  export type CorrectAnswersInclude = {
    question?: boolean | QuestionArgs
    user?: boolean | UserInfoArgs
  }

  export type CorrectAnswersGetPayload<S extends boolean | null | undefined | CorrectAnswersArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CorrectAnswers :
    S extends undefined ? never :
    S extends { include: any } & (CorrectAnswersArgs | CorrectAnswersFindManyArgs)
    ? CorrectAnswers  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'question' ? QuestionGetPayload<S['include'][P]> :
        P extends 'user' ? UserInfoGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CorrectAnswersArgs | CorrectAnswersFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'question' ? QuestionGetPayload<S['select'][P]> :
        P extends 'user' ? UserInfoGetPayload<S['select'][P]> :  P extends keyof CorrectAnswers ? CorrectAnswers[P] : never
  } 
      : CorrectAnswers


  type CorrectAnswersCountArgs = 
    Omit<CorrectAnswersFindManyArgs, 'select' | 'include'> & {
      select?: CorrectAnswersCountAggregateInputType | true
    }

  export interface CorrectAnswersDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one CorrectAnswers that matches the filter.
     * @param {CorrectAnswersFindUniqueArgs} args - Arguments to find a CorrectAnswers
     * @example
     * // Get one CorrectAnswers
     * const correctAnswers = await prisma.correctAnswers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CorrectAnswersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CorrectAnswersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'CorrectAnswers'> extends True ? Prisma__CorrectAnswersClient<CorrectAnswersGetPayload<T>> : Prisma__CorrectAnswersClient<CorrectAnswersGetPayload<T> | null, null>

    /**
     * Find one CorrectAnswers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CorrectAnswersFindUniqueOrThrowArgs} args - Arguments to find a CorrectAnswers
     * @example
     * // Get one CorrectAnswers
     * const correctAnswers = await prisma.correctAnswers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CorrectAnswersFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CorrectAnswersFindUniqueOrThrowArgs>
    ): Prisma__CorrectAnswersClient<CorrectAnswersGetPayload<T>>

    /**
     * Find the first CorrectAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorrectAnswersFindFirstArgs} args - Arguments to find a CorrectAnswers
     * @example
     * // Get one CorrectAnswers
     * const correctAnswers = await prisma.correctAnswers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CorrectAnswersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CorrectAnswersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'CorrectAnswers'> extends True ? Prisma__CorrectAnswersClient<CorrectAnswersGetPayload<T>> : Prisma__CorrectAnswersClient<CorrectAnswersGetPayload<T> | null, null>

    /**
     * Find the first CorrectAnswers that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorrectAnswersFindFirstOrThrowArgs} args - Arguments to find a CorrectAnswers
     * @example
     * // Get one CorrectAnswers
     * const correctAnswers = await prisma.correctAnswers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CorrectAnswersFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CorrectAnswersFindFirstOrThrowArgs>
    ): Prisma__CorrectAnswersClient<CorrectAnswersGetPayload<T>>

    /**
     * Find zero or more CorrectAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorrectAnswersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CorrectAnswers
     * const correctAnswers = await prisma.correctAnswers.findMany()
     * 
     * // Get first 10 CorrectAnswers
     * const correctAnswers = await prisma.correctAnswers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const correctAnswersWithIdOnly = await prisma.correctAnswers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CorrectAnswersFindManyArgs>(
      args?: SelectSubset<T, CorrectAnswersFindManyArgs>
    ): Prisma.PrismaPromise<Array<CorrectAnswersGetPayload<T>>>

    /**
     * Create a CorrectAnswers.
     * @param {CorrectAnswersCreateArgs} args - Arguments to create a CorrectAnswers.
     * @example
     * // Create one CorrectAnswers
     * const CorrectAnswers = await prisma.correctAnswers.create({
     *   data: {
     *     // ... data to create a CorrectAnswers
     *   }
     * })
     * 
    **/
    create<T extends CorrectAnswersCreateArgs>(
      args: SelectSubset<T, CorrectAnswersCreateArgs>
    ): Prisma__CorrectAnswersClient<CorrectAnswersGetPayload<T>>

    /**
     * Delete a CorrectAnswers.
     * @param {CorrectAnswersDeleteArgs} args - Arguments to delete one CorrectAnswers.
     * @example
     * // Delete one CorrectAnswers
     * const CorrectAnswers = await prisma.correctAnswers.delete({
     *   where: {
     *     // ... filter to delete one CorrectAnswers
     *   }
     * })
     * 
    **/
    delete<T extends CorrectAnswersDeleteArgs>(
      args: SelectSubset<T, CorrectAnswersDeleteArgs>
    ): Prisma__CorrectAnswersClient<CorrectAnswersGetPayload<T>>

    /**
     * Update one CorrectAnswers.
     * @param {CorrectAnswersUpdateArgs} args - Arguments to update one CorrectAnswers.
     * @example
     * // Update one CorrectAnswers
     * const correctAnswers = await prisma.correctAnswers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CorrectAnswersUpdateArgs>(
      args: SelectSubset<T, CorrectAnswersUpdateArgs>
    ): Prisma__CorrectAnswersClient<CorrectAnswersGetPayload<T>>

    /**
     * Delete zero or more CorrectAnswers.
     * @param {CorrectAnswersDeleteManyArgs} args - Arguments to filter CorrectAnswers to delete.
     * @example
     * // Delete a few CorrectAnswers
     * const { count } = await prisma.correctAnswers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CorrectAnswersDeleteManyArgs>(
      args?: SelectSubset<T, CorrectAnswersDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CorrectAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorrectAnswersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CorrectAnswers
     * const correctAnswers = await prisma.correctAnswers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CorrectAnswersUpdateManyArgs>(
      args: SelectSubset<T, CorrectAnswersUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CorrectAnswers.
     * @param {CorrectAnswersUpsertArgs} args - Arguments to update or create a CorrectAnswers.
     * @example
     * // Update or create a CorrectAnswers
     * const correctAnswers = await prisma.correctAnswers.upsert({
     *   create: {
     *     // ... data to create a CorrectAnswers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CorrectAnswers we want to update
     *   }
     * })
    **/
    upsert<T extends CorrectAnswersUpsertArgs>(
      args: SelectSubset<T, CorrectAnswersUpsertArgs>
    ): Prisma__CorrectAnswersClient<CorrectAnswersGetPayload<T>>

    /**
     * Count the number of CorrectAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorrectAnswersCountArgs} args - Arguments to filter CorrectAnswers to count.
     * @example
     * // Count the number of CorrectAnswers
     * const count = await prisma.correctAnswers.count({
     *   where: {
     *     // ... the filter for the CorrectAnswers we want to count
     *   }
     * })
    **/
    count<T extends CorrectAnswersCountArgs>(
      args?: Subset<T, CorrectAnswersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CorrectAnswersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CorrectAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorrectAnswersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CorrectAnswersAggregateArgs>(args: Subset<T, CorrectAnswersAggregateArgs>): Prisma.PrismaPromise<GetCorrectAnswersAggregateType<T>>

    /**
     * Group by CorrectAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CorrectAnswersGroupByArgs} args - Group by arguments.
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
      T extends CorrectAnswersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CorrectAnswersGroupByArgs['orderBy'] }
        : { orderBy?: CorrectAnswersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CorrectAnswersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCorrectAnswersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for CorrectAnswers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CorrectAnswersClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
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
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    question<T extends QuestionArgs= {}>(args?: Subset<T, QuestionArgs>): Prisma__QuestionClient<QuestionGetPayload<T> | Null>;

    user<T extends UserInfoArgs= {}>(args?: Subset<T, UserInfoArgs>): Prisma__UserInfoClient<UserInfoGetPayload<T> | Null>;

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
   * CorrectAnswers base type for findUnique actions
   */
  export type CorrectAnswersFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
    /**
     * Filter, which CorrectAnswers to fetch.
     */
    where: CorrectAnswersWhereUniqueInput
  }

  /**
   * CorrectAnswers findUnique
   */
  export interface CorrectAnswersFindUniqueArgs extends CorrectAnswersFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CorrectAnswers findUniqueOrThrow
   */
  export type CorrectAnswersFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
    /**
     * Filter, which CorrectAnswers to fetch.
     */
    where: CorrectAnswersWhereUniqueInput
  }


  /**
   * CorrectAnswers base type for findFirst actions
   */
  export type CorrectAnswersFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
    /**
     * Filter, which CorrectAnswers to fetch.
     */
    where?: CorrectAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorrectAnswers to fetch.
     */
    orderBy?: Enumerable<CorrectAnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CorrectAnswers.
     */
    cursor?: CorrectAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorrectAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorrectAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CorrectAnswers.
     */
    distinct?: Enumerable<CorrectAnswersScalarFieldEnum>
  }

  /**
   * CorrectAnswers findFirst
   */
  export interface CorrectAnswersFindFirstArgs extends CorrectAnswersFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * CorrectAnswers findFirstOrThrow
   */
  export type CorrectAnswersFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
    /**
     * Filter, which CorrectAnswers to fetch.
     */
    where?: CorrectAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorrectAnswers to fetch.
     */
    orderBy?: Enumerable<CorrectAnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CorrectAnswers.
     */
    cursor?: CorrectAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorrectAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorrectAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CorrectAnswers.
     */
    distinct?: Enumerable<CorrectAnswersScalarFieldEnum>
  }


  /**
   * CorrectAnswers findMany
   */
  export type CorrectAnswersFindManyArgs = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
    /**
     * Filter, which CorrectAnswers to fetch.
     */
    where?: CorrectAnswersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CorrectAnswers to fetch.
     */
    orderBy?: Enumerable<CorrectAnswersOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CorrectAnswers.
     */
    cursor?: CorrectAnswersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CorrectAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CorrectAnswers.
     */
    skip?: number
    distinct?: Enumerable<CorrectAnswersScalarFieldEnum>
  }


  /**
   * CorrectAnswers create
   */
  export type CorrectAnswersCreateArgs = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
    /**
     * The data needed to create a CorrectAnswers.
     */
    data: XOR<CorrectAnswersCreateInput, CorrectAnswersUncheckedCreateInput>
  }


  /**
   * CorrectAnswers update
   */
  export type CorrectAnswersUpdateArgs = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
    /**
     * The data needed to update a CorrectAnswers.
     */
    data: XOR<CorrectAnswersUpdateInput, CorrectAnswersUncheckedUpdateInput>
    /**
     * Choose, which CorrectAnswers to update.
     */
    where: CorrectAnswersWhereUniqueInput
  }


  /**
   * CorrectAnswers updateMany
   */
  export type CorrectAnswersUpdateManyArgs = {
    /**
     * The data used to update CorrectAnswers.
     */
    data: XOR<CorrectAnswersUpdateManyMutationInput, CorrectAnswersUncheckedUpdateManyInput>
    /**
     * Filter which CorrectAnswers to update
     */
    where?: CorrectAnswersWhereInput
  }


  /**
   * CorrectAnswers upsert
   */
  export type CorrectAnswersUpsertArgs = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
    /**
     * The filter to search for the CorrectAnswers to update in case it exists.
     */
    where: CorrectAnswersWhereUniqueInput
    /**
     * In case the CorrectAnswers found by the `where` argument doesn't exist, create a new CorrectAnswers with this data.
     */
    create: XOR<CorrectAnswersCreateInput, CorrectAnswersUncheckedCreateInput>
    /**
     * In case the CorrectAnswers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CorrectAnswersUpdateInput, CorrectAnswersUncheckedUpdateInput>
  }


  /**
   * CorrectAnswers delete
   */
  export type CorrectAnswersDeleteArgs = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
    /**
     * Filter which CorrectAnswers to delete.
     */
    where: CorrectAnswersWhereUniqueInput
  }


  /**
   * CorrectAnswers deleteMany
   */
  export type CorrectAnswersDeleteManyArgs = {
    /**
     * Filter which CorrectAnswers to delete
     */
    where?: CorrectAnswersWhereInput
  }


  /**
   * CorrectAnswers without action
   */
  export type CorrectAnswersArgs = {
    /**
     * Select specific fields to fetch from the CorrectAnswers
     */
    select?: CorrectAnswersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CorrectAnswersInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const CorrectAnswersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    questionId: 'questionId',
    userId: 'userId',
    responseTime: 'responseTime'
  };

  export type CorrectAnswersScalarFieldEnum = (typeof CorrectAnswersScalarFieldEnum)[keyof typeof CorrectAnswersScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    question: 'question',
    answer: 'answer'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserInfoScalarFieldEnum: {
    id: 'id',
    userName: 'userName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserInfoScalarFieldEnum = (typeof UserInfoScalarFieldEnum)[keyof typeof UserInfoScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type QuestionWhereInput = {
    AND?: Enumerable<QuestionWhereInput>
    OR?: Enumerable<QuestionWhereInput>
    NOT?: Enumerable<QuestionWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    question?: StringFilter | string
    answer?: StringFilter | string
    CorrectAnswers?: CorrectAnswersListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    CorrectAnswers?: CorrectAnswersOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = {
    id?: number
  }

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    OR?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<QuestionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    question?: StringWithAggregatesFilter | string
    answer?: StringWithAggregatesFilter | string
  }

  export type UserInfoWhereInput = {
    AND?: Enumerable<UserInfoWhereInput>
    OR?: Enumerable<UserInfoWhereInput>
    NOT?: Enumerable<UserInfoWhereInput>
    id?: StringFilter | string
    userName?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    CorrectAnswers?: CorrectAnswersListRelationFilter
  }

  export type UserInfoOrderByWithRelationInput = {
    id?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    CorrectAnswers?: CorrectAnswersOrderByRelationAggregateInput
  }

  export type UserInfoWhereUniqueInput = {
    id?: string
  }

  export type UserInfoOrderByWithAggregationInput = {
    id?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserInfoCountOrderByAggregateInput
    _max?: UserInfoMaxOrderByAggregateInput
    _min?: UserInfoMinOrderByAggregateInput
  }

  export type UserInfoScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserInfoScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserInfoScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserInfoScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    userName?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type CorrectAnswersWhereInput = {
    AND?: Enumerable<CorrectAnswersWhereInput>
    OR?: Enumerable<CorrectAnswersWhereInput>
    NOT?: Enumerable<CorrectAnswersWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    questionId?: IntFilter | number
    userId?: StringFilter | string
    responseTime?: IntFilter | number
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    user?: XOR<UserInfoRelationFilter, UserInfoWhereInput>
  }

  export type CorrectAnswersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    responseTime?: SortOrder
    question?: QuestionOrderByWithRelationInput
    user?: UserInfoOrderByWithRelationInput
  }

  export type CorrectAnswersWhereUniqueInput = {
    id?: number
  }

  export type CorrectAnswersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    responseTime?: SortOrder
    _count?: CorrectAnswersCountOrderByAggregateInput
    _avg?: CorrectAnswersAvgOrderByAggregateInput
    _max?: CorrectAnswersMaxOrderByAggregateInput
    _min?: CorrectAnswersMinOrderByAggregateInput
    _sum?: CorrectAnswersSumOrderByAggregateInput
  }

  export type CorrectAnswersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CorrectAnswersScalarWhereWithAggregatesInput>
    OR?: Enumerable<CorrectAnswersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CorrectAnswersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    questionId?: IntWithAggregatesFilter | number
    userId?: StringWithAggregatesFilter | string
    responseTime?: IntWithAggregatesFilter | number
  }

  export type QuestionCreateInput = {
    createdAt?: Date | string
    question: string
    answer: string
    CorrectAnswers?: CorrectAnswersCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    question: string
    answer: string
    CorrectAnswers?: CorrectAnswersUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    CorrectAnswers?: CorrectAnswersUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    CorrectAnswers?: CorrectAnswersUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoCreateInput = {
    id: string
    userName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    CorrectAnswers?: CorrectAnswersCreateNestedManyWithoutUserInput
  }

  export type UserInfoUncheckedCreateInput = {
    id: string
    userName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    CorrectAnswers?: CorrectAnswersUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserInfoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CorrectAnswers?: CorrectAnswersUpdateManyWithoutUserNestedInput
  }

  export type UserInfoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    CorrectAnswers?: CorrectAnswersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserInfoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInfoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorrectAnswersCreateInput = {
    createdAt?: Date | string
    responseTime?: number
    question: QuestionCreateNestedOneWithoutCorrectAnswersInput
    user: UserInfoCreateNestedOneWithoutCorrectAnswersInput
  }

  export type CorrectAnswersUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    questionId: number
    userId: string
    responseTime?: number
  }

  export type CorrectAnswersUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseTime?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutCorrectAnswersNestedInput
    user?: UserInfoUpdateOneRequiredWithoutCorrectAnswersNestedInput
  }

  export type CorrectAnswersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    responseTime?: IntFieldUpdateOperationsInput | number
  }

  export type CorrectAnswersUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseTime?: IntFieldUpdateOperationsInput | number
  }

  export type CorrectAnswersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    responseTime?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type CorrectAnswersListRelationFilter = {
    every?: CorrectAnswersWhereInput
    some?: CorrectAnswersWhereInput
    none?: CorrectAnswersWhereInput
  }

  export type CorrectAnswersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    question?: SortOrder
    answer?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    question?: SortOrder
    answer?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    question?: SortOrder
    answer?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
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

  export type UserInfoCountOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserInfoMinOrderByAggregateInput = {
    id?: SortOrder
    userName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type UserInfoRelationFilter = {
    is?: UserInfoWhereInput
    isNot?: UserInfoWhereInput
  }

  export type CorrectAnswersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    responseTime?: SortOrder
  }

  export type CorrectAnswersAvgOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    responseTime?: SortOrder
  }

  export type CorrectAnswersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    responseTime?: SortOrder
  }

  export type CorrectAnswersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    questionId?: SortOrder
    userId?: SortOrder
    responseTime?: SortOrder
  }

  export type CorrectAnswersSumOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    responseTime?: SortOrder
  }

  export type CorrectAnswersCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<CorrectAnswersCreateWithoutQuestionInput>, Enumerable<CorrectAnswersUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<CorrectAnswersCreateOrConnectWithoutQuestionInput>
    connect?: Enumerable<CorrectAnswersWhereUniqueInput>
  }

  export type CorrectAnswersUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<Enumerable<CorrectAnswersCreateWithoutQuestionInput>, Enumerable<CorrectAnswersUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<CorrectAnswersCreateOrConnectWithoutQuestionInput>
    connect?: Enumerable<CorrectAnswersWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CorrectAnswersUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<CorrectAnswersCreateWithoutQuestionInput>, Enumerable<CorrectAnswersUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<CorrectAnswersCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<CorrectAnswersUpsertWithWhereUniqueWithoutQuestionInput>
    set?: Enumerable<CorrectAnswersWhereUniqueInput>
    disconnect?: Enumerable<CorrectAnswersWhereUniqueInput>
    delete?: Enumerable<CorrectAnswersWhereUniqueInput>
    connect?: Enumerable<CorrectAnswersWhereUniqueInput>
    update?: Enumerable<CorrectAnswersUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<CorrectAnswersUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<CorrectAnswersScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CorrectAnswersUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<Enumerable<CorrectAnswersCreateWithoutQuestionInput>, Enumerable<CorrectAnswersUncheckedCreateWithoutQuestionInput>>
    connectOrCreate?: Enumerable<CorrectAnswersCreateOrConnectWithoutQuestionInput>
    upsert?: Enumerable<CorrectAnswersUpsertWithWhereUniqueWithoutQuestionInput>
    set?: Enumerable<CorrectAnswersWhereUniqueInput>
    disconnect?: Enumerable<CorrectAnswersWhereUniqueInput>
    delete?: Enumerable<CorrectAnswersWhereUniqueInput>
    connect?: Enumerable<CorrectAnswersWhereUniqueInput>
    update?: Enumerable<CorrectAnswersUpdateWithWhereUniqueWithoutQuestionInput>
    updateMany?: Enumerable<CorrectAnswersUpdateManyWithWhereWithoutQuestionInput>
    deleteMany?: Enumerable<CorrectAnswersScalarWhereInput>
  }

  export type CorrectAnswersCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CorrectAnswersCreateWithoutUserInput>, Enumerable<CorrectAnswersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CorrectAnswersCreateOrConnectWithoutUserInput>
    connect?: Enumerable<CorrectAnswersWhereUniqueInput>
  }

  export type CorrectAnswersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<CorrectAnswersCreateWithoutUserInput>, Enumerable<CorrectAnswersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CorrectAnswersCreateOrConnectWithoutUserInput>
    connect?: Enumerable<CorrectAnswersWhereUniqueInput>
  }

  export type CorrectAnswersUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CorrectAnswersCreateWithoutUserInput>, Enumerable<CorrectAnswersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CorrectAnswersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CorrectAnswersUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<CorrectAnswersWhereUniqueInput>
    disconnect?: Enumerable<CorrectAnswersWhereUniqueInput>
    delete?: Enumerable<CorrectAnswersWhereUniqueInput>
    connect?: Enumerable<CorrectAnswersWhereUniqueInput>
    update?: Enumerable<CorrectAnswersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CorrectAnswersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CorrectAnswersScalarWhereInput>
  }

  export type CorrectAnswersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<CorrectAnswersCreateWithoutUserInput>, Enumerable<CorrectAnswersUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<CorrectAnswersCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<CorrectAnswersUpsertWithWhereUniqueWithoutUserInput>
    set?: Enumerable<CorrectAnswersWhereUniqueInput>
    disconnect?: Enumerable<CorrectAnswersWhereUniqueInput>
    delete?: Enumerable<CorrectAnswersWhereUniqueInput>
    connect?: Enumerable<CorrectAnswersWhereUniqueInput>
    update?: Enumerable<CorrectAnswersUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<CorrectAnswersUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<CorrectAnswersScalarWhereInput>
  }

  export type QuestionCreateNestedOneWithoutCorrectAnswersInput = {
    create?: XOR<QuestionCreateWithoutCorrectAnswersInput, QuestionUncheckedCreateWithoutCorrectAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutCorrectAnswersInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserInfoCreateNestedOneWithoutCorrectAnswersInput = {
    create?: XOR<UserInfoCreateWithoutCorrectAnswersInput, UserInfoUncheckedCreateWithoutCorrectAnswersInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutCorrectAnswersInput
    connect?: UserInfoWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutCorrectAnswersNestedInput = {
    create?: XOR<QuestionCreateWithoutCorrectAnswersInput, QuestionUncheckedCreateWithoutCorrectAnswersInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutCorrectAnswersInput
    upsert?: QuestionUpsertWithoutCorrectAnswersInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<QuestionUpdateWithoutCorrectAnswersInput, QuestionUncheckedUpdateWithoutCorrectAnswersInput>
  }

  export type UserInfoUpdateOneRequiredWithoutCorrectAnswersNestedInput = {
    create?: XOR<UserInfoCreateWithoutCorrectAnswersInput, UserInfoUncheckedCreateWithoutCorrectAnswersInput>
    connectOrCreate?: UserInfoCreateOrConnectWithoutCorrectAnswersInput
    upsert?: UserInfoUpsertWithoutCorrectAnswersInput
    connect?: UserInfoWhereUniqueInput
    update?: XOR<UserInfoUpdateWithoutCorrectAnswersInput, UserInfoUncheckedUpdateWithoutCorrectAnswersInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
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
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
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
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
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

  export type CorrectAnswersCreateWithoutQuestionInput = {
    createdAt?: Date | string
    responseTime?: number
    user: UserInfoCreateNestedOneWithoutCorrectAnswersInput
  }

  export type CorrectAnswersUncheckedCreateWithoutQuestionInput = {
    id?: number
    createdAt?: Date | string
    userId: string
    responseTime?: number
  }

  export type CorrectAnswersCreateOrConnectWithoutQuestionInput = {
    where: CorrectAnswersWhereUniqueInput
    create: XOR<CorrectAnswersCreateWithoutQuestionInput, CorrectAnswersUncheckedCreateWithoutQuestionInput>
  }

  export type CorrectAnswersUpsertWithWhereUniqueWithoutQuestionInput = {
    where: CorrectAnswersWhereUniqueInput
    update: XOR<CorrectAnswersUpdateWithoutQuestionInput, CorrectAnswersUncheckedUpdateWithoutQuestionInput>
    create: XOR<CorrectAnswersCreateWithoutQuestionInput, CorrectAnswersUncheckedCreateWithoutQuestionInput>
  }

  export type CorrectAnswersUpdateWithWhereUniqueWithoutQuestionInput = {
    where: CorrectAnswersWhereUniqueInput
    data: XOR<CorrectAnswersUpdateWithoutQuestionInput, CorrectAnswersUncheckedUpdateWithoutQuestionInput>
  }

  export type CorrectAnswersUpdateManyWithWhereWithoutQuestionInput = {
    where: CorrectAnswersScalarWhereInput
    data: XOR<CorrectAnswersUpdateManyMutationInput, CorrectAnswersUncheckedUpdateManyWithoutCorrectAnswersInput>
  }

  export type CorrectAnswersScalarWhereInput = {
    AND?: Enumerable<CorrectAnswersScalarWhereInput>
    OR?: Enumerable<CorrectAnswersScalarWhereInput>
    NOT?: Enumerable<CorrectAnswersScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    questionId?: IntFilter | number
    userId?: StringFilter | string
    responseTime?: IntFilter | number
  }

  export type CorrectAnswersCreateWithoutUserInput = {
    createdAt?: Date | string
    responseTime?: number
    question: QuestionCreateNestedOneWithoutCorrectAnswersInput
  }

  export type CorrectAnswersUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    questionId: number
    responseTime?: number
  }

  export type CorrectAnswersCreateOrConnectWithoutUserInput = {
    where: CorrectAnswersWhereUniqueInput
    create: XOR<CorrectAnswersCreateWithoutUserInput, CorrectAnswersUncheckedCreateWithoutUserInput>
  }

  export type CorrectAnswersUpsertWithWhereUniqueWithoutUserInput = {
    where: CorrectAnswersWhereUniqueInput
    update: XOR<CorrectAnswersUpdateWithoutUserInput, CorrectAnswersUncheckedUpdateWithoutUserInput>
    create: XOR<CorrectAnswersCreateWithoutUserInput, CorrectAnswersUncheckedCreateWithoutUserInput>
  }

  export type CorrectAnswersUpdateWithWhereUniqueWithoutUserInput = {
    where: CorrectAnswersWhereUniqueInput
    data: XOR<CorrectAnswersUpdateWithoutUserInput, CorrectAnswersUncheckedUpdateWithoutUserInput>
  }

  export type CorrectAnswersUpdateManyWithWhereWithoutUserInput = {
    where: CorrectAnswersScalarWhereInput
    data: XOR<CorrectAnswersUpdateManyMutationInput, CorrectAnswersUncheckedUpdateManyWithoutCorrectAnswersInput>
  }

  export type QuestionCreateWithoutCorrectAnswersInput = {
    createdAt?: Date | string
    question: string
    answer: string
  }

  export type QuestionUncheckedCreateWithoutCorrectAnswersInput = {
    id?: number
    createdAt?: Date | string
    question: string
    answer: string
  }

  export type QuestionCreateOrConnectWithoutCorrectAnswersInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutCorrectAnswersInput, QuestionUncheckedCreateWithoutCorrectAnswersInput>
  }

  export type UserInfoCreateWithoutCorrectAnswersInput = {
    id: string
    userName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInfoUncheckedCreateWithoutCorrectAnswersInput = {
    id: string
    userName: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserInfoCreateOrConnectWithoutCorrectAnswersInput = {
    where: UserInfoWhereUniqueInput
    create: XOR<UserInfoCreateWithoutCorrectAnswersInput, UserInfoUncheckedCreateWithoutCorrectAnswersInput>
  }

  export type QuestionUpsertWithoutCorrectAnswersInput = {
    update: XOR<QuestionUpdateWithoutCorrectAnswersInput, QuestionUncheckedUpdateWithoutCorrectAnswersInput>
    create: XOR<QuestionCreateWithoutCorrectAnswersInput, QuestionUncheckedCreateWithoutCorrectAnswersInput>
  }

  export type QuestionUpdateWithoutCorrectAnswersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUncheckedUpdateWithoutCorrectAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type UserInfoUpsertWithoutCorrectAnswersInput = {
    update: XOR<UserInfoUpdateWithoutCorrectAnswersInput, UserInfoUncheckedUpdateWithoutCorrectAnswersInput>
    create: XOR<UserInfoCreateWithoutCorrectAnswersInput, UserInfoUncheckedCreateWithoutCorrectAnswersInput>
  }

  export type UserInfoUpdateWithoutCorrectAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserInfoUncheckedUpdateWithoutCorrectAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CorrectAnswersUpdateWithoutQuestionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseTime?: IntFieldUpdateOperationsInput | number
    user?: UserInfoUpdateOneRequiredWithoutCorrectAnswersNestedInput
  }

  export type CorrectAnswersUncheckedUpdateWithoutQuestionInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    responseTime?: IntFieldUpdateOperationsInput | number
  }

  export type CorrectAnswersUncheckedUpdateManyWithoutCorrectAnswersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    responseTime?: IntFieldUpdateOperationsInput | number
  }

  export type CorrectAnswersUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responseTime?: IntFieldUpdateOperationsInput | number
    question?: QuestionUpdateOneRequiredWithoutCorrectAnswersNestedInput
  }

  export type CorrectAnswersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questionId?: IntFieldUpdateOperationsInput | number
    responseTime?: IntFieldUpdateOperationsInput | number
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