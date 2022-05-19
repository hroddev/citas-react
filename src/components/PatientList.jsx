import Patients from "./Patients"

const PatientList = ({patients, patient, setPatient, deletePatient}) => {


    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-auto mr-5">

            {patients && patients.length ? (
            <>
                <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Administra tus {""}
                    <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
                </p>

                { patients.map( patient => (
                    <Patients
                        key={patient.id}
                        patient={patient}
                        setPatient={setPatient}
                        deletePatient={deletePatient}
                    />
                ))}
            </>) : (
            <>
                <h2 className="font-black text-3xl text-center">No hay Pacientes</h2>
                <p className="text-xl mt-5 mb-10 text-center">
                    Comienza agregando pacientes {""}
                    <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
                </p>
            </>
            )}
        </div>
)
}

export default PatientList
