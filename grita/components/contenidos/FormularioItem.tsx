import { StyleSheet, View } from "react-native";
import { BotonPrincipal } from "../ui/BotonPrincipal";
import { CampoTexto } from "../ui/CampoTexto";

type Props = {
  texto: string;
  onChange: (t: string) => void;
  onAdd: () => void;
};

export function FormularioItem({ texto, onChange, onAdd }: Props) {
  return (
    <View style={styles.row}>
      <CampoTexto
        value={texto}
        onChange={onChange}
        placeholder="¿Qué necesitas comprar?"
      />
      <BotonPrincipal titulo="Agregar" onPress={onAdd} />
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", gap: 10, alignItems: "center" },
});
