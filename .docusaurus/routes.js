import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1d2'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'ada'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/animation',
            component: ComponentCreator('/docs/tags/animation', '208'),
            exact: true
          },
          {
            path: '/docs/tags/beginner-python',
            component: ComponentCreator('/docs/tags/beginner-python', 'b50'),
            exact: true
          },
          {
            path: '/docs/tags/categories',
            component: ComponentCreator('/docs/tags/categories', '10a'),
            exact: true
          },
          {
            path: '/docs/tags/coding',
            component: ComponentCreator('/docs/tags/coding', '5a0'),
            exact: true
          },
          {
            path: '/docs/tags/css',
            component: ComponentCreator('/docs/tags/css', '49a'),
            exact: true
          },
          {
            path: '/docs/tags/hugo',
            component: ComponentCreator('/docs/tags/hugo', 'bd3'),
            exact: true
          },
          {
            path: '/docs/tags/image-editing',
            component: ComponentCreator('/docs/tags/image-editing', '427'),
            exact: true
          },
          {
            path: '/docs/tags/layout',
            component: ComponentCreator('/docs/tags/layout', 'c7a'),
            exact: true
          },
          {
            path: '/docs/tags/legibility',
            component: ComponentCreator('/docs/tags/legibility', '60f'),
            exact: true
          },
          {
            path: '/docs/tags/python',
            component: ComponentCreator('/docs/tags/python', '954'),
            exact: true
          },
          {
            path: '/docs/tags/python-3',
            component: ComponentCreator('/docs/tags/python-3', '456'),
            exact: true
          },
          {
            path: '/docs/tags/readability',
            component: ComponentCreator('/docs/tags/readability', '2b5'),
            exact: true
          },
          {
            path: '/docs/tags/setting-text',
            component: ComponentCreator('/docs/tags/setting-text', 'aa2'),
            exact: true
          },
          {
            path: '/docs/tags/ssg',
            component: ComponentCreator('/docs/tags/ssg', 'd5b'),
            exact: true
          },
          {
            path: '/docs/tags/static-site-generator',
            component: ComponentCreator('/docs/tags/static-site-generator', '2df'),
            exact: true
          },
          {
            path: '/docs/tags/svg',
            component: ComponentCreator('/docs/tags/svg', 'de7'),
            exact: true
          },
          {
            path: '/docs/tags/tags',
            component: ComponentCreator('/docs/tags/tags', 'bc5'),
            exact: true
          },
          {
            path: '/docs/tags/taxonomy',
            component: ComponentCreator('/docs/tags/taxonomy', 'c55'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'dc3'),
            routes: [
              {
                path: '/docs/category/tutorials',
                component: ComponentCreator('/docs/category/tutorials', 'aaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/AI-chatbot',
                component: ComponentCreator('/docs/tutorials/AI-chatbot', '1c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/Create-Hugo-page',
                component: ComponentCreator('/docs/tutorials/Create-Hugo-page', '7c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/CSS-animation',
                component: ComponentCreator('/docs/tutorials/CSS-animation', 'bae'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/python-tutorials',
                component: ComponentCreator('/docs/tutorials/python-tutorials', '2d6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/readability',
                component: ComponentCreator('/docs/tutorials/readability', '4c9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorials/Taxonomy',
                component: ComponentCreator('/docs/tutorials/Taxonomy', '22c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
