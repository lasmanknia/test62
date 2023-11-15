   // Load responses from local storage or use default responses
   let responses = JSON.parse(localStorage.getItem('chatbotResponses')) || {
    "hello": "Hi there! How can I help you?",
    "how are you": "I'm just a computer program, but thanks for asking!",
    "what is your name": "I'm a mini AI chatbot.",
    "default": "I didn't understand that. Can you ask me something else?"
};

// Function to send user message and get a response
function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    // Get user input
    const userMessage = userInput.value;

    // Display user message in the chat box
    chatBox.innerHTML += `<div style="text-align:right; height:30px;"><strong></strong> ${userMessage}</div>`;

    // Get chatbot response
    const botResponse = getBotResponse(userMessage);

    // Display chatbot response in the chat box
    chatBox.innerHTML += `<div><strong></strong> ${botResponse}</div>`;

    // Clear the user input field
    userInput.value = "";

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get a response from the chatbot
function getBotResponse(userMessage) {
    // Convert user message to lowercase for case-insensitive matching
    const lowerCaseMessage = userMessage.toLowerCase();

    // Check if the user message matches any predefined responses
    for (const key in responses) {
        if (lowerCaseMessage.includes(key)) {
            return responses[key];
        }
    }

    // If no match is found, return the default response
    return responses["default"];
}

// Function to handle suggested responses
function addSuggestedResponse(suggestedResponse) {
    const userInput = document.getElementById("user-input");
    userInput.value = suggestedResponse;
}

// Function to add a new response provided by the user
function addNewResponse() {
    const newResponseInput = document.getElementById("new-response");
    const newAnswerInput = document.getElementById("new-answer");

    const newResponse = newResponseInput.value.trim().toLowerCase();
    const newAnswer = newAnswerInput.value.trim();

    if (newResponse !== "" && newAnswer !== "") {
        // Add the new response to the responses object
        responses[newResponse] = newAnswer;

        // Save responses to local storage
        localStorage.setItem('chatbotResponses', JSON.stringify(responses));

        // Clear the input fields
        newResponseInput.value = "";
        newAnswerInput.value = "";

        // Log the updated responses object (for demonstration purposes)
        console.log(responses);
    }
}
//collapse
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}