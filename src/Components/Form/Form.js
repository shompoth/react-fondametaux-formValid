import React, { useState } from "react";
import Button from "../Button/Button";
import TextError from "../TextError/TextError";
import classes from "./Form.module.css";

const Form = () => {
    // State
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [motivation, setMotivation] = useState("");
    const [errorArray, setErrorArray] = useState([]);

    // Fonction

    const formValidation = () => {
        let formIsValid = true;
        let errors = {};

        if (name.length === 0) {
            errors["name"] = "Veuillez remplir le champs du Nom";
            formIsValid = false;
        }
        if (firstName.length === 0) {
            errors["firstName"] = "Veuillez remplir le champs du Prénom";
            formIsValid = false;
        }
        if (!email.includes("@")) {
            errors["email"] = "Email non valide, doit contenir un @";
            formIsValid = false;
        }

        if (motivation.length < 100) {
            errors["motivation"] = "Ce champs doit contenir au moins 300 charactères";
            formIsValid = false;
        }

        setErrorArray(errors);
        return formIsValid;
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (formValidation()) {
            alert("formulaire envoyé");
            // alert("Le formulaire contient une ou des erreurs");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={classes.formContainer}>
            <div className={classes.inputStyle}>
                <label for="name">Nom :</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>
            {errorArray.name && <TextError>{errorArray.name}</TextError>}

            <div className={classes.inputStyle}>
                <label for="firstname">Prenom :</label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>
            {errorArray.firstName && <TextError>{errorArray.firstName}</TextError>}

            <div className={classes.inputStyle}>
                <label for="email">Email :</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            {errorArray.email && <TextError>{errorArray.email}</TextError>}

            <div className={classes.inputStyle}>
                <label for="motivation">Pourquoi souhaitez-vous nous rejoindre ?</label>
                <textarea
                    rows="5"
                    cols="33"
                    id="motivation"
                    name="motivation"
                    value={motivation}
                    onChange={e => setMotivation(e.target.value)}
                />
            </div>
            {errorArray.motivation && <TextError>{errorArray.motivation}</TextError>}

            <Button type="submit">Envoyer</Button>
        </form>
    );
};

export default Form;
