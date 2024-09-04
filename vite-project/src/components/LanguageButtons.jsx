import { useState } from "react";

const LanguageButtons = ({ handler }) => {
    return (
        <>
            <button onClick={handler}>English</button>
            <button onClick={handler}>Spanish</button>
            <button onClick={handler}>Portuguese</button>
            <button onClick={handler}>Japanese</button>
            <button onClick={handler}>German</button>
        </>
    )
}

export default LanguageButtons;