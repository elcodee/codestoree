import Heading from "components/Netflix/Heading";
import More from "components/Netflix/More";
import Page from "components/utility/Page";
import Projects from "components/Netflix/Projects";
import React from "react";

function netflix() {
  return (
    <Page
      currentPage="Netflix"
      meta={{ title: "Netflix", desc: "Netflix Premium Code Store" }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default netflix;
