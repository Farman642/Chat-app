// socket.js
import io from "socket.io-client";

const ENDPOINT = "http://localhost:4000"; // Your socket server endpoint
const socket = io(ENDPOINT);

export default socket;
