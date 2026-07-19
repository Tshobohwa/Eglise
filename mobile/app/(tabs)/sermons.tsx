import PageHeader from "@/components/page-header";
import SearchBar from "@/components/ui/search-bar";
import { View } from "react-native";
import { useState } from "react";

export default function SermonsScreen() {
  const [searchText, setSearchText] = useState("");
  return (
    <View>
      <PageHeader title="Prédications">
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Rechercher dans predications"
        />
      </PageHeader>
    </View>
  );
}
