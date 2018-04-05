//Libraries
import React from 'react';
import {
	TouchableOpacity,Modal,View,
	Text	
} from 'react-native';
//Assets
import { styles } from '../../Themes/Styles/ModalStyles'


export const ForgotPasswordModal = ({ onRequestClose,visible,onClosePress }) => {
   return (
    <Modal
        transparent={true}
        visible={visible}
        //animationType={'slide'}
        onRequestClose={onRequestClose} >
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>Forgot Password Modal</Text>
                <Text style={styles.text}>Please enter your email address.A confirmation link will be sent to your email address with instructions of how to reset your password</Text>
                <TouchableOpacity style={[styles.button, {marginTop: 20}]}>
                    <Text style={styles.buttonText}> Submit </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, {marginTop: 5}]} onPress={onClosePress}>
                    <Text style={styles.buttonText}> Cancel </Text>
                </TouchableOpacity>

            </View>
        </View>
    </Modal>

   )
}
//this.state.modalVisible
//() => this.closeModal()