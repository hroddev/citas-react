const Patients = ({ patient }) => {

    const { name, owner, email, date, symptom } = patient

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
    </div>
)
}

export default Patients
