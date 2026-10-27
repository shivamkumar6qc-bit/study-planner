self.addEventListener("push", function (event) {
    let data = {};

    if (event.data) {
        data = event.data.json();
    }

    let title = data.title || "Study Planner";
    let options = {
        body: data.body || "Bhai, padhai ka time ho gaya!",
        icon: "./icon.png"
    };

    event.waitUntil(
        self.registration.showNotification(title, options)
    );
});