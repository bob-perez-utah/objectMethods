var obj = {
    name: "Robert",
    age: 61,
    isCool: true,
    friends: ["bill", "jane", "john"],
    add: function(x,y) {
        return x + y;
    },

    multiply: function(a,b) {
        return a * b;
    },
}

var dogSpace = {
    speak: function() {
        return "WOOF!";
    }

}

var catSpace = {
    speak: function() {
        return "MEOW!";
    }
}


console.log("obj.name = " + obj.name);
console.log("obj.age = " + obj.age);
console.log("obj.isCool = " + obj.isCool);
console.log("obj.friends = " + obj.friends);
console.log(obj.add(19,2));
console.log(obj.multiply(19,2));
console.log(dogSpace.speak());
console.log(catSpace.speak());
