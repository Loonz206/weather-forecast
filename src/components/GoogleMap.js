import React, { useEffect, useRef } from "react";

const GoogleMap = ({ lat, lon, google }) => {
  const refContainer = useRef(null);
  useEffect(() => {
    new google.maps.Map(refContainer.map, {
      zoom: 12,
      center: { lat: lat, lng: lon },
    });
  }, [lat, lon, google]);
  return <div ref={refContainer} />;
};

export default GoogleMap;
