import { Component } from 'react'
import Product from './Product'
import Cart from './Cart'

export default class Bai4 extends Component {
  render() {
    return (
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <Product></Product>
                    <Cart></Cart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
