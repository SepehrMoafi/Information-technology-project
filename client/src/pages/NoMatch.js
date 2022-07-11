import React from "react";
import Jumbotron from "../components/Jumbotron";

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <h1>404 صفحه مورد نظر پیدا نشد</h1>
        <h1>
          <span role="img" aria-label="Face With Rolling Eyes Emoji">
            🙄
          </span>
          <a href="sepehrmoafi.ir"></a>
        </h1>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
