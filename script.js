const form = document.getElementById("notifyForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const email = document.getElementById("email").value;

    if(email){

        let subscribers =
            JSON.parse(localStorage.getItem("subscribers"))
            || [];

        subscribers.push(email);

        localStorage.setItem(
            "subscribers",
            JSON.stringify(subscribers)
        );

        message.textContent =
            "Thanks! You will be notified.";

        form.reset();
    }

});