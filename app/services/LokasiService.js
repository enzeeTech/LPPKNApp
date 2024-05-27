import GlobalAPI from './GlobalApi'; 

// Helper function for formatting the data
const formatData = (data) => {
    if (!data) return [];
    return data.map((item) => ({
        id: item.id,
        title: item.attributes.Title || '-',
        location: item.attributes.LocationAddress || '-',
        phoneNo: item.attributes.PhoneNo || '-',
        faxNo: item.attributes.FaxNo || '-',
        operationTime: item.attributes.OperationTime || '-',
        icon: item.attributes.Icon?.data?.attributes?.url,
        background: item.attributes.BackgroundImage?.data?.attributes?.url,
        locationURL: item.attributes.LocationURL || '-',
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

export const getLokasiDetailsNegeriSembilan = () => {
    return GlobalAPI.getLokasiNegeriSembilan()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsMelaka = () => {
    return GlobalAPI.getLokasiMelaka()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsJohor = () => {
    return GlobalAPI.getLokasiJohor()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsPahang = () => {
    return GlobalAPI.getLokasiPahang()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsTerengganu = () => {
    return GlobalAPI.getLokasiTerengganu()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsKelantan = () => {
    return GlobalAPI.getLokasiKelantan()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsSarawak = () => {
    return GlobalAPI.getLokasiSarawak()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsSabah = () => {
    return GlobalAPI.getLokasiSabah()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};

export const getLokasiDetailsWPLabuan = () => {
    return GlobalAPI.getLokasiWPLabuan()
        .then((response) => formatData(response.data.data))
        .catch((error) => console.log(error));
};






