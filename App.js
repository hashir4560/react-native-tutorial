import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState([
    { name: "hashir", key: 1 },
    { name: "Rahim", key: 2 },
    { name: "Hakim", key: 3 },
    { name: "Bilal", key: 4 },
    { name: "peach", key: 5 },
    { name: "apple", key: 6 },
    { name: "bannaa", key: 7 },
    { name: "mango", key: 8 },
    { name: "guava", key: 9 },
  ]);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
      {/* <ScrollView>
        {people.map((item) => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "ffff",
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
    // color: "blue",
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: "pink",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
    marginTop: 24,
  },
});
