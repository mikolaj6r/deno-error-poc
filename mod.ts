// @deno-types="https://raw.githubusercontent.com/denjucks/denjucks/master/mod.d.ts"

import denjucks from "https://deno.land/x/denjucks/mod.js";

console.log(
    denjucks.renderString("hello {{ txt }}", {txt: "world"})
);