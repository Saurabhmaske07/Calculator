let result=document.getElementById("output-screen")
function display(num){
    result.value += num
}
function Clear() {
    result.value=""
}

function del() {
    result.value=result.value.slice(0,-1)
}

function calculate(){
    try{
        result.value=eval(result.value)
    }
    catch{
        alert("expression error!!!")
    }
}