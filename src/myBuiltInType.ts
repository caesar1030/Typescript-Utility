// keyof는 객체 타입의 키들의 유니온 타입

// Partial
type Post = {
  title: string;
  author: string;
  id: number;
};

type Partial<T extends Object> = {
  [key in keyof T]?: T[key];
};

type PartialPost = Partial<Post>;

// Required (* -? 는 ?를 제거함)
type Required<T extends Object> = {
  [key in keyof T]-?: T[key];
};

type RequiredPost = Required<PartialPost>;

// Readonly (*)
type Readonly<T extends Object> = {
  readonly [key in keyof T]: T[key];
};

type ReadonlyPost = Readonly<Post>;

// Exclude
type Exclude<T, U> = T extends U ? never : T;

type StringOnly = Exclude<string | boolean, boolean>;

// Extract
type Extract<T, U> = T extends U ? T : never;

type ExtractNumberString = Extract<string | number | symbol, string | number>;

// Pick (*)
type Pick<T, U extends keyof T> = {
  [key in U]: T[key];
};

type PostIdAndAuthor = Pick<Post, "id" | "author">;

// Omit
type Omit<T, U extends keyof T> = {
  [key in Exclude<keyof T, U>]: T[key];
};

type Omit2<T, U extends keyof T> = Pick<T, Exclude<keyof T, U>>;

type PostOmitId = Omit<Post, "id">;
type PostOmitId2 = Omit2<Post, "id">;

// Record
type Record<T extends string | number | symbol, U> = {
  [key in T]: U;
};

type MyPostHash = Record<Post["id"], Post>;

// ReturnType (*)

const myFunc = () => "hello";

type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

type MyFuncReturn = ReturnType<typeof myFunc>;
