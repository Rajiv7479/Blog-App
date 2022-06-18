import React from "react";
import "./home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Grid, Grow } from "@mui/material";
import Form from "../../components/form/Form";
import Navbar from "../../components/navbar/Navbar";
import Posts from "../../components/posts/Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/posts").then((res) => {
      setPosts(res.data);
    });
  }, [posts]);
  // console.log(posts);

  // const postData = async () => {
  //   axios.post("http://localhost:5000/posts", {
  //     title: "Goa trip",
  //     author: "sri",
  //   });
  // };

  return (
    <>
      <Navbar />
      <Container>
        <Grow in>
          <Container className="container">
            <Grid container justify="space-between" spacing={3}>
              <Grid item sm={12} md={8} spacing={10} className="postContainer">
                {/* <h1>Welcome to Home!!</h1> */}
                {posts.length > 0 ? (
                  posts.map((post) => {
                    return (
                      <div key={post._id} className="post">
                        <Posts post={post} />
                      </div>
                    );
                  })
                ) : (
                  <h1>No Post Found!!!</h1>
                )}
              </Grid>

              <Grid item className="formContainer" sm={12} md={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default Home;
