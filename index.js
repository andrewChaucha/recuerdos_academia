const MAIN_CONTAINER = document.querySelector(".main-container");
const getRandomValue = (max, min =1) =>{
    return Math.floor(Math.random() * max)+ min;
};

const createSnow =(density) => {
    for (let i = 0; i< density; i++){
        const SNOW_FLAKE = document.createElement ("span");
        const RANDOM_HORIZONTAL_POSITION = `${getRandomValue(100)}%`;
        const RANDOM_FALL_DELAY = `${getRandomValue(10)}s`;
        const RANDOM_FALL_DURATION = `${getRandomValue(20, 5)}s`;
        const RANDOM_FLAKE_SIZE = `${getRandomValue(14, 10)}px`;
        const RANDOM_FLAKE_OPACITY = Math.random().toFixed(2);
        SNOW_FLAKE.classList.add("snow");
        SNOW_FLAKE.style.opacity = RANDOM_FLAKE_OPACITY;
        SNOW_FLAKE.style.width = RANDOM_FLAKE_SIZE;
        SNOW_FLAKE.style.height = RANDOM_FLAKE_SIZE;
        SNOW_FLAKE.style.animation = `fall ${RANDOM_FALL_DURATION} ${RANDOM_FALL_DELAY} linear infinite`;
        SNOW_FLAKE.style.right = RANDOM_HORIZONTAL_POSITION;
        MAIN_CONTAINER.appendChild(SNOW_FLAKE);
    }
}
createSnow(250);