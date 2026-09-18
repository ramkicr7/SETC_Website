import { redirect } from 'next/navigation'

type Props = {
  params: {
    index?: string[]
  }
}

export default function StudioPage({ params }: Props) {
  const path = params.index?.length ? `/admin/${params.index.join('/')}` : '/admin'

  redirect(path)
}
