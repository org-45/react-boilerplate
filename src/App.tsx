import { Button } from './components/ui/button'

export default function App() {
  return (
    <div className="bg-gray-200 text-center p-4">
      <h1 className="text-4xl font-bold text-blue-800 rounded-md shadow-md">
        Hello, World!
      </h1>
      <Button className="mt-4" onClick={() => alert('Hello, World!')}>
        Hello World
      </Button>
    </div>
  )
}
