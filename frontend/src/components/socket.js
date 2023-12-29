// socket.js
import io from "socket.io-client";

const ENDPOINT = "https://chat-app-h3qc.onrender.com/"; // Your socket server endpoint
const socket = io(ENDPOINT);

export default socket;
