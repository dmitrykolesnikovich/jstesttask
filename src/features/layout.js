function buildLayout(level) {
    const layout = new PIXI.Container();
    layout.addChild(buildMainView(level));
    layout.pivot.x = layout.width / 2;
    layout.pivot.y = layout.height / 2;

    initializeLayout(level, layout);
    return layout;
}

function buildMainView(level) {
    // 1. main
    const mainView = new PIXI.Container();
    mainView.position.y = 92

    // 2. spriteA
    const spriteA = mainView.addChild(new PIXI.Sprite(level.layerImage));
    drawRoundedCorners(spriteA, 24)
    spriteA.position.set(0, 0);

    // 3. spriteB
    const spriteB = mainView.addChild(new PIXI.Sprite(level.layerImage));
    drawRoundedCorners(spriteB, 24)

    switch (level.orientation) {
        case Orientation.LANDSCAPE: {
            spriteB.position.set(0, level.layerSize.height);
            break;
        }
        case Orientation.PORTRAIT: {
            spriteB.position.set(level.layerSize.width, 0);
            break;
        }
    }

    const container = mainView.addChild(new PIXI.Container());
    container.pivot.set(1, 1);
    container.x = mainView.width;
    container.y = mainView.height;

    // 4. differencesText
    const differencesText = container.addChild(new PIXI.Text(`Отличий найдено: `, {
        fontFamily: 'Filmotype Major',
        fontSize: 50,
        fill: 'black',
        align: 'right'
    }));
    differencesText.anchor.set(1, 1);
    differencesText.y = 70

    // 5. mistakesText
    const mistakesText = container.addChild(new PIXI.Text(`Ошибок: `, {
        fontFamily: 'Filmotype Major',
        fontSize: 50,
        fill: 'black'
    }));
    mistakesText.anchor.set(1, 1);
    mistakesText.y = 140

    // 6. levelText
    const levelText = mainView.addChild(new PIXI.Text(`Уровень ${level.id}`, {
        fontFamily: 'Filmotype Major',
        fontSize: 120,
        fill: 'black',
        align: 'center',
    }));
    levelText.anchor.set(1)
    levelText.x = mainView.width / 2;
    levelText.y = -64;

    return mainView;
}

function initializeLayout(level, layout) {
    const canvas = document.querySelector("#mainCanvas");

    function resizeLayout() {
        let width = level.orientation === Orientation.LANDSCAPE ? level.layerSize.width : 2 * level.layerSize.width;
        const canvasWidth = parseFloat(canvas.style.width) + 2 * parseFloat(canvas.style.padding);
        const canvasHeight = parseFloat(canvas.style.height) + 2 * parseFloat(canvas.style.padding);
        const scale = canvasWidth / width;
        layout.scale.set(scale * 0.77);
        layout.x = canvasWidth / 2;
        layout.y = canvasHeight / 2;
    }

    window.addEventListener('resize', resizeLayout);
    resizeLayout();
    return layout;
}
