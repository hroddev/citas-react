const Form = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="mt-6 text-xl text-center">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-white shadow-md rounded-lg py-10 px-5 mt-9 mb-10 mr-5 ml-5">
                <div className="mb-5">
                    <label htmlfor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Mascota
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md"
                    />
                </div>

                <div className="mb-5">
                <label htmlfor="propietario" className="block text-gray-700 uppercase font-bold pt-3">
                    Nombre del Propietario
                </label>
                <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md"
                />
                </div>

                <div className="mb-5">
                    <label htmlfor="email" className="block text-gray-700 uppercase font-bold pt-3">
                        Correo Electronico
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Correo electronico del propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlfor="alta" className="block text-gray-700 uppercase font-bold pt-3">
                        Fecha de Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md"
                    />
                </div>
                <div className="mb-5">
                    <label htmlfor="sintomas" className="block text-gray-700 uppercase font-bold pt-3">
                        Sintomas
                    </label>
                    <textarea
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md"
                        placeholder="Describe los sintomas del paciente"
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value="Agregar paciente"
                />
            </form>

        </div>
)
}

export default Form
