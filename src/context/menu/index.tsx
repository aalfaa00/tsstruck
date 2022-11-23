import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

interface MenuConType {
	children: JSX.Element
}

type MenuContextInterface = [open: boolean, setOpen: Dispatch<SetStateAction<boolean>>]

export const MenuContext = createContext<MenuContextInterface>([false, () => {}])

export const useMenuContext = () => useContext(MenuContext)

export const Menu = ({ children }: MenuConType) => {
	const [open, setOpen] = useState(false)

	return <MenuContext.Provider value={[open, setOpen]}>{children}</MenuContext.Provider>
}
