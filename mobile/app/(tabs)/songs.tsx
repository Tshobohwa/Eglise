import PageHeader from "@/components/page-header";
import SongCard from "@/components/song-card";
import FilterButton from "@/components/ui/filter-button";
import SearchBar from "@/components/ui/search-bar";
import { useState } from "react";
import { ScrollView, View } from "react-native";

export default function SongsScreen() {
  const [searchText, setSearchText] = useState("");
  const songsFilters = [
    "Toutes",
    "Adoration",
    "Louange",
    "Action de grâce",
    "Prière",
    "Meditation",
  ];
  return (
    <View>
      <PageHeader title="Cantiques">
        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
          placeholder="Rechercher dans cantiques"
        />
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {songsFilters.map((filter) => (
            <FilterButton
              key={filter}
              text={filter}
              isActive={searchText === filter}
              onPress={() => setSearchText(filter)}
            />
          ))}
        </ScrollView>
      </PageHeader>

      <ScrollView>
        <SongCard />
      </ScrollView>
    </View>
  );
}
