export function getRandom(arr) {
   if (!Array.isArray(arr)) {
      throw new Error('El argumento debe ser un array');
   }
   if (arr.length === 0) {
      throw new Error('El array no puede estar vacío');
   }
   const randomIndex = Math.floor(Math.random() * arr.length);
   return arr[randomIndex];
}