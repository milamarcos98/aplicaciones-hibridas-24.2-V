import { useEffect, useState } from "react";

function useDebounce(value, delay){
    const [deboundedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);
        return () => {
            clearTimeout(handler)
        }
    }, [delay, value])

    return deboundedValue;
}

export default useDebounce;