import React from 'react'
import { Link } from 'react-router-dom'

export default function DocumentList({documents}) {
  return (
    <div>
      {documents.map(document => {
        return (
          <div key={documents._id}>
            <h3>
              <Link to={`/documents/${document._id}`}>{document.title}</Link>
            </h3>
          </div>
        )
      })}
    </div>
  )
}