const context = {
    levelId: 4,
    score: 0,
}

async function nextLevel() {
    // reset
    if (context.levelId >= 5) {
        context.levelId = 0
    }
    context.score = 0;
    app.stage.removeChildren();

    // setup
    const level = await buildLevel(++context.levelId);
    context.level = level;
    const layout = await buildLayout(level);
    app.stage.addChild(layout);
    setupGame(level, layout);
}

function miss(layer, event) {
    layer.addChild(new RedRectangle({x: event.x - 32, y: event.y - 32, width: 64, height: 64}))
}

function hit(layer, slot) {
    context.score++;
    for (let area of slot.areas) {
        area.addChild(new GreenRectangle(slot))
    }
    console.log(`score: ${context.score} (slot: ${slot.name})`);
    if (context.score >= context.level.size) {
        setTimeout(async () => await win(context.level), 500);
    }
}

async function win(level) {
    alert(`Уровень ${level.id} пройден!`);
    await nextLevel();
}
