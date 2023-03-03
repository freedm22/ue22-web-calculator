/**MAUREL DAN */

start = true;
s = 0;
current_num = "";
last_op = '+';

document.addEventListener("DOMContentLoaded", () => 
{
    for (let num of document.getElementsByClassName("number")) 
    {
        num.addEventListener("click",(event)=>
        {
            document.getElementById("display").textContent = document.getElementById("display").textContent + event.target.textContent;
            current_num = current_num + event.target.textContent ;
        }
        )
    };

    document.getElementById("clear").addEventListener("click",()=>
        {
            document.getElementById("display").textContent = "";
            current_num = "";
            start = true;
            s = 0;
        }
    );

    document.getElementById("decimal").addEventListener("click",()=>
        {
            document.getElementById("display").textContent = document.getElementById("display").textContent + ".";
            current_num = current_num + ".";
        }
    );

    for (let ope of document.getElementsByClassName("key--operator")) 
    {
        ope.addEventListener("click",(event)=>
        {
            document.getElementById("display").textContent = document.getElementById("display").textContent + event.target.textContent ;
            switch (event.target.textContent) {
                case "+":
                    {s = s + parseFloat(current_num);
                    current_num = "";
                    last_op = "+";
                    start=false}
                    break
                case "-":
                    {if (start==true) {
                        s = parseFloat(current_num);
                        current_num = "";
                        start = false ;
                        last_op = "-"}
                        
                    else {
                        s = s - parseFloat(current_num);
                        current_num = "";
                        last_op = "-"}
                    break}
            }
        }
        )
    };

    document.getElementById("equal").addEventListener("click",()=>
    {   
        switch (last_op) {
            case "+":
                {s = s + parseFloat(current_num);
                current_num = "";
                last_op = '+'}
                break
            case "-":
                {s = s - parseFloat(current_num);
                current_num = "";
                last_op = '-'}
                break}

        document.getElementById("display").textContent = document.getElementById("display").textContent + "=" + s 
    }
);

}
);