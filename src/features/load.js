PIXI.Assets.init({
    basePath: "../res"
});

async function loadLevel(levelId) {
    const level = new Level();
    level.id = levelId;

    const levelJson = await PIXI.Assets.load(`levels/${levelId}/level.json`);
    for (let slotJson of levelJson.slots) {
        switch (slotJson.layer) {
            case "standart": {
                level.layerImage = await loadTexture(levelId, slotJson.name);
                level.layerSize = {
                    width: slotJson.width,
                    height: slotJson.height
                };
                level.orientation = slotJson.width > slotJson.height ? Orientation.LANDSCAPE : Orientation.PORTRAIT;
                break;
            }
            case "LayerA": {
                level.slotsA.push(await buildSlot(levelId, slotJson));
                break;
            }
            case "LayerB": {
                level.slotsB.push(await buildSlot(levelId, slotJson));
                break;
            }
        }
    }

    return level;
}

async function buildSlot(levelId, json) {
    const slot = new Slot();
    slot.texture = await loadTexture(levelId, json.name);
    slot.x = json.x;
    slot.y = json.y;
    slot.width = json.width;
    slot.height = json.height;
    return slot;
}

async function loadTexture(levelId, name) {
    return await PIXI.Assets.load(`levels/${levelId}/images/${name}.jpg`);
}
