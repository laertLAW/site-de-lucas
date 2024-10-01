let slideIndex = 0;// Inicializa o índice do slide como 0
showSlides();// Chama a função showSlides para iniciar a apresentação de slides
function showSlides() {// Define a função showSlides
let slides = document.getElementsByClassName("mySlides");// Obtém todos os
"mySlides"
for (let i = 0; i < slides.length; i++) {// Itera sobre todos os slides e os esconde
slides[i].style.display = "none";
}
slideIndex++; // Incrementa o índice do slide
if (slideIndex > slides.length) {// Se o índice do slide ultrapassar o número de slides,

slideIndex = 1;
}
slides[slideIndex - 1].style.display = "block"; // Mostra o slide atual com base no índice
// Define um timeout para chamar a função showSlides novamente após 3 segundos
setTimeout(showSlides, 3000); // Muda a imagem a cada 3 segundos
}