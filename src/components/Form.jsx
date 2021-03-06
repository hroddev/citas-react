import { useState, useEffect } from "react"
import Error from "./Error"

const Form = ({ patients ,setPatients, patient, setPatient }) => {
    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [symptom, setSymptom] = useState('')

    const [error, setError] = useState(false)

    useEffect( () => {
        if ( Object.keys(patient).length > 0 ){
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDate(patient.date)
            setSymptom(patient.symptom)
        }
    }, [patient])

    const genId = () => {
        const random = Math.random().toString(36).substring(2)
        const date = Date.now().toString(36)

        return random + date
    }

    const handleSubmit= (e) => {
        e.preventDefault();

    // validate the form
        if ( [ name, owner, email, date, symptom ].includes('') ) {
            console.log('Hay al menos un campo vacio')
            setError(true)
            return;
        }
        setError(false)

        // created the object of the patients
        const patientObject = {
            name,
            owner,
            email,
            date,
            symptom
        }

        if(patient.id) {
            // edit this values
            patientObject.id = patient.id

            // patientState is a new variable for find the correct registry
            const updatePatients = patients.map( patientState => patientState.id === patient.id ? patientObject : patientState)

            // return the update values
            setPatients(updatePatients)
            setPatient({}) // clean values in memory

        } else {
            // add the new object to the collections
            patientObject.id = genId();
        setPatients([...patients, patientObject])
        }

        // reset the form
        setName('')
        setOwner('')
        setEmail('')
        setDate('')
        setSymptom('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="mt-6 text-xl text-center">
                A??ade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg py-10 px-5 mt-9 mb-10 mr-5 ml-5">
                { error && <Error>Todos los campos son obligatorios</Error>}

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md"
                        value={name}
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>

                <div className="mb-5">
                <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold pt-3">
                    Nombre del Propietario
                </label>
                <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md"
                    value={owner}
                    onChange={ (e) => setOwner(e.target.value) }
                />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold pt-3">
                        Correo Electronico
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo electronico del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold pt-3">
                        Fecha de Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md"
                        value={date}
                        onChange={ (e) => setDate(e.target.value) }
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold pt-3">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md"
                        placeholder="Describe los sintomas del paciente"
                        value={symptom}
                        onChange={ (e) => setSymptom(e.target.value) }
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={ patient.id ? "Editar paciente" : "Agregar Paciente"}
                />
            </form>

        </div>
)
}

export default Form
