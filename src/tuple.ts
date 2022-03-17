namespace Tuple {
    export type Of<T, Size extends number = 1> =
        number extends Size ?
        T[] :
        (IsSafeSize<Size> extends true ? OfSize<T, Size> : Array<T>);

    export type Flat<Tup extends Array<any>, Depth extends number = 1> =
        ArrayType.IsSafeDepth<Depth> extends true ?
        FlatWithDepth<Tup, Depth> :
        never;

    export type IsSafeSize<Size extends number> = Sizes[Size] extends undefined ? false : true;

    export type Head<T extends Array<any>> = T extends [infer Head, ...infer Rest] ? Head : never;
    export type Rest<T extends Array<any>> = T extends [infer Head, ...infer Rest] ? Rest : never;
    type FlatWithDepth<Tuple extends Array<any>, Depth extends number> = {
        recur: FlatWithDepth<FlatTuple<Tuple>, Depths[Depth]>; res: Tuple;
    }[Depth extends 0 ? "res" : "recur"];
    type FlatTuple<Tuple extends Array<any>> = FlatWithRest<[], Tuple>;
    type FlatWithRest<Pre extends Array<any>, Rest extends Array<any>> =
        Rest['length'] extends 1 ?
        [...Pre, ...HeadOfRestToFlat<Rest>] :
        FlatWithRest<[...Pre, ...HeadOfRestToFlat<Rest>], RestOfRestToFlat<Rest>>;
    type HeadOfRestToFlat<Rest extends Array<any>> =
        Rest extends [infer Head, ...infer RestRest] ?
        (Head extends Array<any> ? Head : [Head])
        : [];
    type RestOfRestToFlat<Rest extends Array<any>> =
        Rest extends [infer Head, ...infer RestRest] ?
        RestRest :
        [];


    type Depths = [-1, ...Sizes];
    type Sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
    export type KeyOf<T extends any[]> = Exclude<keyof T, keyof []>
    export type ToRecord<T extends any[]> = { [K in KeyOf<T>]: T[K] };

    export type Matrix<T, Row extends number, Col extends number> =
        Of<Of<T, Col>, Row>;

    type OfSize<T, N extends number> = N extends 1 ?
        [T] : TupleOf<[T], N>;
    type TupleOf<T extends Array<any>, N extends number> =
        T['length'] extends N ? T : TupleOf<[ArrayType.Flat<T, 1>, ...T], N>;

    export type ToUnion<T extends any[]> = T extends Array<infer U> ? U : never;

    export type Concat<A extends any[], B extends any[]> = [...A, ...B];

    /**
     * Join tuple of serializable primitives to string
     */
    // TODO improve string to primitive, 
    export type Join<T extends string[], Prefix extends string = '', Suffix extends string = '', Sep extends string = ''> =
        Rest<T> extends [] ?
        `${Prefix}${Assert.String<Head<T>>}${Suffix}` :
        Join<Assert.Type<Rest<T>, string[]>, `${Prefix}${Assert.String<Head<T>>}${Sep}`, Suffix, Sep>

    // notice there is no "" of gen code
    export type toJSON<T extends string[] > = Join<T,'[',']',','>



}