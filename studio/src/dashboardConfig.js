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
                  buildHookId: '5e7e31bc59d4515909ed7a1f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-usw9dzwh',
                  apiId: '7d4dd484-f98e-4e27-9f23-cd7a5c316c48'
                },
                {
                  buildHookId: '5e7e31bc9d98ff394f494805',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vt4i47hd',
                  apiId: '575474f8-61ce-47d5-9ac6-5adc484e9449'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/colinappnovation/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vt4i47hd.netlify.com', category: 'apps' }
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
