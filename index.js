const data=[
    {
        question:"Which of the following is a linear data structure?",
        option1:"Arrays",
        option2:"AVL Trees",
        option3:"Binary Trees",
        option4:"Graph",
        answer:"option1",
    },
    {
        question:"Which of the following is fastest search algorithm?",
        option1:"LinearSearch",
        option2:"BinarySearch",
        option3:"OptionalSearch",
        option4:"BinarySort",
        answer:"option2",

    },
    {
        question:"Which of the following is a LIFO?",
        option1:"Graph",
        option2:"Queue",
        option3:"LinkedList",
        option4:"Stack",
        answer:"option4",
    },
    {
        question:"What is the time complexity of Binary Search?",
        option1:"nlog(n)",
        option2:"n2",
        option3:"n!",
        option4:"log(n)",
        answer:"option4",

    },
    {
        question:"which of the following uses divide and conquer technique?",
        option1:"Selection Sort",
        option2:"Merge Sort",
        option3:"Bubble Sort",
        option4:"Insertion Sort",
        answer:"option2",
    },
    {
        question:"How can we describe an array in the best possible way?",
        option1:"The Array shows a hierarchical structure.",
        option2:"Arrays are immutable.",
        option3:"Container that stores the elements of similar types",
        option4:"The Array is not a data structure",
        answer:"option3",

    },
    {
        question:" Which of the following is the correct way of declaring an array",
        option1:"int javatpoint[10]",
        option2:"int javatpoint",
        option3:"javatpoint{20}",
        option4:"Sarray javatpoint[10]",
        answer:"option1",
    },
    {
        question:"Which of the following highly uses the concept of an array?",
        option1:"Binary Search tree",
        option2:"Caching",
        option3:"Spatial locality",
        option4:"Scheduling of Processes",
        answer:"option4",

    },
    {
        question:"Which of the following is a FIFO?",
        option1:"Graph",
        option2:"Queue",
        option3:"LinkedList",
        option4:"Stack",
        answer:"option2",
    },
    {
        question:"What is the time complexity of Linear Search?",
        option1:"nlog(n)",
        option2:"n2",
        option3:"n",
        option4:"log(n)",
        answer:"option3",

    },

];
let score=0;
let count=-1;
let temp=null;


//submit button
let btn=document.createElement("button");
btn.innerText="Submit";
btn.style.backgroundColor="#ffc107";
btn.onclick=submit;
btn.style.fontSize="20px";
btn.style.borderRadius="5px";
btn.style.border="0px";
btn.style.padding="10px";



//next button
let nxt=document.createElement("button");
nxt.innerText="Next";
nxt.style.backgroundColor="#28a745";
nxt.onclick=next;
nxt.style.borderRadius="5px";
nxt.style.fontSize="20px";
nxt.style.border="0px";
nxt.style.padding="10px";
nxt.style.color="white";


//restart button
let rst=document.createElement("button");
rst.innerText="Restart";
rst.style.backgroundColor="#17a2b8";
rst.onclick=restart;
rst.style.margin="0 10%"
rst.style.borderRadius="5px";
rst.style.fontSize="20px";
rst.style.border="0px";
rst.style.padding="10px";
rst.style.color="white";

//correct 
let crt=document.createElement("div");
crt.innerText="Correct";
crt.style.backgroundColor="#d4edda";
crt.style.color="#225724";
crt.style.width="100px";
crt.style.fontSize="25px"
crt.style.textAlign="center";
crt.style.borderRadius="5px";
crt.style.padding="10px";
crt.style.marginBottom="1em";


//incorrect
let incrt=document.createElement("div");
incrt.innerText="InCorrect";
incrt.style.backgroundColor="#f8d7da";
incrt.style.color="#721c24";
incrt.style.width="120px";
incrt.style.fontSize="25px"
incrt.style.textAlign="center";
incrt.style.borderRadius="5px";
incrt.style.padding="10px";
incrt.style.marginBottom="1em";




function correct()
{

    document.getElementById("show").appendChild(crt); 
}
function incorrect()
{
    
    document.getElementById("show").appendChild(incrt);
}
function submit(){
        // console.log("clicked");
        var res = document.getElementsByName('opt');
        let f=0;
        let f2=0;
        for(let j = 0; j < res.length; j++) 
        {
            if(res[j].checked)
            {
                f2=1;
                if(res[j].value==temp.answer)
                {
                    console.log(res[j].value);
                    score+=10;
                    correct();

                    f=1;
                    break;
                }
                
                
                
                
            }
        }
        if(f2==0)
        {
            alert("Please Select an Option");
            return;
        }

        if(f==0)
        {
            incorrect();
        }
        console.log(score);

        let x=document.getElementById("button");
        let y=x.children[0];
        x.replaceChild(nxt,y);


    

}
function next(){
    var res = document.getElementsByName('opt');
    for(let j = 0; j < res.length; j++) 
    {
        if(res[j].checked)
        { 
            res[j].checked=false;
        }
    }
    console.log(count);
    count++;
    if(count>0)
    {
        let p=document.getElementById("show");
        p.removeChild(p.children[0]);
    }
    if(count>=data.length)
    {
        
        answerKey();
        return;
        
        // console.log("done");
        // let x=document.getElementById("button");
        // let y=x.children[0];
        // x.replaceChild(rst,y);
        // return;



    }



    temp=data[count];
    document.getElementById("question").innerText=temp.question;
    document.getElementById("option1").innerText=temp.option1;
    document.getElementById("option2").innerText=temp.option2;
    document.getElementById("option3").innerText=temp.option3;
    document.getElementById("option4").innerText=temp.option4;
    if(count==0)
    {
        document.getElementById("button").appendChild(btn); 
    }
    else{
        let x=document.getElementById("button");
        let y=x.children[0];
        x.replaceChild(btn,y);

    }

    


}
function answerKey()
{
    document.getElementById("head").innerText="Score: "+score;
    let h=document.createElement("h1");
    h.setAttribute("class","ansheading");
    h.innerText="Answer Key";
    document.getElementById("container").insertAdjacentElement("afterbegin",h);
    document.getElementById("main").style.display="None";
    document.getElementById("answerKey").style.display="block";



    let a=document.getElementById("ans");
    for(let i=0;i<data.length;i++)
    {
        let x=document.createElement("li");
        let p=document.createElement("span");
        p.innerText=data[i].question;
        let s=document.createElement("span");
        s.setAttribute("class","green");
        console.log(s);
        s.innerText=data[i][data[i].answer];
        x.appendChild(p);
        x.appendChild(s);
        x.style.padding="10px 0px";

        a.appendChild(x);
        

    }
    document.getElementById("container").insertAdjacentElement("beforeend",rst);

    

}


function restart(){
    location.reload();


}

document.getElementById("answerKey").style.display="None";
next();












