"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/app.js":
/*!**********************!*\
  !*** ./utils/app.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 5;\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    document.body.appendChild(renderer.domElement);\n    // Light that will follow the mouse\n    const pointLight = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xffffff, 1, 100);\n    scene.add(pointLight);\n    // Stained glass material\n    // NOTE: This is where you would add your custom shader material for the stained glass effect\n    const stainedGlassMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n        color: 0xffffff,\n        opacity: 0.5,\n        transparent: true\n    });\n    // Plane for the stained glass\n    const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(5, 5);\n    const planeMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeometry, stainedGlassMaterial);\n    scene.add(planeMesh);\n    // OrbitControls for easy scene navigation\n    const controls = new OrbitControls(camera, renderer.domElement);\n    // Convert mouse move event to coordinates for the light position\n    function onMouseMove(event) {\n        const vector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(event.clientX / window.innerWidth * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);\n        vector.unproject(camera);\n        const dir = vector.sub(camera.position).normalize();\n        const distance = -camera.position.z / dir.z;\n        const pos = camera.position.clone().add(dir.multiplyScalar(distance));\n        pointLight.position.copy(pos);\n    }\n    window.addEventListener(\"mousemove\", onMouseMove, false);\n    // Window resize handler\n    function onWindowResize() {\n        camera.aspect = // ...continuing from the previous code\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize);\n    // The animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        // Update controls\n        controls.update();\n        // Render the scene\n        renderer.render(scene, camera);\n    }\n    // Start the animation loop\n    animate();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0I7QUFDc0Q7QUFDUjtBQUNVO0FBQ2pCO0FBQ2I7QUFFbEQsU0FBU00sa0JBQWtCQyxVQUFVO0lBQ3hDLE1BQU1DLFFBQVEsSUFBSVIsd0NBQVc7SUFDakMsTUFBTVUsU0FBUyxJQUFJVixvREFBdUIsQ0FBQyxJQUFJWSxPQUFPQyxVQUFVLEdBQUdELE9BQU9FLFdBQVcsRUFBRSxLQUFLO0lBQzVGSixPQUFPSyxRQUFRLENBQUNDLENBQUMsR0FBRztJQUVwQixNQUFNQyxXQUFXLElBQUlqQixnREFBbUIsQ0FBQztRQUFFbUIsT0FBTztJQUFLO0lBQ3ZERixTQUFTRyxPQUFPLENBQUNSLE9BQU9DLFVBQVUsRUFBRUQsT0FBT0UsV0FBVztJQUN0RE8sU0FBU0MsSUFBSSxDQUFDQyxXQUFXLENBQUNOLFNBQVNPLFVBQVU7SUFFN0MsbUNBQW1DO0lBQ25DLE1BQU1DLGFBQWEsSUFBSXpCLDZDQUFnQixDQUFDLFVBQVUsR0FBRztJQUNyRFEsTUFBTW1CLEdBQUcsQ0FBQ0Y7SUFFVix5QkFBeUI7SUFDekIsNkZBQTZGO0lBQzdGLE1BQU1HLHVCQUF1QixJQUFJNUIsb0RBQXVCLENBQUM7UUFBRThCLE9BQU87UUFBVUMsU0FBUztRQUFLQyxhQUFhO0lBQUs7SUFFNUcsOEJBQThCO0lBQzlCLE1BQU1DLGdCQUFnQixJQUFJakMsZ0RBQW1CLENBQUMsR0FBRztJQUNqRCxNQUFNbUMsWUFBWSxJQUFJbkMsdUNBQVUsQ0FBQ2lDLGVBQWVMO0lBQ2hEcEIsTUFBTW1CLEdBQUcsQ0FBQ1E7SUFFViwwQ0FBMEM7SUFDMUMsTUFBTUUsV0FBVyxJQUFJQyxjQUFjNUIsUUFBUU8sU0FBU08sVUFBVTtJQUU5RCxpRUFBaUU7SUFDakUsU0FBU2UsWUFBWUMsS0FBSztRQUN0QixNQUFNQyxTQUFTLElBQUl6QywwQ0FBYSxDQUM1QixNQUFPMkMsT0FBTyxHQUFHL0IsT0FBT0MsVUFBVSxHQUFJLElBQUksR0FDMUMsQ0FBRzJCLENBQUFBLE1BQU1JLE9BQU8sR0FBR2hDLE9BQU9FLFdBQVcsSUFBSSxJQUFJLEdBQzdDO1FBRUoyQixPQUFPSSxTQUFTLENBQUNuQztRQUNqQixNQUFNb0MsTUFBTUwsT0FBT00sR0FBRyxDQUFDckMsT0FBT0ssUUFBUSxFQUFFaUMsU0FBUztRQUNqRCxNQUFNQyxXQUFXLENBQUV2QyxPQUFPSyxRQUFRLENBQUNDLENBQUMsR0FBRzhCLElBQUk5QixDQUFDO1FBQzVDLE1BQU1rQyxNQUFNeEMsT0FBT0ssUUFBUSxDQUFDb0MsS0FBSyxHQUFHeEIsR0FBRyxDQUFDbUIsSUFBSU0sY0FBYyxDQUFDSDtRQUMzRHhCLFdBQVdWLFFBQVEsQ0FBQ3NDLElBQUksQ0FBQ0g7SUFDN0I7SUFFQXRDLE9BQU8wQyxnQkFBZ0IsQ0FBQyxhQUFhZixhQUFhO0lBRWxELHdCQUF3QjtJQUN4QixTQUFTZ0I7UUFDTDdDLE9BQU84QyxNQUFNLEdBQ2IsdUNBQXVDO1FBRXZDOUMsT0FBTzhDLE1BQU0sR0FBRzVDLE9BQU9DLFVBQVUsR0FBR0QsT0FBT0UsV0FBVztRQUN0REosT0FBTytDLHNCQUFzQjtRQUM3QnhDLFNBQVNHLE9BQU8sQ0FBQ1IsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO0lBQzFEO0lBRUFGLE9BQU8wQyxnQkFBZ0IsQ0FBQyxVQUFVQztJQUVsQyxxQkFBcUI7SUFDckIsU0FBU0c7UUFDTEMsc0JBQXNCRDtRQUV0QixrQkFBa0I7UUFDbEJyQixTQUFTdUIsTUFBTTtRQUVmLG1CQUFtQjtRQUNuQjNDLFNBQVM0QyxNQUFNLENBQUNyRCxPQUFPRTtJQUMzQjtJQUVBLDJCQUEyQjtJQUMzQmdEO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBwLmpzP2MyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBFZmZlY3RDb21wb3NlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvRWZmZWN0Q29tcG9zZXIuanNcIjtcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1JlbmRlclBhc3MuanNcIjtcbmltcG9ydCB7IFVucmVhbEJsb29tUGFzcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvVW5yZWFsQmxvb21QYXNzLmpzXCI7XG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgeyBEZXZpY2VPcmllbnRhdGlvbkNvbnRyb2xzIH0gZnJvbSAndGhyZWUtc3RkbGliJztcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVUaHJlZUpTKG1vdW50UG9pbnQpIHtcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbmNhbWVyYS5wb3NpdGlvbi56ID0gNTtcblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFscGhhOiB0cnVlIH0pO1xucmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbi8vIExpZ2h0IHRoYXQgd2lsbCBmb2xsb3cgdGhlIG1vdXNlXG5jb25zdCBwb2ludExpZ2h0ID0gbmV3IFRIUkVFLlBvaW50TGlnaHQoMHhmZmZmZmYsIDEsIDEwMCk7XG5zY2VuZS5hZGQocG9pbnRMaWdodCk7XG5cbi8vIFN0YWluZWQgZ2xhc3MgbWF0ZXJpYWxcbi8vIE5PVEU6IFRoaXMgaXMgd2hlcmUgeW91IHdvdWxkIGFkZCB5b3VyIGN1c3RvbSBzaGFkZXIgbWF0ZXJpYWwgZm9yIHRoZSBzdGFpbmVkIGdsYXNzIGVmZmVjdFxuY29uc3Qgc3RhaW5lZEdsYXNzTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmZmYsIG9wYWNpdHk6IDAuNSwgdHJhbnNwYXJlbnQ6IHRydWUgfSk7XG5cbi8vIFBsYW5lIGZvciB0aGUgc3RhaW5lZCBnbGFzc1xuY29uc3QgcGxhbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDUsIDUpO1xuY29uc3QgcGxhbmVNZXNoID0gbmV3IFRIUkVFLk1lc2gocGxhbmVHZW9tZXRyeSwgc3RhaW5lZEdsYXNzTWF0ZXJpYWwpO1xuc2NlbmUuYWRkKHBsYW5lTWVzaCk7XG5cbi8vIE9yYml0Q29udHJvbHMgZm9yIGVhc3kgc2NlbmUgbmF2aWdhdGlvblxuY29uc3QgY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4vLyBDb252ZXJ0IG1vdXNlIG1vdmUgZXZlbnQgdG8gY29vcmRpbmF0ZXMgZm9yIHRoZSBsaWdodCBwb3NpdGlvblxuZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcbiAgICBjb25zdCB2ZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMyhcbiAgICAgICAgKGV2ZW50LmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiAyIC0gMSxcbiAgICAgICAgLSAoZXZlbnQuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAyICsgMSxcbiAgICAgICAgMC41XG4gICAgKTtcbiAgICB2ZWN0b3IudW5wcm9qZWN0KGNhbWVyYSk7XG4gICAgY29uc3QgZGlyID0gdmVjdG9yLnN1YihjYW1lcmEucG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gLSBjYW1lcmEucG9zaXRpb24ueiAvIGRpci56O1xuICAgIGNvbnN0IHBvcyA9IGNhbWVyYS5wb3NpdGlvbi5jbG9uZSgpLmFkZChkaXIubXVsdGlwbHlTY2FsYXIoZGlzdGFuY2UpKTtcbiAgICBwb2ludExpZ2h0LnBvc2l0aW9uLmNvcHkocG9zKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSk7XG5cbi8vIFdpbmRvdyByZXNpemUgaGFuZGxlclxuZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gICAgY2FtZXJhLmFzcGVjdCA9XG4gICAgLy8gLi4uY29udGludWluZyBmcm9tIHRoZSBwcmV2aW91cyBjb2RlXG5cbiAgICBjYW1lcmEuYXNwZWN0ID0gd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgb25XaW5kb3dSZXNpemUpO1xuXG4vLyBUaGUgYW5pbWF0aW9uIGxvb3BcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xuICAgIFxuICAgIC8vIFVwZGF0ZSBjb250cm9sc1xuICAgIGNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgIFxuICAgIC8vIFJlbmRlciB0aGUgc2NlbmVcbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG59XG5cbi8vIFN0YXJ0IHRoZSBhbmltYXRpb24gbG9vcFxuYW5pbWF0ZSgpO1xuXG59XG4iXSwibmFtZXMiOlsiVEhSRUUiLCJFZmZlY3RDb21wb3NlciIsIlJlbmRlclBhc3MiLCJVbnJlYWxCbG9vbVBhc3MiLCJHTFRGTG9hZGVyIiwiRGV2aWNlT3JpZW50YXRpb25Db250cm9scyIsImluaXRpYWxpemVUaHJlZUpTIiwibW91bnRQb2ludCIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwic2V0U2l6ZSIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsInBvaW50TGlnaHQiLCJQb2ludExpZ2h0IiwiYWRkIiwic3RhaW5lZEdsYXNzTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwib3BhY2l0eSIsInRyYW5zcGFyZW50IiwicGxhbmVHZW9tZXRyeSIsIlBsYW5lR2VvbWV0cnkiLCJwbGFuZU1lc2giLCJNZXNoIiwiY29udHJvbHMiLCJPcmJpdENvbnRyb2xzIiwib25Nb3VzZU1vdmUiLCJldmVudCIsInZlY3RvciIsIlZlY3RvcjMiLCJjbGllbnRYIiwiY2xpZW50WSIsInVucHJvamVjdCIsImRpciIsInN1YiIsIm5vcm1hbGl6ZSIsImRpc3RhbmNlIiwicG9zIiwiY2xvbmUiLCJtdWx0aXBseVNjYWxhciIsImNvcHkiLCJhZGRFdmVudExpc3RlbmVyIiwib25XaW5kb3dSZXNpemUiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});