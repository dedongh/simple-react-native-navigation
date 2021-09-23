import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  StatusBar,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { useSelector } from "react-redux";

export default function ListScreen({ navigation }) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <Header title={"List"} />
        <ListView />
        <View style={styles.fabContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Modal")}
            style={styles.fabButton}
          >
            <Ionicons name="ios-add" color="#fff" size={70} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
function ListView() {
  const listItems = useSelector((state) => state.itemList);
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}
    >
      {listItems.length !== 0 ? (
        <FlatList
          data={listItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItemContainer}>
              <View style={styles.listItemMetaContainer}>
                <Text style={styles.itemTitle} numberOfLines={1}>
                  {item.name}
                </Text>
                <TouchableOpacity
                  onPress={() => dispatch(removeItem(item.id))}
                  style={styles.button}
                >
                  <Ionicons name="ios-trash" color="#fff" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      ) : (
        <Text style={{ fontSize: 30 }}>Your list is empty :'(</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
  fabContainer: {
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "absolute",
    right: 10,
    bottom: 20,
  },
  fabButton: {
    backgroundColor: "blue",
    borderRadius: 35,
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
  },
  listItemContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 5,
    paddingRight: 5,
    justifyContent: "space-between",
    width: "100%",
    borderBottomWidth: 0.25,
  },
  itemTitle: {
    fontSize: 22,
    fontWeight: "400",
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#ff333390",
    padding: 5,
  },
});
