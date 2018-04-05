//Libraries
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({ 
        container: {
            backgroundColor:'rgba(0, 0, 0, 0.7)',
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        innerContainer: {
            backgroundColor: 'white', 
            padding:20,
            borderRadius:5,
            margin:5
        },
        title:{
            alignSelf:'center',
            fontSize:20
        },
        text:{
            alignSelf:'center',
            marginTop:10
        },
        button: {
            alignItems: 'center',
            backgroundColor: '#000000',
            padding: 10
        },
        buttonText: {
            color: '#FFFFFF',
             fontWeight: 'bold', 
             width: 150, 
             textAlign: 'center'
        },
})

