class Level {

    id;
    layerImage;
    layerSize = {
        width: 0,
        height: 0,
    };
    slotsA = [];
    slotsB = [];

    get isLandscape() {
        return this.layerSize.width > this.layerSize.height;
    }

}

class Slot {
    texture;
    x;
    y;
    width;
    height;
}

async function buildLevel(levelId) {
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
