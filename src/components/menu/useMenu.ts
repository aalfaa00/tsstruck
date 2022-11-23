import { useMenuContext } from '../../context/menu'
import { useCallback, useEffect, useRef } from 'react'

export const useMenu = () => {
	const [open, setOpen] = useMenuContext()
	const ref = useRef<HTMLDivElement>(null)

	const handleClickOutside = useCallback(
		(event: any) => {
			if (ref.current && !ref.current.contains(event.target)) {
				setOpen(false)
			}
		},
		[setOpen],
	)

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [handleClickOutside])

	const handleClick = useCallback(() => {
		setOpen(prev => !prev)
	}, [setOpen])

	return { ref, open, handleClick }
}
