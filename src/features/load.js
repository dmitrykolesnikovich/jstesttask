PIXI.Assets.init({
    basePath: "../res"
});

async function loadLevel(levelId) {
    const level = new Level();
    level.id = levelId;

    const json = await PIXI.Assets.load(`levels/${levelId}/level.json`);
    for (let slot of json.slots) {
        switch (slot.layer) {
            case "standart": {
                level.layerImage = await PIXI.Assets.load(`levels/${levelId}/images/${slot.name}.jpg`);
                level.layerSize = {
                    width: slot.width,
                    height: slot.height
                };
                break;
            }
            case "LayerA": {
                level.slotsA.push(buildSlot(levelId, slot));
                break;
            }
            case "LayerB": {
                level.slotsB.push(buildSlot(levelId, slot));
                break;
            }
        }
    }

    return level;
}

function buildSlot(levelId, json) {
    const slot = new Slot();
    slot.image = `levels/${levelId}/images/${json.name}.jpg`;
    slot.x = json.x;
    slot.y = json.y;
    slot.width = json.width;
    slot.height = json.height;
    return slot;
}
