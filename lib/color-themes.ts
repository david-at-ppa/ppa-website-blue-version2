export type ColorThemeId = 'gold' | 'navy' | 'forest' | 'burgundy' | 'slate-blue'

export type ColorTheme = {
  id: ColorThemeId
  label: string
  primary: string
  description: string
}

export const COLOR_THEMES: ColorTheme[] = [
  {
    id: 'gold',
    label: 'Gold',
    primary: '#B08628',
    description: 'Current brand - premium wealth, established',
  },
  {
    id: 'navy',
    label: 'Navy',
    primary: '#1e3a5f',
    description: 'Trust, institutional finance',
  },
  {
    id: 'forest',
    label: 'Forest',
    primary: '#2d5a3d',
    description: 'Growth, stability, understated',
  },
  {
    id: 'burgundy',
    label: 'Burgundy',
    primary: '#7c3044',
    description: 'Exclusivity, high-end private advisory',
  },
  {
    id: 'slate-blue',
    label: 'Slate blue',
    primary: '#3d5a80',
    description: 'Modern professional, tech-forward',
  },
]
