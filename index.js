// deploy.js

// Получаем значение из переменной окружения
const apiKey = process.env.MY_API_KEY;

if (!apiKey) {
  console.error("API key is missing!");
  process.exit(1);  // Завершаем процесс с ошибкой, если секрет не найден
}

// Используем API-ключ для выполнения запроса или других операций
console.log("Deploying with API key:", apiKey);

// Пример использования с fetch (например, вызов внешнего API)
const fetch = require("node-fetch");

async function deploy() {
  const response = await fetch("https://api.example.com/deploy", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({ action: "deploy" })
  });

  const data = await response.json();
  console.log(data);
}

deploy();
