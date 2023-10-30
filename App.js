import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("hashir");
  const [age, setAge] = useState(22);

  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput
        multiline
        keyboardType="text"
        style={styles.input}
        placeholder="e.g John  Doe"
        onChangeText={(val) => setName(val)}
      />
      <Text>Enter Age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g .99"
        onChangeText={(val) => setAge(val)}
      />

      <Text>
        name:{name},age:{age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ffff",
    alignItems: "center",
    justifyContent: "center",
    color: "blue",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
