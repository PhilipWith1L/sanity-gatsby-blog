export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '603f66fe5ea31920696b758f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-42i1c4pc',
                  apiId: '3a9e727d-7acb-4c77-acfc-ee27db17d43b'
                },
                {
                  buildHookId: '603f66fe19abb41421db2e49',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-57ksuv5j',
                  apiId: '55cf0aee-f851-4ca0-b106-9261590d6582'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PhilipWith1L/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-57ksuv5j.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
