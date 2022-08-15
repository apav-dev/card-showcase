/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import { useEffect } from "react";
import fetch from "fetch-everywhere";
import "../index.css";
import {
  Template,
  GetPath,
  TransformProps,
  TemplateConfig,
  GetHeadConfig,
  TemplateProps,
  TemplateRenderProps,
  HeadConfig,
} from "@yext/pages";
import Card from "../components/card";
import { ExternalImage } from "../types/ExternalImage";
import PageLayout from "../components/PageLayout";
import ThemeSwitch from "../components/ThemeSwitch";

/**
 * Not required depending on your use case.
 */
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "card-showcase",
};

/**
 * A local type for transformProps. This could live in src/types but it's generally
 * best practice to keep unshared types local to their usage.
 */
type ExternalImageData = TemplateProps & { externalImage: ExternalImage };

/**
 * Used to either alter or augment the props passed into the template at render time.
 * This function will be run during generation and pass in directly as props to the default
 * exported function.
 *
 * This can be used when data needs to be retrieved from an external (non-Knowledge Graph)
 * source. This example calls a public API and returns the data.
 *
 * If the page is truly static this function is not necessary.
 */
export const transformProps: TransformProps<ExternalImageData> = async (
  data
) => {
  const url = import.meta.env.YEXT_PUBLIC_EXTERNAL_IMAGE_API_BASE_URL + "/2";
  const externalImage = (await fetch(url).then((res: any) =>
    res.json()
  )) as ExternalImage;
  return { ...data, externalImage };
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<ExternalImageData> = () => {
  return `index.html`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = (
  data
): HeadConfig => {
  return {
    title: "Yext Card Showcase",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

type ExternalImageRenderData = TemplateRenderProps & {
  externalImage: ExternalImage;
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `getStaticProps`.
 */
const CardShowcase: Template<ExternalImageRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  externalImage,
}) => {
  const { _site } = document;

  return (
    <>
      <PageLayout>
        <div className="centered-container">
          <div className="py-4 md:py-0">
            <p className="text-primary">
              Yext Search can be used to surface any type of entity from the
              Knowledge Graph. Each one of these entity types are represented in
              the UI by a unique result card. This site is designed to showcase
              some design ideas for different search result cards.
            </p>
          </div>
          <div className="py-4">
            <ThemeSwitch />
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default CardShowcase;
