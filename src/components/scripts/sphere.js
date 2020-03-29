import {
  WebGLRenderer,
  Scene,
  Fog,
  PerspectiveCamera,
  Object3D,
  IcosahedronGeometry,
  MeshPhongMaterial,
  Mesh,
  AmbientLight,
  DirectionalLight,
  DoubleSide,
} from 'three';

const defaultColor = 0xbd9779;
const fogColor = 0xa6cdfb;


let renderer;
let scene;
let camera;
let planet;
let skelet;

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function init() {
  renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
  });
  renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  renderer.setClearColor(0x000000, 0);
  document.getElementById('sphere').appendChild(renderer.domElement);

  scene = new Scene();
  scene.fog = new Fog(fogColor, 1, 1500);

  camera = new PerspectiveCamera(45, window.innerHeight / window.innerHeight, 1, 1000);
  camera.position.z = 600;
  camera.position.x = 0;
  camera.position.y = 100;
  scene.add(camera);

  planet = new Object3D();
  skelet = new Object3D();
  scene.add(planet);
  scene.add(skelet);

  planet.position.y = -200;
  skelet.position.y = -200;

  const geom = new IcosahedronGeometry(15, 2);
  const mat = new MeshPhongMaterial({
    color: defaultColor,
    flatShading: true,
  });
  const bones = new MeshPhongMaterial({
    color: defaultColor,
    wireframe: true,
    side: DoubleSide,
  });

  const mesh1 = new Mesh(geom, mat);
  mesh1.scale.x = 18;
  mesh1.scale.y = 18;
  mesh1.scale.z = 18;
  planet.add(mesh1);

  const mesh2 = new Mesh(geom, bones);
  mesh2.scale.x = 20;
  mesh2.scale.y = 20;
  mesh2.scale.z = 20;
  skelet.add(mesh2);

  const ambientLight = new AmbientLight(defaultColor);
  scene.add(ambientLight);

  const directionalLight = new DirectionalLight(0xffffff);
  directionalLight.position.set(1, 1, 1).normalize();
  scene.add(directionalLight);

  window.addEventListener('resize', onWindowResize, false);
}

function animate() {
  requestAnimationFrame(animate);

  planet.rotation.z += 0.001;
  planet.rotation.x = 0;
  planet.rotation.y = 0;

  skelet.rotation.z -= 0.001;
  skelet.rotation.x = 0;
  skelet.rotation.y = 0;

  renderer.clear();

  renderer.render(scene, camera);
}


export { init, animate };
