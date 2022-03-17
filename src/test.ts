type Test<R extends Record<string,boolean>> = {
    [K in keyof R]:boolean extends R[K]?"Unknown":R[K] extends true?"True":"False"
}

type TestStringRecord<R extends Record<string,boolean>> = Tuple.Join<Assert.Type<Union.ToTuple<TestRecordToUnion<R>>,string[]>,'{','}',','>;
type TestRecordToUnion<R extends Record<string,boolean>> = {[K in keyof R]:`${Assert.String<K>}:${R[K]}`}[keyof R];
