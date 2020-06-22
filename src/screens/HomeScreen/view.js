import React from "react";
import DateRange from "../../components/DateRange";

const HomeScene = props => {
  return(
    <div>
      Home SceneHome
      <DateRange onDateChange={console.log}/>
    </div>
  );
};

export default HomeScene;
