import React from "react";
import MainGrid from "../utils/components/common/mainGrid";
import NavBar from "../utils/components/common/navBar";
import Title from "../utils/components/common/title";

export default function Home() {
    return (
        <>
            <NavBar />
            <MainGrid>
                <Title />
                <p style={ { backgroundColor: "red" } }>xs=4</p>
            </MainGrid>
        </>

    );
}
