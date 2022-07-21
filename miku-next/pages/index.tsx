import type { NextPage } from 'next'
import NavBarMain  from '../shared/shared-components/navbar'
import MainBody from '../shared/index-components/body'
import IndexShowcase from '../shared/index-components/showcase'
import Footer from '../shared/shared-components/footer'

const IndexHome: NextPage = () => {
  return (
    <div>
      <NavBarMain />
      <MainBody />
      <IndexShowcase />
      <Footer />
    </div>
  )
}

export default IndexHome
