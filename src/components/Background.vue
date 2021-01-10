<template>
	<div id="background" />
</template>

<script setup lang="ts">
import { Renderer, Camera, Transform, Texture, Program, Color, Geometry, Mesh } from 'ogl-typescript';
import { onMounted } from 'vue';

import vertex from '../assets/shaders/background.vs';
import fragment from '../assets/shaders/background.fs';

// TODO: Look into adding a base canvas to override, rather than appending a new one
onMounted(async () => {
	const renderer = new Renderer({ dpr: 2 });
	const gl = renderer.gl;

	try {
		const background = document.getElementById('background');
		if (background && background.childNodes.length <= 0) background.appendChild(gl.canvas);
	} catch (error) {
		console.error(`Failed to append canvas to DOM: `, error);
	}

	gl.clearColor(1, 1, 1, 1);

	const camera = new Camera(gl, { fov: 45 });
	camera.position.set(0, 4, 8);
	camera.lookAt([0, 0, 0]);

	const resize = () => {
		renderer.setSize(window.innerWidth, window.innerHeight);
		camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
	}
	window.addEventListener('resize', resize, false);
	resize();

	const scene = new Transform();

	const texture = new Texture(gl);
	const img = new Image();
	img.onload = () => (texture.image = img);
	img.src = '/forest.jpg';

	const program = new Program(gl, {
		vertex: vertex,
		fragment: fragment,
		uniforms: {
			uTime: { value: 0 },
			tMap: { value: texture },

			// Pass relevant uniforms for fog
			uFogColor: { value: new Color('#ffffff') },
			uFogNear: { value: 2 },
			uFogFar: { value: 15 },
		},
	});

	let mesh: Mesh;
	let data: JsonPoly;

	try {
		const response = await fetch(`/forest.json`);
		data = await response.json();
	} catch (error) {
		console.error(`Failed to fetch model JSON data: `, error);
	}

	const size = 8;
	const num = size * size;

	let offset = new Float32Array(num * 3);
	let random = new Float32Array(num * 3);
	for (let i = 0; i < num; i++) {
		// Layout in a grid
		offset.set([((i % size) - size * 0.5) * 2, 0, (Math.floor(i / size) - size * 0.5) * 2], i * 3);

		random.set([Math.random(), Math.random(), Math.random()], i * 3);
	}

	const geometry = new Geometry(gl, {
		position: { size: 3, data: new Float32Array(data.position) },
		uv: { size: 2, data: new Float32Array(data.uv) },
		offset: { instanced: true, size: 3, data: offset },
		random: { instanced: true, size: 3, data: random },
	});

	mesh = new Mesh(gl, { geometry, program });
	mesh.setParent(scene);

	const update = (t: number) => {
		requestAnimationFrame(update);

		if (mesh) {
			mesh.rotation.y += 0.003;
			mesh.position.z = Math.sin(t * 0.0004) * 3.0;
		}
		program.uniforms.uTime.value = t * 0.001;
		renderer.render({ scene, camera });
	}
	requestAnimationFrame(update);
});
</script>
