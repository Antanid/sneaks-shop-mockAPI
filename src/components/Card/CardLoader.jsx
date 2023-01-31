import React from 'react'
import ContentLoader from 'react-content-loader'

function CardLoader() {
  return (
    <ContentLoader
    speed={2}
    width={150}
    height={220}
    viewBox="0 0 150 220"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="-1" rx="10" ry="10" width="150" height="90" />
    <rect x="0" y="101" rx="10" ry="10" width="150" height="15" />
    <rect x="2" y="128" rx="10" ry="10" width="93" height="15" />
    <rect x="3" y="176" rx="10" ry="10" width="80" height="24" />
    <rect x="115" y="174" rx="10" ry="10" width="32" height="32" />
  </ContentLoader>
  )
}

export default CardLoader