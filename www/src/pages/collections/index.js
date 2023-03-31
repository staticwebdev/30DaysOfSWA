import React from 'react';
import Layout from '@theme/Layout';
import ListRowCard from '@site/src/components/ListRowCard';

const ItemList = [
    {
      title: '🆕 | Database Connections ',
      img: require('@site/static/img/collections/dab/swa-dab-launch.png'),
      link: "collections/dab",
      description: (
        <>
          Mar 15, 2023: Today marked the launch of a new feature: <em>Database Connections</em> for Azure Static Web Apps. This feature enables your application to connect seamlessly to supported Azure databases over REST or GraphQL endpoints, without you having to write any backend code. Explore this collection to learn about the feature, browse docs, and explore code samples and tutorials for applied understanding.
        </>
      ),
    },
    {
      title: '01 | Core Concepts',
      img: require('@site/static/img/png/week1-roadmap.png'),
      link: "roadmap#core-concepts",
      description: (
        <>
           Get started on your learning journey with an introduction to the core concepts of Azure Static Web Apps. Buiild and deploy your first SWA. Add a Serverless API backend. Configure build process, app settings and behavior. Secure your app with authentication options. Stage deployments for preview. Automate CI/CD with various options.
        </>
      ),
    },
    {
      title: '02 | Usage Examples',
      img: require('@site/static/img/png/week2-roadmap.png'),
      link: "roadmap#usage-examples",
      description: (
        <>
          Get hands-on experience building and deploying web applications using Azure Static Web Apps - using familiar frameworks. Build a blog with Astro. Manage inventory with React. Get creative with Vue. Share documentation with Docusaurus. Build a headless CMS with Blazor. Build and deploy a progressive web app!
        </>
      ),
    },
    {
      title: '03 | Developer Tools',
      img: require('@site/static/img/png/week3-roadmap.png'),
      link: "roadmap#developer-tools",
      description: (
        <>
          Explore the developer experience in building and deploying modern web apps. We'll introduce you to a few tools that can simplify your develop-debug-deploy-test workflows. Some of these tools are specific to Azure Static Web Apps, but most are broadly applicable for modern web app development.
        </>
      ),
    },
    {
      title: '04 | Best Practices',
      img: require('@site/static/img/png/week4-roadmap.png'),
      link: "roadmap#best-practices",
      description: (
        <>
        Let's explore advanced use cases and best practices that can help take your Azure Static Web App to the next level. This collection provides insights into E2E development, real-world case studies and Azure service integrations.
          
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