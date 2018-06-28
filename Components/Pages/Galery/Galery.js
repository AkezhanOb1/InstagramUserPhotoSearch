import React from 'react'
import {View, ScrollView, Image} from 'react-native'
import Header from '../../Header/Header'
import styles from './GalleryStyle'
const Galery = (props) => {

    const photoList = props.navigation.getParam("photos").map((data, index) => {
        return (
            <Image
                key={new Date().toLocaleString() + index}
                style={{width: 160, height: 150}}
                source={{uri: data}}/>
        )
    })

    const text = props.navigation.getParam("text")
    return (
            <View>
                <Header text={text}/>
                <ScrollView>
                    <View style={styles.wrapper}>
                        {photoList}
                    </View>
                </ScrollView>
            </View>

        )
}

export default Galery
