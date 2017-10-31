export const bathrooms = [
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" }
]

export const bedrooms = [
    { value: 0, name: "Studio" },
    { value: 1, name: "1" },
    { value: 2, name: "2" },
    { value: 3, name: "3" }
]

export const currencies = [
    "AUD",
    "BGN",
    "BRL",
    "CAD",
    "CHF",
    "CNY",
    "CZK",
    "DKK",
    "GBP",
    "HKD",
    "HRK",
    "HUF",
    "IDR",
    "ILS",
    "INR",
    "JPY",
    "KRW",
    "MXN",
    "MYR",
    "NOK",
    "NZD",
    "PHP",
    "PLN",
    "RON",
    "RUB",
    "SEK",
    "SGD",
    "THB",
    "TRY",
    "USD",
    "ZAR"
]

export const emptyListing = {
    amenities: {
        pool: false,
        gym: false
    },
    adr_address: "",
    bills: {
        electricity: "",
        water: ""
    },
    currency: "USD",
    email: "",
    formatted_address: "",
    formatted_phone_number: "",
    location: {
        type: "Point",
        coordinates: []
    },
    id: "",
    international_phone_number: "",
    name: "",
    place_id: "",
    rating: null,
    rooms: [],
    social_details: {
        facebook: "",
        twitter: ""
    },
    type: "condo",
    wifi: {
        type: "none",
        cost: null,
        download: null,
        upload: null,
        notes: ""
    },
    website: ""
}

export const internetType = [
    { value: "none", name: "No Internet" },
    { value: "free", name: "Free" },
    { value: "paid", name: "Paid" },
    { value: "canInstall", name: "Can Install" }
]

export const kitchen = [
    {
        value: "none",
        name: "None"
    },
    {
        value: "shared",
        name: "Shared"
    },
    {
        value: "included",
        name: "Included"
    }
]

export const laundry = [
    {
        value: "none",
        name: "None"
    },
    {
        value: "shared",
        name: "Shared"
    },
    {
        value: "included",
        name: "Included"
    }
]

export const rentalLengths = [
    {
        value: 1,
        label: "One month"
    },
    {
        value: 3,
        label: "Three months"
    },
    {
        value: 6,
        label: "Six months"
    }
]

export const rentalTypes = [
    {
        name: "Coliving",
        value: "coliving"
    },
    {
        name: "Condo/Apartment",
        value: "condo"
    },
    {
        name: "Guesthouse",
        value: "guesthouse"
    },
    {
        name: "Hostel",
        value: "hostel"
    },
    {
        name: "Hotel",
        value: "hotel"
    },
    {
        name: "House/Villa",
        value: "house"
    }
]

export const room = {
    air_conditioning: false,
    bathrooms: 1,
    bedrooms: 0,
    deposit: 0,
    kitchen: "none",
    laundry: "none",
    min_rental: 1,
    base_rate: 0,
    serviced: false
}

export const serviced = [
    {
        value: true,
        name: "Yes"
    },
    {
        value: false,
        name: "No"
    }
]