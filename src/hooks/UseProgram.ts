import useSWR, { SWRConfiguration } from 'swr';
import { IEpg } from '../interfaces/IProgram';

;
export const UseProgram = (url:string,config:SWRConfiguration={}) =>
{
    const { data, error, isLoading } = useSWR<IEpg>(url, config);
    return { data, error, isLoading }
}