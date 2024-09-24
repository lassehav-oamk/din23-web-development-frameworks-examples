import React from 'react'

interface TestDemoComponentProps {
  message: string
}

export default function TestDemoComponent({ message } : TestDemoComponentProps) {
  return (
    <div>Hello Testing World! Here is your message: { message }</div>
  )
}
