import express from "express";
const app = express();
const port = 3002;


app.get("/", (req, res) => {
res.send("<h1>Hello</h1>")
})

app.get("/contact", (req, res) => {
res.send("<h2>This is how you contact me</h2>")
})

app.get("/about", (req, res) => {
res.send("<h2>This is about me</h2>")    
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    
});

//server should be able to handle
// "/" "/contact" and "/about" endpoints.