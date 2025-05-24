# 🧪 Teethlion Microdemo (Web-Only P2P)

Bienvenido a la microdemo de **Teethlion**, una prueba embebible y sin backend de los conceptos clave del protocolo **Teethlion** en un entorno puramente web.

> 🔒 Comunicación peer-to-peer _libp2p-based_ en el navegador.  
> 🎥 Transmisión de datos, chat y audio/video usando WebRTC y PubSub.  
> 🧠 Nodo = pestaña. Simula una red LAN local con nodos autónomos.

---

## 📦 ¿Qué incluye esta demo?

- ✅ Comunicación P2P entre pestañas usando `libp2p`, `gossipsub`, `WebRTC`.
- ✅ Descubrimiento automático de nodos en el mismo navegador.
- ✅ Chat cifrado AES-GCM (E2E).
- ✅ Transmisión local de audio y video con WebRTC.
- ✅ Representación visual de nodos conectados.
- ✅ Logging interno tipo "Teethlion Console".

---

## 🚀 ¿Qué NO requiere?

- ❌ Servidores backend
- ❌ WebSocket server
- ❌ Infraestructura externa

Solo necesitas abrir **varias pestañas** o navegadores en la misma máquina para simular nodos.

---

## 🔧 Cómo ejecutarlo

### Opción 1: Verlo Online (GitHub Pages)

Próximamente:  
👉 https://3mmanu3lmois3s.github.io/teethlion-microdemo/

### Opción 2: Clonarlo y correrlo localmente

```bash
git clone https://github.com/3mmanu3lmois3s/teethlion-microdemo.git
cd teethlion-microdemo
npm install
npm run dev
```

Luego abre varias pestañas en https://localhost:5173

### 🧠 ¿Para qué sirve?

Esta microdemo permite entender cómo funciona una red Teethlion P2P en una simulación local.

Ideal para:

    Pruebas de arquitectura.

    Demostraciones técnicas.

    Validación de conceptos de PubSub + WebRTC + AES.

    Integración futura en dispositivos.

### 🧬 Compatibilidad

    ✅ Chrome

    ✅ Firefox

    ⚠️ Edge (experimental)

    ❌ Safari (limitado soporte a WebRTC/libp2p)

### 🔐 Seguridad

Esta demo incluye cifrado simulado por AES-GCM en canal WebRTC/DataChannel.
📥 Contribuir

Las mejoras están abiertas. Puedes contribuir en:

    Mejorar la visualización de nodos.

    Inclusión de archivos adjuntos.

    Simulación multi-dispositivo.

### 🧠 Más sobre Teethlion

Visita el sitio oficial:
👉 https://teethlion.com
