import * as THREE from "../external_scripts/three.module.js";
import { OrbitControls } from '../external_scripts/OrbitControls.js';
import { GLTFLoader } from '../external_scripts/GLTFLoader.js';

// console.log(THREE);
const container = document.getElementById('scene_container');

const scene = new THREE.Scene();
scene.background = new THREE.Color('skyblue');

const fov = 50;
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 0 ,10);

const geometry = new THREE.BoxBufferGeometry(2, 2, 2);
const material = new THREE.MeshBasicMaterial();
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(container.clientWidth, container.clientHeight);
renderer.setPixelRatio(window.devicePixelRatio);
container.append(renderer.domElement);

const render = () => {

    renderer.render(scene, camera);
    requestAnimationFrame(render);

}

render();
 


  





