"use client"
import { useContext, createContext, useState, useEffect } from "react";

const OverContext = createContext()

export default function OverContextProvider({ children }) {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [quantites, setQuantites] = useState({})
    const [interest, setInterest] = useState(false)
    const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
    const [formData, setFormData] = useState(() => {
        const gotten = JSON.parse(localStorage.getItem("lafun-formData"))
        if (gotten) {
            return gotten
        } else {
            return {
                first_name: "",
                last_name: "",
                phone: "",
                email: "",
                location: "",
                customAddress: "",
            }
        }
    });
    useEffect(() => {
        localStorage.setItem("lafun-formData", JSON.stringify(formData))
    }, [formData])
    const values = {
        cart,
        setCart,
        total,
        setTotal,
        quantites,
        setQuantites,
        interest,
        setInterest,
        waitlistSubmitted,
        setWaitlistSubmitted,
        formData,
        setFormData
    }

    return <OverContext.Provider value={values}>
        {children}
    </OverContext.Provider>
}

export function useOverContext() {
    return useContext(OverContext)
}