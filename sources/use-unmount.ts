import { useSingleton } from '@romain-faust/use-singleton'
import { useEffect } from 'react'
import { type Observable, Subject } from 'rxjs'

export const useUnmount = (): Observable<void> => {
	const [unmount$, cleanUp] = useSingleton(() => {
		const notifier = new Subject<void>()
		return [notifier.asObservable(), () => notifier.next()]
	})

	useEffect(() => cleanUp, [])

	return unmount$
}
