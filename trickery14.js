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
            (function() {
                // added an IIFE in in order time when the variable i is read
                var item = exampleObjects[i]
                return function() {
                    return item;
                }
            })()
        )
    }

    return exampleArray.map((func) => func());
}

console.log(fillArray()) // due to IIFE will final array will contain all elements of exampleObjects, as expected
