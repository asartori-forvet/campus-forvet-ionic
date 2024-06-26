import { COUNTRIES_LIST } from "./country-list"

export function validateForm ({name, lastname, phone, nationality}){
   if (!name || name.length < 3 || name.length > 30) {
      return 'Tu nombre debe contener entre 3 y 30 caracteres.'
   }
   if (!/^[A-Za-z\s]+$/.test(name)) {
      return 'Tu nombre solo puede contener letras.'
   }
   if (!lastname || lastname.length < 3 || lastname.length > 50) {
      return 'Tu apellido debe contener entre 3 y 50 caracteres.'
   }
   if (!/^[A-Za-z\s]+$/.test(lastname)) {
      return 'Tu apellido solo puede contener letras.'
   }
   if(!phone){
      return 'El número de teléfono no puede estar vacío.'
   }
   if(!/^\+?[0-9\s()]+$/.test(phone)){
      return 'El número de teléfono solo puede contener números y caracteres como "+" y "()".'
   }
   if(!nationality){
      return 'La nacionalidad no puede estar vacía.'
   }
   if(!COUNTRIES_LIST.includes(nationality.toLowerCase())){
      return 'La nacionalidad debe ser una de las que aparece en la lista.'
   }
   return null
}