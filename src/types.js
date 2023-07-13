const Orientation = {
    LANDSCAPE: 1,
    PORTRAIT: 2,
}

class Level {
    id;
    orientation;
    layerImage;
    layerSize = {
        width: 0,
        height: 0,
    };
    slotsA = [];
    slotsB = [];
}

class Slot {
    texture;
    x;
    y;
    width;
    height;
}
