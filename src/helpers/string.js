import { get } from 'lodash';

export const firstLetterUpper = string => string.charAt(0).toUpperCase() + string.slice(1);
export const capitalize = string => string.split(' ').map(firstLetterUpper).join(' ');
export const uppercase = string => string.toUpperCase();
export const toMoney = string => get(Intl, 'NumberFormat')('pt-BR', {
  style: 'currency',
  currency: 'BRL'
}).format(string) || '';
