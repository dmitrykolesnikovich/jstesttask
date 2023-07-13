function initializeLayout(app, level) {
    const layout = new PIXI.Container();


    // 1. main
    const mainContainer = layout.addChild(new PIXI.Container());
    // Move container to the center
    /**/

    // Center bunny sprite in local container coordinates


    const spriteA = mainContainer.addChild(new PIXI.Sprite(level.layerImage));
    drawRoundedCorners(spriteA, 24)
    spriteA.position.set(0, 0);
    const spriteB = mainContainer.addChild(new PIXI.Sprite(level.layerImage));
    drawRoundedCorners(spriteB, 24)
    const orientation = level.layerSize.width > level.layerSize.height ? Orientation.LANDSCAPE : Orientation.PORTRAIT;
    switch (orientation) {
        case Orientation.LANDSCAPE: {
            spriteB.position.set(0, level.layerSize.height);
            break;
        }
        case Orientation.PORTRAIT: {
            spriteB.position.set(level.layerSize.width, 0);
            break;
        }
    }

    // 3. status
    const container = mainContainer.addChild(new PIXI.Container());
    container.pivot.set(1, 1);
    container.x = mainContainer.width;
    container.y = mainContainer.height;

    const differencesText = container.addChild(new PIXI.Text(`Отличий найдено: `, {
        fontFamily: 'Filmotype Major',
        fontSize: 50,
        fill: 'black',
        align: 'right'
    }));
    differencesText.anchor.set(1, 1);
    differencesText.y = 70

    const mistakesText = container.addChild(new PIXI.Text(`Ошибок: `, {
        fontFamily: 'Filmotype Major',
        fontSize: 50,
        fill: 'black'
    }));
    mistakesText.anchor.set(1, 1);
    mistakesText.y = 140

    // 2. levelText
    const levelText = mainContainer.addChild(new PIXI.Text(`Уровень ${level.id}`, {
        fontFamily: 'Filmotype Major',
        fontSize: 120,
        fill: 'black',
        align: 'center',
    }));
    levelText.anchor.set(1)
    levelText.x = mainContainer.width / 2;
    levelText.y = -64;

    const canvas = document.querySelector("#mainCanvas");

    function resizeLayout() {
        let width = orientation === Orientation.LANDSCAPE ? level.layerSize.width : 2 * level.layerSize.width;
        const canvasWidth = parseFloat(canvas.style.width) + 2 * parseFloat(canvas.style.padding);
        const canvasHeight = parseFloat(canvas.style.height) + 2 * parseFloat(canvas.style.padding);

        const scale = canvasWidth / width;
        layout.scale.set(scale * 0.77);
        layout.x = canvasWidth / 2;
        layout.y = canvasHeight / 2;
    }

    layout.pivot.x = layout.width / 2;
    layout.pivot.y = layout.height / 2;
    mainContainer.position.y = 92

    window.addEventListener('resize', resizeLayout);
    resizeLayout();


    return layout;
}

function drawRoundedCorners(sprite, radius) {
    sprite.mask = sprite.addChild(new PIXI.Graphics().beginFill(0xff0000, 0.5).drawRoundedRect(0, 0, sprite.width, sprite.height, radius).endFill());
}
