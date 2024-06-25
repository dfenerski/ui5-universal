import Lib from 'sap/ui/core/Lib';

// Delegate further initialization of this library to the Core
const thisLib: { [key: string]: unknown } = Lib.init({
	name: 'com.github.dfenerski.ui5_state',
	version: '${version}',
	dependencies: [],
	types: [],
	interfaces: [],
	controls: [],
	elements: [],
	noLibraryCSS: true,
}) as { [key: string]: unknown };

// Export the library namespace
export default thisLib;
