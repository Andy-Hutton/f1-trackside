import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ForumDetails() {
  const [forum, setForum] = useState({});
  const [form, setForm] = useState({
    name: "",
    driver: "",
    team: "",
    comment: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getForum();
  }, []);

  async function getForum() {
    const API = `http://localhost:8080/books?_id=${id}`;
    const res = await axios.get(API);
    setForum(res.data[0]);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  async function handleUpdateForum(event) {
    event.preventDefault();
    const body = {};

    for (const prop in form) {
      if (form[prop]) {
        body[prop] = form[prop];
      }
    }

    const API = `http://localhost:8080/books/${id}`;
    await axios.put(API, body);

    const newForum = { ...forum, ...body };
    setForum(newForum);
  }

  return (
    <div>
      <h2>{forum.name}</h2>
      <p>{forum.driver}</p>
      <p>{forum.team}</p>
      <p>{forum.comment}</p>
      <h2>Update your comments here</h2>
      <form onSubmit={handleUpdateForum}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          name="driver"
          value={form.driver}
          placeholder={forum.driver}
          onChange={handleChange}
        />
        <input
          name="team"
          value={form.team}
          placeholder={forum.team}
          onChange={handleChange}
        />
        <input
          name="comment"
          value={form.comment}
          placeholder={forum.comment}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
