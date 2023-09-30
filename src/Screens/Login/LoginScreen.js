import { View, Text, TextInput, TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FIREBASE_AUTH } from "../../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";



const LoginScreen = ({ navigation}) => {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const auth=FIREBASE_AUTH;

    const signIn =async ()=>{
        try {
            const response =await signInWithEmailAndPassword(auth,email, password);
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }

    const signUp = async ()=>{
        try {
            const response =await createUserWithEmailAndPassword(auth,email, password);
            alert("compte cree");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "gray" }}>
      <View style={login.container}>
        <View style={login.inputContainer}>
          <TextInput
            style={login.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            autoCapitalize="none"
          />
          <TextInput
            style={login.input}
            placeholder="Email"
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={login.btn} onPress={signIn}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={login.btn2} onPress={signUp}>
          <Text style={{ color: "white" }}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

const login = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    borderRadius: "5px",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  btn: {
    backgroundColor: "yellow",
    width: "50%",
    alignItems: "center",
    borderRadius: "5px",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  btn2: {
    backgroundColor: "green",
    width: "50%",
    alignItems: "center",
    borderRadius: "5px",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
};
