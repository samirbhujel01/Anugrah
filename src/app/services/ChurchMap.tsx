"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";

export default function ChurchMap() {
  return (
    <div className="w-full h-64 bg-blue-100 rounded-xl mt-4 shadow-inner">
      <MapContainer
        center={[42.101, -72.597] as [number, number]}
        zoom={16}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[42.101, -72.597]}>
          <Popup>91 Upper Church St, West Springfield, MA 01085</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}