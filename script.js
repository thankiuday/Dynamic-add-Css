let btn = document.getElementById("btn");
var style = document.getElementById("css");
var counter = 0;
function func()
{
        
    if(counter %2!=0)
    {
        style.setAttribute("href","style.css");
        btn.innerText = "Click To Remove CSS";
    }
    else{
        style.setAttribute("href","none.css")
        btn.innerText = "Click To Apply CSS"
        counter++;
    }
    
}