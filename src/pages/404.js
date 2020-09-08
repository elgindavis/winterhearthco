import React, { useEffect } from "react";

import Layout from "../components/layout";

export default () => {
  useEffect(() => {
    document.title = "Games | Winter Hearth Studios";
  }, []);

  return (
    <Layout>
      <div className="pt-170 pb-120" style={{ margin: 20 }}>
        <h1>404: Page Not Found</h1>
        This page must've gotten lost while we were running from a bear the
        other day! <a href="/">Let's get you back to the site.</a>
      </div>
    </Layout>
  );
};
