var Name=prompt("Name?")

var English= prompt("English Marks?")
var Urdu= prompt("Urdu Marks?")
var Chemistry= prompt("Chemistry Marks?")
var Physics= prompt("Physics Marks?")
var TotalMarks=English+Urdu+Chemistry+Physics

if(TotalMarks<=120){
    alert("You are Fail or D grade " )
}

if(TotalMarks>=120){
    alert("You are Passed or C grade" )
}

if(TotalMarks>=180){
    alert("You are Passed or B grade" )
}

if(TotalMarks>=290){
    alert("You are Passed or A grade" )
}
if(TotalMarks>=350){
    alert("You are Passed or A-1 grade" )
}
console.log(Name)
console.log(English)
console.log(Urdu)
console.log(Chemistry)
console.log(Physics)
console.log(TotalMarks)


