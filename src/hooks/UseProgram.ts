import useSWR, { SWRConfiguration } from 'swr';
import { IEpg } from '../interfaces/IProgram';

;
export const UseProgram = (url:string,config:SWRConfiguration={}) =>
{
    const { data, error, isLoading, mutate } = useSWR<IEpg>(url, config);
    return { data, error, isLoading }
}