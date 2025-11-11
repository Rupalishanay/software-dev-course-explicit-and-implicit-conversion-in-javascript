/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2;
console.log("The result is: " + result);
//Javascript converts String("5") into numbers before perform the operation

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}
//Output : This is valid!

let isInvalid = Boolean("");
if (isInvalid){
  console.log("This is invalid!");
}
//Values like  0 ,  null ,  undefined ,  NaN , and  ""  (empty string) are falsy (convert to  false ), while everything else is truthy (convert to  true ).

let age = "25";
//let totalAge = age + 5;
//console.log("Total Age: " + totalAge);
//"+" operator perform string concatination in above example 5 is converted to "5" and concatinate with "25"
//Output : 255

let totalAge=Number(age) + 5;
console.log("Total Age: " + totalAge);
//"25" String is converted into Number using Number() then perform the Addition operation.