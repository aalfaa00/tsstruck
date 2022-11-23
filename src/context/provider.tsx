import { Menu } from './menu'

interface ProviderType {
	children: JSX.Element
}

export const Provider = ({ children }: ProviderType) => {
	return <Menu>{children}</Menu>
}
