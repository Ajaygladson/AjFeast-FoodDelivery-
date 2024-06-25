document.getElementById("hamburger-icon").onclick=function(){
  document.getElementById("mobilenav").style.display="block";
}

document.getElementById("x-icon").onclick=function(){
  document.getElementById("mobilenav").style.display="none";
}





document.getElementById("search-icon").onclick=function(){
   search();
}


function search()
{
  let products=document.getElementById("menucontainer").querySelectorAll("div");
 
  let entval=document.getElementById("textbox").value.toUpperCase();
  for(let i=0;i<products.length;i++)
    {
      // let z=products[i].querySelector("p");
      // console.log(z);
      if(products[i].querySelector("p").textContent.toUpperCase()===entval)
        {
          products[i].style.display="block";
        }
      else{
        products[i].style.display="none";
      }
    }
}