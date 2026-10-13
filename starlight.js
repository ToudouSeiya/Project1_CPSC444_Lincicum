//Morgan Lincicum
//Project 1

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// ---------------------------------------------------
// Scene
// ---------------------------------------------------

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222233);

// ---------------------------------------------------
// Camera
// ---------------------------------------------------

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 8, 20);

// ---------------------------------------------------
// Renderer
// ---------------------------------------------------

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

// ---------------------------------------------------
// Controls
// ---------------------------------------------------

const controls = new OrbitControls(camera, renderer.domElement);

// ---------------------------------------------------
// Lights
// ---------------------------------------------------

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    0.4
);

scene.add(ambientLight);

const pointLight = new THREE.PointLight(
    0xffffff,
    200
);

pointLight.position.set(5, 10, 5);

pointLight.castShadow = true;

scene.add(pointLight);

const helper = new THREE.PointLightHelper(
    pointLight,
    0.5
);

scene.add(helper);

const dirLight = new THREE.DirectionalLight(
    0xffffff, 0.7
)
dirLight.position.set(-50, 50, 50);
scene.add(dirLight);


// ---------------------------------------------------
// Floor
// ---------------------------------------------------

const floorGeometry =
    new THREE.PlaneGeometry(40, 40);

const floorMaterial =
    new THREE.MeshStandardMaterial({
        color: 0x444444
    });

const floor =
    new THREE.Mesh(
        floorGeometry,
        floorMaterial
    );

floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;

scene.add(floor);

// ---------------------------------------------------
// Animation
// ---------------------------------------------------

function animate() {

    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
}

animate();

// ---------------------------------------------------
// Resize
// ---------------------------------------------------

window.addEventListener('resize', () => {

    camera.aspect =
        window.innerWidth /
        window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});
