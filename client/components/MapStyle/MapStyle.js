const MapStyle = [
    {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.medical',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    }
];

export default MapStyle;