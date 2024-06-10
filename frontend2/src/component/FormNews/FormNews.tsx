import { ChangeEvent, FormEvent, useState } from "react";
import './FormNews.css'

export interface FormNews {
    email: string
}

const Form1 = () => {
    const [formDato, setFormDato] = useState<FormNews>({
        email:""
    })

    const handleInput = (e:ChangeEvent<HTMLInputElement>) =>{
        setFormDato({...formDato, [e.target.name]: e.target.value})
    }

    const handleSubmit =(e:FormEvent) =>{
        e.preventDefault();
        console.log(formDato.email)
    }

    return (
        <>
        <div className="seccion-form">
            <h3>¡Suscribite a nuestro Newsletter!</h3>
            <form action="" className="form" onSubmit={handleSubmit}>
                <label htmlFor="" className="form-label">E-mail: </label>
                <input onChange={handleInput} value={formDato.email} className="form-input" type="email" name="email" id=""/>

                <button type="submit" className="submit">Registrarme</button>
            </form>
        </div>
        </>
    )
}

export default Form1;