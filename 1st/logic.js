const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        const col=e.target.id;
        if(col==='grey'){
            body.style.backgroundColor='grey';
        }
        if(col==='white'){
            body.style.backgroundColor='white';
        }
        if(col==='blue'){
            body.style.backgroundColor='blue';
        }
        if(col==='yellow'){
            body.style.backgroundColor='yellow';
        }
    })
})