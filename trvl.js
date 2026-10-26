const holidaySearch = document.getElementById("holidaySearch");
holidaySearch.addEventListener("submit", function (event) {
    event.preventDefault();
    const destination = document.getElementById("destination").value.trim();
    const travelDate = document.getElementById("travelDate").value;
    document.getElementById("searchMessage").textContent =
        `Your search: ${destination}, travel date: ${travelDate}`;
});
const newsletterForm = document.getElementById("newsletterForm");
newsletterForm.addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("newsletterMessage").textContent =
        "Thank you for your interest!";
    newsletterForm.reset();
});