import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import ResultsDetail from "./ResultsDetail"
import { withNavigation } from "react-navigation"

const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null
  }

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal={true}
        data={results}
        keyExtractor={result => result.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("Detail", { id: item.id })}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginHorizontal: 10
  },
  viewStyle: {
    marginHorizontal: 10,
    marginVertical: 5
  }
})

export default withNavigation(ResultsList)
