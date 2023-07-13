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
await loadFont('fonts/Filmotype_Major.otf');
const level = await buildLevel(4);
const layout = await buildLayout(level);
app.stage.addChild(layout);
