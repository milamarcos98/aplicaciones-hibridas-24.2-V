import { useEffect, useState } from "react";
import axios from "axios";

export const useFetchRecipient = (chat, user) =>{
    const [recipient, setRecipient] = useState(null)
    const [error, setError] = useState(null)

    let baseUrl = "http://localhost:3000";

    const recipientId = chat?.members.find((id) => id !== user?.id)

    useEffect(()=>{

        const getUser = async () =>{
            if(!recipientId) return null;
            await axios.get(`${baseUrl}/users/find/${recipientId}`)
            .then((response) => {
                setRecipient(response.data)
            })
            .catch((error) => {
              setError(error.message)
            });
        }

        getUser()
    },[recipientId])

    return {recipient}
}