import GlobalAPI from './GlobalApi'; 

// Helper function for formatting the data
const formatData = (data) => {
    if (!data) return [];
    return data.map((item) => ({
        id: item.id,
        title: item.attributes.Title || '-',
        location: item.attributes.Location || '-',
        phoneNo: item.attributes.PhoneNo || '-',
        faxNo: item.attributes.FaxNo || '-',
        openTime: item.attributes.OpenTime || '-',
        closeTime: item.attributes.CloseTime || '-',
        icon: item.attributes.Icon?.data?.attributes?.url,
        background: item.attributes.BackgroundImage?.data?.attributes?.url,
    }));
};

export const getLokasiDetailsWPKL = () => {
    return GlobalAPI.getLokasiWPKL()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsSelangor = () => {
    return GlobalAPI.getLokasiSelangor()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsKedah = () => {
    return GlobalAPI.getLokasiKedah()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsPerak = () => {
    return GlobalAPI.getLokasiPerak()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsPerlis = () => {
    return GlobalAPI.getLokasiPerlis()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsPulauPinang = () => {
    return GlobalAPI.getLokasiPulauPinang()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};


