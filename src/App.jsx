import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"
import React, { useState, useEffect } from "react"

function App() {

  const [ patients, setPatients] = useState([])
  const [ patient, setPatient] = useState({})

  useEffect(() => {
    const getLocalStg = () =>{
      const localStg = JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(localStg)
    }
    getLocalStg();
  }, [])

  useEffect( () => {
    localStorage.setItem('patients', JSON.stringify( patients ));
  }, [patients])

  const deletePatient = id => {
    const updatePatients = patients.filter( patient => patient.id !== id);
    setPatients(updatePatients)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="md:flex mt-12">
        <Form
          patients={patients}
          patient={patient}
          setPatients={setPatients}
          setPatient={setPatient}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  )
}

export default App
