export type TData = { en: object; es: object }

export interface IUseLanguage {
  loadText: (data: Data) => object
}
