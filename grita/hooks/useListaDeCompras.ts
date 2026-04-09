import { useState } from "react";
import { Item } from "../types/Item";

export function useListaDeCompras() {
  const [items, setItems] = useState<Item[]>([]);
  const [texto, setTexto] = useState("");

  const agregarItem = () => {
    const limpio = texto.trim();
    if (!limpio) return;

    setItems((prev) => [
      ...prev,
      { id: Date.now().toString(), name: limpio, done: false },
    ]);
    setTexto(""); // Limpiamos el input
  };

  const toggleItem = (id: string) => {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)),
    );
  };

  const eliminarItem = (id: string) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  return {
    items,
    texto,
    setTexto,
    agregarItem,
    toggleItem,
    eliminarItem,
  };
}
