const on1 = document.querySelector('.btn-on1');
const off1 = document.querySelector('.btn-off1');

const on2 = document.querySelector('.btn-on2');
const off2 = document.querySelector('.btn-off2');

const btn = document.querySelector('.btn1');

const tem = document.querySelector('.temperature');
const col1 = document.querySelector('.col1');

const warm = document.querySelector('.text-warm');
const col2 = document.querySelector('.col2');

const light = document.querySelector('.text-light');
const col3 = document.querySelector('.col3');

const row1 = document.querySelector('.row1');
const row2 = document.querySelector('.row2');


on1.addEventListener('click', () => {
    row1.style.backgroundColor =  '#ccabd8'
})

off1.addEventListener('click', () => {
    row1.style.backgroundColor =  '#d0e635'
})

on2.addEventListener('click', () => {
    btn.style.left = '0';
    row2.style.backgroundColor =  '#f6416c'
})

off2.addEventListener('click', () => {
    btn.style.left = '70px';
    row2.style.backgroundColor =  '#0e5cad'
})


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function changeTem() {
    let nhietDo = getRndInteger(1, 100);
    if(nhietDo < 10){
        col1.style.backgroundColor = 'gray';
    }

    else if(nhietDo >= 10 && nhietDo <= 37) {
        col1.style.backgroundColor = '#48f748';
    }

    else if(nhietDo > 37 && nhietDo <= 90){
        col1.style.backgroundColor = 'darkgreen';
    } 

    else {
        let note = confirm('Đây là nhiệt độ rất cao !!! Bạn có muốn tiếp tục không?');
        if(!note) {
            return;
        }
            col1.style.backgroundColor = 'red';
        
    }
    tem.innerHTML = nhietDo + '°C'
}

function changeWarm() {
    let doAm = getRndInteger(1, 100);
    if(doAm < 20){
        col2.style.backgroundColor = 'lightblue';
    }

    else if(doAm >= 20 && doAm <= 60) {
        col2.style.backgroundColor = 'darkblue';
    }

    else {
        col2.style.backgroundColor = '#9191f3';
    }
    
    warm.innerHTML = doAm + '%'
}

function changeLight() {
    let anhSang = getRndInteger(1, 100);
    if(anhSang < 20){
        col3.style.backgroundColor = 'lightsalmon';
    }

    else if(anhSang >= 20 && anhSang <= 70) {
        col3.style.backgroundColor = 'orange';
    }

    else {
        col3.style.backgroundColor = '#961276';
    }
    
    light.innerHTML = anhSang
}

changeTem()
changeLight()
changeWarm()