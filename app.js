import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`O servidor está rodando na porta ${PORT}`);
});

app.set("view engine", "ejs");
app.set("views", "ejs-templates");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));