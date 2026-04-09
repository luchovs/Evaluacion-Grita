import { Pressable, StyleSheet, Text } from "react-native";
import { Item } from "../../types/Item";

type Props = {
  item: Item;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export function TarjetaItem({ item, onToggle, onDelete }: Props) {
  return (
    <Pressable
      onPress={() => onToggle(item.id)}
      onLongPress={() => onDelete(item.id)}
      style={styles.row}
    >
      <Text style={[styles.text, item.done && styles.done]}>{item.name}</Text>

      <Text
        style={[styles.pill, item.done ? styles.donePill : styles.todoPill]}
      >
        {item.done ? "✔" : "•"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
  },
  text: { 
    fontSize: 16,
    color: "#fff",
  },
  done: { 
    textDecorationLine: "line-through", 
    color: "#999", 
  },
  pill: {
    minWidth: 28,
    height: 28,
    borderRadius: 14,
    textAlign: "center",
  },
  todoPill: { 
    backgroundColor: "#eee",
    color: "#000", // Para que el punto se vea claro sobre fondo gris
  },
  donePill: { 
    backgroundColor: "#2ecc71", 
    color: "#fff", 
  },
});