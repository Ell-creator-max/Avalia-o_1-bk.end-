let contador = 1;
const totalImagens = 4; 

function proximoSlide() {
    contador++;
    if (contador > totalImagens) {
        contador = 1; 
    }
    document.getElementById('foto_' + contador).checked = true;
}
setInterval(proximoSlide, 7000);

<a href="outraPagina.html">Ir para outra página</a>
document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault(); 
    window.location.href = this.href;
});