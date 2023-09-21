import { useEffect } from "react";
import { Header } from "../layouts/Header"
import { PrimaryButton } from "../components/PrimaryButton";
import { Input } from "../components/Input";
import { useNavigate } from "react-router-dom";

export default function Wrapper(props: any) {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = props.title;
    });

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/login.css'} />

        <Header title="Connexion"/>

        <div className="main">

            <div className="container mt-4">

                <div className="row justify-content-center">

                    <div className="col-12 diot">

                        <form className="form">

                            <div className="mt-3">
                                <Input type="email" id="EmailInput" placeholder="Adresse e-mail" required/>
                            </div>

                            <div className="mt-3">
                                <Input type="password" id="passwordInput" placeholder="Mot de passe" required/>
                            </div>

                            <div className="mt-4 fw-bold text-end label">
                                Mot de passe oublié ?
                            </div>  

                            <div className="mb-5 col-10 down">

                                <PrimaryButton title="Se connecter" onClick={() => navigate('/home')}/>

                                <div className="text-center mt-3 label">
                                    Pas encore de compte ?
                                </div>

                                <div className="text-center">
                                    <div className="link" onClick={() => navigate('/signup')}>S'inscrire</div>
                                </div>

                            </div>

                        </form>
                        
                    </div>

                </div>

            </div>

        </div>
    </>
    );
}