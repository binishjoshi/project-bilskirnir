import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const SignIn = () => {
  return (
    <View>
      <Text>
        This is Sign In Page
      </Text>
      <TouchableOpacity>
        <View style={styles.googleSignInButton}>
          <Text style={styles.buttonText}>Sign In using Google</Text>          
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  googleSignInButton: {
    position: 'relative',
    marginTop: 700,
    backgroundColor: '#4385f5',
    height: 50,
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 6,
  },
  buttonText: {
    position: 'absolute',
    top: '10%',
    fontSize: 25,
  }
})

export default SignIn;