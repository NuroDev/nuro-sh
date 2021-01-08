<template>
	<div id="background" />
</template>

<script setup lang="ts">
import { Box, Camera, Mesh, Program, Renderer, RenderTarget, Texture } from 'ogl-typescript';
import { onMounted } from 'vue';

import vertex from '../assets/shaders/background.vs';
import fragment from '../assets/shaders/background.fs';

const renderer: Renderer = new Renderer();
const gl = renderer.gl;

// TODO: Look into adding a base canvas to override, rather than appending a new one
onMounted(() => {
	try {
		const background = document.getElementById('background');
		if (background && background.childNodes.length <= 0) background.appendChild(gl.canvas);
	} catch (error) {
		console.error(`Failed to append canvas to DOM: `, error);
	}
});

gl.clearColor(1, 1, 1, 1);

let camera = new Camera(gl, { fov: 35 });
camera.position.set(0, 1, 5);
camera.lookAt([0, 0, 0]);

let targetCamera = new Camera(gl, { fov: 35 });
targetCamera.position.set(0, 1, 5);
targetCamera.lookAt([0, 0, 0]);

const resize = (): void => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	targetCamera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
};
window.addEventListener('resize', resize, false);
resize();

const geometry = new Box(gl);

const texture = new Texture(gl, {
	image: new Uint8Array([191, 25, 54, 255, 96, 18, 54, 255, 96, 18, 54, 255, 37, 13, 53, 255]),
	width: 2,
	height: 2,
	magFilter: gl.NEAREST,
});

const program = new Program(gl, {
	vertex,
	fragment,
	uniforms: {
		tMap: {
			value: texture,
		},
	},
});

const target = new RenderTarget(gl, {
	width: 512,
	height: 512,
});

const targetProgram = new Program(gl, {
	vertex,
	fragment,
	uniforms: {
		tMap: {
			value: target.texture,
		},
	},
});

const mesh = new Mesh(gl, {
	geometry,
	program,
});
const targetMesh = new Mesh(gl, {
	geometry,
	program: targetProgram,
});

const update = (t: number) => {
	requestAnimationFrame(update);

	// Rotate the cubes
	mesh.rotation.y -= 0.02;
	targetMesh.rotation.y -= 0.005;
	targetMesh.rotation.x -= 0.01;

	// Set background for first render to target
	gl.clearColor(0.15, 0.05, 0.2, 1);

	// Add target property to render call
	renderer.render({
		scene: mesh,
		camera,
		target,
	});

	// Change to final background
	gl.clearColor(0.12, 0.16, 0.21, 1);

	// Omit target to render to canvas
	renderer.render({
		scene: targetMesh,
		camera: targetCamera,
	});
};
requestAnimationFrame(update);
</script>
