import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [forums, setForums] = useState([]);
  const [driver, setDriver] = useState("");
  const [form, setForm] = useState({
    name: "",
    driver: "",
    team: "",
    comment: "",
  });

  useEffect(() => {
    getForums();
  }, []);

  async function getForums() {
    let API = "http://localhost:8080/forums";

    const res = await axios.get(API);
    console.log(res.data);
    setForums(res.data);
  }

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    console.log(form);
  }

  async function handleAddForum(event) {
    event.preventDefault();
    console.log(form);
    const API = "http://localhost:8080/forums";
    const res = await axios.post(API, form);

    const newForumsList = [...forums, res.data];
    setForums(newForumsList);

    setForm({
      name: "",
      driver: "",
      team: "",
      comment: "",
    });
  }

  async function deleteForum(id, name) {
    const confirmDelete = window.confirm(`do you want to delete ${name}?`);
    if (confirmDelete) {
      const API = `http://localhost:8080/forums/${id}`;
      const res = await axios.delete(API);
      console.log(res);
      getForums();
    }
  }

  return (
    <div>
      <div class="flex-container">
        {forums.map((forum, index) => {
          return (
            <div class="comments">
              <div key={index}>
                <span onClick={() => deleteForum(forum._id, forum.name)}>
                  X-Delete Record
                </span>
                <h2>{forum.name}</h2>
                <p>{forum.driver}</p>
                <p>{forum.team}</p>
                <p>{forum.comment}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div class="add">
        <h2>Add a Comment</h2>
        <p>
          Here we have a place for you to add to our forum, please leave a
          message of support for your favorite driver!
        </p>
        <div className="comment">
          <form onSubmit={handleAddForum}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              name="driver"
              value={form.driver}
              onChange={handleChange}
              placeholder="Driver Name"
            />
            <input
              name="team"
              value={form.team}
              onChange={handleChange}
              placeholder="Team Name"
            />
            <input
              name="comment"
              value={form.comment}
              onChange={handleChange}
              placeholder="Leave your comment here"
            />
            <button type="submit">Add Your Comment</button>
          </form>
        </div>
      </div>
    </div>
  );
}
