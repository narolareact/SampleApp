//Libraries
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF'
	},
	infoHeading: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 20
	},
	button: {
		alignItems: 'center',
		backgroundColor: '#000000',
		padding: 10
	},
	buttonText: {
		color: '#FFFFFF', fontWeight: 'bold', width: 150, textAlign: 'center'
	},
	input: {
		height: 40, width: 250, borderColor: 'gray', borderWidth: 1,
		marginBottom: 10, padding: 5
	},
	errorMessage: {
        width: 150,
		color: 'white',
        fontSize: 13,
        textAlign:'center'
    },
    errorView: {
        position:'absolute',
        bottom: 50,
        alignItems:'center',
        marginTop: 50, 
        borderWidth:1,
        borderColor:'transparent',
        borderRadius:25,
        backgroundColor:'grey',
        padding:10
    }
});