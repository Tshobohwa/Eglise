import { View } from "react-native";
import PageTitle from "./ui/page-title";

export default function PageHeader({ title }: { title: string }) {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <PageTitle>{title}</PageTitle>
    </View>
  );
}
