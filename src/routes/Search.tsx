import { useEffect } from "react";

export default function Wrapper(props: any) {

    useEffect(() => {
        document.title = props.title;
    });

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/search.css'} />

        <div className="title">Mes recherches</div>

        <div className="carte">

            <span>Travail en cours</span>

        </div>
    </>
    );
}