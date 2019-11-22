import test from "ava"
import englishChars from "."

test("main", (t) => {
    t.is(typeof englishChars.all, "string")
})
