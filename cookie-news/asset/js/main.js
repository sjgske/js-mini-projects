import { fetch } from "whatwg-fetch";
import { setIsLoading } from "./loading.js";
import "../css/style.css";
import "../img/spinner.gif";

function createArticle({ title, summary, thumb }) {
  const article = document.createElement("article");
  article.className = "news";
  article.innerHTML = `
    <a class="news__link" href="#">
      <img class="news__thumb" src="${thumb}" alt="뉴스 썸네일" />
      <div class="news__info">
        <h3 class="news__title">${title}</h3>
        <p class="news__summary">${summary}</p>
      </div>
    </a>`;
  return article;
}

function renderNews() {
  const newsList = document.querySelector(".news-list");

  setIsLoading(true);

  setTimeout(() => {
    fetch("../data/news.json")
      .then((res) => res.json())
      .then((data) => {
        const { articles } = data;
        const articleList = articles.map((article) => createArticle(article));

        setIsLoading(false);
        newsList.append(...articleList);
      });
  }, 2000);
}

document.addEventListener("DOMContentLoaded", renderNews);
