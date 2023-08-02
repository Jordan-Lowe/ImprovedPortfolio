import React from "react";
import {
	ComposableMap,
	Geographies,
	Geography,
	Annotation,
	ZoomableGroup,
} from "react-simple-maps";

const Map = () => {
	return (
		<ComposableMap
			projection="geoAzimuthalEqualArea"
			projectionConfig={{
				rotate: [-155.7633315, 28.8484597, 0],
				center: [-5, -3],
				scale: 700,
			}}
			style={{ width: "100%", height: "100%" }}
		>
			<Geographies
				geography="/features.json"
				fill="#2C065D"
				stroke="#FFFFFF"
				strokeWidth={0.5}
			>
				{({ geographies }) =>
					geographies.map((geo) => (
						<Geography key={geo.rsmKey} geography={geo} />
					))
				}
			</Geographies>
			<Annotation
				subject={[174.7633315, -36.8484597]}
				dx={-90}
				dy={-30}
				connectorProps={{
					stroke: "white",
					strokeWidth: 2,
					strokeLinecap: "round",
				}}
			>
				<text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
					{"Auckland Based"}
				</text>
			</Annotation>
		</ComposableMap>
	);
};

export default Map;
