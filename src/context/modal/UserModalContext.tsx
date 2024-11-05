"use client"

import { useContext, useState, createContext, useEffect } from "react";
import ReactModal from "react-modal";

interface UserModalContextProps {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  user: string
  setUser: (userName: string) => void
}

const defaultContextValue: UserModalContextProps = {
  isOpen: false,
  openModal: () => {},
  closeModal: () => {},
  user: '',
  setUser: () => {},
}

const UserModalContext = createContext<UserModalContextProps>(defaultContextValue);

interface UserModalProviderProps {
  children: React.ReactNode
}

export default function UserModalProvider({ children }: UserModalProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [user, setUser] = useState<string>('')
  const [newUser, setNewUser] = useState<string>('')

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => setIsOpen(false)

  function handleConfirm() {
    if(newUser) {
      setUser(newUser)
      localStorage.setItem('cat-username', newUser)
      setNewUser('')
      closeModal()
    }
  }

  function handleCancel() {
    setUser(user)
    setNewUser('')
    closeModal()
  }

  useEffect(() => {
    const catUsername = localStorage.getItem('cat-username')
    if(!catUsername) return
    setUser(catUsername)
  }, [])

  return (
    <UserModalContext.Provider value={{ isOpen, openModal, closeModal, user, setUser }}>
      {children}
      <ReactModal
        isOpen={isOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="md:w-96 md:h-60 md:ml-20 xl:ml-60 relative bg-lightBackground text-lightText dark:bg-darkBackground dark:text-darkText
                  p-10 rounded-xl"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <form className="text-center flex flex-col gap-4">
          <h2 className="font-bold text-lg">
            Choose your cat name
          </h2>
          <input 
            value={newUser}
            className="w-full p-2 bg-transparent outline-none active:outline-none border-b-[1px] border-b-darkBackground dark:border-b-lightBackground focus:border-b-cyan-600"
            type="text"
            onChange={(e) => setNewUser(e.target.value)}
            placeholder="eg. Dahousecater"
          />
          <div className="flex justify-center gap-4">
            <button
              onClick={handleConfirm}
              className="btn-confirm"
            >
              Confirm
            </button>
            <button
              onClick={handleCancel}
              className="btn-cancel"
            >
              Cancel
            </button>
          </div>
        </form>
      </ReactModal>
    </UserModalContext.Provider>
  )
}

export const useUserModal = () => {
  return useContext(UserModalContext)
}