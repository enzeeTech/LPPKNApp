import GlobalApi from '../services/GlobalApi';
import { haversine } from '../utilities/LocationUtils';

export const getPremisesData = async (query, userLocation) => {

    // Helper function for formatting the data
    const formatData = (data) => {
        if (!data) return [];
        return data.map((item) => ({
            id: item.id,
            title: item.Title || '-',
            location: item.LocationAddress || '-',
            phoneNo: item.PhoneNo || '-',
            faxNo: item.FaxNo || '-',
            operationTime: item.OperationTime || '-',
            icon: item.Icon?.url,
            background: item.BackgroundImage?.url,
            locationURL: item.LocationURL || '-',
        }));
    };

    try {
        const response = await GlobalApi.getAllPremises(); 
        const allPremises = formatData(response.data);

        // Filter premises by type
        let filteredPremises = [];
        if (query === 'Pejabat') {
            filteredPremises = allPremises.filter(premise => premise.title.includes('Pejabat') || premise.title.includes('Pusat Keluarga'));
            // Pejabat LPPKN Negeri: show all offices, no distance filter
            return filteredPremises;
        } else {
            filteredPremises = allPremises.filter(premise => premise.title.includes(query));
        }

        // Calculate distance and sort by closest (for non-Pejabat only)
        const userLatitude = userLocation?.coords?.latitude;
        const userLongitude = userLocation?.coords?.longitude;
        if (userLatitude == null || userLongitude == null) {
            return filteredPremises;
        }
        const premisesWithDistance = filteredPremises.map(premise => {
            const [lat, lon] = premise.locationURL.split('?q=')[1].split(',');
            const distance = haversine(userLatitude, userLongitude, parseFloat(lat), parseFloat(lon));
            return { ...premise, distance };
        });

        const sortedPremises = premisesWithDistance.sort((a, b) => a.distance - b.distance).slice(0, 5);
        return sortedPremises;
    } catch (error) {
        console.error('Error fetching premises data:', error);
        throw error;
    }
};
