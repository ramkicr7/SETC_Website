import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'

export default defineConfig({
  name: 'setc-website',
  title: 'SETC Website Admin',
  projectId,
  dataset,
  basePath: '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('SETC content')
          .items([
            S.listItem().title('Enquiries').schemaType('enquiry').child(S.documentTypeList('enquiry').title('Enquiries')),
            S.divider(),
            S.listItem().title('Website content').child(
              S.list()
                .title('Website content')
                .items([
                  S.documentTypeListItem('siteSettings').title('Site settings'),
                  S.documentTypeListItem('service').title('Services'),
                  S.documentTypeListItem('brand').title('Brands'),
                  S.documentTypeListItem('course').title('Courses'),
                  S.documentTypeListItem('blogPost').title('Blog posts'),
                  S.documentTypeListItem('faq').title('FAQs'),
                  S.documentTypeListItem('job').title('Jobs'),
                ]),
            ),
          ]),
    }),
  ],
  schema: { types: schemaTypes },
})
