import React from "react";

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "./src/constants";

import { SEO, Layout } from "./src/components";

const setColorsByTheme = () => {
  const colors = "🌈";
  const colorModeKey = "🔑";
  const colorModeCssProp = "⚡️";

  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = "dark";

  // const hasUsedToggle = typeof persistedPreference === 'string';

  // if (hasUsedToggle)
  //     colorMode = persistedPreference;
  // else
  //     colorMode = prefersDarkFromMQ ? 'dark' : 'light';

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors[colorMode]).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;
    root.style.setProperty(cssVarName, colorByTheme);
  });
};

const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'🌈'", JSON.stringify(COLORS))
    .replace("🔑", COLOR_MODE_KEY)
    .replace("⚡️", INITIAL_COLOR_MODE_CSS_PROP);

  const calledFunction = `(${boundFn})()`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */

const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
      `--color-text: black;
      --color-background: white;`
    */

  const cssVariableString = Object.entries(COLORS.dark).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme};`;
    },
    ""
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles />);
  setPreBodyComponents(<MagicScriptTag />);
};

export const wrapPageElement = ({ element }) => {
  const data = element.props.data?.markdownRemark?.frontmatter;
  let baseImageUrl;

  if (element.props.location.pathname.includes("podcast"))
    baseImageUrl = "src/img/podcast/more-human-cover.png";

  return (
    <>
      {data ? (
        <>
          <SEO
            description={data.description}
            title={data.title}
            imageUrl={data.imageUrl || baseImageUrl}
            url={data.url}
            article={data.type ? true : false}
          />
          <Layout
            imageUrl={data.imageUrl}
            url={data.url}
            title={data.title}
            description={data.description}
          >
            {element}
          </Layout>
        </>
      ) : (
        <>
          <SEO
            description="Change the heart, change the world."
            title="Winter Hearth Studios"
            imageUrl="/img/aubbie-knight.jpg"
            url="https://winterhearth.co"
            article={true}
          />
          <Layout>{element}</Layout>
        </>
      )}
    </>
  );
};
