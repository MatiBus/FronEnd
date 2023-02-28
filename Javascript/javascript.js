document.getElementById('icoDato').addEventListener('click', function(){
    document.getElementById('datos_pers').style.display= 'block';
    document.getElementById('datos_estudios').style.display='none';
    document.getElementById('datos_trabajos').style.display='none';
    document.getElementById('pie').style.position = 'inherit';
})


document.getElementById('icoEst').addEventListener('click', function(){
    document.getElementById('datos_pers').style.display= 'none';
    document.getElementById('datos_estudios').style.display='block';
    document.getElementById('datos_trabajos').style.display='none';
    document.getElementById('pie').style.position = 'inherit';
})

document.getElementById('icoTra').addEventListener('click', function(){
    document.getElementById('datos_pers').style.display= 'none';
    document.getElementById('datos_estudios').style.display='none';
    document.getElementById('datos_trabajos').style.display='block';
    document.getElementById('pie').style.position = 'inherit';
})

document.getElementById('icoDato').addEventListener('moveTo', function(){
    mouse
})