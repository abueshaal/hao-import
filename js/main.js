document.getElementById("sendBtn").addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;

    fetch("/.netlify/functions/events", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").textContent = JSON.stringify(data, null, 2);
    })
    .catch(err => console.error(err));
});
