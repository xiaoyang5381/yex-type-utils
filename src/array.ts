namespace ArrayType {
    export type Flat<Arr extends Array<any>, Depth extends number | void = void> =
        Depth extends number ?
        (Depth extends 1 ?
            FlatOne<Arr> :
            (IsSafeDepth<Depth> extends true ?
                FlatWithDepth<Arr, Depth> :
                FlatAll<Arr>)) :
        FlatAll<Arr>;

    export type Of<T, Depth extends number = 1> =
        IsSafeDepth<Depth> extends true ?
        PackWithDepth<T, Depth> :
        never;


    type PackWithDepth<T, Depth extends number> = Depth extends 0 ? T : PackWithDepth<Array<T>, Depths[Depth]>;

    // FIXME 
    // buggy :dead loop [], any[]=> any[]|[], never[]=>never, boolean[] => true[]|false[]
    // It is hard to check any[] and never[]
    type FlatOne<Arr extends Array<any>> = Arr extends [] ? [] :
        If<Not<IsNever<Arr>>,
            If<Not<LessThanEqual<Arr, []>>,
                Arr extends Array<infer Item> ? Item : Arr,
                []>,
            never
        >

    type FlatWithDepth<Arr extends Array<any>, Depth extends number> = Depth extends 0 ? Arr[] : FlatWithDepth<FlatOne<Arr>, Depths[Depth]>;

    type FlatAll<Arr extends Array<any>> =
        Arr extends [] ? [] :
        If<Not<IsNever<Arr>>,
            If<Not<LessThanEqual<Arr, []>>,
                Arr extends Array<any> ? FlatAll<FlatOne<Arr>> : Arr[],
                If<IsAny<Arr>, any[], []>>,
            never
        >

    // This error prone implement could flat array with more depths.
    // type FlatWithDepth<Arr extends Array<any>, Depth extends number> = {
    //     recur: FlatWithDepth<FlatOne<Arr>, Depths[Depth]>;
    //     res: Arr;
    // }[Depth extends 0 ? "res" : "recur"];
    // type FlatAll<Arr extends Array<any>> = {
    //     recur: FlatAll<FlatOne<Arr>>;
    //     res: Arr;
    // }[Arr extends Array<any> ? 'recur' : 'res'];

 


    export type IsSafeDepth<Depth extends number> = Depths[Depth] extends undefined ? false : true;
    type Depths = [-1, ...Sizes];
    type Sizes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
        19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
    ];
}


