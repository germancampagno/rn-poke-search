import React, { useState } from "react"
import { Text, StyleSheet, ActivityIndicator } from "react-native"
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useResults"
import { FlatList } from "react-native-gesture-handler"
import PokemonView from "../components/PokemonView"

//TODO: Implement pagination
const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [apiResults, errorMessage, loading] = useResults()
  const [listToShow, setListToShow] = useState([])

  const filterList = term => {
    setListToShow(
      apiResults.filter(result => {
        return result.name.includes(term)
      })
    )
  }

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" style={{ flex: 1 }} />
      ) : (
        <>
          <SearchBar
            term={term}
            onTermChange={newTerm => setTerm(newTerm)}
            onTermSubmit={() => filterList(term)}
          ></SearchBar>
          {errorMessage ? (
            <Text style={styles.errorTextStyle}>{errorMessage}</Text>
          ) : (
            <FlatList
              data={listToShow}
              keyExtractor={result => result.name}
              renderItem={({ item }) => {
                return <PokemonView result={item} />
              }}
            />
          )}
        </>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginHorizontal: 15,
    marginVertical: 5
  },
  errorTextStyle: {
    color: "red",
    flex: 1,
    fontSize: 18
  }
})

export default SearchScreen
