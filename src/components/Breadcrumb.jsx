import { Link } from 'react-router-dom'

const Breadcrumb = ({ links }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      {links?.map((link, index) => (
        <Link key={index} to={link.path}>
          {link.text} <span style={{ opacity: 0.7 }}>/</span>{' '}
        </Link>
      ))}
    </div>
  )
}

export default Breadcrumb
