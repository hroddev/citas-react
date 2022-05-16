const Form = () => {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="mt-5 text-lg text-center">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>
            <form className="bg-white shadow-md rounded-lg py-10 px-5 mt-5">
                <label htmlfor="mascota" className="block text-gray-700 uppercase font-bold">
                    Nombre Mascota
                </label>

                <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray400 rounded-md"
                />
            </form>
        </div>
)
}

export default Form
