import React, { useState } from 'react'
import ChatBot from "react-chatbotify";
import robot from '../images/robot.png'

function Chatbox() {

    const settings = {
        botBubble: {
            showAvatar: true,
            avatar: robot
        },
        chatButton: {
            icon: robot,
        },
        chatWindow: {
            showScrollbar: true
        },
        chatInput: {
            enabledPlaceholderText: "How can I help you?",
            showCharacterCount: true,
            characterLimit: 500,
        },
        general: {
            // secondaryColor: '#681993',
            // primaryColor: '#7b1899',
            primaryColor: '#BFBDBA'
        },
        header: {
            title: 'Kitchen Bot',
            avatar: robot
        },
        tooltip: {
            text: 'Need help?',
        },
        userBubble: {
            showAvatar: true,
            // Insert avatar from user info 
        }
    }

    const styles = {
        botBubbleStyle: {
            fontSize: '14px',
            maxWidth: '60%'
        },
        chatInputAreaStyle: {
            margin: '0',
            paddingBottom: '0',
            paddingTop: '12px'
        },
        chatWindowStyle: {
            width: '20%',
            height: '56%',
            border: 'none',
            borderRadius: '5px',
        },
        headerStyle: {
            height: '7%',
            fontSize: '21px',
            display: 'flex',
            flexFlow: 'row nowrap',
            fontWeight: '600'
        },
        chatHistoryButtonStyle: {
            width: '20%',
        },
        chatInputContainerStyle: {
            height: '4rem',
            paddingTop: '0',
            paddingBottom: '0'
        },
        footerStyle: {
            height: '7%',
            display: 'inline',
        },
        notificationBadgeStyle: {
            fontSize: '15px',
            fontFamily: 'sans-serif'
        },
        sendButtonStyle: {
            marginTop: '2.4rem',
        },
        tooltipStyle: {
            height: '3.5%',
            width: '10rem',
        },
        userBubbleStyle: {
            fontSize: '14px',
            maxWidth: '60%',
            padding: '0.5rem',
            backgroundColor: '#2a90bf'
        },
        closeChatButtonStyle: {
            position: 'relative',
            bottom: '75%',
            height: '20%',
            width: '50%'
        }
    }

    const flow = {
        start: {
            message: "Hi, I'm Kitchen Bot! What's cooking?",
        }
    }

    return (
        <ChatBot settings={settings} styles={styles} flow={flow} />
    )
}

export default Chatbox