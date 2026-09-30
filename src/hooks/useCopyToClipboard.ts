import { useCallback, useState } from 'react'

async function copyText(value: string) {
  try {
    await navigator.clipboard.writeText(value)
    return true
  } catch {
    const input = document.createElement('textarea')
    input.value = value
    input.setAttribute('readonly', '')
    input.style.position = 'fixed'
    input.style.left = '-9999px'
    document.body.appendChild(input)
    input.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(input)
    return ok
  }
}

export function useCopyToClipboard(resetMs = 2200) {
  const [copied, setCopied] = useState(false)
  const [message, setMessage] = useState('')

  const copy = useCallback(
    async (value: string, successMessage = 'Copiado al portapapeles') => {
      const copiedOk = await copyText(value)
      if (copiedOk) {
        setCopied(true)
        setMessage(successMessage)
        window.setTimeout(() => {
          setCopied(false)
          setMessage('')
        }, resetMs)
        return true
      }

      setCopied(false)
      setMessage('No se pudo copiar. Copiá el dato de forma manual.')
      window.setTimeout(() => setMessage(''), resetMs)
      return false
    },
    [resetMs],
  )

  return { copied, message, copy }
}
