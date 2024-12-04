import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { ChatContext } from '../../context/ChatContext'
import UserChat from './components/UserChat'
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import AvNewChats from './components/AvNewChats'

const Chat = () => {
  const {user} = useContext(AuthContext)
  const {updateCurrentChat, userChatsError, isUserChatLoading, userChats} = useContext(ChatContext);

  const [show, setShow] = useState(false);

  const handleToogleModal = () => setShow(!show);

  return (
    <div className='chatContainer'>
      <div className='chats'>
        <ul>
          <Button variant='`primary' onClick={handleToogleModal}>
            +
          </Button>
          {
            userChats && userChats.map((chat, index) => (
              <li onClick={() => updateCurrentChat(chat)} key={index}>
                <UserChat chat={chat} user={user}/>
              </li>
            ))
          }
        </ul>
      </div>
      <div className='chatbox'>

      </div>

      <Modal show={show} onHide={handleToogleModal}>
        <AvNewChats handleToogleModal={handleToogleModal}/>
      </Modal>
    </div>
  )
}

export default Chat