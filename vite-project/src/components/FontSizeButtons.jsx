import { useState } from "react";

const FontSizeButtons = ({ handler }) => {
    return (
        <>
            <button onClick={handler}>+</button>
            <button onClick={handler}>-</button>
        </>
    );
};

export default FontSizeButtons;