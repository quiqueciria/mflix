import "./style.css";

interface Reserva {
  id: number;
  precio: number;
  habitacion: string;
  prepago: boolean;
  completadaConExito: boolean;
}
const reservas: Reserva[] = [
  {
    id: 23453,
    precio: 250,
    habitacion: "standard",
    prepago: false,
    completadaConExito: true,
  },
  {
    id: 56456,
    precio: 150,
    habitacion: "superior",
    prepago: false,
    completadaConExito: true,
  },
  {
    id: 43243,
    precio: 550,
    habitacion: "standard",
    prepago: true,
    completadaConExito: false,
  },
  {
    id: 23223,
    precio: 550,
    habitacion: "standard",
    prepago: true,
    completadaConExito: true,
  },
  {
    id: 89232,
    precio: 650,
    habitacion: "superior",
    prepago: true,
    completadaConExito: false,
  },
];

const reservasConDescuento: Reserva[] = reservas.map(
  (reserva: Reserva): Reserva => {
    return {
      ...reserva,
      precio: reserva.precio * 0.9,
    };
  }
);

console.log(reservasConDescuento);
