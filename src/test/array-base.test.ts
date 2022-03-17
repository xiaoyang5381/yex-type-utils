
type _arr_base_forward_test = Test<{
    "[] extends []?": [] extends [] ? true : false;
    "[] extends unknown[]?": [] extends unknown[] ? true : false;
    "[] extends any[]?": [] extends any[] ? true : false;
    "[] extends never[]?": [] extends never[] ? true : false;
    "[] extends void[]?": [] extends void[] ? true : false;
    "[] extends undefined[]?": [] extends undefined[] ? true : false;
    "[] extends null[]?": [] extends null[] ? true : false;
    "[] extends boolean[]?": [] extends boolean[] ? true : false;
    "[] extends string[]?": [] extends string[] ? true : false;
    "[] extends number[]?": [] extends number[] ? true : false;
    "[] extends object[]?": [] extends object[] ? true : false;
    "[] extends {}[]?": [] extends {}[] ? true : false;
    "[] extends [][]?": [] extends [][] ? true : false;
    "[] extends ((...args: any) => any)[]?": [] extends ((...args: any) => any)[] ? true : false
}>;


type unknown_arr_base_forward_test = Test<{
    "unknown[] extends []?": unknown[] extends [] ? true : false;
    "unknown[] extends unknown[]?": unknown[] extends unknown[] ? true : false;
    "unknown[] extends any[]?": unknown[] extends any[] ? true : false;
    "unknown[] extends never[]?": unknown[] extends never[] ? true : false;
    "unknown[] extends void[]?": unknown[] extends void[] ? true : false;
    "unknown[] extends undefined[]?": unknown[] extends undefined[] ? true : false;
    "unknown[] extends null[]?": unknown[] extends null[] ? true : false;
    "unknown[] extends boolean[]?": unknown[] extends boolean[] ? true : false;
    "unknown[] extends string[]?": unknown[] extends string[] ? true : false;
    "unknown[] extends number[]?": unknown[] extends number[] ? true : false;
    "unknown[] extends object[]?": unknown[] extends object[] ? true : false;
    "unknown[] extends {}[]?": unknown[] extends {}[] ? true : false;
    "unknown[] extends [][]?": unknown[] extends [][] ? true : false;
    "unknown[] extends ((...args: any) => any)[]?": unknown[] extends ((...args: any) => any)[] ? true : false
}>;


type any_arr_base_forward_test = Test<{
    "any[] extends []?": any[] extends [] ? true : false;
    "any[] extends unknown[]?": any[] extends unknown[] ? true : false;
    "any[] extends any[]?": any[] extends any[] ? true : false;
    "any[] extends never[]?": any[] extends never[] ? true : false;
    "any[] extends void[]?": any[] extends void[] ? true : false;
    "any[] extends undefined[]?": any[] extends undefined[] ? true : false;
    "any[] extends null[]?": any[] extends null[] ? true : false;
    "any[] extends boolean[]?": any[] extends boolean[] ? true : false;
    "any[] extends string[]?": any[] extends string[] ? true : false;
    "any[] extends number[]?": any[] extends number[] ? true : false;
    "any[] extends object[]?": any[] extends object[] ? true : false;
    "any[] extends {}[]?": any[] extends {}[] ? true : false;
    "any[] extends [][]?": any[] extends [][] ? true : false;
    "any[] extends ((...args: any) => any)[]?": any[] extends ((...args: any) => any)[] ? true : false
}>;


type never_arr_base_forward_test = Test<{
    "never[] extends []?": never[] extends [] ? true : false;
    "never[] extends unknown[]?": never[] extends unknown[] ? true : false;
    "never[] extends any[]?": never[] extends any[] ? true : false;
    "never[] extends never[]?": never[] extends never[] ? true : false;
    "never[] extends void[]?": never[] extends void[] ? true : false;
    "never[] extends undefined[]?": never[] extends undefined[] ? true : false;
    "never[] extends null[]?": never[] extends null[] ? true : false;
    "never[] extends boolean[]?": never[] extends boolean[] ? true : false;
    "never[] extends string[]?": never[] extends string[] ? true : false;
    "never[] extends number[]?": never[] extends number[] ? true : false;
    "never[] extends object[]?": never[] extends object[] ? true : false;
    "never[] extends {}[]?": never[] extends {}[] ? true : false;
    "never[] extends [][]?": never[] extends [][] ? true : false;
    "never[] extends ((...args: any) => any)[]?": never[] extends ((...args: any) => any)[] ? true : false
}>;


type void_arr_base_forward_test = Test<{
    "void[] extends []?": void[] extends [] ? true : false;
    "void[] extends unknown[]?": void[] extends unknown[] ? true : false;
    "void[] extends any[]?": void[] extends any[] ? true : false;
    "void[] extends never[]?": void[] extends never[] ? true : false;
    "void[] extends void[]?": void[] extends void[] ? true : false;
    "void[] extends undefined[]?": void[] extends undefined[] ? true : false;
    "void[] extends null[]?": void[] extends null[] ? true : false;
    "void[] extends boolean[]?": void[] extends boolean[] ? true : false;
    "void[] extends string[]?": void[] extends string[] ? true : false;
    "void[] extends number[]?": void[] extends number[] ? true : false;
    "void[] extends object[]?": void[] extends object[] ? true : false;
    "void[] extends {}[]?": void[] extends {}[] ? true : false;
    "void[] extends [][]?": void[] extends [][] ? true : false;
    "void[] extends ((...args: any) => any)[]?": void[] extends ((...args: any) => any)[] ? true : false
}>;


type undefined_arr_base_forward_test = Test<{
    "undefined[] extends []?": undefined[] extends [] ? true : false;
    "undefined[] extends unknown[]?": undefined[] extends unknown[] ? true : false;
    "undefined[] extends any[]?": undefined[] extends any[] ? true : false;
    "undefined[] extends never[]?": undefined[] extends never[] ? true : false;
    "undefined[] extends void[]?": undefined[] extends void[] ? true : false;
    "undefined[] extends undefined[]?": undefined[] extends undefined[] ? true : false;
    "undefined[] extends null[]?": undefined[] extends null[] ? true : false;
    "undefined[] extends boolean[]?": undefined[] extends boolean[] ? true : false;
    "undefined[] extends string[]?": undefined[] extends string[] ? true : false;
    "undefined[] extends number[]?": undefined[] extends number[] ? true : false;
    "undefined[] extends object[]?": undefined[] extends object[] ? true : false;
    "undefined[] extends {}[]?": undefined[] extends {}[] ? true : false;
    "undefined[] extends [][]?": undefined[] extends [][] ? true : false;
    "undefined[] extends ((...args: any) => any)[]?": undefined[] extends ((...args: any) => any)[] ? true : false
}>;


type null_arr_base_forward_test = Test<{
    "null[] extends []?": null[] extends [] ? true : false;
    "null[] extends unknown[]?": null[] extends unknown[] ? true : false;
    "null[] extends any[]?": null[] extends any[] ? true : false;
    "null[] extends never[]?": null[] extends never[] ? true : false;
    "null[] extends void[]?": null[] extends void[] ? true : false;
    "null[] extends undefined[]?": null[] extends undefined[] ? true : false;
    "null[] extends null[]?": null[] extends null[] ? true : false;
    "null[] extends boolean[]?": null[] extends boolean[] ? true : false;
    "null[] extends string[]?": null[] extends string[] ? true : false;
    "null[] extends number[]?": null[] extends number[] ? true : false;
    "null[] extends object[]?": null[] extends object[] ? true : false;
    "null[] extends {}[]?": null[] extends {}[] ? true : false;
    "null[] extends [][]?": null[] extends [][] ? true : false;
    "null[] extends ((...args: any) => any)[]?": null[] extends ((...args: any) => any)[] ? true : false
}>;


type boolean_arr_base_forward_test = Test<{
    "boolean[] extends []?": boolean[] extends [] ? true : false;
    "boolean[] extends unknown[]?": boolean[] extends unknown[] ? true : false;
    "boolean[] extends any[]?": boolean[] extends any[] ? true : false;
    "boolean[] extends never[]?": boolean[] extends never[] ? true : false;
    "boolean[] extends void[]?": boolean[] extends void[] ? true : false;
    "boolean[] extends undefined[]?": boolean[] extends undefined[] ? true : false;
    "boolean[] extends null[]?": boolean[] extends null[] ? true : false;
    "boolean[] extends boolean[]?": boolean[] extends boolean[] ? true : false;
    "boolean[] extends string[]?": boolean[] extends string[] ? true : false;
    "boolean[] extends number[]?": boolean[] extends number[] ? true : false;
    "boolean[] extends object[]?": boolean[] extends object[] ? true : false;
    "boolean[] extends {}[]?": boolean[] extends {}[] ? true : false;
    "boolean[] extends [][]?": boolean[] extends [][] ? true : false;
    "boolean[] extends ((...args: any) => any)[]?": boolean[] extends ((...args: any) => any)[] ? true : false
}>;


type string_arr_base_forward_test = Test<{
    "string[] extends []?": string[] extends [] ? true : false;
    "string[] extends unknown[]?": string[] extends unknown[] ? true : false;
    "string[] extends any[]?": string[] extends any[] ? true : false;
    "string[] extends never[]?": string[] extends never[] ? true : false;
    "string[] extends void[]?": string[] extends void[] ? true : false;
    "string[] extends undefined[]?": string[] extends undefined[] ? true : false;
    "string[] extends null[]?": string[] extends null[] ? true : false;
    "string[] extends boolean[]?": string[] extends boolean[] ? true : false;
    "string[] extends string[]?": string[] extends string[] ? true : false;
    "string[] extends number[]?": string[] extends number[] ? true : false;
    "string[] extends object[]?": string[] extends object[] ? true : false;
    "string[] extends {}[]?": string[] extends {}[] ? true : false;
    "string[] extends [][]?": string[] extends [][] ? true : false;
    "string[] extends ((...args: any) => any)[]?": string[] extends ((...args: any) => any)[] ? true : false
}>;


type number_arr_base_forward_test = Test<{
    "number[] extends []?": number[] extends [] ? true : false;
    "number[] extends unknown[]?": number[] extends unknown[] ? true : false;
    "number[] extends any[]?": number[] extends any[] ? true : false;
    "number[] extends never[]?": number[] extends never[] ? true : false;
    "number[] extends void[]?": number[] extends void[] ? true : false;
    "number[] extends undefined[]?": number[] extends undefined[] ? true : false;
    "number[] extends null[]?": number[] extends null[] ? true : false;
    "number[] extends boolean[]?": number[] extends boolean[] ? true : false;
    "number[] extends string[]?": number[] extends string[] ? true : false;
    "number[] extends number[]?": number[] extends number[] ? true : false;
    "number[] extends object[]?": number[] extends object[] ? true : false;
    "number[] extends {}[]?": number[] extends {}[] ? true : false;
    "number[] extends [][]?": number[] extends [][] ? true : false;
    "number[] extends ((...args: any) => any)[]?": number[] extends ((...args: any) => any)[] ? true : false
}>;


type object_arr_base_forward_test = Test<{
    "object[] extends []?": object[] extends [] ? true : false;
    "object[] extends unknown[]?": object[] extends unknown[] ? true : false;
    "object[] extends any[]?": object[] extends any[] ? true : false;
    "object[] extends never[]?": object[] extends never[] ? true : false;
    "object[] extends void[]?": object[] extends void[] ? true : false;
    "object[] extends undefined[]?": object[] extends undefined[] ? true : false;
    "object[] extends null[]?": object[] extends null[] ? true : false;
    "object[] extends boolean[]?": object[] extends boolean[] ? true : false;
    "object[] extends string[]?": object[] extends string[] ? true : false;
    "object[] extends number[]?": object[] extends number[] ? true : false;
    "object[] extends object[]?": object[] extends object[] ? true : false;
    "object[] extends {}[]?": object[] extends {}[] ? true : false;
    "object[] extends [][]?": object[] extends [][] ? true : false;
    "object[] extends ((...args: any) => any)[]?": object[] extends ((...args: any) => any)[] ? true : false
}>;


type object_literal_arr_base_forward_test = Test<{
    "{}[] extends []?": {}[] extends [] ? true : false;
    "{}[] extends unknown[]?": {}[] extends unknown[] ? true : false;
    "{}[] extends any[]?": {}[] extends any[] ? true : false;
    "{}[] extends never[]?": {}[] extends never[] ? true : false;
    "{}[] extends void[]?": {}[] extends void[] ? true : false;
    "{}[] extends undefined[]?": {}[] extends undefined[] ? true : false;
    "{}[] extends null[]?": {}[] extends null[] ? true : false;
    "{}[] extends boolean[]?": {}[] extends boolean[] ? true : false;
    "{}[] extends string[]?": {}[] extends string[] ? true : false;
    "{}[] extends number[]?": {}[] extends number[] ? true : false;
    "{}[] extends object[]?": {}[] extends object[] ? true : false;
    "{}[] extends {}[]?": {}[] extends {}[] ? true : false;
    "{}[] extends [][]?": {}[] extends [][] ? true : false;
    "{}[] extends ((...args: any) => any)[]?": {}[] extends ((...args: any) => any)[] ? true : false
}>;


type array_literal_arr_base_forward_test = Test<{
    "[][] extends []?": [][] extends [] ? true : false;
    "[][] extends unknown[]?": [][] extends unknown[] ? true : false;
    "[][] extends any[]?": [][] extends any[] ? true : false;
    "[][] extends never[]?": [][] extends never[] ? true : false;
    "[][] extends void[]?": [][] extends void[] ? true : false;
    "[][] extends undefined[]?": [][] extends undefined[] ? true : false;
    "[][] extends null[]?": [][] extends null[] ? true : false;
    "[][] extends boolean[]?": [][] extends boolean[] ? true : false;
    "[][] extends string[]?": [][] extends string[] ? true : false;
    "[][] extends number[]?": [][] extends number[] ? true : false;
    "[][] extends object[]?": [][] extends object[] ? true : false;
    "[][] extends {}[]?": [][] extends {}[] ? true : false;
    "[][] extends [][]?": [][] extends [][] ? true : false;
    "[][] extends ((...args: any) => any)[]?": [][] extends ((...args: any) => any)[] ? true : false
}>;


type arrow_func_arr_base_forward_test = Test<{
    "((...args: any) => any)[] extends []?": ((...args: any) => any)[] extends [] ? true : false;
    "((...args: any) => any)[] extends unknown[]?": ((...args: any) => any)[] extends unknown[] ? true : false;
    "((...args: any) => any)[] extends any[]?": ((...args: any) => any)[] extends any[] ? true : false;
    "((...args: any) => any)[] extends never[]?": ((...args: any) => any)[] extends never[] ? true : false;
    "((...args: any) => any)[] extends void[]?": ((...args: any) => any)[] extends void[] ? true : false;
    "((...args: any) => any)[] extends undefined[]?": ((...args: any) => any)[] extends undefined[] ? true : false;
    "((...args: any) => any)[] extends null[]?": ((...args: any) => any)[] extends null[] ? true : false;
    "((...args: any) => any)[] extends boolean[]?": ((...args: any) => any)[] extends boolean[] ? true : false;
    "((...args: any) => any)[] extends string[]?": ((...args: any) => any)[] extends string[] ? true : false;
    "((...args: any) => any)[] extends number[]?": ((...args: any) => any)[] extends number[] ? true : false;
    "((...args: any) => any)[] extends object[]?": ((...args: any) => any)[] extends object[] ? true : false;
    "((...args: any) => any)[] extends {}[]?": ((...args: any) => any)[] extends {}[] ? true : false;
    "((...args: any) => any)[] extends [][]?": ((...args: any) => any)[] extends [][] ? true : false;
    "((...args: any) => any)[] extends ((...args: any) => any)[]?": ((...args: any) => any)[] extends ((...args: any) => any)[] ? true : false
}>;

type _arr_base_backward_test = Test<{
    "[] extends []?": [] extends [] ? true : false;
    "unknown[] extends []?": unknown[] extends [] ? true : false;
    "any[] extends []?": any[] extends [] ? true : false;
    "never[] extends []?": never[] extends [] ? true : false;
    "void[] extends []?": void[] extends [] ? true : false;
    "undefined[] extends []?": undefined[] extends [] ? true : false;
    "null[] extends []?": null[] extends [] ? true : false;
    "boolean[] extends []?": boolean[] extends [] ? true : false;
    "string[] extends []?": string[] extends [] ? true : false;
    "number[] extends []?": number[] extends [] ? true : false;
    "object[] extends []?": object[] extends [] ? true : false;
    "{}[] extends []?": {}[] extends [] ? true : false;
    "[][] extends []?": [][] extends [] ? true : false;
    "((...args: any) => any)[] extends []?": ((...args: any) => any)[] extends [] ? true : false
}>;


type unknown_arr_base_backward_test = Test<{
    "[] extends unknown[]?": [] extends unknown[] ? true : false;
    "unknown[] extends unknown[]?": unknown[] extends unknown[] ? true : false;
    "any[] extends unknown[]?": any[] extends unknown[] ? true : false;
    "never[] extends unknown[]?": never[] extends unknown[] ? true : false;
    "void[] extends unknown[]?": void[] extends unknown[] ? true : false;
    "undefined[] extends unknown[]?": undefined[] extends unknown[] ? true : false;
    "null[] extends unknown[]?": null[] extends unknown[] ? true : false;
    "boolean[] extends unknown[]?": boolean[] extends unknown[] ? true : false;
    "string[] extends unknown[]?": string[] extends unknown[] ? true : false;
    "number[] extends unknown[]?": number[] extends unknown[] ? true : false;
    "object[] extends unknown[]?": object[] extends unknown[] ? true : false;
    "{}[] extends unknown[]?": {}[] extends unknown[] ? true : false;
    "[][] extends unknown[]?": [][] extends unknown[] ? true : false;
    "((...args: any) => any)[] extends unknown[]?": ((...args: any) => any)[] extends unknown[] ? true : false
}>;


type any_arr_base_backward_test = Test<{
    "[] extends any[]?": [] extends any[] ? true : false;
    "unknown[] extends any[]?": unknown[] extends any[] ? true : false;
    "any[] extends any[]?": any[] extends any[] ? true : false;
    "never[] extends any[]?": never[] extends any[] ? true : false;
    "void[] extends any[]?": void[] extends any[] ? true : false;
    "undefined[] extends any[]?": undefined[] extends any[] ? true : false;
    "null[] extends any[]?": null[] extends any[] ? true : false;
    "boolean[] extends any[]?": boolean[] extends any[] ? true : false;
    "string[] extends any[]?": string[] extends any[] ? true : false;
    "number[] extends any[]?": number[] extends any[] ? true : false;
    "object[] extends any[]?": object[] extends any[] ? true : false;
    "{}[] extends any[]?": {}[] extends any[] ? true : false;
    "[][] extends any[]?": [][] extends any[] ? true : false;
    "((...args: any) => any)[] extends any[]?": ((...args: any) => any)[] extends any[] ? true : false
}>;


type never_arr_base_backward_test = Test<{
    "[] extends never[]?": [] extends never[] ? true : false;
    "unknown[] extends never[]?": unknown[] extends never[] ? true : false;
    "any[] extends never[]?": any[] extends never[] ? true : false;
    "never[] extends never[]?": never[] extends never[] ? true : false;
    "void[] extends never[]?": void[] extends never[] ? true : false;
    "undefined[] extends never[]?": undefined[] extends never[] ? true : false;
    "null[] extends never[]?": null[] extends never[] ? true : false;
    "boolean[] extends never[]?": boolean[] extends never[] ? true : false;
    "string[] extends never[]?": string[] extends never[] ? true : false;
    "number[] extends never[]?": number[] extends never[] ? true : false;
    "object[] extends never[]?": object[] extends never[] ? true : false;
    "{}[] extends never[]?": {}[] extends never[] ? true : false;
    "[][] extends never[]?": [][] extends never[] ? true : false;
    "((...args: any) => any)[] extends never[]?": ((...args: any) => any)[] extends never[] ? true : false
}>;


type void_arr_base_backward_test = Test<{
    "[] extends void[]?": [] extends void[] ? true : false;
    "unknown[] extends void[]?": unknown[] extends void[] ? true : false;
    "any[] extends void[]?": any[] extends void[] ? true : false;
    "never[] extends void[]?": never[] extends void[] ? true : false;
    "void[] extends void[]?": void[] extends void[] ? true : false;
    "undefined[] extends void[]?": undefined[] extends void[] ? true : false;
    "null[] extends void[]?": null[] extends void[] ? true : false;
    "boolean[] extends void[]?": boolean[] extends void[] ? true : false;
    "string[] extends void[]?": string[] extends void[] ? true : false;
    "number[] extends void[]?": number[] extends void[] ? true : false;
    "object[] extends void[]?": object[] extends void[] ? true : false;
    "{}[] extends void[]?": {}[] extends void[] ? true : false;
    "[][] extends void[]?": [][] extends void[] ? true : false;
    "((...args: any) => any)[] extends void[]?": ((...args: any) => any)[] extends void[] ? true : false
}>;


type undefined_arr_base_backward_test = Test<{
    "[] extends undefined[]?": [] extends undefined[] ? true : false;
    "unknown[] extends undefined[]?": unknown[] extends undefined[] ? true : false;
    "any[] extends undefined[]?": any[] extends undefined[] ? true : false;
    "never[] extends undefined[]?": never[] extends undefined[] ? true : false;
    "void[] extends undefined[]?": void[] extends undefined[] ? true : false;
    "undefined[] extends undefined[]?": undefined[] extends undefined[] ? true : false;
    "null[] extends undefined[]?": null[] extends undefined[] ? true : false;
    "boolean[] extends undefined[]?": boolean[] extends undefined[] ? true : false;
    "string[] extends undefined[]?": string[] extends undefined[] ? true : false;
    "number[] extends undefined[]?": number[] extends undefined[] ? true : false;
    "object[] extends undefined[]?": object[] extends undefined[] ? true : false;
    "{}[] extends undefined[]?": {}[] extends undefined[] ? true : false;
    "[][] extends undefined[]?": [][] extends undefined[] ? true : false;
    "((...args: any) => any)[] extends undefined[]?": ((...args: any) => any)[] extends undefined[] ? true : false
}>;


type null_arr_base_backward_test = Test<{
    "[] extends null[]?": [] extends null[] ? true : false;
    "unknown[] extends null[]?": unknown[] extends null[] ? true : false;
    "any[] extends null[]?": any[] extends null[] ? true : false;
    "never[] extends null[]?": never[] extends null[] ? true : false;
    "void[] extends null[]?": void[] extends null[] ? true : false;
    "undefined[] extends null[]?": undefined[] extends null[] ? true : false;
    "null[] extends null[]?": null[] extends null[] ? true : false;
    "boolean[] extends null[]?": boolean[] extends null[] ? true : false;
    "string[] extends null[]?": string[] extends null[] ? true : false;
    "number[] extends null[]?": number[] extends null[] ? true : false;
    "object[] extends null[]?": object[] extends null[] ? true : false;
    "{}[] extends null[]?": {}[] extends null[] ? true : false;
    "[][] extends null[]?": [][] extends null[] ? true : false;
    "((...args: any) => any)[] extends null[]?": ((...args: any) => any)[] extends null[] ? true : false
}>;


type boolean_arr_base_backward_test = Test<{
    "[] extends boolean[]?": [] extends boolean[] ? true : false;
    "unknown[] extends boolean[]?": unknown[] extends boolean[] ? true : false;
    "any[] extends boolean[]?": any[] extends boolean[] ? true : false;
    "never[] extends boolean[]?": never[] extends boolean[] ? true : false;
    "void[] extends boolean[]?": void[] extends boolean[] ? true : false;
    "undefined[] extends boolean[]?": undefined[] extends boolean[] ? true : false;
    "null[] extends boolean[]?": null[] extends boolean[] ? true : false;
    "boolean[] extends boolean[]?": boolean[] extends boolean[] ? true : false;
    "string[] extends boolean[]?": string[] extends boolean[] ? true : false;
    "number[] extends boolean[]?": number[] extends boolean[] ? true : false;
    "object[] extends boolean[]?": object[] extends boolean[] ? true : false;
    "{}[] extends boolean[]?": {}[] extends boolean[] ? true : false;
    "[][] extends boolean[]?": [][] extends boolean[] ? true : false;
    "((...args: any) => any)[] extends boolean[]?": ((...args: any) => any)[] extends boolean[] ? true : false
}>;


type string_arr_base_backward_test = Test<{
    "[] extends string[]?": [] extends string[] ? true : false;
    "unknown[] extends string[]?": unknown[] extends string[] ? true : false;
    "any[] extends string[]?": any[] extends string[] ? true : false;
    "never[] extends string[]?": never[] extends string[] ? true : false;
    "void[] extends string[]?": void[] extends string[] ? true : false;
    "undefined[] extends string[]?": undefined[] extends string[] ? true : false;
    "null[] extends string[]?": null[] extends string[] ? true : false;
    "boolean[] extends string[]?": boolean[] extends string[] ? true : false;
    "string[] extends string[]?": string[] extends string[] ? true : false;
    "number[] extends string[]?": number[] extends string[] ? true : false;
    "object[] extends string[]?": object[] extends string[] ? true : false;
    "{}[] extends string[]?": {}[] extends string[] ? true : false;
    "[][] extends string[]?": [][] extends string[] ? true : false;
    "((...args: any) => any)[] extends string[]?": ((...args: any) => any)[] extends string[] ? true : false
}>;


type number_arr_base_backward_test = Test<{
    "[] extends number[]?": [] extends number[] ? true : false;
    "unknown[] extends number[]?": unknown[] extends number[] ? true : false;
    "any[] extends number[]?": any[] extends number[] ? true : false;
    "never[] extends number[]?": never[] extends number[] ? true : false;
    "void[] extends number[]?": void[] extends number[] ? true : false;
    "undefined[] extends number[]?": undefined[] extends number[] ? true : false;
    "null[] extends number[]?": null[] extends number[] ? true : false;
    "boolean[] extends number[]?": boolean[] extends number[] ? true : false;
    "string[] extends number[]?": string[] extends number[] ? true : false;
    "number[] extends number[]?": number[] extends number[] ? true : false;
    "object[] extends number[]?": object[] extends number[] ? true : false;
    "{}[] extends number[]?": {}[] extends number[] ? true : false;
    "[][] extends number[]?": [][] extends number[] ? true : false;
    "((...args: any) => any)[] extends number[]?": ((...args: any) => any)[] extends number[] ? true : false
}>;


type object_arr_base_backward_test = Test<{
    "[] extends object[]?": [] extends object[] ? true : false;
    "unknown[] extends object[]?": unknown[] extends object[] ? true : false;
    "any[] extends object[]?": any[] extends object[] ? true : false;
    "never[] extends object[]?": never[] extends object[] ? true : false;
    "void[] extends object[]?": void[] extends object[] ? true : false;
    "undefined[] extends object[]?": undefined[] extends object[] ? true : false;
    "null[] extends object[]?": null[] extends object[] ? true : false;
    "boolean[] extends object[]?": boolean[] extends object[] ? true : false;
    "string[] extends object[]?": string[] extends object[] ? true : false;
    "number[] extends object[]?": number[] extends object[] ? true : false;
    "object[] extends object[]?": object[] extends object[] ? true : false;
    "{}[] extends object[]?": {}[] extends object[] ? true : false;
    "[][] extends object[]?": [][] extends object[] ? true : false;
    "((...args: any) => any)[] extends object[]?": ((...args: any) => any)[] extends object[] ? true : false
}>;


type object_literal_arr_base_backward_test = Test<{
    "[] extends {}[]?": [] extends {}[] ? true : false;
    "unknown[] extends {}[]?": unknown[] extends {}[] ? true : false;
    "any[] extends {}[]?": any[] extends {}[] ? true : false;
    "never[] extends {}[]?": never[] extends {}[] ? true : false;
    "void[] extends {}[]?": void[] extends {}[] ? true : false;
    "undefined[] extends {}[]?": undefined[] extends {}[] ? true : false;
    "null[] extends {}[]?": null[] extends {}[] ? true : false;
    "boolean[] extends {}[]?": boolean[] extends {}[] ? true : false;
    "string[] extends {}[]?": string[] extends {}[] ? true : false;
    "number[] extends {}[]?": number[] extends {}[] ? true : false;
    "object[] extends {}[]?": object[] extends {}[] ? true : false;
    "{}[] extends {}[]?": {}[] extends {}[] ? true : false;
    "[][] extends {}[]?": [][] extends {}[] ? true : false;
    "((...args: any) => any)[] extends {}[]?": ((...args: any) => any)[] extends {}[] ? true : false
}>;


type array_literal_arr_base_backward_test = Test<{
    "[] extends [][]?": [] extends [][] ? true : false;
    "unknown[] extends [][]?": unknown[] extends [][] ? true : false;
    "any[] extends [][]?": any[] extends [][] ? true : false;
    "never[] extends [][]?": never[] extends [][] ? true : false;
    "void[] extends [][]?": void[] extends [][] ? true : false;
    "undefined[] extends [][]?": undefined[] extends [][] ? true : false;
    "null[] extends [][]?": null[] extends [][] ? true : false;
    "boolean[] extends [][]?": boolean[] extends [][] ? true : false;
    "string[] extends [][]?": string[] extends [][] ? true : false;
    "number[] extends [][]?": number[] extends [][] ? true : false;
    "object[] extends [][]?": object[] extends [][] ? true : false;
    "{}[] extends [][]?": {}[] extends [][] ? true : false;
    "[][] extends [][]?": [][] extends [][] ? true : false;
    "((...args: any) => any)[] extends [][]?": ((...args: any) => any)[] extends [][] ? true : false
}>;


type arrow_func_arr_base_backward_test = Test<{
    "[] extends ((...args: any) => any)[]?": [] extends ((...args: any) => any)[] ? true : false;
    "unknown[] extends ((...args: any) => any)[]?": unknown[] extends ((...args: any) => any)[] ? true : false;
    "any[] extends ((...args: any) => any)[]?": any[] extends ((...args: any) => any)[] ? true : false;
    "never[] extends ((...args: any) => any)[]?": never[] extends ((...args: any) => any)[] ? true : false;
    "void[] extends ((...args: any) => any)[]?": void[] extends ((...args: any) => any)[] ? true : false;
    "undefined[] extends ((...args: any) => any)[]?": undefined[] extends ((...args: any) => any)[] ? true : false;
    "null[] extends ((...args: any) => any)[]?": null[] extends ((...args: any) => any)[] ? true : false;
    "boolean[] extends ((...args: any) => any)[]?": boolean[] extends ((...args: any) => any)[] ? true : false;
    "string[] extends ((...args: any) => any)[]?": string[] extends ((...args: any) => any)[] ? true : false;
    "number[] extends ((...args: any) => any)[]?": number[] extends ((...args: any) => any)[] ? true : false;
    "object[] extends ((...args: any) => any)[]?": object[] extends ((...args: any) => any)[] ? true : false;
    "{}[] extends ((...args: any) => any)[]?": {}[] extends ((...args: any) => any)[] ? true : false;
    "[][] extends ((...args: any) => any)[]?": [][] extends ((...args: any) => any)[] ? true : false;
    "((...args: any) => any)[] extends ((...args: any) => any)[]?": ((...args: any) => any)[] extends ((...args: any) => any)[] ? true : false
}>;
