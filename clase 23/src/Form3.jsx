import React, { useState } from 'react'
import { SignUpInfo } from './steps/SignUpInfo';
import { PersonalInfo } from './steps/PersonalInfo';
import { OtherInfo } from './steps/OtherInfo';

const Form3 = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        nationality: "",
        other: "",
      });

      const [page, setPage] = useState(0)

      const FormTitles = ["Sign Up", "Personal Info", "Other"]

      const PageDisplay = () => {
        if(page === 0){
            return <SignUpInfo formData={formData} setFormData={setFormData} />
        }else if(page === 1){
            return <PersonalInfo formData={formData} setFormData={setFormData} />
        }else{
            return <OtherInfo formData={formData} setFormData={setFormData} />
        }
      }

  return (
    <div>
        <h2>{FormTitles[page]}</h2>
        <div>
            {PageDisplay()}
            <button disabled={page == 0} onClick={() => setPage((current) => current - 1)}>Prev</button>
            <button onClick={() => {
                if(page === FormTitles.length - 1){
                console.log("submit")
                }else{
                    setPage((current) => current + 1)
                }
        }}
            >
                {page === FormTitles.length - 1 ? "submit" : "next"}
            </button>
        </div>
        {/* <pre>
            {formData}
        </pre> */}
    </div>
  )
}

export default Form3