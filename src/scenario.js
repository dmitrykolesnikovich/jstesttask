const context = {
    level: null,
    levelId: 0,
    score: 0,
    app: null,
    reset() {
        this.level = null;
        if (this.levelId >= 5) {
            this.levelId = 0
        }
        this.score = 0;
        this.app.stage.removeChildren();
    }
}

async function nextLevel() {
    context.reset();
    const level = await buildLevel(++context.levelId);
    context.level = level;
    const layout = await buildLayout(level);
    context.app.stage.addChild(layout);
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
