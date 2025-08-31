document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("eventForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const title = document.getElementById("title").value;
      const message = document.getElementById("message").value;

      try {
        const response = await fetch("/.netlify/functions/events", {
          method: "POST",
          body: JSON.stringify({ title, message }),
        });

        const result = await response.text();
        alert("Server Response: " + result);
        form.reset();
      } catch (error) {
                               [ Read 78 lines ]
^G Help      ^O Write Out ^W Where Is  ^K Cut       ^T Execute   ^C Location
^X Exit      ^R Read File ^\ Replace   ^U Paste     ^J Justify   ^/ Go To Line
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("eventForm");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const title = document.getElementById("title").value;
      const message = document.getElementById("message").value;

      try {
        const response = await fetch("/.netlify/functions/events", {
          method: "POST",
          body: JSON.stringify({ title, message }),
        });

        const result = await response.text();
        alert("Server Response: " + result);
        form.reset();
      } catch (error) {
        console.error("Error sending event:", error);
      }
    });
  }
});
// Select your form element (make sure your HTML has a form with id="eventForm")
const form = document.getElementById("eventForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent page reload

    // Get values from form inputs
    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;

    try {
        const response = await fetch("/.netlify/functions/events", {
            method: "POST",
            body: JSON.stringify({ title, message }),
        });

        const data = await response.text(); // or .json() if returning JSON
        alert("Server response: " + data);
    } catch (error) {
        console.error("Error:", error);
    }
});
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
document.getElementById("myForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;

    const response = await fetch("/.netlify/functions/events", {
        method: "POST",
        body: JSON.stringify({ title, message })
    });

    const data = await response.json();
    console.log(data);
});
