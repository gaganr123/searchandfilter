import React, { useState, useEffect } from "react";

import axios from "axios";
import logo from "../image/logo512.png";
const client = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts",
});

const Api = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  // GET with Axios
  useEffect(() => {
    const fetchPost = async () => {
      try {
        let response = await client.get("?_limit=10");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPost();
  }, []);

  // DELETE with Axios
  const deletePost = async (id) => {
    try {
      await client.delete(`${id}`);
      setPosts(
        posts.filter((post) => {
          return post.id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };

  // POST with Axios
  const addPosts = async (title, body) => {
    try {
      let response = await client.post("", {
        title: title,
        body: body,
      });
      setPosts([response.data, ...posts]);
      setTitle("");
      setBody("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3">Api Integration</h1>
      <div className="row">
        <div className="col-lg-12 my-4">
          <button
            type="button"
            class="btn btn-dark mb-3"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Add new Post
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add post
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <div className="add-post-container">
                    <form onSubmit={handleSubmit}>
                      <div class="mb-3">
                        <label for="title" class="form-label">
                          Title
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          id="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          aria-describedby="emailHelp"
                          placeholder="Type title"
                        />
                      </div>
                      <div class="mb-3">
                        <label for="title" class="form-label">
                          Body
                        </label>
                        <textarea
                          name="body"
                          className="form-control"
                          id="body"
                          cols="5"
                          rows="4"
                          value={body}
                          onChange={(e) => setBody(e.target.value)}
                          placeholder="Type in body.."
                        ></textarea>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-dark"
                        data-bs-dismiss="modal"
                      >
                        Add Post
                      </button>
                    </form>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        <h2 className="text-center">All Posts 📫</h2>
      </div>
      <hr />
      <div className="row g-4">
        {posts.map((post) => {
          return (
            <div className="col-lg-4 col-md-4 d-flex">
              <div
                className="card flex-fill p-3 bg-dark align-items-center"
                key={post.id}
              >
                <img
                  src={logo}
                  alt="img"
                  className="img-fluid p-2"
                  height="auto"
                  width="150px"
                />
                <h2 className="text-center text-light">{post.title}</h2>
                <p className="text-center text-light">{post.body}</p>

                <div className="button text-center">
                  <button
                    type="button"
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal2"
                  >
                    Delete
                  </button>

                  <div
                    class="modal fade"
                    id="exampleModal2"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel2"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered">
                      <div class="modal-content bg-danger">
                        <div class="modal-header">
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <div className="d-flex gap-3">
                            <h5 className="text-light">
                              Do you want to delete it?
                            </h5>
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() => deletePost(post.id)}
                              data-bs-dismiss="modal"
                            >
                              Yes
                            </button>
                          </div>
                        </div>
                        <div class="modal-footer">
                          <button
                            type="button"
                            class="btn btn-light"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Api;
