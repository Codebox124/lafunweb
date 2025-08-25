"use client"
import { useContext, createContext, useState, useEffect } from "react";

const OverContext = createContext()

export default function OverContextProvider({ children }) {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [quantites, setQuantites] = useState({})
    const [interest, setInterest] = useState(false)
    const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
    
    // Initialize with default values first
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        location: "",
        customAddress: "",
    });

    // Load from localStorage after component mounts (client-side only)
    useEffect(() => {
        const gotten = localStorage.getItem("lafun-formData");
        if (gotten) {
            try {
                const parsedData = JSON.parse(gotten);
                setFormData(parsedData);
            } catch (error) {
                console.error("Error parsing localStorage data:", error);
            }
        }
    }, []);

    // Save to localStorage whenever formData changes
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