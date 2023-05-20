import React from "react"
import { StyleSheet, View, Image } from "react-native"

export default function ImageViewer({ placeholderImageSource }) {
  return (
    <View style={styles.imageContainer}>
      <Image source={placeholderImageSource} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: "100vw",
    height: "100vw",
    maxHeight: 320,
    maxWidth: 320,
    borderRadius: 18,
  },
})
