import Patients from "./Patients"

const PatientList = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 h-screen md:overflow-y-auto mr-5">
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus {""}
                <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>
            <Patients />
            <Patients />
            <Patients />
            <Patients />
        </div>
)
}

export default PatientList
