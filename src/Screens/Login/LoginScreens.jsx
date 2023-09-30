import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreens = () => {
  const [email, setEmail]=React.useState('');
  const [password, setPassword]=React.useState('');
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "gray" }}>
      <View style={login.container}>
        <View style={login.inputContainer}>
          <TextInput style={login.input} 
          placeholder="Email" 
          value={email}
          onChangeText={(text)=>setEmail(text)}
          />
          <TextInput style={login.input} 
          placeholder="Email" 
          value={password}
          onChangeText={(text)=>setPassword(text)}
          secureTextEntry
          />
        </View>
        <TouchableOpacity style={login.btn}>
          <Text>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={login.btn2}>
          <Text style={{ color: "white",}}>
            SIGN IN
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreens;

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
  btn:{
    backgroundColor: "yellow",
    width: "50%",
    alignItems: "center",
    borderRadius: "5px",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  btn2:{
    backgroundColor: "green",
    width: "50%",
    alignItems: "center",
    borderRadius: "5px",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  }
};
