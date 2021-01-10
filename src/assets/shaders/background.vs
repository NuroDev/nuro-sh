attribute vec2 uv;
attribute vec3 position;
attribute vec3 offset;
attribute vec3 random;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;

varying vec2 vUv;
varying vec4 vMVPos;
varying vec3 vPos;

void rotate2d(inout vec2 v, float a){
	mat2 m = mat2(cos(a), -sin(a), sin(a),  cos(a));
	v = m * v;
}

void main() {
	vUv = uv;
	
	// copy position so that we can modify the instances
	vec3 pos = position;
	
	// scale first
	pos *= 0.8 + random.y * 0.3;
	
	// pass scaled object position to fragment to add low-lying fog
	vPos = pos;
	
	// rotate around Y axis
	rotate2d(pos.xz, random.x * 6.28);
	
	// add position offset
	pos += offset;
	
	// add some hilliness to vary the height
	pos.y += sin(pos.x * 0.5) * sin(pos.z * 0.5) * 0.5;
	
	// pass model view position to fragment shader to get distance from camera 
	vMVPos = modelViewMatrix * vec4(pos, 1.0);
	
	gl_Position = projectionMatrix * vMVPos;
}
