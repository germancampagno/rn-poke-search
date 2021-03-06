import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons"

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.inputStyle}
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  backgroundStyle: {
    marginVertical: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 15
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
})

export default SearchBar
