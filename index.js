var b=document.querySelectorAll(".nav-link").length;

for(var i=0;i<b;i++)
{
 var a=document.querySelectorAll(".nav-link")[i];
 a.addEventListener("click",function()
 { 
   setAttribute("href","https://canarabank.com/")
});
}
