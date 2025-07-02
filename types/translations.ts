// types/translations.ts
export type TranslationKey = 
  | `nav.${string}`
  | `hero.${string}`
  | `about.${string}`
  | `values.${string}`
  | `services.${string}`
  | `contact.${string}`
  | `footer.${string}`

export type Translations = {
  es: Record<TranslationKey, string>
  en: Record<TranslationKey, string>
}