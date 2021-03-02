import React from 'react';
import {withRouter} from "react-router-dom";

const Page404 = ({history}) => {

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/pageNotFound.jpg`,
    width: '100vw',
    height: '100vh',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  const returnToStartPage = () => {
    let path = `/`;
    history.push(path);
  };

  return (
      <div style={styles} onClick={returnToStartPage}>

      </div>
  )
};
export default withRouter(Page404);