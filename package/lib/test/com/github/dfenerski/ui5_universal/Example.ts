import { ExampleColor } from "com/github/dfenerski/ui5_universal/library";
import Example from "com/github/dfenerski/ui5_universal/Example";

// create a new instance of the Example control and
// place it into the DOM element with the id "content"
new Example({
	text: "Example",
	color: ExampleColor.Highlight,
	press: (event) => {
		alert(event.getSource());
	}
}).placeAt("content");
