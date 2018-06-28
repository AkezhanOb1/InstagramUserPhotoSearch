import React, {Component} from 'react'
import {View, Image, TouchableOpacity, TextInput, Text} from 'react-native'
import Header from '../../Components/Header/Header'
import Logo from '../../assets/robot-dev.png'
import styles from './HomeStyle'
class Home extends Component {


    constructor(props) {
        super(props)
        this.state = {
            text: '',
            Photos: []
        }
    }


    inputHandler = (event) => {
        this.setState({
            text: event.nativeEvent.text,
        })
        event.nativeEvent.text = ''
    }

    urlHandler = () => {
        const api = 'https://www.instapi.io/u/' + this.state.text
        this.getFetch(api)
    }


    getFetch = async(api) => {
        let photoArray = []
        await fetch(api)
            .then(res => res.json())
            .then(data => data.graphql.user.edge_owner_to_timeline_media.edges.map((el)=> {
                photoArray.push(el.node.thumbnail_src)
                return el
            }))
        this.setState ({
            Photos: photoArray
        })
        this.props.navigation.navigate("Gallery", {photos: photoArray,
            text: this.state.text})
    }
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
                        value={this.state.text} />
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