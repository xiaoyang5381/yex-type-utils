namespace RecordType {
    export type ToIntersection<M extends Record<string, any>> = Union.ToIntersection<ToUnion<M>>
    export type LowercaseKey<M extends Record<string, any>> = { [K in keyof M as Lowercase<Assert.String<K>>]: M[K] extends Record<string, any> ? LowercaseKey<M[K]> : M[K] };
    export type UppercaseKey<M extends Record<string, any>> = { [K in keyof M as Uppercase<Assert.String<K>>]: M[K] extends Record<string, any> ? UppercaseKey<M[K]> : M[K] };
    export type PickInUnion<Field extends string, Union extends Record<Field, any>, K extends Union[Field]> = Extract<Union, Record<Field, K>>;
    export type ToUnion<M extends Record<string, any>> = M[keyof M]
    export type DeepReadonly<T> = T extends object ? T extends ((...args: any[]) => any) ? T : { readonly [K in keyof T]: DeepReadonly<T[K]> } : T;
}
// type Merge<O extends object[]> = UnionToIntersection<TupleToUnion<O>>

interface Constructor<T = object> { new(...args: any[]): T; }