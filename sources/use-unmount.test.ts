import { renderHook } from '@testing-library/react-hooks'
import { Observable } from 'rxjs'

import { useUnmount } from './use-unmount'

describe('useUnmount()', () => {
	const component = jest.fn(() => useUnmount())

	it('should return a stable reference', () => {
		const { rerender, result } = renderHook(component)
		rerender()
		expect(result.all[0]).toBeInstanceOf(Observable)
		expect(result.all[0]).toBe(result.all[1])
	})

	it('should next `void` when the cleanup function is called', (done) => {
		const nextHandler = jest.fn()
		const errorHandler = jest.fn()
		const completeHandler = jest.fn()

		const { result, unmount } = renderHook(component)

		result.current.subscribe({
			complete: completeHandler,
			error: errorHandler,
			next: nextHandler,
		})

		unmount()

		expect(completeHandler).not.toHaveBeenCalled()
		expect(errorHandler).not.toHaveBeenCalled()
		expect(nextHandler).toHaveBeenCalledTimes(1)

		done()
	})
})
