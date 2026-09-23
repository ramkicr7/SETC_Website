import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
export const metadata: Metadata = { title: 'Language Skills Resources', description: 'Language Skills resources and insights from SETC.' }
export default function LanguageSkillsBlog() { redirect('/blog/category/language-skills') }
