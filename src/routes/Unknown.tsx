import { useEffect } from "react";

export default function Wrapper(props: any) {

    useEffect(() => {
        document.title = props.title;
    });

    return (
    <>
        <link rel="stylesheet" href={process.env.PUBLIC_URL + '/css/unknown.css'} />

        <div className="main">

            <span>Work in progress : Inconnu</span>
            
        </div>
    </>
    );
}