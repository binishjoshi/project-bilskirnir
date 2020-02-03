import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={styles.signInTop}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Tap.png')} style={styles.logo} />
        </View>
        <View style={styles.otherContent}>
          {/* Other any content here */}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={styles.googleSignInButton}>
            <AntDesign name='google' size={32} style={styles.googleIcon} />
            <Text style={styles.buttonText}>Sign In using Google</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },  
  signInTop: {
    backgroundColor: 'black',
    flex: 4,
    alignItems: 'center',
  },
  logoContainer:{
    flex: 1,
  },
  otherContent: {
    backgroundColor: 'white',
    flex: 2,
  },
  logo: {
    flex: 1,
    resizeMode: 'contain',
    height: 205,
    width: 300,
  },
  buttonContainer: {
    backgroundColor: 'black',
    flex: 1,
  },
  googleSignInButton: {
    backgroundColor: '#4385f5',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 6,
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 25,
    padding: 20,
  },
  googleIcon: {
    paddingLeft: 10
  }
})

export default SignIn;