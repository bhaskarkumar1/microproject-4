
// let btn=document.querySelector(".svn")
// btn.addEventListener("click",function handleClick(){
//     // console.log(btn.innerHTML)
//    exp= exp.concat(btn.innerHTML)
//     display=document.querySelector(".screen h1")
//     display.innerHTML=exp
// })

let exp=""
let display=document.querySelector(".screen h1")

function append(value){

    if(("0+-*/".includes(value)) && (exp==="")){

    }
    else{
        exp=exp.concat(value)

    display.innerHTML=exp
    console.log(value ,"clicked")
    }




    
}



// reset button 

let reset=document.querySelector("#reset")

reset.addEventListener("click",function reset(){
    exp=""
    display.innerHTML=""
})





//evaluate funcn
let evaluate=document.querySelector(".equal")
evaluate.addEventListener("click", function evaluateExp(){
    let result=eval(exp)
    console.log(exp)
    display.innerHTML=result
})


//delete functionality

let del=  document.querySelector(".delete")
del.addEventListener("click", function deleteLast(){
     exp = exp.slice(0, -1);
     display.innerHTML=exp

})