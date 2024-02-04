import React from "react";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error has occurred!";
  return (
    <PageContent title="An error has occurred!">
      Something went wrong!
    </PageContent>
  );
};

export default ErrorPage;
