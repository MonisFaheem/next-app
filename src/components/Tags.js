import React from 'react'

const Tags = ({tags}) => {
  return (
    <div>
<div className='flex flex-wrap gap-3'>
  {tags.map((tag)=>(
    <span className='bg-teal-100 text-teal-700 rounded-full px-4 py-1 text-sm font-medium' key={tag.id}>{tag.name}</span>
  ))}
</div>
    </div>
  )
}

export default Tags
