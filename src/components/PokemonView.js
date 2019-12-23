import React, { useState } from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import ApiClient from "../api/ApiClient"

//TODO: Use onImageFetch callback so SearchScreen can update the state
const PokemonView = ({ result, onImageFetch }) => {
  const [item, setItem] = useState(result)

  const formatText = text => {
    return text != null && text !== ""
      ? (text.charAt(0).toUpperCase() + text.slice(1)).replace(/-/, " ")
      : ""
  }

  if (item.imageUrl == null) {
    ApiClient.get(`/pokemon/${result.name}`, {}).then(function(
      pokemonResponse
    ) {
      const imageUrl = pokemonResponse.data.sprites.front_default
      setItem({ ...item, imageUrl: imageUrl != null ? imageUrl : "no image" })
    })
  }

  return (
    <View style={styles.viewStyle}>
      <Image style={styles.imageStyle} source={{ uri: item.imageUrl }} />
      <Text style={styles.nameStyle}>{formatText(item.name)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 4,
    borderWidth: 0
  },
  nameStyle: {
    fontWeight: "bold",
    marginBottom: 5,
    borderWidth: 0
  },
  viewStyle: {
    margin: 10,
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 0
  }
})

export default PokemonView
