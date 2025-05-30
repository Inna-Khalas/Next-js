import {
  Category,
  Company,
  Country,
  Promotion,
  SummarySales,
  SummaryStats,
} from '@/app/types/types';
import { sendRequest } from '@/utils/send-request';
import { baseUrl } from './url';

export const getSummaryStats = (init?: RequestInit) => {
  return sendRequest<SummaryStats>(baseUrl('summary-stats', '1'), init);
};

export const getSummarySales = (init?: RequestInit) => {
  return sendRequest<SummarySales[]>(baseUrl('summary-sales'), init);
};

export const getCategories = (init?: RequestInit) => {
  return sendRequest<Category[]>(baseUrl('categories'), init);
};

export const getCountries = (init?: RequestInit) => {
  return sendRequest<Country[]>(baseUrl('countries'), init);
};

export const getCompanies = (init?: RequestInit) => {
  return sendRequest<Company[]>(baseUrl('companies'), init);
};

export const getCompanyId = (id: string, init?: RequestInit) => {
  return sendRequest<Company>(baseUrl('companies', id), init);
};

export const getPromotions = (
  params: Record<string, string>,
  init?: RequestInit
) => {
  const query = new URLSearchParams(params).toString();

  return sendRequest<Promotion[]>(`${baseUrl('promotions')}?${query}`, init);
};
