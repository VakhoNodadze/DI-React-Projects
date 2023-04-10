import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { FC, ComponentType } from 'react'

const withRouter = <P extends object>(Component: ComponentType<P>): FC<P> => {
  const Wrapper: FC<P> = (props) => {
    const redirect = useNavigate()
    const params = useParams()
    const location = useLocation()

    return <Component redirect={redirect} params={params} location={location} {...props} />
  }

  return Wrapper
}

export default withRouter
