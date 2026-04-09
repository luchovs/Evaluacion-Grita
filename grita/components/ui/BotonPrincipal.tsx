import { Pressable, StyleSheet, Text } from "react-native";

type Props = { titulo: string; onPress: () => void; color?: string };

export function BotonPrincipal({ titulo, onPress, color = "#1e90ff" }: Props) {
  return (
    <Pressable
      style={[styles.btn, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.txt}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  txt: { color: "#fff", fontWeight: "bold" },
});
