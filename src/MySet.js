class MySet extends Set{

    constructor(arr) {
        super(arr);
        this.originalArray = arr;
    }

    add(val) {
        super.add(val);
        console.log(`added ${val} to the set!`);
    }

    toArray() {
        return Array.from(this);
    }

    reset() {
        return new MySet(this.originalArray);
    }
    
    get originalSize() {
        return this.originalArray.length;
    }
}

const s = new MySet([1, 2, 3, 4, 5]);
s.add(1); s.add(1); s.add(1);
console.log('s should have 5 numbers and acturally has:', s.size);
console.log('s should contain 5', s.has(5));
s.add(6);
console.log('s should contain 6', s.has(6));
console.log('s should have 6 memebers and acturally has:', s.size);
 
const o = {
    a:'a',
    b:'b',
    obj: {
        key:'key',
    }
}
const o2 = Object.assign({}, o);
const o3 = deepCopy(o);
o2.obj.key = 'new value';

function deepCopy(obj) {
    const keys = Object.keys(obj);
    const newObject = {};
    for(var key of keys ) {
        if(typeof obj[key] === 'object') {
            newObject[key] = deepCopy(obj[key]);
        } else {
            newObject[key] = obj[key];
        } 
    }
    return newObject;
}

function makeFunctionArray() {
    const arr = [];
    for(var i = 0; i < 5; i++) {
        arr.push((function(i) {
            return function() {console.log(i);}}
            )(i)); //IIFE
    }
    return arr;
}


function makeHellFunction() {
    const message =  'hello!'
    function sayHello() {
        console.log(message);
    }

    return sayHello;
}

const counter = (function() {
    let count = 0;
    return {
        inc: function() {count = count + 1;},
        get: function() {console.log(count);}
    }
})();

function map(arr, fn) {
    const newArr = [];

    for(let i = 0; i < arr.length; i++) {
        let val = arr[i];
        newArr.push(fn(val));
    }
    return newArr;
}

const arr = makeFunctionArray();
arr[0]();

