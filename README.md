# color

Used to convert colors to RGB or hex from RGB, hex or the color name

Simply run any of the functions (`toArray`, `toRgb`, `toHex` or `toName`) and pass it your color in any of the following formats.

 * Array - `[25, 10, 255]`
 * RGB - `rgb(25, 10, 255)`
 * Hex - `#FFC609`
 * Name - `red`

The method will then return the color converted to either an array, rgb, hex or its name equivilent depending on what method you ran.

You also have access to all of the colors and their values by name. For instance, the following code will return `[255, 0, 0]`

    color.names.red;

To then convert that into hex you would use the following line.

    color.toHex(color.names.red);
    
## Installation

You can find this library on npm under `olical-color` or on the [unpkg][] CDN at https://unpkg.com/olical-color/src/color.js. It is distributed with a UMD wrapper, so you can use it via AMD, nodejs or a browser global.

## Testing

Simply execute `npm test` to run the tape tests and `npm run lint` to run the standard linter. They are all executed before a publish.

## Author

[Oliver Caldwell][author-site] ([@OliverCaldwell][author-twitter])

## Unlicenced

Find the full [unlicense][] in the `UNLICENSE` file, but here's a snippet.

>This is free and unencumbered software released into the public domain.
>
>Anyone is free to copy, modify, publish, use, compile, sell, or distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.

Do what you want. Learn as much as you can. Unlicense more software.

[unlicense]: http://unlicense.org/
[author-site]: http://oli.me.uk/
[author-twitter]: https://twitter.com/OliverCaldwell
[unpkg]: https://unpkg.com/#/
