namespace Assert{
    export type Type<K, Guard> = K extends Guard ? K : never
    export type NotType<K, Guard> = K extends Guard ? never : K;
    export type String<K> = Type<K, string>;
    export type Primitive<K> = Type<K, Primitives>;

}