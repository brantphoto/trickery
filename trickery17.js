function fillArray() {
    var exampleArray = [];
    var exampleObjects = [
        {
            id: '3123123123',
            name: 'Charles',
        },
        {
            id: '0000023123',
            name: 'Kim',
        },
    ]

    for (let i = 0, const x = 5; i < exampleObjects.length; i++) {
        exampleArray.push(
            function() {
               console.log(i);
               return exampleObjects[i]
            }
        )
    }

    return exampleArray.map((func) => func());
}

console.log('result:', fillArray()) // you can't variable types in for loop expression
