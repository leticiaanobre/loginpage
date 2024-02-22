import {useState, FormEvent} from "react";
import {User} from "../types/User";
import {validate} from "../utils/validate";

import { ButtonComponent } from "./button";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [agree, setAgree] = useState(false);

    const [errors, setErrors] = useState<User | null>(null);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setErrors(null);

        const data:User = {
            name,
            email,
            agree,
        };

        const validateErrors = validate(data);

        console.log(data, validateErrors);

        if (Object.keys(validateErrors).length > 0) {
            setErrors(validateErrors)
        }

        setName("")
        setEmail("")
        setAgree(false)

        alert("Obrigado por se inscrever");
    }

    return (
        <form 
        className="flex flex-col gap-3" 
        onSubmit={handleSubmit}> 
            <div className="flex flex-col">
                <label 
                className="text-sm" 
                htmlFor="name">Nome:</label>
                <input 
                type="text" 
                placeholder="Digite seu nome" 
                className="rounded-lg mt-2 py-3 px-2 text-sm placeholder:textsm placeholder:text-stone-400" 
                value={name} 
                onChange={(e) => setName(e.target.value)}/>
                {errors?.name &&(
                    <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
                )}
            </div>
            <div className="flex flex-col">
                <label 
                className="text-sm" 
                htmlFor="email">Email:</label>
                <input 
                type="email" 
                placeholder="Insira seu email" 
                className="rounded-lg mt-2 py-3 px-2 text-sm placeholder:textsm placeholder:text-stone-400" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
                {errors?.email &&(
                    <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
                )}
            </div>
            <div className="flex flex-col">
                <a 
                href="#" 
                className="text-xs underline mb-2">Leia os termos</a>
                <div className="flex gap-2 itens-center">
                    <input type="checkbox" 
                    checked={agree} 
                    onChange={(e) => setAgree(e.target.checked)}/>
                    <label 
                    className="text-sm" 
                    htmlFor="agree">Concordo com os termos</label>
                </div>
                {errors?.agree &&(
                    <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
                )}
            </div>
            <div className="flex justify-center">
            <ButtonComponent
                type="submit"
                className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
                children="Cadastrar"
            />
            </div>
        </form>
    )
}

export default Form;