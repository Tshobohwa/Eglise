import { Text, TouchableOpacity, StyleSheet } from "react-native";
export default function FilterButton({
  text,
  isActive,
  onPress,
}: {
  text: string;
  isActive: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { borderColor: isActive ? "blue" : "gray" }]}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 25,
    borderWidth: 1,
    marginRight: 8,
  },
  text: { fontSize: 12 },
});
