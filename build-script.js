const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
    const files = [
        "./dist/my-element/runtime.js",
        "./dist/my-element/polyfills.js",
        "./dist/my-element/main.js"
    ];
    await fs.ensureDir("elements");
    await concat(files, "elements/my-element.js");
    console.log('built my-elements.js');
})();