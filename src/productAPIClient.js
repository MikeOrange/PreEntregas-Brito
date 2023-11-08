const productAPIClient = {
    getData : () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const itemsFile = "/productos.js"
                fetch(itemsFile)
                .then((response) => response.json())
                .then((data) => resolve(data))
            }, 500);
        });
    }
}

export { productAPIClient };