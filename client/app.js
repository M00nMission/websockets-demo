const socket = new WebSocket('ws://localhost:8080')

// Listen for messages
socket.onmessage = ({ data }) => {
    console.log(`Message from server `, data)
}

document.querySelector(`button`).onClick = () => {
    socket.send('hello')
}