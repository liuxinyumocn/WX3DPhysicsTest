System.register([], function (exports) {
	'use strict';
	return {
		execute: function () {

			exports('c', createCommonjsModule);

			function createCommonjsModule(fn, module) {
				return module = { exports: {} }, fn(module, module.exports), module.exports;
			}

		}
	};
});
