import { useListaDeCompras } from "../../hooks/useListaDeCompras";
import { ContenedorPrincipal } from "../contenedores/ContenedorPrincipal";
import { FormularioItem } from "../contenidos/FormularioItem";
import { ListaItems } from "../contenidos/ListaItems";
import { TarjetaItem } from "../contenidos/TarjetaItem";
import { Titulo } from "../contenidos/Titulo";

export function ControladorLista() {
  const { items, texto, setTexto, agregarItem, toggleItem, eliminarItem } =
    useListaDeCompras();

  return (
    <ContenedorPrincipal>
      <Titulo />

      <FormularioItem texto={texto} onChange={setTexto} onAdd={agregarItem} />

      <ListaItems
        items={items}
        renderItem={({ item }: any) => (
          <TarjetaItem
            item={item}
            onToggle={toggleItem}
            onDelete={eliminarItem}
          />
        )}
      />
    </ContenedorPrincipal>
  );
}
