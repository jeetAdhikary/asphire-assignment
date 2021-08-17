export interface NavbarData {
  name: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  label: string
  routerLink?: string
  active?: boolean
}

export interface OptionsData {
  label: string
  value: string | number
}
