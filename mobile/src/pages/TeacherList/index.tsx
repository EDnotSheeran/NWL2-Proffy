import React from 'react'
import { View } from 'react-native'

import Pageheader from '../../components/PageHeader';
import styles from './styles';

function TeacherList() {
    return (
        <View style={styles.container}>
            <Pageheader title="Proffys disponíveis" />
        </View>
    )
}

export default TeacherList