const obj = {a: 1, b: 2, c: 3, soma() { return a + b + c }} // A função soma é descartada no JSON
console.log(JSON.stringify(obj))

//console.log(JSON.parse("{'a': '1', 'b': '2', 'c': '3'}"))
console.log(JSON.parse('{"a": 1, "b": 2}'))
console.log(JSON.parse('{"a": 2.5, "b": "String", "c": true, "d": {}, "e": []}'))