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

    for (var i = 0; i < exampleObjects.length; i++) {
        exampleArray.push(
            function() {
               console.log(i);
               return exampleObjects[i]
            }
        )
    }

    return exampleArray.map((func) => func());
}

console.log('result:', fillArray()) // [undefined, undefined] unexpected due to variable I having value of 2
