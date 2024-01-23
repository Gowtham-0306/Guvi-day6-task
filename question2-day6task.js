class circle {
constructor (radius=1 , color="yellow") {
this.radius = radius;
this.color= color;

}



setCircle (radius , color) {

    this.radius = radius;
    this.color=color;
        
    }
    getRadius() {

return `Radius of the circle ${this.radius}`


    }

    set modifiedRadius(newRadius) {

    this.radius=newRadius;


    }
    

        
getColour () {


return `colour of the circle is ${this.color}`


}

set modifiedcolour (newColour) {

this.color=newColour;

}
toString () {


    return `Circle radius is ${this.radius} and colour is ${this.color}`
}
getArea () {
var pi=3.14;
return `The area of the circle with radius ${this.radius} is ${pi*(Math.pow(this.radius,2))}`


}

getCircumference() {
var pi =3.14;
     
    return 2*(pi)*this.radius
}


}




var obj1 = new circle(6.2, "black");
console.log(obj1.getRadius());

obj1.modifiedRadius= 4.2;
console.log("The newly updated " +obj1.getRadius());
console.log(obj1.getColour());
obj1.modifiedcolour="red";
console.log("The newly updated " +obj1.getColour());
console.log(obj1.toString());
console.log(obj1.getArea());
console.log("The cirumference of the circle with radius " + obj1.radius + " is " + obj1.getCircumference());



// o/p:
// Radius of the circle 6.2
// The newly updated Radius of the circle 4.2
// colour of the circle is black
// The newly updated colour of the circle is red
// Circle radius is 4.2 and colour is red
// The area of the circle with radius 4.2 is 55.3896
// The cirumference of the circle with radius 4.2 is 26.376
//