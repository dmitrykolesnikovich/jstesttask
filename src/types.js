const Orientation = {
    LANDSCAPE: 1,
    PORTRAIT: 2,
}

class Screen {
    layerA = new Layer()
    layerB = new Layer()
    orientation = null;
}

class Layer {
    texture = null;
    width = 0;
    height = 0;
    slots = [];
}

class Slot {
    x;
    y;
    width;
    height;
    image;
}
