import PageHeader from "@/components/page-header";
import SearchBar from "@/components/ui/search-bar";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import FilterButton from "@/components/ui/filter-button";

export default function LibraryScreen() {
  const [searchText, setSearchText] = useState("");

  const filters = ["Toutes", "Frere Frank", "Lettres circulaires"];

  return (
    <View>
      <PageHeader title="Bibliothèque">
        <SearchBar
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          placeholder="Rechercher dans la bibliothèque"
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              text={filter}
              isActive={searchText === filter}
              onPress={() => setSearchText(filter)}
            />
          ))}
        </ScrollView>
      </PageHeader>
    </View>
  );
}
