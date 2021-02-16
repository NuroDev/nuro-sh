declare module '*.vue' {
	import { DefineComponent } from 'vue';
	const component: DefineComponent<{}, {}, any>;
	export default component;
}

declare module '*.vs' {
	const src: string;
	export default src;
}

declare module '*.fs' {
	const src: string;
	export default src;
}

declare module '*.glsl' {
	const src: string;
	export default src;
}

export interface JsonPoly {
	normal: Array<number>;
	position: Array<number>;
	uv: Array<number>;
}
