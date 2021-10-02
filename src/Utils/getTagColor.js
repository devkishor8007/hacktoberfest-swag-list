const LIGHT_ROSE = "#ffc7bd";
const BERLY_GREEN = "#e8e0c3";
const CLAY_ASH = "#b4d0ae";
const GAINSBORO = "#E4D8DC";
const LIGHT_SALMON = "#ffa99a";
const MERCURY = "#e5e5e5";

const TAG_COLORS = {
    Tshirt: LIGHT_ROSE,
    Stickers: BERLY_GREEN,
    Bottle: CLAY_ASH,
    Socks: GAINSBORO,
    Hoodie: LIGHT_SALMON,
};

const DEFAULT_TAG_COLOR = MERCURY;

export const getTagColor = (tag) =>
    TAG_COLORS[tag] ? TAG_COLORS[tag] : DEFAULT_TAG_COLOR;
