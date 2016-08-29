"use strict";
function card(name) {
    let [value, suit] = name.split('Of');
    return { value: value, suit: suit };
}
card('aceOfclubs');
//# sourceMappingURL=debug.js.map