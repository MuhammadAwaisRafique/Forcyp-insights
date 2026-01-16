// Global protection against right-click and developer tools
export const enableProtection = () => {
  // Prevent right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
    return false
  })

  // Prevent common keyboard shortcuts - use capture phase for better blocking
  const handleKeyDown = (e) => {
    // Stop propagation immediately
    e.stopPropagation()
    e.stopImmediatePropagation()
    
    // Disable F12 (Developer Tools)
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault()
      e.returnValue = false
      return false
    }

    // Disable Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I' || e.keyCode ===0 )) {
      e.preventDefault()
      e.returnValue = false
      return false
    }

    // Disable Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j' || e.keyCode === 74)) {
      e.preventDefault()
      e.returnValue = false
      return false
    }

    // Disable Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c' || e.keyCode === 67)) {
      e.preventDefault()
      e.returnValue = false
      return false
    }

    // Disable Ctrl+U (View Source) - multiple checks for maximum compatibility
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.keyCode === 85 || e.which === 85)) {
      e.preventDefault()
      e.stopPropagation()
      e.stopImmediatePropagation()
      e.returnValue = false
      return false
    }

    // Disable Ctrl+S (Save Page)
    if (e.ctrlKey && (e.key === 'S' || e.key === 's' || e.keyCode === 83)) {
      e.preventDefault()
      e.returnValue = false
      return false
    }

    // Disable Ctrl+P (Print)
    if (e.ctrlKey && (e.key === 'P' || e.key === 'p' || e.keyCode === 80)) {
      e.preventDefault()
      e.returnValue = false
      return false
    }

    // Disable Ctrl+Shift+K (Console in Firefox)
    if (e.ctrlKey && e.shiftKey && (e.key === 'K' || e.key === 'k' || e.keyCode === 75)) {
      e.preventDefault()
      e.returnValue = false
      return false
    }

    // Disable Ctrl+Shift+E (Network in Firefox)
    if (e.ctrlKey && e.shiftKey && (e.key === 'E' || e.key === 'e' || e.keyCode === 69)) {
      e.preventDefault()
      e.returnValue = false
      return false
    }
    
    // Return false to prevent default behavior
    return false
  }
  
  // Add to both window and document for maximum coverage - use capture phase
  window.addEventListener('keydown', handleKeyDown, true)
  document.addEventListener('keydown', handleKeyDown, true)

  // Prevent text selection (optional - can be removed if you want users to select text)
  document.addEventListener('selectstart', (e) => {
    e.preventDefault()
    return false
  })

  // Prevent drag and drop
  document.addEventListener('dragstart', (e) => {
    e.preventDefault()
    return false
  })

  // Prevent copy (Ctrl+C)
  document.addEventListener('copy', (e) => {
    e.preventDefault()
    return false
  })

  // Prevent cut (Ctrl+X)
  document.addEventListener('cut', (e) => {
    e.preventDefault()
    return false
  })

  // Prevent paste (Ctrl+V) - optional
  document.addEventListener('paste', (e) => {
    e.preventDefault()
    return false
  })

  // Disable console methods (only in production)
  if (import.meta.env.PROD) {
    console.log = function() {}
    console.warn = function() {}
    console.error = function() {}
    console.info = function() {}
    console.debug = function() {}
  }

  // Disable right-click on images
  document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
      e.preventDefault()
      return false
    }
  })
}

