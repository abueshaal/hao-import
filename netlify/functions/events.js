// events.js
let events = []; // Temporary in-memory storage

exports.handler = async function(event, context) {
    const method = event.httpMethod;

    if (method === "POST") {
        // Add a new event/message
        const body = JSON.parse(event.body);
        events.push(body);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Event added!", events })
        };
    } else if (method === "GET") {
        // Return all events/messages
        return {
            statusCode: 200,
            body: JSON.stringify(events)
        };
    } else {
        return {
            statusCode: 405,
            body: "Method Not Allowed"
        };
    }
};
