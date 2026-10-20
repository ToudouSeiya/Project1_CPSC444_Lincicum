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
{
const ambientLight = new THREE.AmbientLight(
    0xffffff,
    0.4
);

scene.add(ambientLight);

const pointLight = new THREE.PointLight(
    0xffffff,
    200
);

pointLight.position.set(1, 10, 1);

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

}
// ---------------------------------------------------
// Floor
// ---------------------------------------------------
{
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
}
// ---------------------------------------------------
// Shapes
// ---------------------------------------------------
const sphereGeometry = new THREE.SphereGeometry(1, 10, 10);
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 1, 16);
const capsuleGeometry = new THREE.CapsuleGeometry(1, 1, 4, 8, 1);

// ---------------------------------------------------
// Character
// ---------------------------------------------------

const charMaterial = 
    new THREE.MeshStandardMaterial({
        color: 0xffff00,
        roughness: 1,
        metalness: 0
    });

const charMaterial2 = 
    new THREE.MeshStandardMaterial({
        color: 0x666600,
        roughness: 1,
        metalness: 0
    });

//body
const char = 
    new THREE.Mesh(
        capsuleGeometry,
        charMaterial
    );
char.scale.set(0.6, 0.7, 0.6);
char.receiveShadow = true;
char.position.y=2;
char.rotation.z=Math.PI / 2;

scene.add(char);

//eyes 
const eyeMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness:0 } );
const eye1 = new THREE.Mesh( sphereGeometry, eyeMaterial );
eye1.scale.set(0.25, 0.25, 0.25);
eye1.position.set(-0.5, 2, 0.5);
eye1.receiveShadow = true;
scene.add(eye1);

const eye2 = new THREE.Mesh( sphereGeometry, eyeMaterial );
eye2.scale.set(0.25, 0.25, 0.25);
eye2.position.set(0.5, 2, 0.5);
eye2.receiveShadow = true;
scene.add(eye2);

const pupilMaterial = new THREE.MeshStandardMaterial( { color: 0x000000, roughness:0 } );
const pupil1 = new THREE.Mesh( sphereGeometry, pupilMaterial );
pupil1.scale.set(0.125, 0.125, 0.125);
pupil1.position.set(-0.5, 2, 0.675);
pupil1.receiveShadow = true;
scene.add( pupil1 );

const pupil2 = new THREE.Mesh( sphereGeometry, pupilMaterial );
pupil2.scale.set(0.125, 0.125, 0.125);
pupil2.position.set(0.5, 2, 0.675);
pupil2.receiveShadow = true;
scene.add( pupil2 );

//mouth
const mouth = new THREE.Mesh(capsuleGeometry, pupilMaterial);
mouth.scale.set(0.125, 0.15, 0.125);
mouth.rotation.z = Math.PI / 2;
mouth.position.set(0, 1.75, 0.5);
mouth.receiveShadow = true;
scene.add(mouth);

//antenna 
const antenna1 = new THREE.Mesh(cylinderGeometry, charMaterial);
antenna1.scale.set(0.05, 0.5, 0.05);
antenna1.position.set(0.3, 2.7, 0);
antenna1.receiveShadow = true;
scene.add(antenna1);

const antennaPip1 = new THREE.Mesh(sphereGeometry, charMaterial2);
antennaPip1.scale.set(0.075, 0.075, 0.075);
antennaPip1.position.set(0.3, 2.95, 0);
antennaPip1.receiveShadow = true;
scene.add(antennaPip1);

const antenna2 = new THREE.Mesh(cylinderGeometry, charMaterial);
antenna2.scale.set(0.05, 0.5, 0.05);
antenna2.position.set(-0.3, 2.7, 0);
antenna2.receiveShadow = true;
scene.add(antenna2);

const antennaPip2 = new THREE.Mesh(sphereGeometry, charMaterial2);
antennaPip2.scale.set(0.075, 0.075, 0.075);
antennaPip2.position.set(-0.3, 2.95, 0);
antennaPip2.receiveShadow = true;
scene.add(antennaPip2);

//legs
const upperLeg1 = new THREE.Mesh(cylinderGeometry, charMaterial);
upperLeg1.scale.set(0.1, 0.7, 0.1);
upperLeg1.position.set(0.5, 1.25, 0);
upperLeg1.receiveShadow = true;
scene.add(upperLeg1);

const knee1 = new THREE.Mesh(sphereGeometry, charMaterial2);
knee1.scale.set(0.15, 0.15, 0.15);
knee1.position.set(0.5, 0.85, 0);
knee1.receiveShadow = true;
scene.add(knee1);

const lowerLeg1 = new THREE.Mesh(cylinderGeometry, charMaterial);
lowerLeg1.scale.set(0.1, 0.7, 0.1);
lowerLeg1.position.set(0.5, 0.5, 0);
lowerLeg1.receiveShadow = true;
scene.add(lowerLeg1);

const foot1 = new THREE.Mesh(capsuleGeometry, charMaterial2);
foot1.scale.set(0.15, 0.15, 0.15);
foot1.rotation.x = Math.PI / 2;
foot1.position.set(0.5, 0.075, 0.1);
foot1.receiveShadow = true;
scene.add(foot1);


const upperLeg2 = new THREE.Mesh(cylinderGeometry, charMaterial);
upperLeg2.scale.set(0.1, 0.7, 0.1);
upperLeg2.position.set(-0.5, 1.25, 0);
upperLeg2.receiveShadow = true;
scene.add(upperLeg2);

const knee2 = new THREE.Mesh(sphereGeometry, charMaterial2);
knee2.scale.set(0.15, 0.15, 0.15);
knee2.position.set(-0.5, 0.85, 0);
knee2.receiveShadow = true;
scene.add(knee2);

const lowerLeg2 = new THREE.Mesh(cylinderGeometry, charMaterial);
lowerLeg2.scale.set(0.1, 0.7, 0.1);
lowerLeg2.position.set(-0.5, 0.5, 0);
lowerLeg2.receiveShadow = true;
scene.add(lowerLeg2);

const foot2 = new THREE.Mesh(capsuleGeometry, charMaterial2);
foot2.scale.set(0.15, 0.15, 0.15);
foot2.rotation.x = Math.PI / 2;
foot2.position.set(-0.5, 0.075, 0.1);
foot2.receiveShadow = true;
scene.add(foot2);

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
