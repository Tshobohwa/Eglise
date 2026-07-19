import { TextInput, StyleSheet } from "react-native";

export default function SearchBar({
  placeholder,
  onChangeText,
  value,
}: {
  placeholder?: string;
  onChangeText: (text: string) => void;
  value?: string;
}) {
  return (
    <TextInput
      style={styles.container}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 43,
    borderWidth: 1,
    borderRadius: 13,
    width: "100%",
  },
});
