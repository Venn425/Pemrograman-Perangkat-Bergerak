import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
} from "react-native";

const userList = [
  { name: "Steven Gyasi", userID: "venn", password: "venn123" },
  { name: "George Russel", userID: "russel", password: "russel123" },
];

const LoginScreen = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const matchedUser = userList.find(
      (user) => user.userID === userID && user.password === password
    );

    if (matchedUser) {
      Alert.alert("Login Successful", `Welcome To Community, ${matchedUser.name}!`);
    } else {
      Alert.alert(
        "Login Failed",
        "Invalid UserID or Password. Please try again."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../Assignment-2/assets/formula.png")} style={styles.logo}/>
      <Text style={styles.title}>F1 Community</Text>
      <View style={styles.formContainer}>
        <Text style={styles.subtitle}>Login to continue</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>UserID:</Text>
          <TextInput
            style={styles.input}
            value={userID}
            onChangeText={setUserID}
            placeholder="Enter your UserID"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password:</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        <Text style={styles.subtitle}>or</Text>

        <TouchableOpacity style={styles.signUpButton}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.motto}>Drive To Survive</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#white",
  },

  logo: {
    width: 130,
    height:130,
  },

  formContainer: {
    width: "80%",
    backgroundColor: "#f9f9f9",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },

  title: {
    color: "red",
    marginBottom: 20,
    fontStyle: "italic",
    fontFamily: "arial",
    fontSize: 34,
    fontWeight: '900',
    letterSpacing: 5,
    textAlign: "center",
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
    marginBottom: 10,
    textAlign: "center",
  },

  inputContainer: {
    marginBottom: 15,
  },

  label: {
    color: "red",
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    fontFamily: "Arial",
  },

  loginButton: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  signUpButton: {
    borderWidth: 1,
    borderColor: "red",
    padding: 15,
    borderRadius: 5,
  },

  signUpText: {
    color: "red",
    textAlign: "center",
    fontSize: 14,
  },

  motto: {
    margin: 50,
    paddingTop: 0,
    color: "black",
    fontStyle: "italic",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
});

export default LoginScreen;