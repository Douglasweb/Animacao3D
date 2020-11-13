// movimento da animacao

const card = document.querySelector('.card');
const container = document.querySelector('.container');

//Animar itens

const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const compra = document.querySelector('.purchase button');
const descricao = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

//let val = 0;

//evento de movimento de animacao



container.addEventListener('mousemove', (e) => {
    //console.log(e.pageX, e.pageY);
    // if(val == 0)
    // {
    //     card.style.transition = 'all 0.5s ease-in';
    //     val = 1;
    // }
    // else
    // {
    //     card.style.transition = 'none';
        
    // }
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;


    //card.style.transition = 'all 0.1s';
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;

});

//saida animacao
container.addEventListener('mouseleave', (e) =>{

    card.style.transition = 'all 0.3s ease';
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    
    title.style.transform = 'translateZ(0px)';
    sneaker.style.transform = 'translateZ(0px) rotateZ(0)';
    descricao.style.transform = 'translateZ(125px)';

    compra.style.transform = 'translateZ(0px)';
    descricao.style.transform = 'translateZ(0px)';
    sizes.style.transform = 'translateZ(0px)';
    //val = 0;
    
});

//entrada animacao
container.addEventListener('mouseenter', (e) =>{
    card.style.transition = 'none';

    title.style.transform = 'translateZ(150px)';
    sneaker.style.transform = 'translateZ(200px) rotateZ(-30deg)';
    compra.style.transform = 'translateZ(70px)';
    descricao.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';
});