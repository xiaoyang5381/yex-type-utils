type IsAny<T> = boolean extends (T extends never ? true : false) ? true : false;
type IsNever<T> = T extends never ? true : false;
type IsBoolean<T> = Is<T,boolean>
type IsTrue<T> = Is<T,true>
type IsFalse<T> = Is<T,false>
type IsNumber<T> = Is<T,number>;
type IsString<T> = Is<T,string>;
type IsFunction<T> = Is<T, (...args:any)=>any>

type Is<L, R> = If<
    And<Not<IsAny<L>>, Not<IsAny<R>>>,
    If<IsNever<L>, Equal<L, R>, false>,
    false>


