import React from 'react';
import { Map, Marker } from 'pigeon-maps';

interface IAddressMap {
  lat: number;
  lon: number;
}
export const AddressMap = ({ lat, lon }: IAddressMap) => {
  return (
    <Map height={312} defaultCenter={[lat, lon]} defaultZoom={16}>
      <Marker width={40} anchor={[lat, lon]} />
    </Map>
  );
};
