import React, { useState } from 'react'
import ChatBot from "react-chatbotify";
import avatar from '../images/avatar'

function Chatbox() {

    const settings = {
        botBubble: {
            showAvatar: true,
            avatar: avatar
        },
        chatButton: {
            icon: avatar
        }
    }

    return (
        <ChatBot settings={settings} />
    )
}

export default Chatbox