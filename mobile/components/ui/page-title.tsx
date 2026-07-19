import { Text, StyleSheet } from "react-native";

export default function PageTitle({
  children,
}: {
  children?: React.ReactNode;
}) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "700",
  },
});
