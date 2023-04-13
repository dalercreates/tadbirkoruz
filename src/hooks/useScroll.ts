import { useSyncExternalStore } from 'react'

const subscribe = (cb: () => void) => {
	global.window?.addEventListener('scroll', cb)

	return () => {
		global.window?.removeEventListener('scroll', cb)
	}
}

export default function (selector = (id: any) => id) {
	return useSyncExternalStore(
		subscribe,
		() => selector(global.window?.scrollY)
	)
}
