import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import ListRowCard from '@site/src/components/ListRowCard';

const ItemList = [
    {
      title: '101: Core Concepts',
      img: require('@site/static/img/png/week1-roadmap.png'),
      link: "roadmap#core-concepts",
      description: (
        <>
           Get started on your learning journey with an introduction to the core concepts of Azure Static Web Apps. Buiild and deploy your first SWA. Add a Serverless API backend. Configure build process, app settings and behavior. Secure your app with authentication options. Stage deployments for preview. Automate CI/CD with various options.
        </>
      ),
    },
    {
      title: '102: Usage Examples',
      img: require('@site/static/img/png/week2-roadmap.png'),
      link: "roadmap#usage-examples",
      description: (
        <>
          Get hands-on experience building and deploying web applications using Azure Static Web Apps - using familiar frameworks. Build a blog with Astro. Manage inventory with React. Get creative with Vue. Share documentation with Docusaurus. Build a headless CMS with Blazor. Build and deploy a progressive web app!
        </>
      ),
    },
    {
      title: '🆕 201: Deep Dive Into "X"',
      img: require('@site/static/img/series/roadmap.png'),
      link: "roadmap",
      description: (
        <>
          Check back regularly for new "sprint plans" focused on deep-dives into new and existing features of Azure Static Web Apps. Begin with a quickstart, then explore feature usage examples with code examples.
        </>
      ),
    },
];

export default function Sprints() {
  return (
    <Layout
      title="#7DaysOfSWA"
      description="Learn Azure Static Web Apps in Week-long sprints, one topic at a time!">
      <main>
        <ListRowCard itemList={ItemList} />
      </main>
    </Layout>
  );
}