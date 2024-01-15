import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";

export function initializeThreeJS(mountPoint) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountPoint.appendChild(renderer.domElement);

    // Load the stained glass texture
    const textureLoader = new THREE.TextureLoader();
    const stainedGlassTexture = textureLoader.load('stainedglasstexture.png'); // Ensure the path is correct

    // Stained glass material
    const material = new THREE.MeshBasicMaterial({
        map: stainedGlassTexture,
        transparent: true,
        opacity: 0.5
    });

    // Stained glass geometry and mesh
    const planeGeometry = new THREE.PlaneGeometry(30, 30);
    const planeMesh = new THREE.Mesh(planeGeometry, material);
    planeMesh.position.set(0, 0, -10);
    scene.add(planeMesh);

    // Black square behind the glass
    const blackSquareGeometry = new THREE.PlaneGeometry(35, 35);
    const blackSquareMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const blackSquareMesh = new THREE.Mesh(blackSquareGeometry, blackSquareMaterial);
    blackSquareMesh.position.z = -20;
    scene.add(blackSquareMesh);

 // Red sphere (light source)
    const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, emissive: 0xff0000 });
    const redSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    redSphere.position.z = -20;
    scene.add(redSphere);

    // Light beam
    const beamGeometry = new THREE.CylinderGeometry(0.1, 0.1, 50, 32);
    const beamMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, transparent: true, opacity: 0.6, emissive: 0xff0000 });
    const beamMesh = new THREE.Mesh(beamGeometry, beamMaterial);
    beamMesh.rotation.x = Math.PI / 2;
    scene.add(beamMesh);

    // Spotlight for beam effect
    const spotlight = new THREE.SpotLight(0xff0000, 1, 100, Math.PI / 4);
    spotlight.position.z = -20;
    scene.add(spotlight);

    // Update beam position and orientation based on mouse movement
    function onMouseMove(event) {
        const vector = new THREE.Vector3(
            (event.clientX / window.innerWidth) * 2 - 1,
            - (event.clientY / window.innerHeight) * 2 + 1,
            0.5
        );
        vector.unproject(camera);
        const dir = vector.sub(camera.position).normalize();
        const distance = - camera.position.z / dir.z;
        const pos = camera.position.clone().add(dir.multiplyScalar(distance));
        pos.z = -20;

        redSphere.position.copy(pos);
        beamMesh.position.copy(pos);
        beamMesh.lookAt(camera.position);
    }
    window.addEventListener('mousemove', onMouseMove);

    // OrbitControls
//for easy scene navigation
const controls = new OrbitControls(camera, renderer.domElement);
// Handle window resize
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', onWindowResize);

// Post-processing for bloom effect
const composer = new EffectComposer(renderer);
const renderPass = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    1.0, // Intensity of the bloom
    0.5, // Radius of the bloom
    0.1  // Threshold for bloom
);
composer.addPass(renderPass);
composer.addPass(bloomPass);

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    composer.render();
}

animate();
}