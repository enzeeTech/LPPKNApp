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
        const fetchLocation = async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }
            // Use lower accuracy for faster results
            let location = await Location.getCurrentPositionAsync({
                accuracy: Location.Accuracy.Lowest,
                maximumAge: 1000 * 60 * 5, // Accept cached location if less than 5 minutes old
            });
            // Proceed with reverse geocoding to extract the state name
            let reverseGeocode = await Location.reverseGeocodeAsync({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            });
            let stateName = null;
            if (reverseGeocode.length > 0) {
                stateName = reverseGeocode[0].region; 
                if (stateName === 'Malacca') {
                    stateName = 'Melaka';
                }
            }
            setLocationData({
                location,
                stateName,
            });
        };

        fetchLocation();
    }, []);

    return (
        <LocationContext.Provider value={locationData}>
            {children}
        </LocationContext.Provider>
    );
};
