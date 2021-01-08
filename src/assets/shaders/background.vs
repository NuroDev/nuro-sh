precision highp float;
precision highp int;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
	vUv = uv;
	vNormal = normalize(normalMatrix * normal);
	
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
