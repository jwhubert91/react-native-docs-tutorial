import { StatusBar } from "expo-status-bar"
import { StyleSheet, View } from "react-native"
import Button from "./components/Button"

// components
import ImageViewer from "./components/ImageViewer"

// assets
const PlaceholderImage = require("./assets/images/product.jpg")

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer placeholderImageSource={PlaceholderImage} />
      <View style={styles.footerContainer}>
        <Button theme="primary" labelText="Choose a photo" />
        <Button labelText="Use this photo" />
      </View>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
})
