const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'Images' folder
app.use('/Images', express.static(path.join(__dirname, 'Images')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/home.html"));
});
app.get("/login.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/login.html"));
});
app.get("/products.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/products.html"));
});
app.get("/donate.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/donate.html"));
});
app.get("/payment.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/payment.html"));
});
app.get("/cart.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/cart.html"));
});
app.get("/payment.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/payment.html"));
});
app.get("/donation.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/donation.html"));
});
app.get("/receipt.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/receipt.html"));
});
app.get("/about.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/about.html"));
});
app.get("/contact.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/contact.html"));
});
app.get("/blog.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/blog.html"));
});
app.get("/admin", (req, res) => {
    res.sendFile(path.join(__dirname + "/admin.html"));
});
app.get("/admin_dashboard.html", (req, res) => {
    res.sendFile(path.join(__dirname + "/admin_dashboard.html"));
}); 

const server = app.listen(8080);
// can see the port number in terminal - you can dictate the port number