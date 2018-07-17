export const bathrooms = [
    { value: 1, name: '1 Bathroom' },
    { value: 2, name: '2 Bathrooms' },
    { value: 3, name: '3 Bathrooms' }
]

export const bedrooms = [
    { value: 0, name: 'Studio' },
    { value: 1, name: '1 Bedroom' },
    { value: 2, name: '2 Bedrooms' },
    { value: 3, name: '3 Bedrooms' }
]

export const cities = [
    {
        name: 'Chiang Mai',
        slug: '/chiang-mai-thailand?lat=18.788946&lng=98.985361',
        unsplashImg: 'BfAkZvMrNSM',
        country: 'Thailand'
    },
    {
        name: 'Bangkok',
        slug: '/bangkok-thailand?lat=13.740907&lng=100.548714',
        unsplashImg: 'g5Uh7nP60FA',
        country: 'Thailand'
    },
    {
        name: 'Puerto Vallarta',
        slug: '/puerto-vallarta-jalisco-mexico?lat=20.635737&lng=-105.223186',
        unsplashImg: 'XpImribKrww',
        country: 'Mexico'
    },
]

export const currencies = [
    'AUD',
    'BGN',
    'BRL',
    'CAD',
    'CHF',
    'CNY',
    'COP',
    'CZK',
    'DKK',
    'EUR',
    'GBP',
    'HKD',
    'HRK',
    'HUF',
    'IDR',
    'ILS',
    'INR',
    'JPY',
    'KRW',
    'MXN',
    'MYR',
    'NOK',
    'NZD',
    'PHP',
    'PLN',
    'RON',
    'RUB',
    'SEK',
    'SGD',
    'THB',
    'TRY',
    'USD',
    'VND',
    'ZAR'
]

export const defaultFilter = {
    empty: true,
    parameters: {
        min_rate: 0,
        max_rate: 0,
        types: [
            'coliving',
            'condo',
            'guesthouse',
            'hostel',
            'hotel',
            'house'
        ]
    }
}

export const emptyListing = {
    address: {
        address: '',
    },
    amenities: {
        air_conditioning: false,
        pool: false,
        gym: false
    },
    bills: {
        electricity: '',
        water: ''
    },
    contact_details: {
        email: '',
        phone_number: '',
        website: ''
    },
    currency: 'USD',
    description: '',
    google_place_id: null,
    location: {
        type: 'Point',
        coordinates: []
    },
    id: '',
    name: '',
    points_of_interest: [],
    rating: null,
    rooms: [],
    social_details: {
        facebook: '',
        instagram: '',
        twitter: ''
    },
    type: 'condo',
    wifi: {
        type: 'none',
        rate: 0,
        download: 0,
        upload: 0,
        notes: ''
    }
}

export const internetType = [
    { value: 'none', name: 'No internet' },
    { value: 'free', name: 'Free' },
    { value: 'paid', name: 'Paid' },
    { value: 'canInstall', name: 'Can install' }
]

export const kitchen = [
    {
        value: 'none',
        name: 'None'
    },
    {
        value: 'shared',
        name: 'Shared'
    },
    {
        value: 'included',
        name: 'Included'
    }
]

export const laundry = [
    {
        value: 'none',
        name: 'None'
    },
    {
        value: 'shared',
        name: 'Shared'
    },
    {
        value: 'included',
        name: 'Included'
    }
]

export const listingValidations = {
    selectFromGoogleMaps: false,
    listing: false,
    rooms: false,
    amenities: false,
    notes: false,
    preview: false
}

export const priceRanges = [
    { value: 0, name: 'None' },
    { value: 250, name: '$250' },
    { value: 500, name: '$500' },
    { value: 1000, name: '$1,000' },
    { value: 2000, name: '$2,000' },
    { value: 3000, name: '$3,000' },
]

export const rentalLengths = [
    {
        value: 1,
        name: 'One month',
        icon: 'one_month'
    },
    {
        value: 3,
        name: 'Three months',
        icon: 'three_months'
    },
    {
        value: 6,
        name: 'Six months',
        icon: 'six_months'
    }
]

export const rentalTypes = [
    {
        value: 'coliving',
        name: 'Coliving'
    },
    {
        value: 'condo',
        name: 'Condo/Apartment'
    },
    {
        value: 'guesthouse',
        name: 'Guesthouse'
    },
    {
        value: 'hostel',
        name: 'Hostel'
    },
    {
        value: 'hotel',
        name: 'Hotel'
    },
    {
        value: 'house',
        name: 'House/Villa'
    }
]

export const room = {
    bathrooms: 1,
    bedrooms: 0,
    deposit: 0,
    kitchen: 'none',
    laundry: 'none',
    min_rental: 1,
    base_rate: 0,
    serviced: false
}

export const serviced = [
    {
        value: true,
        name: 'Yes'
    },
    {
        value: false,
        name: 'No'
    }
]

export const labels = {
    indexSlogan: 'Crowdsourced monthly rentals around the globe - a slow traveller\'s best friend.'
}