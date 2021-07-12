interface A {
    a: number,
    b: string
}
const a: A = {
    a: 1, b: ''
}
type MyPartial<T> = {
    [P in keyof T]?: T[P]
}
const b: MyPartial<A> = {
    a: 1,
}
console.log(a)
