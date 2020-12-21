export class Color {
    r: Number;
    g: Number;
    b: Number;
    a: Number;
    constructor(color32: [Number,Number,Number,Number]){
        this.r = color32[0];
        this.g = color32[1];
        this.b = color32[2];
        this.a = color32[3];
    }
}