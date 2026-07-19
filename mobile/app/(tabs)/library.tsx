import PageHeader from "@/components/page-header";
import SearchBar from "@/components/ui/search-bar";
import { View } from "react-native";
import { useState } from "react";

export default function LibraryScreen() {
  const [searchText, setSearchText] = useState("");
  return (
    <View>
      <PageHeader title="Bibliothèque">
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Rechercher dans la bibliothèque"
        />
      </PageHeader>
    </View>
  );
}
