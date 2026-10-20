import { Pressable, StyleSheet, Text } from "react-native";

const Card = () => {
  return (
    <Pressable
      style={[styles.contenedor, styles.boxShadow]}
      onPress={() => {
        console.log("Hola riko chango ");
      }}
    >
      <Text style={styles.texto}>Click para saludar</Text>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  contenedor: {
    justifyContent: "center", // centra verticalmente
    alignItems: "center", // centra horizontalmente
    alignSelf: "center",
    paddingHorizontal: 35,
    paddingVertical: 20,
    backgroundColor: "#f8f9fa", // gris más claro
    borderRadius: 10,
  },
  boxShadow: {
    // shadowOffset: {
    //   width: 6,
    //   height: 6,
    // },
    shadowOpacity: 0.6,
    shadowRadius: 25,
    shadowColor: "gray",
  },
  texto: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});
