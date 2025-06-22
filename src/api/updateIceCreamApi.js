export const updateIceCreamApi = (id, iceCream) => {
    const options = {

        method: "PATCH",

        body: JSON.stringify(iceCream),

        headers: {

            "Content-Type": "application/json; charset=UTF-8",

        }
    }
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, options)

        .then(response => response.json())
}