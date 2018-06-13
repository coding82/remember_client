import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
  container: {
    display: "flex",
    margin: 10,

  },
  content: {
    marginTop: 50,
    alignItems: 'center',
  },

  homeTitle: {
    fontSize: 30,
    position: 'absolute',
    top: 100
  },

  ButtonContainer: {
    position: 'absolute',
    top: 400
  },

  blueButton: {
    backgroundColor: 'blue',
    width: 120,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20
  },

  orangeButton: {
    backgroundColor: 'orange',
    width: 120,
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    borderRadius: 20
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 3,

  },

  singleButton: {
    backgroundColor: 'blue'
  },

  profileButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },

  profileButton: {
    backgroundColor: 'black',
    width: 100
  }

})
