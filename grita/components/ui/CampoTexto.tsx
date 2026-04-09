import { StyleSheet, TextInput } from "react-native";

type Props = {
  value: string;
  onChange: (t: string) => void;
  placeholder: string;
};

export function CampoTexto({ value, onChange, placeholder }: Props) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChange}
      placeholder={placeholder}
      placeholderTextColor="#999"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#f9f9f9",
  },
});
