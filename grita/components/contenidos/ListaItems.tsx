import { FlatList, Text, View } from "react-native";
import { Item } from "../../types/Item";
import { TarjetaItem } from "./TarjetaItem";

type Props = {
  items: Item[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function ListaItems({ items, onToggle, onDelete }: Props) {
  return (
    <FlatList
      data={items}
      keyExtractor={(it) => it.id}
      renderItem={({ item }) => (
        <TarjetaItem
          item={item}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      )}
      ListEmptyComponent={
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Sin productos
        </Text>
      }
      ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
    />
  );
}