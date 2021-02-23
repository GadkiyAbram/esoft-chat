import React from 'react'
import Sidebar from './Sidebar';
import OpenConversation from './OpenConversation';
import { useConversations } from '../contexts/ConversationsProvider';
import Header from './Header';

export default function Dashboard({ id }) {
  const { selectedConversation } = useConversations()

  return (
    <div>
      <div style={{ height: '10vh' }}>
      <Header />
      </div>
      <div className="d-flex" style={{ height: '90vh' }}>
        <Sidebar id={id} />
        {selectedConversation && <OpenConversation />}
      </div>
    </div>
  )
}
