const canvas = initializeCanvas(); // view
const screen = await loadScreen(4); // model

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
const container = initializeLayout(screen);
app.stage.addChild(container);
