namespace Union {
    export type ToTuple<U, T extends any[] = []> =
        Exclude<U, PickOneInUnion<U>> extends never ?
        [PickOneInUnion<U>, ...T] :
        ToTuple<Exclude<U, PickOneInUnion<U>>, [PickOneInUnion<U>, ...T]>
    type PickOneInUnion<U> = UnionToOverloadFunction<U> extends (k: infer I) => void ? I : never
    type UnionToOverloadFunction<U> =
        (U extends any ? (k: (x: U) => void) => void : never) extends
        ((k: infer I) => void) ? I : never

    export type ToRecordByField<Field extends string, Union extends Record<Field, any>> = { [K in Union[Field]]: Extract<Union, Record<Field, K>> }
    export type ToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
}

