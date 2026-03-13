<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>News Explorer</title>

<style>
body{
    font-family: Arial, sans-serif;
}

.article{
    border-bottom:1px solid #ddd;
    padding:10px 0;
}

button{
    margin-right:10px;
    padding:6px 12px;
    cursor:pointer;
}
</style>

</head>

<body>

<h2>Tech News</h2>

<p>
<button class="topic" data-topic="AI">AI</button>
<button class="topic" data-topic="javascript">JavaScript</button>
<button class="topic" data-topic="python">Python</button>
<button class="topic" data-topic="startup">Start-Up</button>
</p>

<div id="container"></div>

<script>

const news = {
AI:[
"OpenAI releases new AI model",
"AI is transforming healthcare",
"Future of Artificial Intelligence"
],

javascript:[
"JavaScript ES2026 features announced",
"Why JavaScript dominates web development",
"Best JS frameworks in 2026"
],

python:[
"Python remains #1 programming language",
"Top Python libraries for AI",
"Why developers love Python"
],

startup:[
"Top startups raising funding in 2026",
"How to build a startup from scratch",
"Startup ecosystem booming in India"
]
};

const buttons = document.querySelectorAll(".topic");
const container = document.querySelector("#container");

buttons.forEach(button => {
button.addEventListener("click", function(){

const topic = this.dataset.topic;
const articles = news[topic];

container.innerHTML = "";

articles.forEach(article => {
const div = document.createElement("div");
div.className = "article";
div.textContent = article;

container.appendChild(div);
});

});
});

</script>

</body>
</html>