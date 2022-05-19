const Patients = ({ patient, setPatient, deletePatient }) => {

    const { name, owner, email, date, symptom, id } = patient

    const handleDelete = () => {
        const answer = confirm('Deseas eliminar el paciente')
        if(answer) {
            deletePatient(id)
        }
    }


    return (
    <div className="mt-3 bg-white px-5 py-10 rounded-md shadow-md ml-5">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {""}
            <span className="font-normal normal-case">{name}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {""}
            <span className="font-normal normal-case">{owner}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Correo Electronico: {""}
            <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha de Alta: {""}
            <span className="font-normal normal-case">{date}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Simtomas: {""}
            <span className="font-normal normal-case">{symptom}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button
                type="buttom"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
                onClick={ () => setPatient(patient) }
            >Editar</button>
            <button
                type="buttom"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
                onClick={handleDelete}
            >Eliminar</button>
        </div>
    </div>
)
}

export default Patients
