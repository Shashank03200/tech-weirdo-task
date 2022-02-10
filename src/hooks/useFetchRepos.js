import axios from "axios";
import { useEffect, useState } from "react";

const useFetchRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(undefined);
  const [userInfo, setUserInfo] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  }, [error]);

  const fetchRepoData = async (username) => {
    console.log("Function reached");

    if (username === "") {
      setError("Please provide a username");
      setRepos(undefined);
      return;
    }
    setIsLoading(true);
    try {
      const response = await axios(
        `https://api.github.com/users/${username}/repos`
      );
      const repos = await response.data;

      const repoFilterdData = [];

      repos.forEach((repo, index) => {
        const repoObj = {
          key: index + 1 + ". ",
          repoName: repo.name,
          repoUrl: repo.html_url,
          stars: repo.stargazers_count,
        };
        repoFilterdData.push(repoObj);
      });

      console.log(repoFilterdData);

      const userDataResponse = await axios(
        `https://api.github.com/users/${username}`
      );

      const userData = await userDataResponse.data;
      console.log(userData);

      setUserInfo(userData);
      setRepos(repoFilterdData);
      setIsLoading(false);
    } catch (err) {
      const errResponse = err.response;
      if (errResponse.status === 404) {
        setError("The username is invalid.");
        setIsLoading(undefined);
        setRepos(undefined);
      }
    }
  };

  return { userInfo, repos, isLoading, error, fetchRepoData };
};

export default useFetchRepos;
