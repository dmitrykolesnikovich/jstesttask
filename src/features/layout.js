function initializeLayout(screen) {
    const container = new PIXI.Container()

    // LayerA
    const spriteA = container.addChild(new PIXI.Sprite(screen.layerA.texture));
    spriteA.position.set(0, 0);

    const spriteB = container.addChild(new PIXI.Sprite(screen.layerA.texture));
    switch (screen.orientation) {
        case Orientation.LANDSCAPE: {
            spriteB.position.set(0, screen.layerA.height + screen.padding);
            break;
        }
        case Orientation.PORTRAIT: {
            spriteB.position.set(screen.layerA.width + screen.padding, 0);
            break;
        }
    }
    return container;
}
