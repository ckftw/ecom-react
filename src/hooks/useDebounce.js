/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"


const useDebounce = (initialValue, cb = () => { }) => {
    const [debouncedValue, setDebouncedValue] = useState(initialValue)
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(initialValue);
            cb();
        }, 1000)

        return () => {
            clearTimeout(timer);
        }
    }, [initialValue])

    return debouncedValue;
}

export default useDebounce;