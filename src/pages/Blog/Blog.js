import React from 'react'
import BlogHero from './BlogHero'
import BlogGrid1 from './BlogGrid1'
import BlogGrid2 from './BlogGrid2'
import { BlogGrid3 } from './BlogGrid3'

const Blog = () => {
  return (
    <div>
        <BlogHero/>
        <BlogGrid1/>
        <BlogGrid2/>
        <BlogGrid3/>
    </div>
  )
}

export default Blog