import React from "react";
import { ComponentBreadcrumb } from "./Breadcrumb-style";

const Breadcrumb = (props) => {
  return (
    <ComponentBreadcrumb>
      <hgroup>
        <h1>{props.title}</h1>
        <h2>{props.bread}</h2>
      </hgroup>
    </ComponentBreadcrumb>
  );
};

export default Breadcrumb;
