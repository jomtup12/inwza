
import {sn1_sub} from '../SN1/sn1_sub'

export class sn1 {
    status:number;
    A1: number;
    A2?: string;
    A3: string;
    A4: string;
    A5: string;
    A6?: number;
    A7?: number;
    A8: string;
    A8_1?: string;
    A9: number;
    A10: number;
    H1_1: number;
    H1_2?: number;
    H1_3?: number;
    N: number;
    Ncount?:number;
    H1_4: number;
    N0?: number;
    N1?: number;
    A11?: string;
    H3?:sn1_sub[];
    currentSubRoom:number;

    constructor() {
    this.status = 0;
    this.A1 = null;
    this.H1_4 = null;
    this.A2 = '';
    this.A3 = '';
    this.A4 = '';
    this.A5 = '';
    this.A7 = 0;
    this.A6 = 0;
    this.A8 = '';
    this.A8_1 = null;
    this.H1_1 = null;
    this.H1_2 = null;
    this.H1_3 = null;
    this.N1 = null;
    this.N0 = null;
    this.A9 = null;
    this.A10 = null;
    this.N = null;
    this.A11 = '';
    this.H3 = null;
    this.currentSubRoom = 0;

     }
}