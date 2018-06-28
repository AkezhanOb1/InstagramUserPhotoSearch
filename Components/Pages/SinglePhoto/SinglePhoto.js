import React from 'react'
import {View, Text, Image} from 'react-native'
import styles from './SinglePhotoStyle'
const SinglePhoto = (props) => {
    const photo =  props.navigation.getParam("photo")
    return (
        <View style={{flex: 1, backgroundColor: 'rgba(61, 55, 55, 0.4)'}}>
            <View style={styles.wrapper}>
                <Image
                    style={{width: 320, height: 300}}
                    source={{uri: photo}} />
            </View>
        </View>
    )
}

export default SinglePhoto