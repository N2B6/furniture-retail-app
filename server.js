const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'Images' folder
app.use('/Images', express.static(path.join(__dirname, 'Images')));
app.use(express.static(path.join(__dirname, 'templates'))); // Serve static HTML files

// Define all page routes
const pages = [
    "/", "/login", "/products", "/donate", "/payment",
    "/cart", "/donation", "/receipt", "/about", "/contact",
    "/blog", "/admin", "/admin_dashboard"
];

pages.forEach(page => {
    app.get(page, (req, res) => {
        const fileName = page === "/" ? "home.html" : `${page.split('/')[1]}.html`;
        res.sendFile(path.join(__dirname, "templates", fileName));
    });
});

const server = app.listen(8080, () => {
    console.log("Server running on port 8080");
});
