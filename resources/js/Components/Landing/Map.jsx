import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for default marker icons not appearing in Leaflet with Vite
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

// Helper component to update map view when position or zoom changes
function ChangeView({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
        map.setView(center, zoom);
    }, [center, zoom, map]);
    return null;
}

export default function Map({ position = [-7.815619496292457, 112.06234452382992], zoom = 13, label = "Kopi Tujuan Hidup" }) {
    const googleMapsUrl = `https://www.google.com/maps?q=${position[0]},${position[1]}`;

    return (
        <div className="w-full h-full relative z-10">
            <MapContainer 
                center={position} 
                zoom={zoom} 
                scrollWheelZoom={false}
                className="w-full h-full"
            >
                <ChangeView center={position} zoom={zoom} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <div className="text-center space-y-2 py-1">
                            <h4 className="font-bold">{label}</h4>
                            <p className="text-xs text-gray-500">Kediri, Jawa Timur</p>
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 underline"
                            >
                                Buka di Google Maps ↗
                            </a>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>

            {/* Tombol Google Maps — tidak memblok interaksi peta */}
            <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 z-[400] bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 hover:bg-white transition-colors"
                title="Buka di Google Maps"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                Buka di Google Maps
            </a>
        </div>
    );
}

