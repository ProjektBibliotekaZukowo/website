import React from 'react';
import { Map, Marker } from 'pigeon-maps';

interface IAddressMap {
  lat: number;
  lon: number;
  height?: number;
}
export const AddressMap = ({ lat, lon, height }: IAddressMap) => {
  return (
    <Map height={height || 312} defaultCenter={[lat, lon]} defaultZoom={16}>
      <Marker width={40} anchor={[lat, lon]} />
    </Map>
  );
};
