import { useCookies } from "react-cookie";

export default class APIservice {
  static UpdateArticle(article_id, body, token) {
    return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${token}`,
      },
      body:JSON.stringify(body)
    }).then(res => res.json());
  }

  static CreateArticle(body, token){
    return fetch("http://127.0.0.1:8000/api/articles/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Token ${token}`,
      },
      body: JSON.stringify(body)
    }).then(res => res.json());
  }
  static DeleteArticle(article_id, token){
    return fetch(`http://127.0.0.1:8000/api/articles/${article_id}/`, {
      method: "DELETE",
      headers: {
        'Authorization': `Token ${token}`,
      }
    }).then(res => res.json());
  }

  static LoginUser(body){
    return fetch("http://127.0.0.1:8000/auth/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }).then(res => res.json());
  }
  static RegisterUser(body){
    return fetch("http://127.0.0.1:8000/api/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body)
    }).then(res => res.json());
  }

}
