export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eab2b9a7b6cc3021e71f20e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-1coiz8q9',
                  apiId: '8f24cde5-6a43-4874-9f29-d1c307e9aa34'
                },
                {
                  buildHookId: '5eab2b9bc0326801f05a4cad',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p9nwzat7',
                  apiId: '04d85fb5-bdb8-4cac-b9a1-e2f919968427'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brountreeRS/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-p9nwzat7.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
