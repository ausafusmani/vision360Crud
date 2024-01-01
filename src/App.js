import { useSelector } from "react-redux";
import "./App.css";
import Form from "./pages/form/Form";
import BasicTable from "./pages/table/Table";
import { useEffect, useState } from "react";

function App() {
  const formState = useSelector((state)=> state.form)
  const [formMode,setFormMode] = useState('add')
  useEffect(() => {
      setFormMode(formState.formMode)
  }, [formState.formMode])
  
  return (
    <>
       {
        formMode === '' ?  <BasicTable /> : <Form formData={formState.editFormData}/>
       }
    </>
  );
}

export default App;
