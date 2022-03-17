type LessThanEqual<L, R> = If<Or<IsAny<L>,IsAny<R>>,true,L extends R?true:false>
type Equal<L, R> = And<LessThanEqual<L, R>, LessThanEqual<R, L>>;
type Or<L extends boolean, R extends boolean> = L extends true ? true : R extends true ? true : false
type And<L extends boolean, R extends boolean> = L extends true ? R extends true ? true : false : false
type Not<L extends boolean> = L extends true ? false : true;
type NotEqual<L, R> = Not<And<LessThanEqual<L, R>, LessThanEqual<R, L>>>
type If<C extends boolean, L, R> = C extends true ? L : R;
