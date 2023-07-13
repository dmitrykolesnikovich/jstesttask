function drawLayerCorners(layer, radius) {
    const mask = new PIXI.Graphics().beginFill(0xff0000, 1).drawRoundedRect(0, 0, layer.width, layer.height, radius).endFill();
    layer.mask = layer.addChild(mask);
}

function Area({x = 0, y = 0, width, height}) {
    const area = new PIXI.Container()
    area.interactive = true;
    area.hitArea = new PIXI.Rectangle(x, y, width, height);
    return area;
}

function RedArea({x = 0, y = 0, width, height}) {
    return new PIXI.Graphics().beginFill(0xff0000).drawRect(x, y, width, height).endFill()
}

function GreenRectangle({x = 0, y = 0, width, height}) {
    return new PIXI.Graphics().lineStyle(4, 0x22ff22, 1).drawRoundedRect(x, y, width, height, 16);
}

function RedRectangle({x = 0, y = 0, width, height}) {
    return new PIXI.Graphics().lineStyle(4, 0xff2222, 1).drawRect(x, y, width, height);
}
