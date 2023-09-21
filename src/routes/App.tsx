import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function Wrapper(props: any) {

    useEffect(() => {
        document.title = props.title;
    });

    return (
    <>
        <Outlet />
    </>
    );
}