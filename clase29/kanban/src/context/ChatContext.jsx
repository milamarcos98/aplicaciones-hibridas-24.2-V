import { createContext, useEffect, useState } from "react";
import axios from "axios"

export const ChatContext = createContext();

export const ChatContextProvider = ({children, user}) => {

    let BASE_URL = "http://localhost:3000";

    // existing chats

    const [userChats, setUserChats] = useState(null)
    const [isUserChatLoading, setIsUserChatLoading] = useState(false)
    const [userChatsError, setUserChatsError] = useState(null)

    useEffect(() => {
        const getUserChats = async () => {
            if(user?.id){
                setIsUserChatLoading(true)
                setUserChatsError(null)
                await axios.get(`${BASE_URL}/chats/${user?.id}`)
                .then((res) => {
                    setIsUserChatLoading(false);
                    setUserChats(res.data);
                })
                // catch
            }
        }

        getUserChats()
    }, [user])

    // new/possible chats
    const [availableNewChats, setAvailableNewChats] = useState([]);

    useEffect(() => {
        const getAvNewChats = async () => {
            axios.get(`${BASE_URL}/users`)
            .then((res) => {
                let avChats = res.data.filter((u) => {
                    let isCreated = false; 
                    if(user?.id === u._id) return false;
                    if(userChats){
                        isCreated = userChats?.some((chat) => {
                            return chat.members[0] === u._id || chat.members[1] === u._id
                        })
                    }
                    return !isCreated;
                })
                setAvailableNewChats(avChats)
            })
        }

        getAvNewChats()
    }, [userChats])

    const createChat = async (firstId, secondId) => {
        let body = {
            firstId, 
            secondId
        }

        await axios.post(`${BASE_URL}/chats`, body)
        .then((res) => {
            setUserChats((current) => [...current, res.data])
        })
    }

    const [currentChat, setCurrentChat] = useState(null)

    const updateCurrentChat = (chat) => {
        setCurrentChat(chat)
    }
    
    return <ChatContext.Provider 
                value={{
                    userChats, 
                    isUserChatLoading,
                    userChatsError,
                    availableNewChats,
                    createChat,
                    currentChat,
                    updateCurrentChat
                }}>
        {children}
    </ChatContext.Provider>
}