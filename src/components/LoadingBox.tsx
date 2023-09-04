import React from "react";
import {ImLoop2} from 'react-icons/im';
import '../Styles/LoadingBox.css'
const LoadingBox: React.FC = () => {
  return (
    <div className="loading-box">
      <ImLoop2 className="loading_icon"/>
    </div>
  );
};

export default LoadingBox;
