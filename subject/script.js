// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============

document.addEventListener("DOMContentLoaded", () => 
{   
    let s = 0 ;
    let current_num = "" ;

    for (let num of document.getElementsByClassName("number")) 
    {
        num.addEventListener("click",(event)=>
        {
            document.getElementById("display").textContent = document.getElementById("display").textContent + event.target.textContent;
            current_num = current_cum + event.target.textContent
        }
        )
    };

    document.getElementById("clear").addEventListener("click",()=>
        {
            document.getElementById("display").textContent = ""
        }
    );

    for (let ope of document.getElementsByClassName("key--operator")) 
    {
        ope.addEventListener("click",(event)=>
        {
            document.getElementById("display").textContent = document.getElementById("display").textContent + event.target.textContent ;
        }
        )
    };

    document.getElementById("equal").addEventListener("click",()=>
    {
        document.getElementById("display").textContent = document.getElementById("display").textContent + "=" + s
    }
);

}
);