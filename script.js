// Function to copy server IP
function copyIP() {
    const ip = "mc.koroskihub.eu";
    navigator.clipboard.writeText(ip)
        .then(() => {
            alert("Server IP je bil kopiran: " + ip);
        })
        .catch(err => {
            console.error("Ups, težava s kopiranjem IP-ja: ", err);
        });
}