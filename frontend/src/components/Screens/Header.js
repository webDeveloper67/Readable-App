import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {LinkContainer} from 'react-router-bootstrap'
import {getAllCategories} from '../../redux/actions/categoryActions'
import {Navbar, Nav, NavItem, NavDropdown} from 'react-bootstrap'

const Header = () => {

  const [activekey, setActiveKey] = useState('all')

  const dispatch = useDispatch()

  const categories = useSelector(state => state.categories.categories)

  useEffect(() => {
    dispatch(getAllCategories())
  }, [dispatch])

  const handleOnSelect = e => {
    console.log(e)
  }

  const renderNavbarItem = (categories) => {
    if(!categories) {
      return 
    } else {
      return categories.map(category => {
        return (
          <LinkContainer to={`/${category.path}`} key={category.path}>
            <NavDropdown.Item eventkey={`/${category.path}`}>{category.path}</NavDropdown.Item>
          </LinkContainer>
        )
      })
    }
  }

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <LinkContainer to='/'>
        <Navbar.Brand>Readable</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to='/posts/new'>
            <Nav.Link>New Post</Nav.Link>
          </LinkContainer>
          <NavDropdown eventkey={'category'} title="Categories" id="category-dropdown" activekey={activekey}>
            <LinkContainer to='/All'>
              <NavDropdown.Item eventkey={'/All'}>All</NavDropdown.Item>
            </LinkContainer>
            {renderNavbarItem(categories)}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header