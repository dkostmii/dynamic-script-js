function helloWorld(rootElement) {
    if (!rootElement) {
        throw new Error("Root element is not provided")
    }

    console.log("Hello, World!")

    const hello = document.createElement("h1")
    hello.appendChild(document.createTextNode("Hello, World!"))
    rootElement.appendChild(hello)
}