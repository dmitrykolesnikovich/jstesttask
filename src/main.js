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
const level = await loadLevel(5); // model
const layout = buildLayout(level);


// engine


// game

app.stage.addChild(layout);
