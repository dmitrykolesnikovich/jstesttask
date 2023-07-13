// engine
const canvas = document.querySelector("#mainCanvas")
initializeCanvas(canvas);
const app = new PIXI.Application({
    background: 'white',
    antialias: true,
    resolution: window.devicePixelRatio || 1,
    view: canvas,
    resizeTo: canvas,
});
document.body.appendChild(app.view);

// game
(async function main() {
    await loadFont('fonts/Filmotype_Major.otf');
    await nextLevel();
}());
