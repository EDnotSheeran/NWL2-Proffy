import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import giveClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'

function GiveClasses() {
    const { goBack } = useNavigation()

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={giveClassesBgImage}
                style={styles.content}
                resizeMode='contain'
            >
                <Text style={styles.title}>
                    Quer ser um proffy?
                </Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={goBack} style={styles.okButton}>
                <Text style={styles.okButtontext}>Tudo bem</Text>
            </RectButton>
        </View>
    )
}

export default GiveClasses