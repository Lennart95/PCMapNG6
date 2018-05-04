export class Postcode {
    constructor(
        public street: string,
        public city: string,
        public number: number,
        public municipality: string,
        public postcode: string,
        public province: string,
        public pnum: number,
        public pchar: string,
        public rd_x: number,
        public rd_y: number,
        public lat: number,
        public lon: number
    ){	}
}
