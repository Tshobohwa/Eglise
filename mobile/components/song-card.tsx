import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

export default function SongCard({}) {
  return (
    <View
      style={{
        height: 120,
        backgroundColor: "red",
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        padding: 10,
        flexDirection: "row",
        gap: 10,
      }}
    >
      <TouchableOpacity
        style={{
          height: 100,
          width: 100,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
          backgroundColor: "blue",
        }}
      >
        <ImageBackground
          source={{
            uri: "https://images.unsplash.com/photo-1450558415837-1f5e21a17709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SmVzdXN8ZW58MHx8MHx8fDA%3D",
          }}
          style={{ flex: 1 }}
        >
          
        </ImageBackground>
      </TouchableOpacity>
      <Text>Hello</Text>
    </View>
  );
}
