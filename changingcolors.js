const body = document.querySelector('html');
body.addEventListener('pointermove', function(event){
    let width = (event.pageX / window.innerWidth);
    let height = (event.pageY / window.innerHeight); 

    console.log(`rgb(${width*255}, 0, ${height*255})`);
    body.style.backgroundColor = `rgb(${width*255}, 0, ${height*255})`;

});
