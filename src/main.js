// resources
await PIXI.Assets.load('fonts/Filmotype_Major.otf');

// engine
const canvas = initializeCanvas();
const app = new PIXI.Application({
    background: 'white',
    antialias: true,
    resolution: window.devicePixelRatio || 1,
    view: canvas,
    resizeTo: canvas,
});
document.body.appendChild(app.view);

// game
const level = await loadLevel(4);
const layout = await buildLayout(level);
app.stage.addChild(layout);
