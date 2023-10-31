import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
export default function App() {
  const [todos, setTodos] = useState([
    { text: "Buy Coffee", key: 1 },
    { text: "Create an APP", key: 2 },
    { text: "Play Football", key: 3 },
  ]);
  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});

// {/* <ScrollView>
//   {people.map((item) => (
//     <View key={item.key}>
//       <Text style={styles.item}>{item.name}</Text>
//     </View>
//   ))}
// </ScrollView> */}

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: "shaun", id: "1" },
//     { name: "yoshi", id: "2" },
//     { name: "mario", id: "3" },
//     { name: "luigi", id: "4" },
//     { name: "peach", id: "5" },
//     { name: "toad", id: "6" },
//     { name: "bowser", id: "7" },
//   ]);

//   const pressHandler = (id) => {
//     console.log(id);
//     setPeople((prevPeople) => {
//       return prevPeople.filter((person) => person.id != id);
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <FlatList
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => pressHandler(item.id)}>
//             <Text style={styles.item}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     backgroundColor: "#fff",
//   },
//   item: {
//     flex: 1,
//     marginHorizontal: 10,
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: "pink",
//     fontSize: 24,
//   },
// });
