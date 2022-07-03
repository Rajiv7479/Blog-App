import { Grid, Grow } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./dashboard.css";
import axios from "axios";
import Posts from "../../components/posts/Posts";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  //console.log(user.data.result._id);
  const author = user.data.result.fullname;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get(`http://localhost:5000/user/dashboard/${author}`)
        .then((res) => {
          setPosts(res.data.specificPost);
        });
    }
    //console.log(userId);
    fetchData();
  }, []);

  console.log(posts);

  return (
    <>
      <Navbar />
      <Container>
        <Grow in>
          <Container className="container">
            <div className="container2">
              <span>Name: {user.data.result.fullname}</span>
              <span>Email: {user.data.result.email}</span>
              <span>Username: {user.data.result.username}</span>
            </div>
            <h1 style={{ color: "green" }}>Welcome to Dashboard!!</h1>

            <Grid container spacing={2}>
              <Grid item xs={12} className="container">
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
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};

export default Dashboard;
