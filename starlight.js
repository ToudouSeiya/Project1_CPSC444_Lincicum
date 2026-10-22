//Morgan Lincicum
//Project 1

document.onmousemove = getMousePosition;

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
const xBound = 20;
const zBound = 20;
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

const charArray = [];

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
charArray.push(char);

//eyes 
const eyeMaterial = new THREE.MeshStandardMaterial( { color: 0xffffff, roughness:0 } );
const eye1 = new THREE.Mesh( sphereGeometry, eyeMaterial );
eye1.scale.set(0.25, 0.25, 0.25);
eye1.position.set(-0.5, 2, 0.5);
eye1.receiveShadow = true;
scene.add(eye1);
charArray.push(eye1);

const eye2 = new THREE.Mesh( sphereGeometry, eyeMaterial );
eye2.scale.set(0.25, 0.25, 0.25);
eye2.position.set(0.5, 2, 0.5);
eye2.receiveShadow = true;
scene.add(eye2);
charArray.push(eye2);

const pupilMaterial = new THREE.MeshStandardMaterial( { color: 0x000000, roughness:0 } );
const pupil1 = new THREE.Mesh( sphereGeometry, pupilMaterial );
pupil1.scale.set(0.125, 0.125, 0.125);
pupil1.position.set(-0.5, 2, 0.675);
pupil1.receiveShadow = true;
scene.add( pupil1 );
charArray.push(pupil1);

const pupil2 = new THREE.Mesh( sphereGeometry, pupilMaterial );
pupil2.scale.set(0.125, 0.125, 0.125);
pupil2.position.set(0.5, 2, 0.675);
pupil2.receiveShadow = true;
scene.add( pupil2 );
charArray.push(pupil2);

//mouth
const mouth = new THREE.Mesh(capsuleGeometry, pupilMaterial);
mouth.scale.set(0.125, 0.15, 0.125);
mouth.rotation.z = Math.PI / 2;
mouth.position.set(0, 1.75, 0.5);
mouth.receiveShadow = true;
scene.add(mouth);
charArray.push(mouth);

//antenna 
const antenna1 = new THREE.Mesh(cylinderGeometry, charMaterial);
antenna1.scale.set(0.05, 0.5, 0.05);
antenna1.position.set(0.3, 2.7, 0);
antenna1.receiveShadow = true;
scene.add(antenna1);
charArray.push(antenna1);

const antennaPip1 = new THREE.Mesh(sphereGeometry, charMaterial2);
antennaPip1.scale.set(0.075, 0.075, 0.075);
antennaPip1.position.set(0.3, 2.95, 0);
antennaPip1.receiveShadow = true;
scene.add(antennaPip1);
charArray.push(antennaPip1);

const antenna2 = new THREE.Mesh(cylinderGeometry, charMaterial);
antenna2.scale.set(0.05, 0.5, 0.05);
antenna2.position.set(-0.3, 2.7, 0);
antenna2.receiveShadow = true;
scene.add(antenna2);
charArray.push(antenna2);

const antennaPip2 = new THREE.Mesh(sphereGeometry, charMaterial2);
antennaPip2.scale.set(0.075, 0.075, 0.075);
antennaPip2.position.set(-0.3, 2.95, 0);
antennaPip2.receiveShadow = true;
scene.add(antennaPip2);
charArray.push(antennaPip2);

//legs
const upperLeg1 = new THREE.Mesh(cylinderGeometry, charMaterial);
upperLeg1.scale.set(0.1, 0.7, 0.1);
upperLeg1.position.set(0.5, 1.25, 0);
upperLeg1.receiveShadow = true;
scene.add(upperLeg1);
charArray.push(upperLeg1);

const knee1 = new THREE.Mesh(sphereGeometry, charMaterial2);
knee1.scale.set(0.15, 0.15, 0.15);
knee1.position.set(0.5, 0.85, 0);
knee1.receiveShadow = true;
scene.add(knee1);
charArray.push(knee1);

const lowerLeg1 = new THREE.Mesh(cylinderGeometry, charMaterial);
lowerLeg1.scale.set(0.1, 0.7, 0.1);
lowerLeg1.position.set(0.5, 0.5, 0);
lowerLeg1.receiveShadow = true;
scene.add(lowerLeg1);
charArray.push(lowerLeg1);

const foot1 = new THREE.Mesh(capsuleGeometry, charMaterial2);
foot1.scale.set(0.15, 0.15, 0.15);
foot1.rotation.x = Math.PI / 2;
foot1.position.set(0.5, 0.075, 0.1);
foot1.receiveShadow = true;
scene.add(foot1);
charArray.push(foot1);


const upperLeg2 = new THREE.Mesh(cylinderGeometry, charMaterial);
upperLeg2.scale.set(0.1, 0.7, 0.1);
upperLeg2.position.set(-0.5, 1.25, 0);
upperLeg2.receiveShadow = true;
scene.add(upperLeg2);
charArray.push(upperLeg2);

const knee2 = new THREE.Mesh(sphereGeometry, charMaterial2);
knee2.scale.set(0.15, 0.15, 0.15);
knee2.position.set(-0.5, 0.85, 0);
knee2.receiveShadow = true;
scene.add(knee2);
charArray.push(knee2);

const lowerLeg2 = new THREE.Mesh(cylinderGeometry, charMaterial);
lowerLeg2.scale.set(0.1, 0.7, 0.1);
lowerLeg2.position.set(-0.5, 0.5, 0);
lowerLeg2.receiveShadow = true;
scene.add(lowerLeg2);
charArray.push(lowerLeg2);

const foot2 = new THREE.Mesh(capsuleGeometry, charMaterial2);
foot2.scale.set(0.15, 0.15, 0.15);
foot2.rotation.x = Math.PI / 2;
foot2.position.set(-0.5, 0.075, 0.1);
foot2.receiveShadow = true;
scene.add(foot2);
charArray.push(foot2);


var direction = 2;

//----------------------------------------------------------------------------
// Keyboard Event Functions
//----------------------------------------------------------------------------

//This array will hold the pressed or unpressed state of every key
var currentlyPressedKeys = [];

//Store current state of shift key
var shift;

document.onkeydown = function handleKeyDown(event) {
   currentlyPressedKeys[event.keyCode] = true;
   shift = event.shiftKey;

   //Get unshifted key character
   var c = event.keyCode;
   var key = String.fromCharCode(c);

	//Place key down detection code here
}

document.onkeyup = function handleKeyUp(event) {
   currentlyPressedKeys[event.keyCode] = false;
   shift = event.shiftKey;
   
   //Get unshifted key character
   var c = event.keyCode;
   var key = String.fromCharCode(c);

	//Place key up detection code here
}

//isPressed(c)
//Utility function to lookup whether a key is pressed
//Only works with unshifted key symbol
// ie: use "E" not "e"
//     use "5" not "%"
function isPressed(c)
{
   var code = c.charCodeAt(0);
   return currentlyPressedKeys[code];
}

//handleKeys()
//Continuously called from animate to cause model updates based on
//any keys currently being held down
function handleKeys() 
{
   //Place continuous key actions here - anything that should continue while a key is
   //held

   if (!shift && isPressed("W")) 
   {
      if(position[2] < zBound && position[2] > (-1 * zBound)){
        position[2]-=0.1;
      }
      direction = 0;
   }

   if (!shift && isPressed("A")) 
   {
       if(position[0] < xBound && position[0] > (-1 * xBound)){
        position[0]-=0.1;
      }
      direction = 1;
   }

   if (!shift && isPressed("S")) 
   {
       if(position[2] < zBound && position[2] > (-1 * zBound)){
        position[2]+=0.1;
      }
      direction = 2;
   }

   if (!shift && isPressed("D")) 
   {
        if(position[0] < xBound && position[0] > (-1 * xBound)){
        position[0]+=0.1;
      }
      direction = 3;
   }
}


// ---------------------------------------------------
// Animation
// ---------------------------------------------------
let position = [0, 2, 0];
let animation = 0;
let mouseX = 0;
let mouseY = 0;

function animate() {

    requestAnimationFrame(animate);

    controls.update();

    handleKeys();

    updateChar(position, animation);

    renderer.render(scene, camera);
}

animate();


function updateChar(position, animation) {
    let x = position[0];
    let y = position[1];
    let z = position[2];

    positionCharacter(x, y, z);
    
    //update facing direction (with the help of the AI chat)
    const angle = (Math.PI / 2) * (direction + 2);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);

    charArray.forEach(part => {
        const dx = part.position.x - x;
        const dz = part.position.z - z;

        part.position.x = x + dx * cos + dz * sin;
        part.position.z = z - dx * sin + dz * cos;
        part.rotation.y = angle;
    });

}

function positionCharacter(x, y, z){
        char.position.set(x, y, z);

        eye1.position.set(x-0.5, y, z+0.5);
        
        eye2.position.set(x+0.5, y, z+0.5);
        
        //update eye position to follow the mouse
        let dX = (mouseX - (window.innerWidth / 2)) / window.innerWidth;
        let dY = ((window.innerHeight / 2) - mouseY) / window.innerHeight;
        let eye1X, eye2X, eyeY;
        if (dX < 0){
            eye1X = Math.max(x - 0.5 + dX, x-0.615);
            eye2X = Math.max(x + 0.5 + dX, x+0.475);
        }
        else{
            eye1X = Math.min(x - 0.5 + dX, x-0.475);
            eye2X = Math.min(x + 0.5 + dX, x+0.615)
        }
        if (dY < 0){
            eyeY = Math.max(y + dY, y-0.125);
        }
        else{
            eyeY = Math.min(y + dY, y+0.125);
        }

        pupil1.position.set(eye1X, eyeY, z+0.675);
        
        pupil2.position.set(eye2X, eyeY, z+0.675);
        
        mouth.position.set(x, y-.25, z+0.5);
        
        antenna1.position.set(x+0.3, y+.7, z);
        
        antennaPip1.position.set(x+0.3, y+.95, z);
        
        antenna2.position.set(x-0.3, y+.7, z);
        
        antennaPip2.position.set(x-0.3, y+.95, z);
        
        upperLeg1.position.set(x+0.5, y-0.75, z);
        
        knee1.position.set(x+0.5, y-1.15, z);
        
        lowerLeg1.position.set(x+0.5, y-1.5, z);
        
        foot1.position.set(x+0.5, y-1.925, z+0.1);
        
        upperLeg2.position.set(x-0.5, y-0.75, z);
        
        knee2.position.set(x-0.5, y-1.15, z);
        
        lowerLeg2.position.set(x-0.5, y-1.5, z);
        
        foot2.position.set(x-0.5, y-1.925, z+0.1);
}

function getMousePosition(event){
    mouseX = event.clientX;
    mouseY = event.clientY;
}


// ---------------------------------------------------
// Resize
// ---------------------------------------------------
{
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
}
