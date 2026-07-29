"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import EmailInput from "../EmailInput";
import PasswordInput from "../PasswordInput";
import SubmitButton from "../SubmitButton";

import styles from "./LoginForm.module.css";

export default function LoginForm() {

    const router = useRouter();

    const [email,setEmail]=useState("");

    const [password,setPassword]=useState("");

    const [loading,setLoading]=useState(false);

    const [error,setError]=useState("");

    async function handleSubmit(
        e:React.FormEvent
    ){

        e.preventDefault();

        setError("");

        setLoading(true);

        try{

            const response=await fetch("/api/auth/login",{

                method:"POST",

                headers:{
                    "Content-Type":"application/json"
                },

                body:JSON.stringify({

                    email,

                    password

                })

            });

            const data=await response.json();

            if(!response.ok){

                setError(

                    data.message ??

                    "ورود انجام نشد."

                );

                return;

            }

            router.push("/dashboard");

            router.refresh();

        }

        catch{

            setError(

                "ارتباط با سرور برقرار نشد."

            );

        }

        finally{

            setLoading(false);

        }

    }

    return(

        <form

            onSubmit={handleSubmit}

            className={styles.form}

        >

            <EmailInput

                value={email}

                onChange={setEmail}

            />

            <PasswordInput

                value={password}

                onChange={setPassword}

            />

            {error &&

                <div className={styles.errorBox}>

                    {error}

                </div>

            }

            <SubmitButton

                title="ورود"

                loading={loading}

            />

        </form>

    );

}