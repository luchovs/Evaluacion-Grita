import { FlatList, Text, View } from "react-native";
import { Item } from "../../types/Item";

type Props = {
  items: Item[];
  renderItem: any;
};

export function ListaItems({ items, renderItem }: Props) {
  return (
    <FlatList
      data={items}
      keyExtractor={(it) => it.id}
      renderItem={renderItem}
      ListEmptyComponent={
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Sin productos
        </Text>
      }
      ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
    />
  );
}
