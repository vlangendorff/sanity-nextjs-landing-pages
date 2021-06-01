export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60b61704f44254eb596d7d74',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n6eurbc3',
                  apiId: 'b445fa53-c026-40df-9fce-3290537e65a5'
                },
                {
                  buildHookId: '60b617042e9d1435488eec0f',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-va1fx2ww',
                  apiId: 'adeaf9b8-9d8e-420c-b7ca-c2a49dee72fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vlangendorff/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-va1fx2ww.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
