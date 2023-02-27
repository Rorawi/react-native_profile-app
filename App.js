import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import profile from "./assets/profile.jpg";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image source={require('./assets/profile.jpg')}/> */}
      <Image source={profile} style={styles.image} />
      <View style={styles.detailContainer}>
        <Text style={styles.label}>Name</Text>
        <Text style={[styles.label, styles.info]}>Winifred Asante</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Email</Text>
        <Text style={[styles.label, styles.info]}>winifredasante15@gmail.com</Text>
      </View>

      <View style={styles.detailContainer}>
        <Text style={styles.label}>Gender</Text>
        <Text style={[styles.label, styles.info]}>Female</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
    alignSelf: "center",
    borderRadius: 75,
    marginTop: 100
  },
  detailContainer: {
    flexDirection: "row",
    marginVertical: 3
  },
  label: {
    borderColor: "black",
    borderWidth: 1,
    fontSize: 20,
    flex: 2,
    paddingHorizontal: 10
  },
  info: {
    flex: 8,
  },
}) 
