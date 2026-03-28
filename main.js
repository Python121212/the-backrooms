let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene();
    // 霧を追加して奥を暗くする
    scene.fog = new THREE.Fog(0x000000, 1, 10);

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 3;

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Backrooms風の箱型空間（内側を向いた壁）
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0xdbd3a0, 
        side: THREE.BackSide // 内側を描画
    });
    const room = new THREE.Mesh(geometry, material);
    scene.add(room);

    // 蛍光灯風のライト
    const light = new THREE.PointLight(0xffffff, 10, 20);
    light.position.set(0, 4, 0);
    scene.add(light);

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    
    // 背景をゆっくり動かす
    scene.rotation.y += 0.002;
    scene.rotation.x += 0.001;

    renderer.render(scene, camera);
}

function startGame() {
    alert("Noclipping...");
    // ここでゲーム本編のシーンへ遷移させる処理を書く
}

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

init();
