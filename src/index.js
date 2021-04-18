/*
 * lalalog
 * created by Nav Saini @navxio
 * on Wed, March 3, 2021
 */

const log = {};

// the statics are

// primary
// secondary
// success
// danger
// warning
// info
// light
// dark

log.success = function () {
	console.log(
		`%cSUCCESS%c ${arguments[0]}`,
		'color:white;background:green;',
		'color:green;',
		...Array.from(arguments).slice(0, arguments.length - 1)
	);
};

log.error = function () {
	console.log(
		`%cERROR%c ${arguments[0]}`,
		'color:white;background:red;',
		'color:red;',
		...Array.from(arguments).slice(0, arguments.length - 1)
	);
};

log.custom = (title, styleString) => {
	return function () {
		console.log(`%c ${title}`, styleString, ...arguments);
	};
};

module.exports = log;
