function createInputElement(type,className="",id="",placeholder="",labelText=""){
    const label=document.createElement("label")
    var input=document.createElement("input")
    label.for=id
    label.innerText=labelText
    input.type=type
    input.className=className
    input.style=style
    input.id=id
    input.placeholder=placeholder
    const div=document.createElement("div")
    div.appendChild("label")
    div.appendChild("input")
}
var myForm=document.getElementById("id11")
myForm.appendChild(
    createInputElement("email","form-control","user-email","enter email","Email"))
myForm.appendChild(
        createInputElement("paasword","form-control","pass","enter password","Paaword"))
var btn=document.createElement("button")
btn.className="btn btn-primary btn-clock"
btn.innerText="Submit"
myForm.appendChild(btn)


//for accessing
    
function handleSubmit(){
    event.preventDefault()
    var formDetails{
      email:document.getElementById("user-email").value
      firstname:document.getElementById("fname").value
      password:document.getElementById("user-password").value
    }
}
btn.addEventListener("click",handleSubmit)