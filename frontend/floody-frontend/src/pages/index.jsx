import * as React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

export default function Map() {
  return (
    <APIProvider apiKey={''}>
      <div style={{ height: '500px', width: '100%' }}>
        <Map
          defaultCenter={{ lat: -23.5505, lng: -46.6333 }} 
          defaultZoom={10}
        />
      </div>
    </APIProvider>
  );
}