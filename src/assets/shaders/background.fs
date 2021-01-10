precision highp float;

uniform float uTime;
uniform sampler2D tMap;
uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;

varying vec2 vUv;
varying vec4 vMVPos;
varying vec3 vPos;

void main() {
	vec3 tex = texture2D(tMap, vUv).rgb;
	
	// add the fog relative to the distance from the camera
	float dist = length(vMVPos);
	float fog = smoothstep(uFogNear, uFogFar, dist);
	tex = mix(tex, uFogColor, fog);
	
	// add some fog along the height of each tree to simulate low-lying fog 
	tex = mix(tex, uFogColor, smoothstep(1.0, 0.0, vPos.y)); 
	
	gl_FragColor.rgb = tex;
	gl_FragColor.a = 1.0;
}
