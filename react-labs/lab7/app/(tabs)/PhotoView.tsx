import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { usePhotoContext } from '../context/PhotoContext';

const PhotoView = () => {
    const { photoUri } = usePhotoContext();
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: photoUri }}
                style={[styles.image, { width: screenWidth, height: screenHeight }]}
                resizeMode='contain'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    image: {
        flex: 1,
    },
});

export default PhotoView;
