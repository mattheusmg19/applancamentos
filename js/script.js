let currentIndex = 0;
let data = [];

function showImage(index) {
    const item = data[index];
    const carouselImage = document.getElementById('carouselImage');
    const carouselContainer = document.querySelector('.carousel-container');

    // Primeiro, defina a opacidade para 0 para iniciar a transição de saída
    carouselImage.style.opacity = 0;

    // Após um pequeno atraso, atualize a imagem e as informações, e defina a opacidade para 1 para iniciar a transição de entrada
    setTimeout(() => {
        carouselImage.src = item.imagem;
        document.getElementById('carouselTitle').innerText = item.uniao;
        document.getElementById('carouselInfo').innerHTML = `<h5>Informações do Modelo</h5><div id="contorno"><span>Início: </span> ${item.prev_inicio}</div>
        <div><span>Prod. Início:</span> ${item.hr_inicio}</div>
        <div><span>Setor:</span> ${item.setor}</div>
        <div><span>Equip:</span> ${item.equip}</div>
        <div><span>Ferr:</span> ${item.ferramentais_check === 'V' ? '<i class="bi bi-check-lg"></i>' : '<i class="bi bi-x-lg"></i>  '}</div>
        <div><span>Ferr. Nv:</span> ${item.ferramentais_novos}</div>
        <div><span>Ferr. Ex:</span> ${item.ferramentais_existentes}</div>
        <div id="fim_contorno"><span>Restrição:</span> ${item.restrição}</div>`;
        
        // Alterar cor de fundo e cor do texto
        carouselContainer.style.backgroundColor = item.back;
        carouselContainer.style.color = item.color;

        // Defina a opacidade para 1 para iniciar a transição de entrada
        carouselImage.style.opacity = 1;
    }, 500); // O atraso deve ser menor que a duração da transição
}

// Fetch data from JSON file
fetch('json/index.json')
    .then(response => response.json())
    .then(jsonData => {
        data = jsonData;
        showImage(currentIndex);
        setInterval(() => {
            currentIndex = (currentIndex + 1) % data.length;
            showImage(currentIndex);
        }, 10000);
    })
    .catch(error => console.error('Erro ao carregar o JSON:', error));
