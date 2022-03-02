import { StyleSheet, Dimensions } from 'react-native';

const lado = Dimensions.get('window').width / 4;

export default StyleSheet.create({
        button: {
            fontSize: 40,
            height: lado,
            width: lado,
            padding: 20,
            borderStartColor: '#f0f0f0',
            textAlign: 'center',
            borderWidth: 1,
            borderColor: '#888'
        },
        operationButton: {
            color: "#fff",
            backgroundColor: "#fa8231",
          },
          buttonDouble: {
            width: lado * 2,
          },
          buttonTriple: {
            width: lado * 3,
          }
 });