//assignment Q1
const addNum = () => {
   const num= parseInt(prompt("Enter Number"))
    const nested = () => {
        let myNum= 5
       
return myNum
    }
    console.log(nested()+num)
   
}

const button1 = document.getElementById('btn1');
button1.addEventListener('click', ()=>{console.log(addNum())})

//assignment Q2 

const arr = [1, 3, 5, 8, 9, 10];

const search = (doc) => {
    let value = 0
    value = prompt("PLEASE INPUT A NUMBER YOU WANT TO CHECK included numbers are 1,3,5,8,9,10");
    a = parseInt(value)
    //   for(let i=0 ; i<arr.length ;i++){
    //     if(arr[i]==value){
    //         alert("Number exist")
    //         break;
    //     }

    //   }
    let b = arr.find((doc) => {
        return doc == value
    })
    console.log(b ? true : false)

}
const button2 = document.getElementById("btn2");
button2.addEventListener('click', search)

//asignment Q3

const addParagraph = () => {
    console.log("new")
    let node = document.createElement("p")
    let nodeText = document.createTextNode("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially")
    node.appendChild(nodeText)
    document.getElementById("container").appendChild(node)
}

const button3 = document.getElementById("btn3");
button3.addEventListener('click', addParagraph);

//asignment Q4

const addLine =()=>{
 let line= document.createElement("li");
 let a=prompt("Please Add some Text");
 let lineText= document.createTextNode(a);
 line.appendChild(lineText);
 document.getElementById("list").appendChild(line)



}
const button4 = document.getElementById("btn4");
button4.addEventListener('click', addLine);
//asignment Q5

  const changeColor =()=>{
    document.getElementById("color_div").style.backgroundColor="red"
  }

const button5 = document.getElementById("btn5");
button5.addEventListener('click', changeColor);
//asignment Q6


     const addObj =()=>{
        console.log(localStorage)
        const key1=prompt("insert key")
        const name =prompt("Please Insert Name");
        const age =prompt("Please Insert Age")
        localStorage.setItem(key1,JSON.stringify({name,age}))
     }
   
const button6 = document.getElementById("btn6");
button6.addEventListener('click', addObj);

//asignment Q7
const getObj=()=>{
    let key1 =prompt("Please Enter Key")
  let a=  localStorage.getItem(key1)
  let finalobj=JSON.parse(a)
    console.log(finalobj)
}
const button7 = document.getElementById("btn7");
button7.addEventListener('click', getObj);
//asignment Q8
  
  const add=()=>{

    const name =prompt("enter Name")
    const age = prompt("enter Age")
    const className =prompt("Enter Class")
    let obj ={
        name,
        age,
        class:className
    }
    localStorage.setItem("name",name)
    localStorage.setItem("age",age)
    localStorage.setItem("class",className)

  }
const button8 = document.getElementById("btn8");
button8.addEventListener('click', add);