import "./App.css";
import { Alert } from "antd";

import InputForm from "./components/InputForm/InputForm";
import InputContainer from "./components/InputContainer/InputContainer";
import useFetchRepos from "./hooks/useFetchRepos";
import TableContainer from "./components/TableContainer/TableContainer";
import Header from "./components/Header/Header";

function App() {
  const { userInfo, repos, isLoading, error, fetchRepoData } = useFetchRepos();

  return (
    <div className="App">
      <Header />
      <InputContainer>
        <InputForm onSearch={fetchRepoData} isLoading={isLoading} />

        <Alert
          message={error}
          type="error"
          className={`AlertContainer ${error ? "AlertVisible" : ""}`}
        />
      </InputContainer>
      <TableContainer repos={repos} isLoading={isLoading} userInfo={userInfo} />
    </div>
  );
}

export default App;
