const body = document.querySelector('html');
body.addEventListener('pointermove', function(event){
    let width = (event.pageX / window.innerWidth);
    let height = (event.pageY / window.innerHeight); 

    console.log(`(0, rgb(${width*255}, ${height*255})`);
    body.style.backgroundColor = `rgb(0,${width*255}, ${height*255})`;

});
