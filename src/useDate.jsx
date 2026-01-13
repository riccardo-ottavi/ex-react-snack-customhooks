import { useState, useEffect } from "react";

function useDate() {
    const [currentDate, setCurrentDate] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);
    }, []);

    return currentDate;
}

export default useDate