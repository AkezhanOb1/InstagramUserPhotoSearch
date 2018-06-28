import React from 'react';
import Home from './Containers/Home/Home'
import Gallery from './Components/Pages/Galery/Galery'
import SinglePhoto from './Components/Pages/SinglePhoto/SinglePhoto'
import {createStackNavigator} from 'react-navigation'
export default class App extends React.Component {

    render() {
        return (
            <AppStackNavigator />
        );
    }
}

const AppStackNavigator = createStackNavigator({
    MainPage: Home,
    Gallery: Gallery,
    SinglePhoto: SinglePhoto
})