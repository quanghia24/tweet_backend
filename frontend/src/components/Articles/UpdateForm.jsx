import React, { useEffect, useState } from "react";
import APIservice from "./APIservice";
import { useCookies } from "react-cookie";


function UpdateForm(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [token] = useCookies(['mytoken']);

  const handleUpdateArticle = () => {
    APIservice.UpdateArticle(props.article.id, { title, description }, token['mytoken'])
    .then((res) => props.updatedInformation(res));
  };
  const handleCreateArticle = () => {
    APIservice.CreateArticle({title, description}, token['mytoken'])
    .then((res) => console.log(res));
  }

  useEffect(() => {
    setTitle(props.article.title);
    setDescription(props.article.description);
  }, [props.article]);

  return (
    <div>
      {props.article ? (
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <textarea
            type="text"
            className="form-control"
            rows="5"
            id="desc"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <br />

          {
            props.article.id ?
            <button className="btn btn-success" onClick={handleUpdateArticle}>
              Update
            </button>
            :
            <button className="btn btn-success" onClick={handleCreateArticle}>
              Add
            </button>

          }

        </div>
      ) : null}
    </div>
  );
}

export default UpdateForm;
