const sName ='Abhi'
//const value can't be changed during life cycle of one execution
console.log(typeof(sName))
var age = 21
console.log(typeof(age))
var percent = 35.6
console.log(typeof(percent))
var isPassed = false
console.log(typeof(isPassed))
console.log(sName);
if (age > 20)
{
    var isPassed = true
    //value can be accessed outside of the block

}
console.log(isPassed)
if(age < 20){
    let percent = 40
     //value cannot be accessed outside of the block
    console.log(percent)
}
console.log(percent)