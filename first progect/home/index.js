let stars=document.getElementById('stars');
let moon=document.getElementById('moon');
let mountains3=document.getElementById('mountains3');
let mountains4=document.getElementById('mountains4');
let mountains7=document.getElementById('mountains7');
let river=document.getElementById('river');
let boat=document.getElementById('boat');
let nouvil=document.querySelector('.nouvil');
let pos = 0;
function myMove()
{
  id = setInterval(frame,0.00000001);
  function frame()
  {
    if (pos == 7000)
    {
        clearInterval(id);
        boat.style.display='none';
    } 
      else
    {
        pos++; 
        boat.style.left=pos +'px';
    }
  }
}
window.onscroll=function()
{
    let value=scrollY;
    stars.style.left=value+'px';
    moon.style.top=value *2+'px';
    mountains3.style.top=value *1.5+'px';
    mountains4.style.top=value *1+'px';
    river.style.top=value +'px';
    boat.style.top=value +'px';
    boat.style.left=value*3 +'px';
    nouvil.style.fontSize=value +'px';
    if(scrollY>=87)
    {
      nouvil.style.fontSize=87 +'px';
      nouvil.style.position= 'fixed';
      if
      (scrollY>=549)
      {
          nouvil.style.display= 'none';
      } 
      else{
          nouvil.style.display= 'block';
      }
    }
   if(scrollY>=269) 
    {
        document.querySelector('.main').style.background='linear-gradient(#021a23, #180333)'; 
    }
    if(scrollY>=315)
    {
        document.querySelector('.main').style.background='linear-gradient(#304471, #431633)'; 
    }
    if(scrollY<=269)
      {
          document.querySelector('.main').style.background='linear-gradient(#230219,#180333)'; 
      }
  }