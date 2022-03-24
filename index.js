window.addEventListener('load', () => {
    const rootElement = document.getElementById("root")

    if (!rootElement) {
        throw new Error("Root element not found")
    }

    const scriptElement = document.createElement("script")
    scriptElement.type = 'text/javascript'
    scriptElement.src = 'helloWorld.js'
    scriptElement.addEventListener('load', () => helloWorld(rootElement))

    rootElement.appendChild(scriptElement)
})