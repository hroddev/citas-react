import Header from "./components/Header"
import Form from "./components/Form"
import PatientList from "./components/PatientList"
import React, { useState } from "react"

function App() {

  const [ patients, setPatients] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="md:flex mt-12">
        <Form
          patients={patients}
          setPatients={setPatients}
        />
        <PatientList
          patients={patients}
        />
      </div>
    </div>
  )
}

export default App
