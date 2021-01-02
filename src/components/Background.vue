<template>
	<div id="background" />
</template>

<script setup lang="ts">
import { Color, Mesh, Program, Renderer, Triangle } from 'ogl-typescript';
import { onMounted } from 'vue';

const vertex: string = `
	attribute vec2 uv;
	attribute vec2 position;

	varying vec2 vUv;

	void main() {
		vUv = uv;
		gl_Position = vec4(position, 0, 1);
	}
`;

const fragment: string = `
	precision highp float;

	uniform float uTime;
	uniform vec3 uColor;

	varying vec2 vUv;

	void main() {
		gl_FragColor.rgb = 0.5 + 0.3 * cos(vUv.xyx + uTime) + uColor;
		gl_FragColor.a = 1.0;
	}
`;

const renderer: Renderer = new Renderer();
const gl = renderer.gl;

// TODO: Look into adding a base canvas to override, rather than appending a new one
onMounted(() => {
	const background = document.getElementById('background');
	if (background && background.childNodes.length <= 0) background.appendChild(gl.canvas);
});

gl.clearColor(1, 1, 1, 1);

const resize = (): void => renderer.setSize(window.innerWidth, window.innerHeight);
window.addEventListener('resize', resize, false);
resize();

const program: Program = new Program(gl, {
	vertex,
	fragment,
	uniforms: {
		uTime: {
			value: 0,
		},
		uColor: {
			value: new Color(0.3, 0.2, 0.5),
		},
	},
});

const mesh: Mesh = new Mesh(gl, {
	geometry: new Triangle(gl),
	program,
});

const update = (t: number) => {
	requestAnimationFrame(update);
	program.uniforms.uTime.value = t * 0.001;
	renderer.render({ scene: mesh });
};
requestAnimationFrame(update);
</script>
