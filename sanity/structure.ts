import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('SETC Website Admin')
    .items([
      S.listItem()
        .title('Content')
        .child(
          S.list()
            .title('Content')
            .items([
              S.documentTypeListItem('siteSettings').title('Site Settings'),
              S.documentTypeListItem('service').title('Services'),
              S.documentTypeListItem('brand').title('Brands'),
              S.documentTypeListItem('course').title('Courses'),
              S.documentTypeListItem('blogPost').title('Blog Posts'),
              S.documentTypeListItem('faq').title('FAQs'),
              S.documentTypeListItem('job').title('Careers'),
            ]),
        ),
      S.divider(),
      S.listItem()
        .title('Leads')
        .child(
          S.list()
            .title('Leads')
            .items([
              S.documentTypeListItem('enquiry').title('Enquiries'),
            ]),
        ),
    ])
