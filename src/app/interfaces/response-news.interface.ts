import { Hist } from './hits.interface';

export interface ResponseNews{
hits: Hist[];
nbHits: number;
page: number;
nbPages: number;
hitsPerPage: number;
exhaustiveNbHits: boolean;
exhaustiveTypo: boolean;
query: string;
params: string;
processingTimeMS: number;
}
