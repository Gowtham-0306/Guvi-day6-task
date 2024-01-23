class uberPrice {
 // Constructor to initialize the uberprice class with base price , cost per kms
constructor (basePrice , costPerKms) {
if (costPerKms==0 || costPerKms==undefined ) {
throw new Error("Invalid base price or cost per km");
}
this.basePrice = basePrice;
this.costPerKms=costPerKms;
}

//the below farecalculator method is to calculate the fare and return the calculated value

fareCalculator (distanceTravelled) {

    if(distanceTravelled!=0 && distanceTravelled!=undefined){

return `The taxi bill is ${this.basePrice + (distanceTravelled* this.costPerKms)} RS`
    }
    else 
{
    throw new Error("please enter correct distance traveled kms");
}

}


}
// creating instance for the uberprice class
var taxi= new uberPrice(5,10);

// entering the kmsTravelled here
var kms = 2;
var taxiBill = taxi.fareCalculator(kms);
//printing the taxi bill
console.log(taxiBill);



// o/p:
// The taxi bill is 25 RS
