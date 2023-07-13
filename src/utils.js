function drawRoundedCorners(sprite, radius) {
    sprite.mask = sprite.addChild(new PIXI.Graphics().beginFill(0xff0000, 0.5).drawRoundedRect(0, 0, sprite.width, sprite.height, radius).endFill());
}
