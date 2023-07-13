await PIXI.Assets.load('fonts/Filmotype_Major.otf');

const canvas = initializeCanvas(); // view
const level = await loadLevel(5); // model

// engine
const app = new PIXI.Application({
    background: 'white',
    antialias: true,
    resolution: window.devicePixelRatio || 1,
    view: canvas,
    resizeTo: canvas,
});
document.body.appendChild(app.view);

// game
const container = initializeLayout(app, level);
app.stage.addChild(container);
