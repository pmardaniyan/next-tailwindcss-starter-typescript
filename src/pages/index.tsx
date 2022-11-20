import Layout from '@/components/layout'

export default function IndexPage() {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <main>
        <div className='flex min-h-screen flex-col items-center justify-center text-center'>
          <h1 className="text-2xl text-red-400">Hello Next.js 👋</h1>
          <p className='mt-2 text-yellow-800'>
            A starter for Next.js, Tailwind CSS, and TypeScript with pmardaniyan
          </p>
        </div>
      </main>
    </Layout>
  )
}
