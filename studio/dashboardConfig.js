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
                  buildHookId: '5d639bd31c5e2f8bec802bbe',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8j4xgj49',
                  apiId: '097ca142-8583-4244-9b66-949480b2aa50'
                },
                {
                  buildHookId: '5d639bd364c0b84779de35c9',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xacwgxuv',
                  apiId: '936b38cc-22ef-4319-b850-dfa3a185848f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/al1973/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xacwgxuv.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
