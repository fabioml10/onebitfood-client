import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import Cart from '../Cart'
import OrderForm from '../NewOrder/OrderForm'

export default function NewOrder () {
  return (
    <>
      <Row className='justify-content-md-center'>
        <Col md={{ span: 4, offset: 1 }}>
          <Card className='p-5 mb-4'>
            <Cart />
          </Card>
        </Col>
        <Col md={{ span: 4, offset: 2 }}>
          <Card className='p-5 mb-4'>
            <OrderForm />
          </Card>
        </Col>
      </Row>
    </>
  )
}
