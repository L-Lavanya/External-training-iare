const testbox=document.getElementById("Output")
function gainAccess(event){
    const curElement=event.target
    var value=curElement.innerText()
    var prevValue=textbox.value//for retaining previous clicked value
    if(value=="="){
        const result=eval(prevValue)
        textbox.value=result
    }
    else{
        console.log(prevValue);
        testbox.value=prevValue+""+value;//for getting value in o/p area
    }
    textbox.value=""//for clear button
}
const boxes=document.querySelectorAll(".calc-box");
//console.log(boxes);
for(const element of boxes){
    element.addEventListener("click",gainAccess)
}