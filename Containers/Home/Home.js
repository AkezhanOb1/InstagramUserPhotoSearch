import React, {Component} from 'react'
import {View, Image, TouchableOpacity, TextInput, Text, Alert} from 'react-native'
import Header from '../../Components/Header/Header'
import Logo from '../../assets/robot-dev.png'
import styles from './HomeStyle'
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: '',
            Photos: []
        }
    }

    inputHandler = (event) => {
        this.setState({
            text: event.nativeEvent.text,
        })

    };

    urlHandler = async() => {
        const api = 'https://www.instapi.io/u/' + this.state.text;
        await this.getFetch(api);
        this.setState({
            text: ''
        })
    };

    getFetch = async(api) => {
        let photoArray = [];
        let inputText = this.state.text;
        await fetch(api)
            .then(res => res.json())
            .then(data => data.graphql.user.edge_owner_to_timeline_media.edges.map((el)=> {
                photoArray.push(el.node.thumbnail_src);
                return el
            })).then(() => {
                if(inputText) {
                    this.props.navigation.navigate("Gallery", {photos: photoArray,
                        text: this.state.text})
                }else {
                    throw new Error('error')
                }
            }).catch(function() {
                     Alert.alert('Enter username')
            });
        this.setState ({
            Photos: photoArray
        });
    };
    render () {

        return (
            <View style={{flex: 1}}>

                <Header
                    text={"AKSTERGRAM +"} />

                <View style={styles.wrapper}>
                    <Image
                        style={{width: 100, height: 100}}
                        source={Logo} />
                    <TextInput
                        style={styles.inputStyle}
                        onBlur={(event) => this.inputHandler(event)}
                        value={this.state.text}
                        placeholder={"Enter username"}/>
                </View>

                <View style={styles.buttonWrapper}>
                    <TouchableOpacity onPress={() => this.urlHandler()}>
                        <View style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Find Friend</Text>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

export default Home