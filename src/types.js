const Orientation = {
    LANDSCAPE: 1,
    PORTRAIT: 2,
}

class Level {
    id;
    layerImage;
    layerSize = {
        width: 0,
        height: 0,
    };
    slotsA = [];
    slotsB = [];
}

class Slot {
    image;
    x;
    y;
    width;
    height;
}
