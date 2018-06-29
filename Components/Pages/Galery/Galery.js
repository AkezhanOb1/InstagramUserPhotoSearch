import React from 'react'
import {View, ScrollView, Image, TouchableOpacity, Alert} from 'react-native'
import Header from '../../Header/Header'
import styles from './GalleryStyle'
const Galery = (props) => {

    tappedPhotoHandler = (data) => {
        props.navigation.navigate("SinglePhoto", {photo: data});
        console.log(data)
    };

    const photoList = props.navigation.getParam("photos").map((data, index) => {
        return (
            <TouchableOpacity onPress={() => tappedPhotoHandler(data)} key={new Date().toLocaleString() + index}>
                <Image
                    style={{width: 160, height: 150}}
                    source={{uri: data}}/>
            </TouchableOpacity>
        )
    });

    const text = props.navigation.getParam("text");
    return (
            <View>
                <Header text={text}/>
                <ScrollView>
                    <View style={styles.wrapper}>
                        {photoList.length === 0 ? Alert.alert("Account is private or does not exist") : photoList}
                    </View>
                </ScrollView>
            </View>

        )
};

export default Galery
