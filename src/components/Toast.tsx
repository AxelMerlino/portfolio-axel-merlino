import { cn } from '../utils/cn'

interface ToastProps {
  message: string
  visible: boolean
}

export function Toast({ message, visible }: ToastProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className={cn(
        'fixed right-4 bottom-4 z-[60] max-w-sm rounded-xl border border-[var(--line)] bg-[var(--bg-elevated)] px-4 py-3 text-sm shadow-lg backdrop-blur-xl transition',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      {message}
    </div>
  )
}
