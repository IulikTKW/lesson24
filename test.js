
// const obj = {
//     a: 'key',
//     b: {
//         c: {
//             e: 'value'
//         }
//     }
// }

// const testObj = {
//     a: 'value',
//     method: () => console.log('pass')
// }

// testObj.method()

// const test = JSON.stringify(testObj)
// const parsedObj = JSON.parse(test)

// parsedObj.a = 'new value'

// parsedObj.method()

// console.log(testObj)
// console.log(parsedObj)

// const objCopy = JSON.stringify(obj)

// console.log(JSON.parse(objCopy))

// const obj1 = JSON.parse(JSON.stringify(obj))

// obj1.b.c.e = 'new'

// console.log(obj)
// console.log(obj1)

const obj = {
    a: 'value'
}

localStorage.setItem('item', JSON.stringify(obj))

const valueFromStorage = JSON.parse(localStorage.getItem('item'))

valueFromStorage.a = 'new value'

localStorage.setItem('item', JSON.stringify(valueFromStorage))



// creem obj
// adaugam in localStorage
// il scoatem din localStorage
// il modificam
// il adaugam din nou pe localStorage
