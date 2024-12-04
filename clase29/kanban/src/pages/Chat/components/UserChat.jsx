import React from 'react'
import { useFetchRecipient } from '../../../hooks/useFetchRecipient'

const UserChat = ({chat, user}) => {
  // members
  // user
  // recipient
  const {recipient} = useFetchRecipient(chat, user);
  console.log(recipient)
  return (
    <div className='userChat'>
      <div>
        {recipient && <p>{recipient[0].name}</p>}
      </div>
      <div className='offline'>

      </div>
    </div>
  )
}

export default UserChat