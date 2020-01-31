"use strict"

const pretty = require("pretty")
const stripTags = require("striptags")

module.exports = (input) => {
	if (typeof input !== "string") throw new TypeError("`input` must be a string!")
	return stripTags(pretty(input, { indent_size: 0 })).trim()
}
