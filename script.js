var logo = document.querySelector('#nav h1');

logo.addEventListener('mouseenter',function(){
    document.querySelector('#nav h1').style.backgroundColor = "red";
});
logo.addEventListener('mouseleave',function(){
    document.querySelector('#nav h1').style.backgroundColor = "black";
});