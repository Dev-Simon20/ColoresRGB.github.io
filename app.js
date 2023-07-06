const rangoR= document.querySelector('.rojoRango');
const rangoV= document.querySelector('.verdeRango');
const rangoA= document.querySelector('.azulRango');
const rojoP=document.querySelector(".rojoP");
const verdeP=document.querySelector(".verdeP");
const azulP=document.querySelector(".azulP");
const cuerpo=document.querySelector('.body');

const color=()=>{
    let r=rangoR.value;
    let g=rangoV.value;
    let b=rangoA.value;
    cuerpo.style.backgroundColor=`rgb(${r},${g},${b})`;
    rojoP.textContent=rangoR.value;
    verdeP.textContent=rangoV.value;
    azulP.textContent=rangoA.value;

};
color();
rangoR.addEventListener("change",color);
rangoV.addEventListener("change",color);
rangoA.addEventListener("change",color);