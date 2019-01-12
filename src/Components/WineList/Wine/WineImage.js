import React from 'react';
import { Image, Text, ImageBackground, View } from 'react-native';

import { MultiLine } from '../../../libs/MultiLine';

const WineImage = (props) => {
	return (
        <View style={styles.viewStyle}>
        <ImageBackground 
            style={styles.imageStyle}
            source={{ uri: props.source }}
        >
            <MultiLine
                fontFamily={'Roboto'}
                splitOn={26}
                fontSize={26}
                marginTop={ 8 }
                linePadding={1}
                shadow
                fontWeight={'bold'}
                theme={'aubergine'}
                textAlign={'left'}
            >
            {props.wineName}
            </MultiLine>
        </ImageBackground>
        </View>
	);
};

const styles = {
    viewStyle: {
        height: 300,
    },
	imageStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 12,
        height: undefined, 
        width: undefined
	}
};

export default WineImage;
