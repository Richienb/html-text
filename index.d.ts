/**
 * Extract text from HTML.
 * @param input The HTML to strip the tags from.
 * @example
 * ```
 * const htmlText = require("html-text");
 *
 * htmlText(`
 * <!DOCTYPE html>
 * <html id="home" lang="en">
 *
 * <body>
 *   <main>
 *     <p>Site Content.</p>
 *   </main>
 * </body>
 *
 * </html>
 * `);
 * //=> 'Site Content.'
 * ```
*/
declare function htmlText(input: string): string;

export = htmlText;
