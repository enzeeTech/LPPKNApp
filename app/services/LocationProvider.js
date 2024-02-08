import React, { createContext, useState, useEffect, useContext } from 'react';
import * as Location from 'expo-location';

const LocationContext = createContext({
  location: null, 
  stateName: null, 
});

export const useLocation = () => useContext(LocationContext);

export const LocationProvider = ({ children }) => {
    const [locationData, setLocationData] = useState({
        location: null,
        stateName: null,
    });

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            let reverseGeocode = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });

            let stateName = null;
            if (reverseGeocode.length > 0) {
                stateName = reverseGeocode[0].region;
            }
            
            console.log('State Name:', stateName);
            console.log('Location:', location);

            setLocationData({
                location,
                stateName,
            });
        })();
    }, []);

    return <LocationContext.Provider value={locationData}>{children}</LocationContext.Provider>;
};
