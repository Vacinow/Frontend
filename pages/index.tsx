import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home">
    <h1>Hello 👋</h1>
    <p>
      <Link href="/upload">
        <a>upload</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
