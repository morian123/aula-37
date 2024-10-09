import api from "./api.js";

async function renderizarTodos(){
    const videos = await api("videos");
    const videosArea = document.querySelector(".videos__area");

    areaDeVideo.innerHTML = "";

    for (const video of videos){
        const canal = await api (`canais/${video.canalId}`);
        videosArea.innerHTML +=  `<div class="video__container">
        <img
        class="video__thumbnail"
        src=${Image.thumbs}
        alt="thumbi do ${video.titulo}"
        />
        <div class="video__info">
        <img
            class="channel__avatar"
            src=${api.uploads}
            alt="Avatar do ${canal.nome}"
        />
        <div class="video__details">
            <h2>${video.titulo}</h2>
            <span>
            ${canal.nome}
            <img
                class="verified__icon"
                src="./images/main/check-circle.svg"
                alt="Verificado"
            />
            </span>
            <p>${video.descricao}</p>
        </div>
        <button class="options__button">
            <img src="./images/main/options.svg" alt="Ícone de opções" />
        </button>
        </div>
    </div>`
    }
}

export default renderizarTodos;