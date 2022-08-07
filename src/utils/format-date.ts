import * as languageConfigurator from '.././configs/language.json'

export function formatDate(timeStamp: Date): string{
    return `${timeStamp.toLocaleString(languageConfigurator.defaultLanguageAbr)}`
}