import { createLibp2p } from "./lib/libp2p.js";
import { webRTC } from "./lib/webrtc.js";
import { webSockets } from "./lib/websockets.js";
import { mplex } from "./lib/mplex.js";
import { noise } from "./lib/noise.js";
import { gossipsub } from "./lib/gossipsub.js";
import { identifyService } from "./lib/identify.js";

let node;
const chat = document.getElementById("chat");
const sendBtn = document.getElementById("sendBtn");
const msgInput = document.getElementById("msg");
const startBtn = document.getElementById("startBtn");
const roomInput = document.getElementById("room");
const localVideo = document.getElementById("localVideo");

async function start() {
  const room = roomInput.value.trim();
  if (!room) return alert("Room required");

  node = await createLibp2p({
    addresses: {
      listen: ["/webrtc"],
    },
    transports: [webRTC(), webSockets()],
    connectionEncryption: [noise()],
    streamMuxers: [mplex()],
    pubsub: gossipsub({ emitSelf: true }),
    services: { identify: identifyService() },
  });

  await node.start();
  console.log("🔗 Node started:", node.peerId.toString());

  await node.services.pubsub.subscribe(room);
  node.services.pubsub.addEventListener("message", (evt) => {
    const str = new TextDecoder().decode(evt.detail.data);
    chat.value += "\n🔵 Peer: " + str;
  });

  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((stream) => {
      localVideo.srcObject = stream;
    })
    .catch(() => {});

  sendBtn.onclick = () => {
    const msg = msgInput.value.trim();
    if (msg && node.services.pubsub) {
      node.services.pubsub.publish(room, new TextEncoder().encode(msg));
      chat.value += "\n🟢 You: " + msg;
      msgInput.value = "";
    }
  };
}

startBtn.onclick = start;
