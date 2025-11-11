// import React, { useEffect, useRef, useState } from 'react';
// import mapboxgl from 'mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

const ContactMap = () => {
  // const mapContainer = useRef<HTMLDivElement>(null);
  // const map = useRef<mapboxgl.Map | null>(null);
  // const [mapboxToken, setMapboxToken] = useState('');
  // const [tokenSubmitted, setTokenSubmitted] = useState(false);

  // // Coordinates for Bangkok, Thailand (general area)
  // // Update these with the specific clinic address coordinates
  // const clinicCoordinates: [number, number] = [100.5018, 13.7563]; // Bangkok center
  
  // useEffect(() => {
  //   if (!mapContainer.current || !tokenSubmitted || !mapboxToken) return;

  //   try {
  //     mapboxgl.accessToken = mapboxToken;
      
  //     map.current = new mapboxgl.Map({
  //       container: mapContainer.current,
  //       style: 'mapbox://styles/mapbox/light-v11',
  //       center: clinicCoordinates,
  //       zoom: 15,
  //     });

  //     // Add marker for clinic location
  //     new mapboxgl.Marker({ color: '#8B5CF6' })
  //       .setLngLat(clinicCoordinates)
  //       .setPopup(
  //         new mapboxgl.Popup({ offset: 25 })
  //           .setHTML('<h3 class="font-semibold">Miracle Regenerative Center</h3><p>Heart of Bangkok, Thailand</p>')
  //       )
  //       .addTo(map.current);

  //     // Add navigation controls
  //     map.current.addControl(
  //       new mapboxgl.NavigationControl(),
  //       'top-right'
  //     );

  //   } catch (error) {
  //     console.error('Error initializing map:', error);
  //   }

  //   return () => {
  //     map.current?.remove();
  //   };
  // }, [tokenSubmitted, mapboxToken]);

  // const handleTokenSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   if (mapboxToken.trim()) {
  //     setTokenSubmitted(true);
  //   }
  // };

  // if (!tokenSubmitted) {
  //   return (
  //     <div className="bg-gradient-card rounded-2xl p-8 shadow-soft h-96 flex flex-col items-center justify-center">
  //       <h3 className="text-xl font-semibold mb-4 text-center">Enter Mapbox Token to View Map</h3>
  //       <p className="text-muted-foreground mb-6 text-center max-w-md">
  //         Get your free public token from <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
  //       </p>
  //       <form onSubmit={handleTokenSubmit} className="w-full max-w-md space-y-4">
  //         <Input
  //           type="text"
  //           placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwiYSI6ImNsZT..."
  //           value={mapboxToken}
  //           onChange={(e) => setMapboxToken(e.target.value)}
  //           className="w-full"
  //         />
  //         <Button type="submit" className="w-full">
  //           Load Map
  //         </Button>
  //       </form>
  //     </div>
  //   );
  // }

  return (
    // <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-soft">
    //   <div ref={mapContainer} className="absolute inset-0" />
    // </div>
    <div className='w-full h-full overflow-hidden flex justify-center items-center rounded-2xl shadow-md'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.990471299981!2d100.58455939999999!3d13.719026599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29fa53d412cd3%3A0x56ff75c0b8829cdb!2s4117%20Sukhumvit%2042%2C%20Khwaeng%20Phra%20Khanong%2C%20Khet%20Khlong%20Toei%2C%20Krung%20Thep%20Maha%20Nakhon%2010110%2C%20Thailand!5e0!3m2!1sen!2s!4v1762840012594!5m2!1sen!2s" width="1200" height="400" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default ContactMap;