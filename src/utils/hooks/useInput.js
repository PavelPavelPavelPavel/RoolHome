import { useState } from "react";



export const useInput = (initial) => {
    const [value, setValue] = useState(initial);
    const [blured, setBlured] = useState(false)
    return {
        value,
        blured,
        onChange: e => setValue(e.target.value),
        onBlur: (value) => setBlured(value)
    }
}