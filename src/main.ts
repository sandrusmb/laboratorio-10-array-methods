type Especialidad = "Medico de familia" | "Pediatra" | "Cardiólogo";

interface Pacientes {
  id: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  temperatura: number;
  frecuenciaCardiaca: number;
  especialidad: Especialidad;
  edad: number;
}

const pacientes: Pacientes[] = [
  {
    id: 1,
    nombre: "John",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 80,
    especialidad: "Medico de familia",
    edad: 44,
  },
  {
    id: 2,
    nombre: "Jane",
    apellidos: "Doe",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 70,
    especialidad: "Medico de familia",
    edad: 43,
  },
  {
    id: 3,
    nombre: "Junior",
    apellidos: "Doe",
    sexo: "Male",
    temperatura: 36.8,
    frecuenciaCardiaca: 90,
    especialidad: "Pediatra",
    edad: 8,
  },
  {
    id: 4,
    nombre: "Mary",
    apellidos: "Wien",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 120,
    especialidad: "Medico de familia",
    edad: 20,
  },
  {
    id: 5,
    nombre: "Scarlett",
    apellidos: "Somez",
    sexo: "Female",
    temperatura: 36.8,
    frecuenciaCardiaca: 110,
    especialidad: "Cardiólogo",
    edad: 30,
  },
  {
    id: 6,
    nombre: "Brian",
    apellidos: "Kid",
    sexo: "Male",
    temperatura: 39.8,
    frecuenciaCardiaca: 80,
    especialidad: "Pediatra",
    edad: 11,
  },
];

// APARTADO 1

//a) Queremos extraer la lista de paciente que están asignados a la especialidad de Pediatría

const obtenPacientesAsignadosAPediatria = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter((paciente) => paciente.especialidad === "Pediatra");
};

const pacientesDePediatria = obtenPacientesAsignadosAPediatria(pacientes);
console.log("Pacientes de Pediatría:", pacientesDePediatria);

// b) Queremos extraer la lista de pacientes asignados a Pediatría y que tengan una edad menor de 10 años.

const obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.filter(
    (pacientes) => pacientes.especialidad === "Pediatra" && pacientes.edad < 10
  );
};

const pacientesDePediatriaMenoresDeDiez =
  obtenPacientesAsignadosAPediatriaYMenorDeDiezAnios(pacientes);
console.log(
  "Pacientes de Pediatría menores de 10 años:",
  pacientesDePediatriaMenoresDeDiez
);

// APARTADO 2

// Queremos activar el protocolo de urgencia si cualquier de los pacientes tiene un ritmo cardíaco superior a 100 pulsaciones por minuto y una temperatura corporal superior a 39 grados. Es decir, crear una función que devuelve true/false dependiendo si se da la condición, algo así como:

const activarProtocoloUrgencia = (pacientes: Pacientes[]): boolean => {
  return pacientes.some(
    (pacientes) =>
      pacientes.frecuenciaCardiaca > 100 && pacientes.temperatura > 39
  );
};

console.log("Activar protocolo:", activarProtocoloUrgencia(pacientes));

// APARTAD0 3

// El pediatra no puede atender hoy a los pacientes, queremos reasignar los pacientes asignados a la especialidad de pediatría a la de medico de familia.

const reasignaPacientesAMedicoFamilia = (
  pacientes: Pacientes[]
): Pacientes[] => {
  return pacientes.map((paciente) => ({
    ...paciente,
    especialidad:
      paciente.especialidad === "Pediatra"
        ? "Medico de familia"
        : paciente.especialidad,
  }));
};

console.log(
  "Pacientes reasignados:",
  reasignaPacientesAMedicoFamilia(pacientes)
);

// APARTADO 4

// Queremos saber si podemos mandar al Pediatra a casa (si no tiene pacientes asignados), comprobar si en la lista hay algún paciente asignado a pediatría

const hayPacientesDePediatria = (pacientes: Pacientes[]) => {
  return pacientes.every((pacientes) => pacientes.especialidad !== "Pediatra");
};

console.log("Mandar al pediatra a casa:", hayPacientesDePediatria(pacientes));

// APARTADO 5

// Queremos calcular el número total de pacientes que están asignados a la especialidad de Medico de familia, y lo que están asignados a Pediatría y a cardiología

interface NumeroPacientesPorEspecialidad {
  medicoDeFamilia: number;
  pediatria: number;
  cardiologia: number;
}

const cuentaPacientesPorEspecialidad = (
  pacientes: Pacientes[]
): NumeroPacientesPorEspecialidad => {
  return pacientes.reduce(
    (total, paciente) => {
      if (paciente.especialidad === "Medico de familia") {
        total.medicoDeFamilia++;
      } else if (paciente.especialidad === "Pediatra") {
        total.pediatria++;
      } else {
        total.cardiologia++;
      }
      return total;
    },
    {
      medicoDeFamilia: 0,
      pediatria: 0,
      cardiologia: 0,
    }
  );
};

console.log("Especialidades:", cuentaPacientesPorEspecialidad(pacientes));
