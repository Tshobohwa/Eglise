import { useState } from "react";
import { View } from "react-native";
import PageTitle from "./ui/page-title";
import SearchBar from "./ui/search-bar";

export default function PageHeader({ title }: { title: string }) {
  const [searchText, setSearchText] = useState("");
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10, gap: 10 }}>
      <PageTitle>{title}</PageTitle>
      <SearchBar />
    </View>
  );
}
