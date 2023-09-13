declare module '*.jpg' {
	const value: any
	export default value
}

declare module '*.png' {
	const value: any
	export default value
}

declare module '*.scss' {
	interface IClassNames {
		[className: string]: string
	}
	const classNames: IClassNames
	export = classNames
}
