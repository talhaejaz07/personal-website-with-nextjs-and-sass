import Head from "next/head";

import logo from "../assets/favicon.svg";

export interface Props {
  title: string;
  description: string;
}

export const HeadComponent = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <link rel="icon" href={logo.src} />
    </Head>
  );
};
