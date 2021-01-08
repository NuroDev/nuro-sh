precision highp float;
precision highp int;

uniform sampler2D tMap;

varying vec2 vUv;
varying vec3 vNormal;

void main() {
	vec3 normal = normalize(vNormal);
	float lighting = 0.2 * dot(normal, normalize(vec3(-0.3, 0.8, 0.6)));
	vec3 tex = texture2D(tMap, vUv).rgb;
	gl_FragColor.rgb = tex + lighting + vec3(vUv - 0.5, 0.0) * 0.1;
	gl_FragColor.a = 1.0;
}
