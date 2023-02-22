import React from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'

function NewChat() {
  return (
    <div className="border-gray-700 border items-center chatRow">
      <PlusIcon className="h-4 w-4"></PlusIcon>
      <p>
        New Chat
      </p>
    </div>
  )
}

export default NewChat