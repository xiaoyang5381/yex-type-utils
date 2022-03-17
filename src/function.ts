namespace FunctionType{

export type IsOverload<T extends (...args: any) => any> =
    If<IsFunction<T>,
        (T extends { (...args: infer P1): infer R1; (...args: infer P2): infer R2 } ?
            Or<NotEqual<P1, P2>, NotEqual<R1, R2>> :
            false),
        false>

      export  type Unary<I,O> = (v:I)=>O;
}
// type ReturnTypeWithArgs<T extends (...args: any[]) => any, ARGS_T> =
//     Extract<
//         T extends { (...args: infer A1): infer R1; (...args: infer A2): infer R2; (...args: infer A3): infer R3; (...args: infer A4): infer R4; } ? [A1, R1] | [A2, R2] | [A3, R3] | [A4, R4] :
//         T extends { (...args: infer A1): infer R1; (...args: infer A2): infer R2; (...args: infer A3): infer R3; } ? [A1, R1] | [A2, R2] | [A3, R3] :
//         T extends { (...args: infer A1): infer R1; (...args: infer A2): infer R2; } ? [A1, R1] | [A2, R2] :
//         T extends { (...args: infer A1): infer R1; } ? [A1, R1] :
//         never,
//         [ARGS_T, any]
//     >[1]