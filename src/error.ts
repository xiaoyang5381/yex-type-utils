type CodingError<T extends string, MSG extends string, V extends object = {}> = { message: MSG, type: T } & V
type IsCodingError<T> = LessThanEqual<T, CodingError<string,string>>
// Is there any other type error? So granularity of type should be more finer
// E.g. type:"number_error" ... type:"overload_error"

// export type CodingTypeError<MSG extends string, V = any> = { 
//     __CodingTypeErrorBrand: any, 
//     message: MSG, 
//     type: "TYPE_ERROR", 
//     value: V 
// }
// export type IsCodingTypeError<T> = LessThanEqual<T, CodingTypeError<string>>
