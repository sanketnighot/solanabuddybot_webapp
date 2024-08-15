declare global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApp
    }
  }
}

interface TelegramWebApp {
  ready: () => void
  expand: () => void
  close: () => void
  // Add other methods and properties as needed
  // You can refer to the Telegram WebApp documentation to add more specific types
}

export {}
