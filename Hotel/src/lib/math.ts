// Sirve para poner dos decimales al valor dado 
export function round(value: number, digits = 2): number {
  return Number(value.toFixed(digits));
}

// Suma y da dos decimales
export function add(a: number, b: number, digits = 2): number { return round(a + b, digits); }

// Resta y da dos decimales
export function sub(a: number, b: number, digits = 2): number { return round(a - b, digits); }

// Multiplica y da dos decimales
export function mul(a: number, b: number, digits = 2): number { return round(a * b, digits); }

// Divide pero combrueba que b no sea 0 y da dos decimales
export function safeDiv(a: number, b: number, digits = 2): number {
  if (b === 0) return NaN;
  return round(a / b, digits);
}

// Potencia y da dos decimales
export function pow(a: number, b: number, digits = 2): number { return round(a ** b, digits); }

// Da el residuo de una división pero comprueba que b no sea 0
export function mod(a: number, b: number): number { if (b === 0) return NaN; return a % b; }

// Obtiene el valor de alguna variable y cambia las "," por "." para evitar errores.
// Luego comprueba que el número sea valido y lo devuelve, si no es valido devuelve 0.
export function parseNum(s: string, fallback = 0): number {
  const n = Number(s.replace(",", "."));
  return Number.isFinite(n) ? n : fallback;
}

// Comprueba si un número es valido y si no lo es devuelve "-"
// Luego crea un formato para el dinero de un país, en este caso Colombia.
export function formatCurrencyCOP(value: number): string {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("es-CO", { style: "currency", currency: "COP" }).format(value);
}

// Parecido a lo de antes, pero solo hace que tenga minimo y maximo 2 decimales.
export function formatNumber(value: number, digits = 2): string {
  if (!Number.isFinite(value)) return "—";
  return new Intl.NumberFormat("es-CO", { minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
}
