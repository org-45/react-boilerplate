import React from 'react'
import { useTheme } from '../contexts/useTheme'
import DarkButton from '@/assets/light-theme-icon.svg'
import LightButton from '@/assets/dark-theme-icon.svg'

const ThemeButton: React.FC = () => {
  const {theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme}>
      {theme == 'dark' ? (
        <img
          src={LightButton}
          alt="Light button"
          height={20}
          width={20}
        />
      ) : (
        <img
          src={DarkButton}
          alt="Dark button"
          height={20}
          width={20}
          style={{ filter: 'invert(100%)' }}
        />
      )}
    </button>
  )
}

export default ThemeButton
