// Interfaz para Datos Personales
export interface PersonalData {
    nifOrPassport: string; // NIF o Pasaporte (obligatorio)
    firstName: string;     // Nombre (obligatorio)
    lastName1: string;     // 1er Apellido (obligatorio)
    lastName2?: string;    // 2º Apellido (opcional)
    gender?: string;       // Género (opcional)
    birthDate?: Date;      // Fecha de nacimiento (opcional)
}

// Interfaz para Dirección
export interface Address {
    street?: string;       // Calle (opcional)
    number?: string;       // Número (opcional)
    door?: string;         // Puerta (opcional)
    postalCode?: string;   // Código postal (opcional)
    city?: string;         // Ciudad (opcional)
}

// Interfaz para cada registro de Estudios
export interface Study {
    institutionName: string; // Nombre de la institución (obligatorio)
    degree: string;          // Titulación (obligatorio)
    date?: Date;             // Fecha (opcional)
}

// Interfaz principal que agrupa las anteriores
export interface Demandantes {
    personalData: PersonalData; // Datos personales
    address?: Address;          // Dirección (opcional)
    studies?: Study[];          // Lista de estudios (opcional)
}
  