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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls.js */ \"./node_modules/three/examples/jsm/controls/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.set(0, 0, 8);\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    mountPoint.appendChild(renderer.domElement);\n    // Load the stained glass texture\n    const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();\n    const stainedGlassTexture = textureLoader.load(\"stainedglasstexture.png\"); // Adjust the path as needed\n    // Create a material with the stained glass texture\n    const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n        map: stainedGlassTexture,\n        transparent: true,\n        opacity: 0.5,\n        emissive: 0xffffff,\n        emissiveIntensity: 0.5 // Adjust the intensity as needed\n    });\n    // Apply this material to your plane mesh\n    const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(30, 30);\n    const planeMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(planeGeometry, material);\n    planeMesh.position.set(0, 0, -10);\n    scene.add(planeMesh);\n    // Black square behind the glass\n    const blackSquareGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(35, 35);\n    const blackSquareMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({\n        color: 0x000000\n    });\n    const blackSquareMesh = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(blackSquareGeometry, blackSquareMaterial);\n    blackSquareMesh.position.z = -20; // Behind the glass\n    scene.add(blackSquareMesh);\n    // Light that follows the mouse\n    const pointLight = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight(0xff0000, 1, 100);\n    scene.add(pointLight);\n    // Red sphere to visually represent the point light\n    const sphereGeometry = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(0.5, 32, 32);\n    // Update the material of the red sphere to have high emissivity\n    const sphereMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({\n        color: 0xff0000,\n        emissive: 0xff0000,\n        emissiveIntensity: 1\n    });\n    const redSphere = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(sphereGeometry, sphereMaterial);\n    redSphere.position.z = -20; // Behind the glass\n    scene.add(redSphere);\n    // OrbitControls for easy scene navigation\n    const controls = new three_examples_jsm_controls_OrbitControls_js__WEBPACK_IMPORTED_MODULE_1__.OrbitControls(camera, renderer.domElement);\n    // Update light position based on mouse movement\n    function onMouseMove(event) {\n        const vector = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(event.clientX / window.innerWidth * 2 - 1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);\n        vector.unproject(camera);\n        const dir = vector.sub(camera.position).normalize();\n        const distance = -camera.position.z / dir.z;\n        const pos = camera.position.clone().add(dir.multiplyScalar(distance));\n        pos.z = -20; // Set the Z position of the light and sphere behind the glass\n        pointLight.position.copy(pos);\n        redSphere.position.copy(pos);\n    }\n    window.addEventListener(\"mousemove\", onMouseMove);\n    // Handle window resize\n    function onWindowResize() {\n        camera.aspect = window.innerWidth / window.innerHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(window.innerWidth, window.innerHeight);\n    }\n    window.addEventListener(\"resize\", onWindowResize);\n    // Post-processing for bloom effect\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_2__.EffectComposer(renderer);\n    const renderPass = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__.RenderPass(scene, camera);\n    // Post-processing for bloom effect with adjusted settings for a stronger glow\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_0__.Vector2(window.innerWidth, window.innerHeight), 1.0, 0.5, 0.5 // Lower threshold to include more of the bright areas\n    );\n    composer.addPass(renderPass);\n    composer.addPass(bloomPass);\n    // Animation loop\n    function animate() {\n        requestAnimationFrame(animate);\n        controls.update();\n        composer.render();\n    }\n    animate();\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxNQUFNb0IsTUFBTXJELE9BQU9LLFFBQVEsQ0FBQ2lELEtBQUssR0FBRzFCLEdBQUcsQ0FBQ3FCLElBQUlNLGNBQWMsQ0FBQ0g7UUFDM0RDLElBQUlwQixDQUFDLEdBQUcsQ0FBQyxJQUFJLDhEQUE4RDtRQUUzRUMsV0FBVzdCLFFBQVEsQ0FBQ21ELElBQUksQ0FBQ0g7UUFDekJiLFVBQVVuQyxRQUFRLENBQUNtRCxJQUFJLENBQUNIO0lBQzFCO0lBQ0FuRCxPQUFPdUQsZ0JBQWdCLENBQUMsYUFBYWY7SUFFckMsdUJBQXVCO0lBQ3ZCLFNBQVNnQjtRQUNQMUQsT0FBTzJELE1BQU0sR0FBR3pELE9BQU9DLFVBQVUsR0FBR0QsT0FBT0UsV0FBVztRQUN0REosT0FBTzRELHNCQUFzQjtRQUM3QnJELFNBQVNHLE9BQU8sQ0FBQ1IsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO0lBQ3hEO0lBQ0FGLE9BQU91RCxnQkFBZ0IsQ0FBQyxVQUFVQztJQUVsQyxtQ0FBbUM7SUFDbkMsTUFBTUcsV0FBVyxJQUFJcEUsK0ZBQWNBLENBQUNjO0lBQ3BDLE1BQU11RCxhQUFhLElBQUlwRSx1RkFBVUEsQ0FBQ0ksT0FBT0U7SUFDekMsOEVBQThFO0lBQzlFLE1BQU0rRCxZQUFZLElBQUlwRSxpR0FBZUEsQ0FDbkMsSUFBSUosMENBQWEsQ0FBQ1csT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXLEdBQ3ZELEtBQ0EsS0FDQSxJQUFJLHNEQUFzRDs7SUFFNUR5RCxTQUFTSSxPQUFPLENBQUNIO0lBQ2pCRCxTQUFTSSxPQUFPLENBQUNGO0lBRWpCLGlCQUFpQjtJQUNqQixTQUFTRztRQUNQQyxzQkFBc0JEO1FBQ3RCekIsU0FBUzJCLE1BQU07UUFDZlAsU0FBU1EsTUFBTTtJQUNqQjtJQUVBSDtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2FwcC5qcz9jMjQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qc1wiO1xuaW1wb3J0IHsgRWZmZWN0Q29tcG9zZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzXCI7XG5pbXBvcnQgeyBSZW5kZXJQYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9SZW5kZXJQYXNzLmpzXCI7XG5pbXBvcnQgeyBVbnJlYWxCbG9vbVBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1VucmVhbEJsb29tUGFzcy5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVRocmVlSlMobW91bnRQb2ludCkge1xuICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgNzUsXG4gICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgMC4xLFxuICAgIDEwMDBcbiAgKTtcbiAgY2FtZXJhLnBvc2l0aW9uLnNldCgwLCAwLCA4KTtcblxuICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYWxwaGE6IHRydWUgfSk7XG4gIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIG1vdW50UG9pbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAvLyBMb2FkIHRoZSBzdGFpbmVkIGdsYXNzIHRleHR1cmVcbiAgICBjb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcbiAgICBjb25zdCBzdGFpbmVkR2xhc3NUZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKCdzdGFpbmVkZ2xhc3N0ZXh0dXJlLnBuZycpOyAvLyBBZGp1c3QgdGhlIHBhdGggYXMgbmVlZGVkXG5cbiAgICAvLyBDcmVhdGUgYSBtYXRlcmlhbCB3aXRoIHRoZSBzdGFpbmVkIGdsYXNzIHRleHR1cmVcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCh7IFxuICAgICAgICBtYXA6IHN0YWluZWRHbGFzc1RleHR1cmUsIFxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSwgXG4gICAgICAgIG9wYWNpdHk6IDAuNSwgLy8gQWRqdXN0IGZvciBkZXNpcmVkIHRyYW5zcGFyZW5jeSBcbiAgICAgICAgZW1pc3NpdmU6IDB4ZmZmZmZmLCAvLyBFbWlzc2l2ZSBjb2xvciBzaW1pbGFyIHRvIHRoZSBicmlnaHRlc3QgcGFydCBvZiB0aGUgdGV4dHVyZVxuZW1pc3NpdmVJbnRlbnNpdHk6IDAuNSAvLyBBZGp1c3QgdGhlIGludGVuc2l0eSBhcyBuZWVkZWRcbiAgICB9KTtcblxuICAgIC8vIEFwcGx5IHRoaXMgbWF0ZXJpYWwgdG8geW91ciBwbGFuZSBtZXNoXG4gICAgY29uc3QgcGxhbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5XG4oMzAsIDMwKTtcbmNvbnN0IHBsYW5lTWVzaCA9IG5ldyBUSFJFRS5NZXNoKHBsYW5lR2VvbWV0cnksIG1hdGVyaWFsKTtcbnBsYW5lTWVzaC5wb3NpdGlvbi5zZXQoMCwgMCwgLTEwKTtcbnNjZW5lLmFkZChwbGFuZU1lc2gpO1xuXG4gIC8vIEJsYWNrIHNxdWFyZSBiZWhpbmQgdGhlIGdsYXNzXG4gIGNvbnN0IGJsYWNrU3F1YXJlR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgzNSwgMzUpO1xuICBjb25zdCBibGFja1NxdWFyZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4MDAwMDAwIH0pO1xuICBjb25zdCBibGFja1NxdWFyZU1lc2ggPSBuZXcgVEhSRUUuTWVzaChcbiAgICBibGFja1NxdWFyZUdlb21ldHJ5LFxuICAgIGJsYWNrU3F1YXJlTWF0ZXJpYWxcbiAgKTtcbiAgYmxhY2tTcXVhcmVNZXNoLnBvc2l0aW9uLnogPSAtMjA7IC8vIEJlaGluZCB0aGUgZ2xhc3NcbiAgc2NlbmUuYWRkKGJsYWNrU3F1YXJlTWVzaCk7XG4gIC8vIExpZ2h0IHRoYXQgZm9sbG93cyB0aGUgbW91c2VcbiAgY29uc3QgcG9pbnRMaWdodCA9IG5ldyBUSFJFRS5Qb2ludExpZ2h0KDB4ZmYwMDAwLCAxLCAxMDApO1xuICBzY2VuZS5hZGQocG9pbnRMaWdodCk7XG5cbiAgLy8gUmVkIHNwaGVyZSB0byB2aXN1YWxseSByZXByZXNlbnQgdGhlIHBvaW50IGxpZ2h0XG4gIGNvbnN0IHNwaGVyZUdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDAuNSwgMzIsIDMyKTtcbiAgLy8gVXBkYXRlIHRoZSBtYXRlcmlhbCBvZiB0aGUgcmVkIHNwaGVyZSB0byBoYXZlIGhpZ2ggZW1pc3Npdml0eVxuICBjb25zdCBzcGhlcmVNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgY29sb3I6IDB4ZmYwMDAwLFxuICAgIGVtaXNzaXZlOiAweGZmMDAwMCxcbiAgICBlbWlzc2l2ZUludGVuc2l0eTogMSxcbiAgfSk7XG4gIGNvbnN0IHJlZFNwaGVyZSA9IG5ldyBUSFJFRS5NZXNoKHNwaGVyZUdlb21ldHJ5LCBzcGhlcmVNYXRlcmlhbCk7XG4gIHJlZFNwaGVyZS5wb3NpdGlvbi56ID0gLTIwOyAvLyBCZWhpbmQgdGhlIGdsYXNzXG4gIHNjZW5lLmFkZChyZWRTcGhlcmUpO1xuXG4gIC8vIE9yYml0Q29udHJvbHMgZm9yIGVhc3kgc2NlbmUgbmF2aWdhdGlvblxuICBjb25zdCBjb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgLy8gVXBkYXRlIGxpZ2h0IHBvc2l0aW9uIGJhc2VkIG9uIG1vdXNlIG1vdmVtZW50XG4gIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XG4gICAgY29uc3QgdmVjdG9yID0gbmV3IFRIUkVFLlZlY3RvcjMoXG4gICAgICAoZXZlbnQuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDIgLSAxLFxuICAgICAgLShldmVudC5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDIgKyAxLFxuICAgICAgMC41XG4gICAgKTtcbiAgICB2ZWN0b3IudW5wcm9qZWN0KGNhbWVyYSk7XG4gICAgY29uc3QgZGlyID0gdmVjdG9yLnN1YihjYW1lcmEucG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IGRpc3RhbmNlID0gLWNhbWVyYS5wb3NpdGlvbi56IC8gZGlyLno7XG4gICAgY29uc3QgcG9zID0gY2FtZXJhLnBvc2l0aW9uLmNsb25lKCkuYWRkKGRpci5tdWx0aXBseVNjYWxhcihkaXN0YW5jZSkpO1xuICAgIHBvcy56ID0gLTIwOyAvLyBTZXQgdGhlIFogcG9zaXRpb24gb2YgdGhlIGxpZ2h0IGFuZCBzcGhlcmUgYmVoaW5kIHRoZSBnbGFzc1xuXG4gICAgcG9pbnRMaWdodC5wb3NpdGlvbi5jb3B5KHBvcyk7XG4gICAgcmVkU3BoZXJlLnBvc2l0aW9uLmNvcHkocG9zKTtcbiAgfVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvbk1vdXNlTW92ZSk7XG5cbiAgLy8gSGFuZGxlIHdpbmRvdyByZXNpemVcbiAgZnVuY3Rpb24gb25XaW5kb3dSZXNpemUoKSB7XG4gICAgY2FtZXJhLmFzcGVjdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0O1xuICAgIGNhbWVyYS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG4gICAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgfVxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvbldpbmRvd1Jlc2l6ZSk7XG5cbiAgLy8gUG9zdC1wcm9jZXNzaW5nIGZvciBibG9vbSBlZmZlY3RcbiAgY29uc3QgY29tcG9zZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIocmVuZGVyZXIpO1xuICBjb25zdCByZW5kZXJQYXNzID0gbmV3IFJlbmRlclBhc3Moc2NlbmUsIGNhbWVyYSk7XG4gIC8vIFBvc3QtcHJvY2Vzc2luZyBmb3IgYmxvb20gZWZmZWN0IHdpdGggYWRqdXN0ZWQgc2V0dGluZ3MgZm9yIGEgc3Ryb25nZXIgZ2xvd1xuICBjb25zdCBibG9vbVBhc3MgPSBuZXcgVW5yZWFsQmxvb21QYXNzKFxuICAgIG5ldyBUSFJFRS5WZWN0b3IyKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpLFxuICAgIDEuMCwgLy8gSW5jcmVhc2VkIGludGVuc2l0eSBmb3IgYSBzdHJvbmdlciBnbG93XG4gICAgMC41LCAvLyBJbmNyZWFzZWQgcmFkaXVzIGZvciBhIHdpZGVyIGdsb3cgZWZmZWN0XG4gICAgMC41IC8vIExvd2VyIHRocmVzaG9sZCB0byBpbmNsdWRlIG1vcmUgb2YgdGhlIGJyaWdodCBhcmVhc1xuICApO1xuICBjb21wb3Nlci5hZGRQYXNzKHJlbmRlclBhc3MpO1xuICBjb21wb3Nlci5hZGRQYXNzKGJsb29tUGFzcyk7XG5cbiAgLy8gQW5pbWF0aW9uIGxvb3BcbiAgZnVuY3Rpb24gYW5pbWF0ZSgpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG4gICAgY29udHJvbHMudXBkYXRlKCk7XG4gICAgY29tcG9zZXIucmVuZGVyKCk7XG4gIH1cblxuICBhbmltYXRlKCk7XG59XG4iXSwibmFtZXMiOlsiVEhSRUUiLCJPcmJpdENvbnRyb2xzIiwiRWZmZWN0Q29tcG9zZXIiLCJSZW5kZXJQYXNzIiwiVW5yZWFsQmxvb21QYXNzIiwiaW5pdGlhbGl6ZVRocmVlSlMiLCJtb3VudFBvaW50Iiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJzZXQiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsInNldFNpemUiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsInN0YWluZWRHbGFzc1RleHR1cmUiLCJsb2FkIiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsIm1hcCIsInRyYW5zcGFyZW50Iiwib3BhY2l0eSIsImVtaXNzaXZlIiwiZW1pc3NpdmVJbnRlbnNpdHkiLCJwbGFuZUdlb21ldHJ5IiwiUGxhbmVHZW9tZXRyeSIsInBsYW5lTWVzaCIsIk1lc2giLCJhZGQiLCJibGFja1NxdWFyZUdlb21ldHJ5IiwiYmxhY2tTcXVhcmVNYXRlcmlhbCIsImNvbG9yIiwiYmxhY2tTcXVhcmVNZXNoIiwieiIsInBvaW50TGlnaHQiLCJQb2ludExpZ2h0Iiwic3BoZXJlR2VvbWV0cnkiLCJTcGhlcmVHZW9tZXRyeSIsInNwaGVyZU1hdGVyaWFsIiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJyZWRTcGhlcmUiLCJjb250cm9scyIsIm9uTW91c2VNb3ZlIiwiZXZlbnQiLCJ2ZWN0b3IiLCJWZWN0b3IzIiwiY2xpZW50WCIsImNsaWVudFkiLCJ1bnByb2plY3QiLCJkaXIiLCJzdWIiLCJub3JtYWxpemUiLCJkaXN0YW5jZSIsInBvcyIsImNsb25lIiwibXVsdGlwbHlTY2FsYXIiLCJjb3B5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uV2luZG93UmVzaXplIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImNvbXBvc2VyIiwicmVuZGVyUGFzcyIsImJsb29tUGFzcyIsIlZlY3RvcjIiLCJhZGRQYXNzIiwiYW5pbWF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInVwZGF0ZSIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});