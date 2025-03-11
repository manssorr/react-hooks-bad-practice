// Import React Scan before React
import {scan} from "react-scan"; // must be imported before React

// Configure React Scan
scan({
	enabled: true,
});

import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
