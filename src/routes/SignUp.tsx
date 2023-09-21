import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../layouts/Header"
import { PrimaryButton } from "../components/PrimaryButton";
import { Input } from "../components/Input";

export default function Wrapper(props: any) {

    const navigate = useNavigate();

    useEffect(() => {
        document.title = props.title;
    });

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/login.css'} />

        <Header title="Inscription"/>

        <div className="main">

            <div className="container mt-4">

                <div className="row justify-content-center">

                    <div className="col-12 diot">

                        <form className="form">

                            <div className="mb-3">
                                <Input type="email" id="exampleInputEmail1" placeholder="Adresse e-mail" required/>
                            </div>
                            
                            <div className="mb-3">
                                <Input type="password" id="exampleInputPassword1" placeholder="Mot de passe" required/>
                            </div>

                            <div className="mb-3">
                                <Input type="password" id="exampleInputPassword1" placeholder="Confirmer le mot de passe" required/>
                            </div>

                            <div className="mb-5 col-10 down">

                                <PrimaryButton title="S'inscrire" onClick={() => navigate('/home')}/>

                                <div className="text-center mt-3 label">
                                    Tu as déjà un compte ?
                                </div>

                                <div className="text-center">
                                    <div className="link" onClick={() => navigate('/login')}>Se connecter</div>
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