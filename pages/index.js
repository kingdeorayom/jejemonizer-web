import Layout from '@/layouts/Layout';
import Welcome from '@/components/Welcome';
import Jejemonizer from '@/components/Jejemonizer';

const Home = () => {
  return (
    <Layout>
      <Welcome />
      <Jejemonizer />
    </Layout>
  )
}

export default Home