import PageHeader from "@/components/page-header";
import SearchBar from "@/components/ui/search-bar";
import { useState } from "react";
import { View } from "react-native";

export default function SongsScreen() {
  const [searchText, setSearchText] = useState("");
  return (
    <View>
      <PageHeader title="Cantiques">
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Rechercher dans cantiques"
        />
      </PageHeader>
    </View>
  );
}
