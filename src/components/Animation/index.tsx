import { Transition } from '@headlessui/react'

type AnimationProps = {
  children: React.ReactNode
  show?: boolean
}

const Animation = ({ children, show }: AnimationProps) => {
  return (
    <Transition
      show={show}
      enter="transition duration-300 ease-out"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition duration-75 ease-out"
      leaveFrom="transform scale-300 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      {children}
    </Transition>
  )
}

export default Animation
