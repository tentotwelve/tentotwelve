const theming = (props) => {
    switch (props.theme) {
        case 'aubergine':
            colorProfile = { color: '#f9f9ff', backgroundColor: '#4F0A72' };
            break
        case 'blueberry':
            colorProfile = { color: '#111133', backgroundColor: '#c0c0f4' };
            break
        case 'salmon':
            colorProfile = { color: '#fffafa', backgroundColor: '#ef3130' };
            break
        case 'honeycomb':
            colorProfile = { color: '#442232', backgroundColor: '#ffdd10' };
            break
        case 'vanilla':
            colorProfile = { color: '#2D1600', backgroundColor: '#fffefa' };
            break
        case 'espresso':
            colorProfile = { color: '#fffefa', backgroundColor: '#2D1600' };
            break
        default:
            colorProfile = { color: '#f9f9ff', backgroundColor: '#222222' };
    }
    const shadow = props.shadow;
    defaultShadow = {};
    if (shadow) {
        defaultShadow = {
            shadowColor: '#000',
            shadowOffset: { width: 1, height: 2 },
            shadowOpacity: 0.5
        };
    }
};

const styleObjects = (props) => {
    viewStyle = {
        borderRightWidth: rightBorderWidth,
        borderRightColor: props.backgroundColor || colorProfile.backgroundColor,
        marginTop: props.marginTop,
        shadowColor: props.shadowColor || defaultShadow.shadowColor,
        shadowOffset: props.shadowOffset || defaultShadow.shadowOffset,
        shadowOpacity: props.shadowOpacity || defaultShadow.shadowOpacity 
    };
    textStyle = {
        lineHeight: props.lineHeight,
        fontFamily: props.fontFamily,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight || 'bold',
        color: props.color || colorProfile.color,
        backgroundColor: props.backgroundColor || colorProfile.backgroundColor 
    };
};

export default { theming, styleObjects };
