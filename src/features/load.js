PIXI.Assets.init({
    basePath: "../res"
});

async function loadScreen(levelId) {
    const screen = new Screen();

    const level = await PIXI.Assets.load(`levels/${levelId}/level.json`);
    for (let slot of level.slots) {
        switch (slot.layer) {
            case "standart": {
                screen.layerA = await loadLayer(levelId, slot);
                screen.layerB = await loadLayer(levelId, slot);
                screen.orientation = slot.width > slot.height ? Orientation.LANDSCAPE : Orientation.PORTRAIT;
                break;
            }
            case "LayerA": {
                screen.layerA.slots.push(buildSlot(levelId, slot));
                break;
            }
            case "LayerB": {
                screen.layerB.slots.push(buildSlot(levelId, slot));
                break;
            }
        }
    }

    initializeLayout(screen);
    return screen;
}

async function loadLayer(levelId, json) {
    const layer = new Layer();
    layer.texture = await PIXI.Assets.load(`levels/${levelId}/images/${json.name}.jpg`);
    layer.width = json.width;
    layer.height = json.height;
    return layer;
}

function buildSlot(levelId, json) {
    const slot = new Slot();
    slot.x = json.x;
    slot.y = json.y;
    slot.width = json.width;
    slot.height = json.height;
    slot.image = `levels/${levelId}/images/${json.name}.jpg`;
    return slot;
}
