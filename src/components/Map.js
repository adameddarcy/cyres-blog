import React from "react";
import { ComposableMap, Geographies, Geography, Annotation } from "react-simple-maps";
import worldGeoJson from "./features.json"; // GeoJSON file for the world

const Map = () => {
  return (
    <div>
      <ComposableMap projectionConfig={{ scale: 160 }}>
        {/* Render geographies */}
        <Geographies geography={worldGeoJson}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#b6d7a8"
                stroke="#FFF"
              />
            ))
          }
        </Geographies>

        <Annotation
          subject={[10, 51]} // Longitude and Latitude for Europe (e.g., near Germany)
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "#5A5A5A",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="black">
            {"Europe (84%)"}
          </text>
        </Annotation>

        <Annotation
          subject={[-100, 40]} // Longitude and Latitude for US (near central US)
          dx={-60}
          dy={-20}
          connectorProps={{
            stroke: "#5A5A5A",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="black">
            {"US (10%)"}
          </text>
        </Annotation>

        <Annotation
          subject={[78, 20]} // Longitude and Latitude for India (near central India)
          dx={-50}
          dy={-10}
          connectorProps={{
            stroke: "#5A5A5A",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="black">
            {"India (2%)"}
          </text>
        </Annotation>

        <Annotation
          subject={[-100, 60]} // Longitude and Latitude for Canada (near central Canada)
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "#5A5A5A",
            strokeWidth: 2,
            strokeLinecap: "round", 
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="black">
            {"Canada (1%)"}
          </text>
        </Annotation>

        <Annotation
          subject={[104, 35]} // Longitude and Latitude for China (near central China)
          dx={-50}
          dy={-20}
          connectorProps={{
            stroke: "#5A5A5A",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="black">
            {"China (1%)"}
          </text>
        </Annotation>

        <Annotation
          subject={[33, 43]} // Longitude and Latitude for Iran
          dx={-70}
          dy={-5}
          connectorProps={{
            stroke: "#5A5A5A",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="black">
            {"Middle East (1%)"}
          </text>
        </Annotation>

        <Annotation
          subject={[133, -25]} // Longitude and Latitude for Australia (near central Australia)
          dx={-70}
          dy={-20}
          connectorProps={{
            stroke: "#5A5A5A",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="black">
            {"Australia (1%)"}
          </text>
        </Annotation>
      </ComposableMap>
    </div>
  );
};

export default Map;
