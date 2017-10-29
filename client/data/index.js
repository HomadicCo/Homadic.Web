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
        duration: 1,
        value: "one_month",
        label: "One month"
    },
    {
        duration: 3,
        value: "three_months",
        label: "Three months"
    },
    {
        duration: 6,
        value: "six_months",
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
    serviced: false,
    bedrooms: 0,
    bathrooms: 1,
    laundry: "none",
    kitchen: "none",
    air_conditioning: false,
    rental_details: [
        {
            available: true,
            base_price: null,
            deposit: null,
            duration: 1
        },
        {
            available: false,
            base_price: null,
            deposit: null,
            duration: 3
        },
        {
            available: false,
            base_price: null,
            deposit: null,
            duration: 6
        }
    ]
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