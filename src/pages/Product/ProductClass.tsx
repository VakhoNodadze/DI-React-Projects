import React from 'react'
import { Link, Location, NavigateFunction, Params } from 'react-router-dom'

import { TBackendProduct, StoreContext } from '../../store/StoreContext'
import withRouter from '../../helpers/HOC/withRouter'
import { getProductItem } from '../../helpers/services/products'
import { addItemsToCart } from '../../store/actions'

type TMyState = {
  product: TBackendProduct | null
  isClicked: boolean
}

type TMyProps = {
  params?: Readonly<Params<string>>
  location?: Location
  navigate?: NavigateFunction
}

class Product extends React.Component<TMyProps, TMyState> {
  constructor(props: any) {
    super(props)
    this.state = {
      product: null,
      isClicked: false,
    }

    // this.onButtonClick = this.onButtonClick.bind(this)
  }

  onButtonClick = () => {
    this.setState((prevState) => {
      return { isClicked: !prevState.isClicked }
    })
  }

  async componentDidMount() {
    console.log(this.props)
    const { data: product } = await getProductItem(this.props?.params?.id!)
    this.setState({ product })
  }

  render() {
    const { product, isClicked } = this.state

    return (
      <StoreContext.Consumer>
        {({ dispatch }) => (
          <div>
            <Link to='/'>Back</Link>
            <div>
              <img src={product?.images?.[0]} alt='avatar' />
              <h1>{product?.title}</h1>
              <h2>Price: {product?.price}</h2>
              <h2>Brand: {product?.brand}</h2>
              <button onClick={this.onButtonClick}>{isClicked ? 'true' : 'false'}</button>
            </div>
            <h2 onClick={() => dispatch(addItemsToCart(product!))}>Add to Cart</h2>
          </div>
        )}
      </StoreContext.Consumer>
    )
  }
}

// export NOT as default and wrap it in withRouter
export default withRouter(Product)
