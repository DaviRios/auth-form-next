import './global.css'
import { SignUpForm } from './signup/form'

export default function HomePage() {
  return (
    <>
      <h1 className="tex">
        Create an account
      </h1>
      <p className="text-2xl text-center text-gray-400">
        Enter your information to get started
      </p>
    <SignUpForm/>
    </>
  )
}
