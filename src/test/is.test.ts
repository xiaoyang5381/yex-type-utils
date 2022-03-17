type IsAny_test = Test<{
    "IsAny<any>?":IsAny<any>;
    "IsAny<unknown>?":IsAny<unknown>;
    "IsAny<never>?":IsAny<never>;
    "IsAny<void>?":IsAny<void>;
    "IsAny<undefined>?":IsAny<undefined>;
    "IsAny<null>?":IsAny<null>;
    "IsAny<boolean>?":IsAny<boolean>;
    "IsAny<string>?":IsAny<string>;
    "IsAny<number>?":IsAny<number>;
    "IsAny<object>?":IsAny<object>;
    "IsAny<{}>?":IsAny<{}>;
    "IsAny<[]>?":IsAny<[]>;
    "IsAny<((...args: any) => any)>?":IsAny<((...args: any) => any)>;
}>;

// unknown,
// any,
// never,
// void,
// undefined,
// null,
// boolean,
// string,
// number,
// object,
// {},
// [],
// ((...args: any) => any),
