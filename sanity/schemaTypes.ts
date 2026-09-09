const slugField = { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: (Rule: any) => Rule.required() };
const seoFields = [
  { name: 'seoTitle', title: 'SEO title', type: 'string' },
  { name: 'seoDescription', title: 'SEO description', type: 'text', rows: 3 },
];

export const schemaTypes = [
  { name: 'siteSettings', title: 'Site Settings', type: 'document', fields: [
    { name: 'siteName', title: 'Site name', type: 'string', initialValue: 'Students Everywhere Training Center' },
    { name: 'logo', title: 'Logo', type: 'image' }, { name: 'phone', title: 'Phone', type: 'string' }, { name: 'whatsapp', title: 'WhatsApp', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' }, { name: 'address', title: 'Address', type: 'array', of: [{ type: 'string' }] },
    { name: 'socialLinks', title: 'Social links', type: 'array', of: [{ type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'url', type: 'url' }] }] },
    { name: 'globalCta', title: 'Global CTA', type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'url', type: 'string' }] },
    { name: 'seo', title: 'SEO defaults', type: 'object', fields: seoFields },
  ] },
  { name: 'brand', title: 'Brand', type: 'document', fields: [
    { name: 'name', title: 'Name', type: 'string', validation: (Rule: any) => Rule.required() }, slugField,
    { name: 'logo', title: 'Logo', type: 'image' }, { name: 'description', title: 'Description', type: 'text' },
    { name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'string' }], options: { list: ['Languages', 'Test Preparation', 'Study Abroad', 'Language Training'] } },
    { name: 'officialWebsite', title: 'Official website', type: 'url' }, { name: 'internalPage', title: 'Internal page', type: 'string' }, { name: 'heroImage', title: 'Hero image', type: 'image' },
    { name: 'displayOrder', title: 'Display order', type: 'number' }, { name: 'published', title: 'Published', type: 'boolean', initialValue: true }, ...seoFields,
  ] },
  { name: 'service', title: 'Service', type: 'document', fields: [{ name: 'title', type: 'string' }, slugField, { name: 'description', type: 'text' }, { name: 'image', type: 'image' }, { name: 'detailedContent', type: 'array', of: [{ type: 'block' }] }, { name: 'displayOrder', type: 'number' }, { name: 'active', type: 'boolean', initialValue: true }, { name: 'cta', type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'url', type: 'string' }] }, ...seoFields] },
  { name: 'course', title: 'Course', type: 'document', fields: [{ name: 'title', type: 'string' }, slugField, { name: 'category', type: 'string' }, { name: 'description', type: 'text' }, { name: 'heroImage', type: 'image' }, { name: 'gallery', type: 'array', of: [{ type: 'image' }] }, { name: 'details', type: 'array', of: [{ type: 'block' }] }, { name: 'cta', type: 'object', fields: [{ name: 'label', type: 'string' }, { name: 'url', type: 'string' }] }, { name: 'displayOrder', type: 'number' }, { name: 'published', type: 'boolean', initialValue: true }, ...seoFields] },
  { name: 'blogPost', title: 'Blog Post', type: 'document', fields: [{ name: 'title', type: 'string' }, slugField, { name: 'excerpt', type: 'text' }, { name: 'featuredImage', type: 'image' }, { name: 'body', type: 'array', of: [{ type: 'block' }] }, { name: 'author', type: 'string' }, { name: 'publishDate', type: 'date' }, { name: 'category', type: 'string' }, { name: 'featured', type: 'boolean' }, { name: 'published', type: 'boolean', initialValue: false }, ...seoFields, { name: 'openGraphImage', type: 'image' }] },
  { name: 'faq', title: 'FAQ', type: 'document', fields: [{ name: 'question', type: 'string' }, { name: 'answer', type: 'text' }, { name: 'category', type: 'string' }, { name: 'order', type: 'number' }, { name: 'published', type: 'boolean', initialValue: false }] },
  { name: 'job', title: 'Job', type: 'document', fields: [{ name: 'title', type: 'string' }, slugField, { name: 'department', type: 'string' }, { name: 'location', type: 'string' }, { name: 'employmentType', type: 'string' }, { name: 'description', type: 'text' }, { name: 'responsibilities', type: 'array', of: [{ type: 'string' }] }, { name: 'requirements', type: 'array', of: [{ type: 'string' }] }, { name: 'applicationDeadline', type: 'date' }, { name: 'published', type: 'boolean', initialValue: false }, { name: 'displayOrder', type: 'number' }] },
  { name: 'enquiry', title: 'Enquiry / Lead', type: 'document', fields: [{ name: 'name', type: 'string' }, { name: 'email', type: 'string' }, { name: 'phone', type: 'string' }, { name: 'whatsapp', type: 'string' }, { name: 'enquiryType', type: 'string' }, { name: 'preferredService', type: 'string' }, { name: 'message', type: 'text' }, { name: 'sourcePage', type: 'string' }, { name: 'status', type: 'string', options: { list: ['New', 'Contacted', 'In Progress', 'Qualified', 'Converted', 'Closed', 'Spam'] }, initialValue: 'New' }, { name: 'createdAt', type: 'datetime' }, { name: 'updatedAt', type: 'datetime' }, { name: 'notes', type: 'text' }] },
];
