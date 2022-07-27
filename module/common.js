/******/ (() => { // webpackBootstrap
    /******/ 	var __webpack_modules__ = ({

        /***/ "./scripts/testA.js":
        /*!**************************!*\
          !*** ./scripts/love.js ***!
          \**************************/
        /***/ ((__unused_webpack_module, exports) => {

            const a = 1

            exports=a


            /***/ }),

        /***/ "./scripts/testB.js":
        /*!**************************!*\
          !*** ./scripts/you.js ***!
          \**************************/
        /***/ ((__unused_webpack_module, exports) => {

            const a= 1

            exports=a

            /***/ })

        /******/ 	});
    /************************************************************************/
    /******/ 	// The module cache
    /******/ 	var __webpack_module_cache__ = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
        /******/ 		// Check if module is in cache
        /******/ 		var cachedModule = __webpack_module_cache__[moduleId];

        /******/ 		if (cachedModule !== undefined) {
            /******/ 			return cachedModule.exports;
            /******/ 		}
        /******/ 		// Create a new module (and put it into the cache)
        /******/ 		var module = __webpack_module_cache__[moduleId] = {
            /******/ 			// no module.id needed
            /******/ 			// no module.loaded needed
            /******/ 			exports: {}
            /******/ 		};

                            //module:{
        //                      ./scripts/you.js:{
                                    //exports:{}
                                //}
        //                    }
        /******/
        /******/ 		// Execute the module function
        /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ 		// Return the exports of the module
        /******/ 		return module.exports;
        /******/ 	}
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
        /*!*****************!*\
          !*** ./main.js ***!
          \*****************/
        const a = __webpack_require__(/*! ./scripts/testA */ "./scripts/testA.js")
        const b = __webpack_require__(/*! ./scripts/testB */ "./scripts/testB.js")

        console.log(a);
        console.log(b)
    })();

    /******/ })()
;