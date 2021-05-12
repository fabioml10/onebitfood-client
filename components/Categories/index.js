import { Col, Spinner, Alert, Card } from 'react-bootstrap'
import Slider from 'react-slick'
import slickSettings from './slick_settings'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Category from './Category'
import getCategories from '../../services/getCategories'

export default function Categories () {
  const { categories, isLoading, isError } = getCategories()

  function renderContent () {
    if (isError) {
      return <Col><Alert variant='custom-red'>Erro ao carregar</Alert></Col>
    } else if (isLoading) {
      return <Col><Spinner animation='border' /></Col>
    } else if (categories.lenght === 0) {
      return <Col>Nenhum restaurante disponível ainda.</Col>
    } else {
      return categories.map((category, i) => <Category {...category} key={i} />)
    }
  }

  return (
    <>
      <h3 className='fw-bold'>Categorias</h3>
      <Card className='mt-2'>
        <Slider {...slickSettings} className='px-4 pt-4 text-center'>
          {renderContent()}
        </Slider>
      </Card>
    </>
  )
}
