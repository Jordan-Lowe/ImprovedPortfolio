import React from "react";
import "../public/styling/index.css";
import Spinner from "./components/Spinner";

import Hero from "./components/Hero";

const Who = React.lazy(() => import("./components/Who"));
const Works = React.lazy(() => import("./components/Works"));
const Contact = React.lazy(() => import("./components/Contact"));

function App() {
	return (
		<div className="AppContainer">
			<Hero />
			<React.Suspense fallback={<Spinner />}>
				<Who />
			</React.Suspense>
			<React.Suspense fallback={<Spinner />}>
				<Works />
			</React.Suspense>
			<React.Suspense fallback={<Spinner />}>
				<Contact />
			</React.Suspense>
		</div>
	);
}

export default App;
