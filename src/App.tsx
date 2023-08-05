import React from "react";
import "../public/styling/index.css";
import Hero from "./components/Hero";
import Contact from "./components/Contact";


const Who = React.lazy(() => import("./components/Who"));
const Works = React.lazy(() => import("./components/Works"));

function App() {
	return (
		<>
			<div className="AppContainer">
				<Hero />
				<React.Suspense fallback={""}>
					<Who />
				</React.Suspense>
				<React.Suspense fallback={''}>
					<Works />
				</React.Suspense>
					<Contact />
			</div>
		</>
	);
}

export default App;
