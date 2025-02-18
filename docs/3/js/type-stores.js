;(function(){
// TypeName, TextValue, TypedValue
// Any, String Boolean, Number, Integer, Float, BigInt, Blob, Binary64, Binary256
// TypeStores.types
// TypeStores.fromName('float')
// TypeStores.fromText('12.1')
// TypeStores.fromValue(12.1)
// const type = TypeStores.from...(...);
// type.name.match('float')
// type.text.match('12.1')
// type.value.match(12.1)
// type.text.toValue('12.1')
// type.value.toText(12.1)
class TypeStores {
    constructor() {
//        this._types = [BooleanTypeStore, IntegerTypeStore, FloatTypeStore, NumberTypeStore, BigIntTypeStore, BlobTypeStore, Binary64TypeStore, Binary256TypeStore, StringTypeStore, AnyTypeStore];
//        this._types = [BooleanTypeStore, IntegerTypeStore, Integer2TypeStore, Integer8TypeStore, Integer16TypeStore, Integer32TypeStore, Integer36TypeStore, Integer64TypeStore, FloatTypeStore, NumberTypeStore, BigIntTypeStore, BigInt2TypeStore, BigInt8TypeStore, BigInt16TypeStore, BigInt64TypeStore, BlobTypeStore, Binary64TypeStore, Binary256TypeStore, StringTypeStore, AnyTypeStore];
//        this._types = [BooleanTypeStore, IntegerTypeStore, Integer2TypeStore, Integer8TypeStore, Integer16TypeStore, Integer64TypeStore, FloatTypeStore, NumberTypeStore, BigIntTypeStore, BigInt2TypeStore, BigInt8TypeStore, BigInt16TypeStore, BigInt64TypeStore, BlobTypeStore, Binary64TypeStore, Binary256TypeStore, StringTypeStore, AnyTypeStore];
        this._types = [BooleanTypeStore, IntegerTypeStore, Integer2TypeStore, Integer8TypeStore, Integer16TypeStore, Integer32TypeStore, Integer36TypeStore, Integer64TypeStore, FloatTypeStore, NumberTypeStore, BigIntTypeStore, BigInt2TypeStore, BigInt8TypeStore, BigInt16TypeStore, BigInt32TypeStore, BigInt36TypeStore, BigInt64TypeStore, BlobTypeStore, Binary64TypeStore, Binary256TypeStore, StringTypeStore, AnyTypeStore];
        this._typeObjs = Object.freeze(this._types.reduce((o,t,i)=>Object.assign(o,{[t.name]:t}), {}));
        this._typeInss = Object.freeze(this._types.map(t=>new t()));
    }
    get typeNames() {return this._types.map(t=>t.name)}
    get typeClss() {return this._types}
    get typeCls() {return this._typeObjs}
    //get typeNames() {return this._types.map(ins=>ins.constructor.name)}
    get typeInss() {return this._typeInss}
//    fromName(typeName) {return this._typeInss.find(t=>t.name.match(typeName))}
//    fromText(textValue) {return this._typeInss.find(t=>t.text.match(textValue))}
//    fromValue(typedValue) {return this._typeInss.find(t=>t.typed.match(typedValue))}
    getClsFomName(typeName) {return this._typeInss.find(t=>t.name.match(typeName))?.constructor}
    getClsFromText(textValue) {return this._typeInss.find(t=>t.text.match(textValue))?.constructor}
    getClsFromValue(typedValue) {return this._typeInss.find(t=>t.typed.match(typedValue))?.constructor}
    getInsFomName(typeName) {return this._typeInss.find(t=>t.name.match(typeName))}
    getInsFromText(textValue) {return this._typeInss.find(t=>t.text.match(textValue))}
    getInsFromValue(typedValue) {return this._typeInss.find(t=>t.typed.match(typedValue))}
//    getFromTypeName(typeName) {return this._types.find(t=>t.name.match(typeName))}
//    getFromTextValue(textValue) {return this._types.find(t=>t.text.match(textValue))}
//    getFromTypedValue(typedValue) {return this._types.find(t=>t.typed.match(typedValue))}
}
class TypeStore {
    constructor(name, text, typed) {
        if (!(name instanceof TypeName)){throw new TypeError(`第一引数nameはTypeNameのインスタンスであるべきです。`)}
        if (!(text instanceof TextValue)){throw new TypeError(`第二引数textはTextValueのインスタンスであるべきです。`)}
        if (!(typed instanceof TypedValue)){throw new TypeError(`第三引数typedはTypedValueのインスタンスであるべきです。`)}
        this._name = name;
        this._text = text;
        this._typed = typed;
//        this._name = new TypeName();
//        this._text = new TextValue();
//        this._typed = new TypedValue();
    }
    get name() {return this._name}
    get text() {return this._text}
    get typed() {return this._typed}
}
class AnyTypeStore extends TypeStore {
    constructor() {
        super(new AnyTypeName(), new AnyTextValue(), new AnyTypedValue());
//        this._name = new AnyTypeName();
//        this._text = new AnyTextValue();
//        this._typed = new AnyTypedValue();
    }
}
class StringTypeStore extends TypeStore {
    constructor() {
        super(new StringTypeName(), new StringTextValue(), new StringTypedValue());
//        this._name = new StringTypeName();
//        this._text = new StringTextValue();
//        this._typed = new StringTypedValue();
    }
    get name() {return this._name}
    get text() {return this._text}
    get typed() {return this._typed}
}
class BooleanTypeStore extends TypeStore {
    constructor() {
        super(new BooleanTypeName(), new BooleanTextValue(), new BooleanTypedValue());
//        this._name = new BooleanTypeName();
//        this._text = new BooleanTextValue();
//        this._typed = new BooleanTypedValue();
    }
}
class NumberTypeStore extends TypeStore {
    constructor() {
        super(new NumberTypeName(), new NumberTextValue(), new NumberTypedValue());
//        this._name = new NumberTypeName();
//        this._text = new NumberTextValue();
//        this._typed = new NumberTypedValue();
    }
//    get name() {return this._name}
//    get text() {return this._text}
//    get typed() {return this._typed}
}
class IntegerTypeStore extends TypeStore {
    constructor() {
        super(new IntegerTypeName(), new IntegerTextValue(), new IntegerTypedValue());
//        this._name = new IntegerTypeName();
//        this._text = new IntegerTextValue();
//        this._typed = new IntegerTypedValue();
    }
}
class Integer2TypeStore extends TypeStore {
    constructor() {
        super(new Integer2TypeName(), new Integer2TextValue(), new IntegerTypedValue());
//        this._name = new Integer2TypeName();
//        this._text = new Integer2TextValue();
//        this._typed = new IntegerTypedValue();
    }
}
class Integer8TypeStore extends TypeStore {
    constructor() {
        super(new Integer8TypeName(), new Integer8TextValue(), new IntegerTypedValue());
//        this._name = new Integer8TypeName();
//        this._text = new Integer8TextValue();
//        this._typed = new IntegerTypedValue();
    }
}
class Integer16TypeStore extends TypeStore {
    constructor() {
        super(new Integer16TypeName(), new Integer16TextValue(), new IntegerTypedValue());
//        this._name = new Integer16TypeName();
//        this._text = new Integer16TextValue();
//        this._typed = new IntegerTypedValue();
    }
}
class Integer32TypeStore extends TypeStore {
    constructor() {
        super(new Integer32TypeName(), new Integer32TextValue(), new IntegerTypedValue());
//        this._name = new Integer32TypeName();
//        this._text = new Integer32TextValue();
//        this._typed = new IntegerTypedValue();
    }
}
class Integer36TypeStore extends TypeStore {
    constructor() {
        super(new Integer36TypeName(), new Integer36TextValue(), new IntegerTypedValue());
//        this._name = new Integer36TypeName();
//        this._text = new Integer36TextValue();
//        this._typed = new IntegerTypedValue();
    }
}
class Integer64TypeStore extends TypeStore {
    constructor() {
        super(new Integer64TypeName(), new Integer64TextValue(), new IntegerTypedValue());
//        this._name = new Integer64TypeName();
//        this._text = new Integer64TextValue();
//        this._typed = new IntegerTypedValue();
    }
}
class FloatTypeStore extends TypeStore {
    constructor() {
        super(new FloatTypeName(), new FloatTextValue(), new FloatTypedValue());
//        this._name = new FloatTypeName();
//        this._text = new FloatTextValue();
//        this._typed = new FloatTypedValue();
    }
//    get name() {return this._name}
//    get text() {return this._text}
//    get typed() {return this._typed}
}
class BigIntTypeStore extends TypeStore {
    constructor() {
        super(new BigIntTypeName(), new BigIntTextValue(), new BigIntTypedValue());
//        this._name = new BigIntTypeName();
//        this._text = new BigIntTextValue();
//        this._typed = new BigIntTypedValue();
    }
}
class BigInt2TypeStore extends TypeStore {
    constructor() {
        super(new BigInt2TypeName(), new BigInt2TextValue(), new BigIntTypedValue());
//        this._name = new BigInt2TypeName();
//        this._text = new BigInt2TextValue();
//        this._typed = new BigIntTypedValue();
    }
}
class BigInt8TypeStore extends TypeStore {
    constructor() {
        super(new BigInt8TypeName(), new BigInt8TextValue(), new BigIntTypedValue());
//        this._name = new BigInt8TypeName();
//        this._text = new BigInt8TextValue();
//        this._typed = new BigIntTypedValue();
    }
}
class BigInt16TypeStore extends TypeStore {
    constructor() {
        super(new BigInt16TypeName(), new BigInt16TextValue(), new BigIntTypedValue());
//        this._name = new BigInt16TypeName();
//        this._text = new BigInt16TextValue();
//        this._typed = new BigIntTypedValue();
    }
}
class BigInt32TypeStore extends TypeStore {
    constructor() {
        super(new BigInt32TypeName(), new BigInt32TextValue(), new BigIntTypedValue());
    }
}
      
class BigInt36TypeStore extends TypeStore {
    constructor() {
        super(new BigInt36TypeName(), new BigInt36TextValue(), new BigIntTypedValue());
    }
}
class BigInt64TypeStore extends TypeStore {
    constructor() {
        super(new BigInt64TypeName(), new BigInt64TextValue(), new BigIntTypedValue());
//        this._name = new BigInt64TypeName();
//        this._text = new BigInt64TextValue();
//        this._typed = new BigIntTypedValue();
    }
}
class BlobTypeStore extends TypeStore {
    constructor() {
        super(new BlobTypeName(), new BlobTextValue(), new BlobTypedValue());
//        this._name = new BlobTypeName();
//        this._text = new BlobTextValue();
//        this._typed = new BlobTypedValue();
    }
//    get name() {return this._name}
//    get text() {return this._text}
//    get typed() {return this._typed}
}
class Binary64TypeStore extends TypeStore {
    constructor() {
        super(new Binary64TypeName(), new Binary64TextValue(), new Binary64TypedValue());
//        this._name = new Binary64TypeName();
//        this._text = new Binary64TextValue();
//        this._typed = new Binary64TypedValue();
    }
}
class Binary256TypeStore extends TypeStore {
    constructor() {
        super(new Binary256TypeName(), new Binary256TextValue(), new Binary256TypedValue());
//        this._name = new Binary256TypeName();
//        this._text = new Binary256TextValue();
//        this._typed = new Binary256TypedValue();
    }
//    get name() {return this._name}
//    get text() {return this._text}
//    get typed() {return this._typed}
}



class TypeName {
    match(v){return this.alias.some(a=>a===v)}
}
class AnyTypeName extends TypeName {
    //static #alias = 'any'.split(' ');
    get alias(){return 'any'.split(' ')}
}
class StringTypeName extends TypeName {
    get alias(){return 's str string'.split(' ')}
}
class BooleanTypeName extends TypeName {
    get alias(){return 'b bln bool boolean'.split(' ')}
}
class NumberTypeName extends TypeName {
    get alias(){return 'n num number'.split(' ')}
}
class IntegerTypeName extends NumberTypeName {
//    get alias(){return 'i int integer'.split(' ')}
    get alias(){return 'i int integer'.split(' ').map(a=>`${a}${10===this._base ? '' : this._base}`)}
    constructor(base=10, prefix='d') {
        super();
        if (!Type.isInt(base)){throw new TypeError(`基数はInt型であるべきです。:${base}:${typeof base}`)}
        if (!Type.isStr(prefix)){throw new TypeError(`プレフィクスはString型であるべきです。:${prefix}:${typeof prefix}`)}
        if (1 < prefix.length){throw new TypeError(`プレフィクスは1字であるべきです。:${prefix}:${prefix.length}`)}
        this._base = base;
        this._prefix = `0${prefix}`;
    }
    get base(){return this._base}
}
class Integer2TypeName extends IntegerTypeName {
    constructor() {super(2,'b')}
}
class Integer8TypeName extends IntegerTypeName {
    constructor() {super(8,'o')}
}
class Integer10TypeName extends IntegerTypeName {
    constructor() {super(10,'d')}
}
class Integer16TypeName extends IntegerTypeName {
    constructor() {super(16,'x')}
}
class Integer32TypeName extends IntegerTypeName {
    constructor() {super(32,'v')}
}
class Integer36TypeName extends IntegerTypeName {
    constructor() {super(36,'z')}
}
class Integer64TypeName extends IntegerTypeName {
    constructor() {super(64,'_')}
}
class FloatTypeName extends NumberTypeName {
    get alias(){return 'f flt float'.split(' ')}
}
class BigIntTypeName extends TypeName {
//    get alias(){return 'I bi bint bigint'.split(' ')}
    get alias(){return 'I bi bint bigint'.split(' ').map(a=>`${a}${10===this._base ? '' : this._base}`)}
    constructor(base=10, prefix='d') {
        super();
        if (!Type.isInt(base)){throw new TypeError(`基数はInt型であるべきです。:${base}:${typeof base}`)}
        if (!Type.isStr(prefix)){throw new TypeError(`プレフィクスはString型であるべきです。:${prefix}:${typeof prefix}`)}
        if (1 < prefix.length){throw new TypeError(`プレフィクスは1字であるべきです。:${prefix}:${prefix.length}`)}
        this._base = base;
        this._prefix = `0${prefix}`;
    }
    get base(){return this._base}
}
class BigInt2TypeName extends BigIntTypeName {
//    get alias(){return 'I2 bi2 bint2 bigint2'.split(' ')}
    constructor(){super(2, 'B')}
}
class BigInt8TypeName extends BigIntTypeName {
//    get alias(){return 'I8 bi8 bint8 bigint8'.split(' ')}
    constructor(){super(8, 'O')}
}
class BigInt16TypeName extends BigIntTypeName {
//    get alias(){return 'I16 bi16 bint16 bigint16'.split(' ')}
    constructor(){super(16, 'X')}
}
class BigInt32TypeName extends BigIntTypeName {
    constructor(){super(32, 'V')}
}
class BigInt36TypeName extends BigIntTypeName {
    constructor(){super(36, 'Z')}
}
class BigInt64TypeName extends BigIntTypeName {
//    get alias(){return 'I64 bi64 bint64 bigint64'.split(' ')}
    constructor(){super(64, '/')}
}
class BlobTypeName extends TypeName {
    get alias(){return 'blob'.split(' ')}
}
class Binary64TypeName extends TypeName {
    get alias(){return 'bin64 binary64'.split(' ')}
}
class Binary256TypeName extends TypeName {
    get alias(){return 'bin256 binary256'.split(' ')}
}

// Any, String Boolean, Number, Integer, Float, BigInt, Blob, Binary64, Binary256
class TextValue {
    match(v){
        if (!Type.isStr(v)){throw new TypeError(`引数値は文字列型であるべきです。:${v}:${typeof v}`)}
        return true;
    }
    toValue(v){return v.toString()}
}
class AnyTextValue extends TextValue {
    match(v){return super.match(v)}
    toValue(v){return Object.prototype.toString(v)}
}
class StringTextValue extends TextValue {
    match(v){return super.match(v)}
}
class BooleanTextValue extends TextValue {
    match(v){
        super.match(v)
        return /^[v_]$/.test(v)
    }
}
class NumberTextValue extends TextValue {
    match(v){
        super.match(v)
        return /^(-)?(\d+)?\.\d+$/.test(v); // NaN, Infinity, 指数(1.23e4)は対象外
    }
    toValue(v){return Number(v)}
}
class BasedNumberTextValue extends NumberTextValue {
    constructor(base) {
        super();
        if (!(Type.isInt(base) && 2<=base && base<=Number.MAX_SAFE_INTEGER)) {
            throw new TypeError(`baseは2〜${Number.MAX_SAFE_INTEGER}の整数値であるべきです。:${base}:${typeof base}`)
        }
        this._base = base;
    }
    match(v) {
        super.match(v);
        const V = this.toValue(v);
        if (Number.isNaN(V)){return false}//parseInt不能
        if (v.includes('.')){return false}//小数点がある
        if (/^(-)?Infinity$/i.test(v)){return false}//無限数は文字列とする
        if (/^(-)?NaN$/i.test(v)){return false}//非数は文字列とする
        // BigIntである（parseIntできてしまうがTypedTextにおいては別の型を意図した書式である）
        if (/^(-)?[0-9]+n$/.test(v)){return false}
        if (/^0B[01]+/.test(v)){return false}
        if (/^0O[0-7]+/.test(v)){return false}
        if (/^0X[0-9a-zA-Z]+/.test(v)){return false}
//        if (/^0V[0-9a-vA-V]+/.test(v)){return false}
//        if (/^0Z[0-9a-zA-Z]+/.test(v)){return false}
//        if (/^0\/[0-9a-zA-Z\+\/]+/.test(v)){return false}
        if (!(Type.isInt(V) && Number.MIN_SAFE_INTEGER <= V &&  V <= Number.MAX_SAFE_INTEGER)) {
            throw new TypeError(`値は${Number.MIN_SAFE_INTEGER}〜${Number.MAX_SAFE_INTEGER}の整数値になる文字列であるべきです。:${v}:${V}:${this.base}`)
        }
        return true;
    }
    get base(){return this._base}
    toValue(v){return parseInt(v, this._base)} // 2<=base<=36
}
class IntegerTextValue extends BasedNumberTextValue {
    constructor() {super(10)}
    match(v){// 十進数(5,8)。指数(2e8,-1.23e5)は対象外。
        super.match(v)
        return /^(-)?\d+$/.test(v);
        //return /^(-)?\d+$/.test(v) || /^(-)?\d+e\d+$/.test(v) || /^(-)?\d+\.\d+e\d+$/.test(v)
    }
}
class Integer2TextValue extends BasedNumberTextValue {
    constructor() {super(2)}
    match(v){// 二進数(0b11)
        super.match(v)
        return /^0b[01]+$/.test(v)
    }
}
class Integer8TextValue extends BasedNumberTextValue {
    constructor() {super(8)}
    match(v){// 八進数(0o77)
        super.match(v)
        return /^0o[0-7]+$/.test(v)
    }
}
class Integer16TextValue extends BasedNumberTextValue {
    constructor() {super(16)}
    match(v){// 十六進数(0xFF)
        super.match(v)
        return /^0x[0-9a-fA-F]+$/.test(v)
    }
}
class Integer32TextValue extends BasedNumberTextValue {
    constructor() {super(32)}
    match(v){// 三十二進数(0vVV)
//        super.super.match(v)
        TextValue.prototype.match.call(this, v)
        return /^0v[0-9a-vA-V]+$/.test(v)
    }
    toValue(v){return IntegerBase2To64.toInteger(v.toUpperCase(), 32, IntegerBase2To64.Types.Number)}
}
class Integer36TextValue extends BasedNumberTextValue {
    constructor() {super(36)}
    match(v){// 三十六進数(0zZZ)
        //super.super.match(v)
        //if (!Type.isStr(v)){throw new TypeError(`引数値は文字列型であるべきです。:${v}:${typeof v}`)}
        TextValue.prototype.match.call(this, v)
        return /^0z[0-9a-zA-Z]+$/.test(v)
    }
    toValue(v){return IntegerBase2To64.toInteger(v.toUpperCase(), 36, IntegerBase2To64.Types.Number)}
}
class Integer64TextValue extends BasedNumberTextValue {
    constructor() {super(64)}
    match(v){// 六十四進数(0_//)
        //super.match(v)
        TextValue.prototype.match.call(this, v)
        return /^0_[0-9a-zA-Z\+\/]+$/.test(v)
    }
    //toValue(v){return parseInt(v, this._base)} // 2<=base<=36
    //toValue(v){return IntegerBase64.toInt(v, IntegerBase64.Types.Number)}
    //toValue(v){return IntegerBase2To64.toInteger(v, 64, IntegerBase2To64.Types.Number)}
    toValue(v){return IntegerBase2To64.toInteger(v, 64, IntegerBase2To64.Types.Number)}
}
class FloatTextValue extends NumberTextValue {
    match(v){
        super.match(v)
        return /^(-)?(\d+)?\.\d+$/.test(v)
    }
    toValue(v){return parseFloat(v)}
}
class BigIntTextValue extends TextValue {
    match(v){
        super.match(v)
        return /^(-)?\d+n$/.test(v)
    }
    toValue(v){return BigInt(v)} // 0b11, 0o77, 0xFF, 1(末尾にnつけるとエラー)
}
class BigInt2TextValue extends BigIntTextValue {
    match(v){
        super.match(v)
        return /^0B[01]+$/.test(v)
    }
}
class BigInt8TextValue extends BigIntTextValue {
    match(v){
        super.match(v)
        return /^0O[0-7]+$/.test(v)
    }
}
class BigInt16TextValue extends BigIntTextValue {
    match(v){
        super.match(v)
        return /^0X[0-9a-fA-F]+$/.test(v)
    }
}
class BigInt32TextValue extends BigIntTextValue {
    match(v){
        super.match(v)
        return /^0V[0-9a-vA-V]+$/.test(v)
    }
    toValue(v){return IntegerBase2To64.toInteger(v.toUpperCase(), 32, IntegerBase2To64.Types.BigInt)}
}
class BigInt36TextValue extends BigIntTextValue {
    match(v){
        super.match(v)
        return /^0Z[0-9a-zA-Z]+$/.test(v)
    }
    toValue(v){return IntegerBase2To64.toInteger(v.toUpperCase(), 36, IntegerBase2To64.Types.BigInt)}
}
class BigInt64TextValue extends BigIntTextValue {
    match(v){
        super.match(v)
        return /^0\/[0-9a-zA-Z\+\/]+$/.test(v)
    }
    //toValue(v){return IntegerBase64.toInteger(v, IntegerBase64.Types.BigInt)}
    toValue(v){return IntegerBase2To64.toInteger(v, 64, IntegerBase2To64.Types.BigInt)}
}
class BlobTextValue extends TextValue {// dataURI形式で表現する
    get #pattern() {return /^data:.+$/}
    match(v){
        super.match(v)
//        return /^data:.+$/.test(v)
        return this.#pattern.test(v)
    }
    async toValue(v){// v(String)からArrayBufferに変換して返す
        if (!this.match(v)){throw new TypeError(`引数値は${this.#pattern}に合致した文字列であるべきです。:${v}`)}
        const res = await fetch(dataUrl);
        const blob = await res.blob();
        return blob;
    }
    #blob(dataURI) {

        new Blob()
    }
}

class DataUri {
    constructor(mimeType, data, isBase64) {
        this._mimeType = mimeType ?? 'text/plain;charset=US-ASCII';
        this._data = data;
        this._isBase64 = isBase64;
    }
    get mimeType() {return this._mimeType; }
    get data() {return this._data; }
    get isBase64() {return this._isBase64; }
    toString() {
        return `data:${this.mimeType}${this.isBase64 ? ';base64' : ''},${this.data}`
    }
    // encodeURIComponent(v), decodeURIComponent(v)
}

// https://developer.mozilla.org/ja/docs/Glossary/Base64
class Utf8Base64 {
    toBytes(base64) {
        const binStr = atob(base64); // Ascii
        return Uint8Array.from(binStr, (m) => m.codePointAt(0)); // UTF8
    }
    toString(bytes) {
        const binStr = Array.from(bytes, (byte)=>String.fromCodePoint(byte)).join("");
        return btoa(binStr);
    }
}

class Binary64TextValue extends TextValue {
    match(v){
        super.match(v)
        return /^base64:[0-9a-zA-Z\+\/\=]+$/.test(v)
    }
}
class Binary256TextValue extends TextValue {
    // https://github.com/qntm/braille-encode/
    match(v){
        super.match(v)
        return /^base256:[⠀⢀⠠⢠⠐⢐⠰⢰⠈⢈⠨⢨⠘⢘⠸⢸⡀⣀⡠⣠⡐⣐⡰⣰⡈⣈⡨⣨⡘⣘⡸⣸⠄⢄⠤⢤⠔⢔⠴⢴⠌⢌⠬⢬⠜⢜⠼⢼⡄⣄⡤⣤⡔⣔⡴⣴⡌⣌⡬⣬⡜⣜⡼⣼⠂⢂⠢⢢⠒⢒⠲⢲⠊⢊⠪⢪⠚⢚⠺⢺⡂⣂⡢⣢⡒⣒⡲⣲⡊⣊⡪⣪⡚⣚⡺⣺⠆⢆⠦⢦⠖⢖⠶⢶⠎⢎⠮⢮⠞⢞⠾⢾⡆⣆⡦⣦⡖⣖⡶⣶⡎⣎⡮⣮⡞⣞⡾⣾⠁⢁⠡⢡⠑⢑⠱⢱⠉⢉⠩⢩⠙⢙⠹⢹⡁⣁⡡⣡⡑⣑⡱⣱⡉⣉⡩⣩⡙⣙⡹⣹⠅⢅⠥⢥⠕⢕⠵⢵⠍⢍⠭⢭⠝⢝⠽⢽⡅⣅⡥⣥⡕⣕⡵⣵⡍⣍⡭⣭⡝⣝⡽⣽⠃⢃⠣⢣⠓⢓⠳⢳⠋⢋⠫⢫⠛⢛⠻⢻⡃⣃⡣⣣⡓⣓⡳⣳⡋⣋⡫⣫⡛⣛⡻⣻⠇⢇⠧⢧⠗⢗⠷⢷⠏⢏⠯⢯⠟⢟⠿⢿⡇⣇⡧⣧⡗⣗⡷⣷⡏⣏⡯⣯⡟⣟⡿⣿]+$/u.test(v)
    }
}
class TypedValue {
    constructor(defaultValue=null) {
        this._defaultValue = defaultValue;
    }
    get defaultValue() {return this._defaultValue}
    match(v) {return false}
    toText(v, ...args) {return 'toString' in v ? v.toString(...args) : Object.prototype.toString.call(v)}
}
class AnyTypedValue extends TypedValue {
    constructor(defaultValue=null) {super(defaultValue);}
    match(v) {return true}
}
class StringTypedValue extends TypedValue {
    constructor(defaultValue='') {super(defaultValue ?? '');}
    match(v) {return Type.isStr(v)}
}
class BooleanTypedValue extends TypedValue {
    constructor(defaultValue=false) {super(defaultValue ?? false);}
    match(v) {return Type.isBln(v)}
}
class NumberTypedValue extends TypedValue {
    constructor(defaultValue=0) {super(defaultValue ?? 0);}
    //match(v) {return Type.isNumber(v)}
    match(v) {return Type.isNumber(v)}
}
class BasedNumberTypedValue extends NumberTypedValue {
    constructor(defaultValue=0, base=10) {
        super(defaultValue ?? 0);
        console.log()
        if (!(Type.isInt(base) && 2 <= base && base <= Number.MAX_SAFE_INTEGER)){throw new TypeError(`baseは2〜${Number.MAX_SAFE_INTEGER}の整数値であるべきです。:${base}:${typeof base}`)}
        this._base = base;
    }
    match(v) {
        if (!super.match(v)){return false}
        const isInt = Type.isInt(v);
        const isSafe = Number.MIN_SAFE_INTEGER <= v && v <= Number.MAX_SAFE_INTEGER;
        if (isInt && !isSafe) {console.warn(`整数の安全範囲を超過しました。Int型と判断しません。:${v}:${Number.MIN_SAFE_INTEGER}〜${Number.MAX_SAFE_INTEGER}`)}
        return isInt && isSafe;
    }
    get base() {return this._base}
    toString(v){return super.toString(v, this._base)}
}
class IntegerTypedValue extends BasedNumberTypedValue {
    constructor(defaultValue=0, base=10) {super(defaultValue ?? 0, base ?? 10)}
}
class Integer2TypedValue extends IntegerTypedValue {
    constructor(defaultValue=0, base=2) {super(defaultValue ?? 0, base ?? 2)}
}
class Integer8TypedValue extends IntegerTypedValue {
    constructor(defaultValue=0, base=8) {super(defaultValue ?? 0, base ?? 8)}
}
class Integer16TypedValue extends IntegerTypedValue {
    constructor(defaultValue=0, base=16) {super(defaultValue ?? 0, base ?? 16)}
}
class Integer32TypedValue extends IntegerTypedValue {
    constructor(defaultValue=0, base=32) {super(defaultValue ?? 0, base ?? 32)}
    toString(v){return IntegerBase2To64.toBase(v, 32, IntegerBase2To64.Types.Number)}
}
class Integer36TypedValue extends IntegerTypedValue {
    constructor(defaultValue=0, base=36) {super(defaultValue ?? 0, base ?? 36)}
    toString(v){return IntegerBase2To64.toBase(v, 36, IntegerBase2To64.Types.Number)}
}
class Integer64TypedValue extends IntegerTypedValue {
    constructor(defaultValue=0, base=64) {super(defaultValue ?? 0, base ?? 64)}
    //toString(v){return IntegerBase64.toBase64(v)}
    toString(v){return IntegerBase2To64.toBase(v, 64, IntegerBase2To64.Types.Number)}
}
class FloatTypedValue extends NumberTypedValue {
    constructor(defaultValue=0) {super(defaultValue ?? 0);}
    match(v) {// 1で割り切れる数もFloatと判断する。この時Intとの区別が付かない！
        if (!super.match(v)){return false}
        return Type.isFloat(v) || Type.isInt(v)
    }
}
class BigIntTypedValue extends BasedNumberTypedValue {
    constructor(defaultValue=0n, base=10) {super(defaultValue ?? 0n, base ?? 10);}
    match(v) {return Type.isBigInt(v)}
}
class BigInt2TypedValue extends BigIntTypedValue {
    constructor(defaultValue=0n, base=2) {super(defaultValue ?? 0n, base ?? 2);}
}
class BigInt8TypedValue extends BigIntTypedValue {
    constructor(defaultValue=0n, base=8) {super(defaultValue ?? 0n, base ?? 8);}
}
class BigInt16TypedValue extends BigIntTypedValue {
    constructor(defaultValue=0n, base=16) {super(defaultValue ?? 0n, base ?? 16);}
}
class BigInt32TypedValue extends BigIntTypedValue {
    constructor(defaultValue=0n, base=32) {super(defaultValue ?? 0n, base ?? 32);}
    toString(v){return IntegerBase2To64.toBase(v, 32, IntegerBase2To64.Types.BigInt)}
}
class BigInt36TypedValue extends BigIntTypedValue {
    constructor(defaultValue=0n, base=36) {super(defaultValue ?? 0n, base ?? 36);}
    toString(v){return IntegerBase2To64.toBase(v, 36, IntegerBase2To64.Types.BigInt)}
}
class BigInt64TypedValue extends BigIntTypedValue {
    constructor(defaultValue=0n, base=64) {super(defaultValue ?? 0n, base ?? 64);}
    //toString(v){return IntegerBase64.toBase64(v)}
    toString(v){return IntegerBase2To64.toBase(v, 64, IntegerBase2To64.Types.BigInt)}
}
class BlobTypedValue extends TypedValue {
    constructor(defaultValue=null) {super(defaultValue ?? new Uint8Array());}
    match(v) {return v instanceof Uint8Array || v instanceof ArrayBuffer}
}
class Binary64TypedValue extends TypedValue {
    constructor(defaultValue=null) {super(defaultValue ?? new Uint8Array());}
    match(v) {return v instanceof Uint8Array || v instanceof ArrayBuffer}
}
class Binary256TypedValue extends TypedValue {
    constructor(defaultValue=null) {super(defaultValue ?? new Uint8Array());}
    match(v) {return v instanceof Uint8Array || v instanceof ArrayBuffer}
}

class IntegerBase64 {
    static Types = Object.freeze({Auto:0, Number:1, BigInt:2})
    static to64(integer) {return this.toBase64(integer)}
    static toInt(base64){return this.toInteger(base64)}
    static toBase64(v){
             if (Type.isInt(v)){return NumberBase64.toBase(v)}
        else if (Type.isBigInt(v)){return BigIntBase64.toBase(v)}
        else {throw new TypeError(`IntegerBase64.toBase()の引数はIntegerかBigInt型であるべきです。`)}
    }
    static toInteger(v, type=0){// type=0:auto/1:int/2:bigint
             if (type===IntegerBase64.Types.Number) {return NumberBase64.toInteger(v)}
        else if (type===IntegerBase64.Types.BigInt) {return BigIntBase64.toInteger(v)}
        else {
            const n = NumberBase64.toInteger(v);
            return (n < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < n) ? BigIntBase64.toInteger(v) : n;
        }
    }

    /*
    constructor() {
        this._n = new NumberBase64();
        this._b = new BigIntBase64();
    }
    to64(integer) {return this.toBase64(integer)}
    toInt(base64){return this.toInteger(base64)}
    toBase64(v){
        if (Type.isInt(v)){return this._n.toBase(v)}
        else if (Type.isBigInt(v)){return this._b.toBase(v)}
        else {throw new TypeError(`IntegerBase64.toBase()の引数はNumberかBigInt型であるべきです。`)}
    }
    toInteger(v, type=0){// type=0:auto/1:int/2:bigint
             if (type===IntegerBase64.Types.int) {return this._n.toInteger(v)}
        else if (type===IntegerBase64.Types.bigint) {return this._b.toInteger(v)}
        else {
            const n = this._n.toInteger(v);
            return (n < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < n) ? this._b.toInteger(v) : n;
        }
    }
    */
}
class NumberBase64 {
    static #chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/';
    static #base = 64;
    static toBase64(integer) {
        if (!Type.isNumber(integer) || !Type.isInt(integer)){throw new TypeError(`IntegerBase64.toBase64()の引数はNumber型であるべきです。:${integer}:${typeof integer}`)}
        if (integer < 0){throw new TypeError(`正数のみ有効です。:${integer}`)}
        if (v < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < v){throw new TypeError(`範囲超過しました。IntegerBase64.toBase64()の引数は${Number.MIN_SAFE_INTEGER}〜${Number.MAX_SAFE_INTEGER}以内のNumber型であるべきです。:${integer}`)};
        //let residual = Math.floor(integer);
        let residual = integer;
        let result = '';
        while (true) {
            rixit = integer % this.base;
            result = this.#chars.charAt(rixit) + result;
            residual = Math.floor(residual / this.#base);
            if (residual == 0){break;}
        }
        return result;
    }
    static toInteger(base64) {
        let result = 0;
        let rixits = base64.split('');
        for (let e = 0; e < rixits.length; e++) {
            result = (result * this.#base) + this.#chars.indexOf(rixits[e]);
        }
        return result;
    }
    static to64(integer) {return this.toBase64(integer)}
    static toInt(base64){return this.toInteger(base64)}
//    get chars(){return '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/'}
//    get base(){return 64}
}
class BigIntBase64 {
    static #chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/';
    static #base = 64;
    static toBase64(value) {
//        Type[`is${type}`](value)
        if (!Type.isBigInt(integer)){throw new TypeError(`BigIntBase64.toBase64()の引数はBigInt型であるべきです。:${value}:${typeof value}`)}
        if (value < 0){throw new TypeError(`正数のみ有効です。:${value}`)}
        if (v < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < v){throw new TypeError(`範囲超過しました。IntegerBase64.toBase64()の引数は${Number.MIN_SAFE_INTEGER}〜${Number.MAX_SAFE_INTEGER}以内のNumber型であるべきです。:${value}`)};
        //let residual = Math.floor(value);
        let residual = value;
        let result = '';
        while (true) {
            rixit = value % this.#base;
            result = this.#chars.charAt(rixit) + result;
            //residual = Math.floor(residual / this.#base);
            residual = residual / this.#base;
            if (residual == 0n){break;}
        }
        return result;
    }
    static toInteger(base64) {
        let result = 0n;
        let rixits = base64.split('');
        for (let e = 0; e < rixits.length; e++) {
            result = (result * this.#base) + BigInt(this.#chars.indexOf(rixits[e]));
        }
        return result;
    }
    static to64(integer) {return this.toBase64(integer)}
    static toInt(base64){return this.toInteger(base64)}
//    get chars(){return '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/'}
//    get base(){return 64n}
}
class IntegerBase2To64 {// 2〜64まで
    static Types = Object.freeze({Auto:0, Number:1, BigInt:2})
    static #chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/';
    static toBase(integer, base=64, type=IntegerBase2To64.Types.Auto) {
        this.#within(integer, type);
        this.#validBase(base);
        let residual = integer;
        let result = '';
        while (true) {
            rixit = integer % base;
            result = this.#chars.charAt(rixit) + result;
            residual = residual / this.base;
            if (Type.isInt(integer)){residual = Math.floor(residual / this.base)}
            if (Type.isInt(integer) && residual === 0){break}
            else if (Type.isBigInt(integer) && residual === 0n){break}
        }
        return result;
    }
    static #within(integer, type) {
             if (type===IntegerBase2To64.Types.Number && !Type.isInt(integer)){throw new TypeError(`typeにNumber型が指定された場合、Number型の整数値であるべきです。:${integer}:${typeof integer}`)}
        else if (type===IntegerBase2To64.Types.BigInt && !Type.isBigInt(integer)){throw new TypeError(`typeにBigInt型が指定された場合、BigInt型であるべきです。:${integer}:${typeof integer}`)}
        if (Type.isInt(integer)) {
            if (0<=integer && integer<=Number.MAX_SAFE_INTEGER){return true}
            else {throw new TypeError(`Number型整数値は0〜${Number.MAX_SAFE_INTEGER}以内であるべきです。:${integer}`)}
        }
        else if (Type.isBigInt(integer)){
            if (0n<=integer){return true}//BigIntは上限値が定義されていない
            else {throw new TypeError(`BigInt値は0n以上であるべきです。:${integer}`)}
        }
        else {throw new TypeError(`数はNumber型の整数値かBigInt型であるべきです。:${integer}:${typeof integer}`)}
    }
    static toInteger(str, base=64, type=IntegerBase2To64.Types.Auto) {
        if (!Type.isStr(str)){throw new TypeError(`strは文字列であるべきです。:${str}:${typeof str}`)}
             if (type===IntegerBase2To64.Types.Number){return this.#toNumber(str, base)}
        else if (type===IntegerBase2To64.Types.BigInt) {return this.#toBigInt(str, base)}
        else {const r = this.#toNumber(str, base); return (Number.MAX_SAFE_INTEGER < r) ? this.#toBigInt(str, base) : r; }
    }
    static #toNumber(str, base=64) {
        let result = 0;
        let rixits = str.split('');
        for (let e = 0; e < rixits.length; e++) {
            result = (result * base) + IntegerBase2To64.#chars.indexOf(rixits[e]);
        }
        return result;
    }
    static #toBigInt(str, base=64) {
        let result = 0n;
        let rixits = str.split('');
        base = BigInt(base);
        for (let e = 0; e < rixits.length; e++) {
            result = (result * base) + BaseInt(IntegerBase2To64.#chars.indexOf(rixits[e]));
        }
        return result;
    }
    static toInt(str, base=64) {return this.toInteger(str, base)}
    static toB(num, base=64) {return this.toBase(num, base)}
    static toI(str, base=64) {return this.toInteger(str, base)}
    static #validBase(base) {
        if (!(Type.isInt(base) && 2<=base && base<=64)){throw new TypeError(`baseは2〜64のNumber型整数値であるべきです。:${base}:${typeof base}`)}
        return base;
    }
    constructor(base=64) {
        this._base = IntegerBase2To64.#validBase(base);
        this._chars = IntegerBase2To64.#chars.slice(0, this._base);
    }
    get chars() {return this._chars}
    get base() {return this._base}
    toBase(num) {return IntegerBase2To64.toBase(num, this.base)}
    toInteger(str) {return IntegerBase2To64.toInteger(str, this.base)}
    toInt(str) {return IntegerBase2To64.toInteger(str)}
    toB(num) {return IntegerBase2To64.toBase64(num)}
    toI(str) {return IntegerBase2To64.toInteger(str)}
}
class NumberBase2To64 {// 2〜64まで
    static #chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/';
    static toBase(num, base=64) {
        this.#validBase(base);
        if (num < 0){throw new TypeError(`正数のみ有効です。:${num}`)}
        if (Number.MAX_SAFE_INTEGER < num){throw new TypeError(`範囲超過しました。NumberBase2To64.toBase64()の引数は0〜${Number.MAX_SAFE_INTEGER}以内のNumber型であるべきです。:${num}`)};
        let residual = num;
        let result = '';
        while (true) {
            rixit = num % base;
            result = this.#chars.charAt(rixit) + result;
            residual = Math.floor(residual / this.base);
            if (residual == 0){break;}
        }
        return result;

    }
    static toInteger(str, base=64) {
        if (!Type.isStr(str)){throw new TypeError(`strは文字列であるべきです。:${str}:${typeof str}`)}
        let result = 0;
        let rixits = str.split('');
        for (let e = 0; e < rixits.length; e++) {
            result = (result * base) + NumberBase2To64.#chars.indexOf(rixits[e]);
        }
        return result;
    }
    static toBase(num, base=64) {return this.toBase(num, base)}
    static toInt(str, base=64) {return this.toInteger(str, base)}
    static toB(num, base=64) {return this.toBase(num, base)}
    static toI(str, base=64) {return this.toInteger(str, base)}
    static #validBase(base) {
        if (!(Type.isInt(base) && 2<=base && base<=64)){throw new TypeError(`baseは2〜64のNumber型整数値であるべきです。:${base}:${typeof base}`)}
        return base;
    }
    constructor(base=64) {
        this._base = NumberBase2To64.#validBase(base);
        this._chars = NumberBase2To64.#chars.slice(0, this._base);
    }
    get chars() {return this._chars}
    get base() {return this._base}
    toBase64(num) {return NumberBase2To64.toBase(num, this.base)}
    toInteger(str) {return NumberBase2To64.toInteger(str, this.base)}
    to64(num) {return NumberBase2To64.toBase64(num)}
    toInt(str) {return NumberBase2To64.toInteger(str)}
    toB(num) {return NumberBase2To64.toBase64(num)}
    toI(str) {return NumberBase2To64.toInteger(str)}
}
class BigIntBase2To64 {// 2〜64まで
    static #chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/';
    static toBase(value, base) {
        this.#validBase(base);
        if (!Type.isBigInt(value)){throw new TypeError(`BigIntBase64.toBase64()の引数はBigInt型であるべきです。:${value}:${typeof value}`)}
        if (value < 0n){throw new TypeError(`正数のみ有効です。:${value}`)}
        let residual = value;
        let result = '';
        while (true) {
            //rixit = value % this.#base;
            rixit = value % base;
            result = this.#chars.charAt(rixit) + result;
            //residual = Math.floor(residual / this.#base);
            //residual = residual / this.#base;
            residual = residual / base;
            if (residual == 0n){break;}
        }
        return result;
    }
    static toInteger(str, base) {
        this.#validBase(base);
        let result = 0n;
        let rixits = str.split('');
        for (let e = 0; e < rixits.length; e++) {
            result = (result * base) + BigInt(this.#chars.indexOf(rixits[e]));
        }
        return result;
    }
    static toInt(str, base=64) {return this.toInteger(str, base)}
    static toB(num, base=64) {return this.toBase(num, base)}
    static toI(str, base=64) {return this.toInteger(str, base)}
    static #validBase(base) {
        if (!(Type.isInt(base) && 2<=base && base<=64)){throw new TypeError(`baseは2〜64のNumber型整数値であるべきです。:${base}:${typeof base}`)}
        return base;
    }
    constructor(base=64) {
        this._base = NumberBase2To64.#validBase(base);
        this._chars = NumberBase2To64.#chars.slice(0, this._base);
    }
    get chars() {return this._chars}
    get base() {return this._base}
    toBase(bi) {return BigIntBase2To64.toBase64(bi, this._base)}
    toInteger(str){return BigIntBase2To64.toInteger(str, this._base)}
    toInt(str){return BigIntBase2To64.toInteger(str, this._base)}
    toB(bi) {return BigIntBase2To64.toBase64(bi, this._base)}
    toI(str){return BigIntBase2To64.toInteger(str, this._base)}
}


/*
class TypeBase64 {
    static #chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/';
    static #base = 64;
    //static #to(t,v){return ''===t Number(v) || BigInt(v)}
    static #to(t,v){
        if ('Integer'.split(' ').some(v=>v===t)){return Math.floor(Number(v))}
        else if ('BigInt'.split(' ').some(v=>v===t)){return BigInt(v)}
        throw new TypeError(`typeはInteger,BigIntのいずれかのみ有効です。`)
    }
    static to64(integer) {return this.toBase64(integer)}
    static toInt(base64){return this.toInteger(base64)}
    static toBase64(type, value) {// typeはInteger/BigIntの二値が期待値である。それ以外は対象外。
//        Type[`is${type}`](value)
        if (!(type in Type)){throw new TypeError(`type値が不正です。:${type}`)}
        if (!Type[`is${type}`](value)){throw new TypeError(`TypeBase64.toBase64()の引数は${type}型であるべきです。:${value}:${typeof value}`)}
        if (value < this.#to(type,0)){throw new TypeError(`正数のみ有効です。:${value}`)}
        //if (value < 0){throw new TypeError(`正数のみ有効です。:${value}`)}
        if (v < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < v){throw new TypeError(`範囲超過しました。IntegerBase64.toBase64()の引数は${Number.MIN_SAFE_INTEGER}〜${Number.MAX_SAFE_INTEGER}以内のNumber型であるべきです。:${value}`)};
        //let residual = Math.floor(value);
        let residual = value;
        let result = '';
        while (true) {
            rixit = value % this.#base;
            result = this.#chars.charAt(rixit) + result;
            //residual = Math.floor(residual / this.#base);
            residual = residual / this.#base;
            if (residual == 0n){break;}
        }
        return result;
    }
    static toInteger(base64) {
        let result = 0n;
        let rixits = base64.split('');
        for (let e = 0; e < rixits.length; e++) {
            result = (result * this.#base) + BigInt(this.#chars.indexOf(rixits[e]));
        }
        return result;
    }
}
*/
/*
class IntegerBaseN {
    constructor(type, base=64) {
        if (Type.isInt(base) && 2<=base && base<=256){throw new TypeError(`baseは2,8,16,32,36,64,256の整数であるべきです。:${base}`)}
        this._base = base;
        this._type = type;
    }
    static Types = Object.freeze({auto:0, int:1, bigint:2})
    static to64(integer) {return this.toBase64(integer)}
    static toInt(base64){return this.toInteger(base64)}
    static toBase64(v){
             if (Type.isInt(v)){return NumberBase64.toBase(v)}
        else if (Type.isBigInt(v)){return BigIntBase64.toBase(v)}
        else {throw new TypeError(`IntegerBase64.toBase()の引数はIntegerかBigInt型であるべきです。`)}
    }
    static toInteger(v, type=0){// type=0:auto/1:int/2:bigint
             if (type===IntegerBase64.Types.int) {return NumberBase64.toInteger(v)}
        else if (type===IntegerBase64.Types.bigint) {return BigIntBase64.toInteger(v)}
        else {
            const n = NumberBase64.toInteger(v);
            return (n < Number.MIN_SAFE_INTEGER || Number.MAX_SAFE_INTEGER < n) ? BigIntBase64.toInteger(v) : n;
        }
    }
}
*/

/*
class LiteralType {//リテラル値から型を推論する
    static get(text, defTxt) {
        console.log(`LiteralType.get:`, text, defTxt, /^(-)?\d+n$/.test(text), /^(-)?[0-9]+n$/.test(text), /^(-)?[0-9]+n$/.test('0n'))
             if (/^[_v]+$/.test(text)){return new BooleanDataType(defTxt)}
        else if (/^(-)?(\d+)?\.\d+$/.test(text)){return new FloatDataType(defTxt)}
        else if (/^(-)?\d+$/.test(text)){return new IntDataType(10,defTxt)}
        else if (/^0b[0-1]+$/.test(text)){return new IntDataType(2,defTxt)}
        else if (/^0o[0-7]+$/.test(text)){return new IntDataType(8,defTxt)}
        else if (/^0x[0-9a-fA-F]+$/.test(text)){return new IntDataType(16,defTxt)}
        else if (/^0v[0-9a-vA-V]+$/.test(text)){return new IntDataType(32,defTxt)}
        else if (/^0z[0-9a-zA-Z]+$/.test(text)){return new IntDataType(36,defTxt)}
        else if (/^(-)?\d+n$/.test(text)){return new BigIntDataType(10,defTxt)}
        else if (/^0B[0-1]+$/.test(text)){return new BigIntDataType(2,defTxt)}
        else if (/^0O[0-7]+$/.test(text)){return new BigIntDataType(8,defTxt)}
        else if (/^0X[0-9a-fA-F]+$/.test(text)){return new BigIntDataType(16,defTxt)}
        else if ([text,defTxt].every(v=>v===''||Type.isNUN(v))){return new AnyDataType()}
        else {return new StringDataType(defTxt)}
    }
}
class TypeParser {
    static getType(typeTxt, defTxt) {// 型名や初期値から型インスタンスを取得する
        if (!DataType.isStr(typeTxt)) {return null}
        // 型名のみ
        for (let type of [AnyDataType, BooleanDataType, FloatDataType, StringDataType]){
            if (type.alias.some(t=>t===typeTxt)){return new type(defTxt)}
        }
        for (let type of [IntDataType, BigIntDataType]){
            if (type.alias.some(t=>t===typeTxt)){return new type(10,defTxt)}
        }
        // 型名＝初期値
        for (let type of [IntDataType, BigIntDataType]){
            if (type.alias.some(t=>typeTxt.startsWith(t+'='))){
                const defaultValue = typeTxt.slice(typeTxt.indexOf('=')+1)
                return new type(10, defaultValue)
            }
        }
        for (let type of [AnyDataType, BooleanDataType, FloatDataType, StringDataType]){
            if (type.alias.some(t=>typeTxt.startsWith(t+'='))){
                const E = typeTxt.indexOf('=')
                const defaultValue = typeTxt.slice(-1===E ? typeTxt.length : E+1)
                return new type(defaultValue)
            }
        }
        // 型名＋基数
        for (let type of [IntDataType, BigIntDataType]){
            //if (type.alias.some(t=>typeTxt.startsWith(t) && type.BaseAlias.some(b=>typeTxt.endsWith(b)))){
            //if (type.alias.some(t=>typeTxt.startsWith(t) && type.BaseAlias.toReversed().some(b=>typeTxt.endsWith(b)))){
            if (type.alias.some(t=>typeTxt.startsWith(t) && type.BaseAlias.slice().reverse().some(b=>typeTxt.endsWith(b)))){
                //const base = type.BaseAlias.filter(b=>typeTxt.endsWith(b))[0]
                //const base = type.BaseAlias.toReversed().filter(b=>typeTxt.endsWith(b))[0]
                const base = type.BaseAlias.slice().reverse().filter(b=>typeTxt.endsWith(b))[0]
                return new type(base)
            }
        }
        // 型名＋基数＝初期値
        for (let type of [IntDataType, BigIntDataType]){
            //if (type.alias.some(t=>typeTxt.startsWith(t) && type.BaseAlias.some(b=>typeTxt.includes(b+'=')))){
            //if (type.alias.some(t=>typeTxt.startsWith(t) && type.BaseAlias.toReversed().some(b=>typeTxt.includes(b+'=')))){
            if (type.alias.some(t=>typeTxt.startsWith(t) && type.BaseAlias.slice().reverse().some(b=>typeTxt.includes(b+'=')))){
                const E = typeTxt.indexOf('=')
                const keyT = typeTxt.slice(0, E)
                const valT = typeTxt.slice(E+1)
                //const base = type.BaseAlias.filter(b=>keyT.endsWith(b))[0]
                //const base = type.BaseAlias.toReversed().filter(b=>keyT.endsWith(b))[0]
                const base = type.BaseAlias.slice().reverse().filter(b=>keyT.endsWith(b))[0]
                return new type(base, valT)
            }
        }
    }
    static read(typeTxt, defValTxt, textValues) {
             if (['any'].some(t=>t===typeTxt)) {return new AnyDataType(defValTxt)}
        else if (['s','str','string'].some(t=>t===typeTxt)) {return  new StringDataType(defValTxt)}
        else if ('i|int|integer'.split('|').some(t=>typeTxt?.startsWith(t))){
            const base = IntDataType.BaseAlias.some(b=>typeTxt.endsWith(b))
                ? IntDataType.BaseAlias.filter(b=>typeTxt.endsWith(b)).map(b=>b)[0]
                : 10
            return new IntDataType('H'===base ? 16 : parseInt(base), defValTxt)
        }
        else if (['f','flt','float'].some(t=>t===typeTxt)) {return new FloatDataType(defValTxt)}
        else if (['b','bln','bool','boolean'].some(t=>t===typeTxt)) {return new BooleanDataType(defValTxt)}
        else if (['I','bi','bgi','bigint','biginteger'].some(t=>t===typeTxt)) {
            const base = BigIntDataType.BaseAlias.some(b=>typeTxt.includes(b))
                ? typeTxt.split(BigIntDataType.BaseAlias.filter(b=>typeTxt.includes(b))[0])[1]
                : 10
            return new BigIntDataType(base,defValTxt)
        }
        else {return this.#suggestFromValueText(textValues, defValTxt)}
    }
    static #suggestFromValueText(textValues, defValTxt) {
        // ^$ で空文字判定する。空文字を許可するには ^(.+)?$ とする。各型の書式と空値(略記)を許容する
             if (textValues.every(t=>/^$/.test(t))){return new StringDataType(defValTxt)} // すべて空値なら文字列と判断する
        else if (textValues.every(t=>/^((\-)?[0-9]+)?$/.test(t))){return new IntDataType(10,defValTxt)}
        else if (textValues.every(t=>/^(0b[01]+)?$/.test(t))){return new IntDataType(2,defValTxt)}
        else if (textValues.every(t=>/^(0o[0-7]+)?$/.test(t))){return new IntDataType(8,defValTxt)}
        else if (textValues.every(t=>/^(0x[0-9a-fA-F]+)?$/.test(t))){return new IntDataType(16,defValTxt)}
        else if (textValues.every(t=>/^(0z[0-9a-zA-Z]+)?$/.test(t))){return new IntDataType(36,defValTxt)}
        else if (textValues.every(t=>/^((\-)?(\d)*\.[\d]+)?$/.test(t))){return new FloatDataType(defValTxt)}
        else if (textValues.every(t=>/^([_v])?$/.test(t))){return new BooleanDataType()}
        else if (textValues.every(t=>/^(0B[0-9]+)?$/.test(t))){return new BigIntDataType(2,defValTxt)}
        else if (textValues.every(t=>/^(0O[0-7]+)?$/.test(t))){return new BigIntDataType(8,defValTxt)}
        else if (textValues.every(t=>/^((\-)?([0-9]+n))?$/.test(t))){return new BigIntDataType(10,defValTxt)}
        else if (textValues.every(t=>/^(0X[0-9a-zA-Z]+)?$/.test(t))){return new BigIntDataType(16,defValTxt)}
        else {return new StringDataType()}
    }
    static serialize(type, value) {
        return null
    }
    static deserialize(type, text) {
        if (type instanceof DataType) {return type.deserialize(text)}
        else {throw new TypeError(`第一引数typeはDateType型であるべきです。`)}
    }
}
class DataType {
    constructor(id='string', defaultValue='') {
        this._id = id;
        this._defaultValue = defaultValue;
    }
    get id() {return this._id}
    get defaultValue() {return this._defaultValue}
    deserialize(text) {
        // NaNは「false===(NaN===Nan)」「'number'===typeof NaN」になるため注意。反意図性のクソ仕様であり禁止すべき。
        // undefinedもJS内部エラー値のため禁止すべき
        // nullもNULL安全をめざして禁止すべき
        // ''はデフォルト値に変換する
        if (this._isNUN(text)){text=''}
        return ''===text ? this.defaultValue : text
    }
    matchType(value) {return false}
    _isNUN(v) {return null===v || undefined===v || Number.isNaN(v)}
    _isStr(v) {return typeof v === 'string' || v instanceof String;}
    _isInt(v) {return Number.isInteger(v)}
    _isFlt(v) {return !this._isNUN(v) && !this._isInt(v) && 'number'===typeof v}
    _isBln(v) {return !this._isNUN(v) && 'boolean'===typeof v}
    static isNUN(v) {return null===v || undefined===v || Number.isNaN(v)}
    static isStr(v) {return typeof v === 'string' || v instanceof String;}
    static isInt(v) {return Number.isInteger(v)}
    static isFlt(v) {return !this._isNUN(v) && !this._isInt(v) && 'number'===typeof v}
    static isBln(v) {return !this._isNUN(v) && 'boolean'===typeof v}
}
class AnyDataType extends DataType {
    constructor(defVal='') { super('any', defVal ?? '') }
    static get alias() {return 'any'.split('|')}
    matchType(value) {return true}
}
class StringDataType extends DataType {
    constructor(defVal='') { super('string', defVal ?? '') }
//    get alias() {return 's|str|string'.split('|')}
    static get alias() {return 's|str|string'.split('|')}
    //deserialize(text) {return super.deserialize(text).replace(/\\n/g,'\n').replace(/\\t/g,'\t')}
    deserialize(text) {return ''===text ? this.defaultValue : super.deserialize(text).replace(/\\n/g,'\n').replace(/\\t/g,'\t')}
    matchType(v) {return Type.isStr(v)}
}
             if (/^[_v]+$/.test(text)){return new BooleanDataType(defTxt)}
        else if (/^(-)?(\d+)?\.\d+$/.test(text)){return new FloatDataType(defTxt)}
        else if (/^(-)?\d+$/.test(text)){return new IntDataType(10,defTxt)}
        else if (/^0b[0-1]+$/.test(text)){return new IntDataType(2,defTxt)}
        else if (/^0o[0-7]+$/.test(text)){return new IntDataType(8,defTxt)}
        else if (/^0x[0-9a-fA-F]+$/.test(text)){return new IntDataType(16,defTxt)}
        else if (/^0v[0-9a-vA-V]+$/.test(text)){return new IntDataType(32,defTxt)}
        else if (/^0z[0-9a-zA-Z]+$/.test(text)){return new IntDataType(36,defTxt)}
        else if (/^(-)?\d+n$/.test(text)){return new BigIntDataType(10,defTxt)}
        else if (/^0B[0-1]+$/.test(text)){return new BigIntDataType(2,defTxt)}
        else if (/^0O[0-7]+$/.test(text)){return new BigIntDataType(8,defTxt)}
        else if (/^0X[0-9a-fA-F]+$/.test(text)){return new BigIntDataType(16,defTxt)}
        else if ([text,defTxt].every(v=>v===''||Type.isNUN(v))){return new AnyDataType()}
        else {return new StringDataType(defTxt)}

class FloatDataType extends DataType {
    constructor(defVal=0) {
        super('float', defVal ?? 0);
        super._defaultValue = this.deserialize(defVal);
    }
    static get alias() {return 'f|flt|float'.split('|')}
    deserialize(text) {
        const v = parseFloat(super.deserialize(text))
        if (Number.isNaN(v)) {throw new TypeError(`Float型への変換に失敗しました。:${text}:${v}`)}
        return v
    }
    matchType(v) {return Type.isFloat(v) || Type.isInt(v)} // 小数点以下が0の場合はInt判定になるがそれも許容する
    // NaNは禁止
    // -1e5 のような指数表記を認めるべきか
    // Infinity のような無限数を認めるべきか
}
class BooleanDataType extends DataType {
    constructor(defVal=false) {
        super('boolean', defVal ?? false);
    }
    static get alias() {return 'b|bln|bool|boolean'.split('|')}
    get valueTexts() {return ['_','v']}
    deserialize(text, type) {
        const v = super.deserialize(text)
        if (super._isBln(v)) {return v}
        if (''===v || '_'===v) {return false}
        else if ('v'===v) {return true}
        else {throw new TypeError(`Boolean型への変換に失敗しました。Boolean型の値は_,v,空文字のいずれかで表現されます。:${text}:${v}`)}
    }
    matchType(v) {return Type.isBool(v)}
}
class IntDataType extends DataType {
    static BaseAlias = 'H|2|8|10|12|16|24|32|36'.split('|');
    constructor(base=10, defVal=0) {
        super('integer', defVal ?? 0);
        this._base = this.#base(base);
        this._basePrefix = {b:2, o:8, d:10, x:16, v:32, z:36}
    }
    #base(base) {
        if ('H'===base){base=16}
        const baseInt = parseInt(base)
        if (super._isStr(base) && !super._isNUN(baseInt) && 2 <= baseInt && baseInt <= 36){base=baseInt}
        if (super._isNUN(base)  || !super._isInt(base) || base < 2 || 36 < base){throw new TypeError(`Intのbaseは2〜36までの整数値であるべきです。:${base}:${typeof base}`)}
        return base
    }
    get base() {return this._base}
    static get alias() {return 'i|int|integer'.split('|')}
    get baseAlias() {return 'H|2|8|10|12|16|24|32|36'.split('|')}
    get baseValues() {return this.basePrefixs.map(k=>this._basePrefix[k])}
    get basePrefixs() {return Object.getOwnPropertyNames(this._basePrefix)}
    get basePrefix() {
        const bi = this.baseValues.indexOf(this.base)
        return bi===-1 || 10===this.base ? '' : this.basePrefixs[bi];
    }
    deserialize(text) {
        const d = super.deserialize(text)
        if ('number'===typeof d){return d}
        const v = parseInt(this.#delPrefix(d), this.base)
        if (Number.isNaN(v)){throw new TypeError(`Int型への変換に失敗しました。:${text}:${v}:${this.base}:${this.basePrefix}`)}
        if (Infinity!==v && Number.MAX_SAFE_INTEGER < v){throw new TypeError(`Infinityでないにも関わらずNumber.MAX_SAFE_INTEGERよりも大きい値です。正確な値を保てないためエラーとします。:${v}:${text}`)}
        if (-Infinity!==v && v < Number.MIN_SAFE_INTEGER){throw new TypeError(`-Infinityでないにも関わらずNumber.MIN_SAFE_INTEGERよりも小さい値です。正確な値を保てないためエラーとします。:${v}:${text}`)}
        return v
    }
    #delPrefix(d){return (this._isStr(d) && ''!==this.basePrefix && d.startsWith(`0${this.basePrefix}`)) ? d.slice(2) : d}
    matchType(v) {return Type.isInt(v)}
}
class BigIntDataType extends DataType {
    static BaseAlias = 'H|2|8|10|16'.split('|');
    constructor(base=10, defVal=0n) {
        super('bigint', defVal ?? 0n);
        this._base = this.#base(base);
        this._basePrefix = {B:2, O:8, X:16} // parseInt('', 36) のように36進数変換できない
        this._defaultValue = this.deserialize(defVal)
    }
    #base(base) {
        if ('H'===base){base=16}
        const baseInt = parseInt(base)
        if (super._isStr(base) && !super._isNUN(baseInt) && 2 <= baseInt && baseInt <= 16){base=baseInt}
        if (super._isNUN(base)  || !super._isInt(base) || base < 2 || 16 < base){throw new TypeError(`BigIntのbaseは2〜16までの整数値であるべきです。:${base}:${typeof base}`)}
        return base
    }
    get base() {return this._base}
    static get alias() {return 'I|bi|bgi|bigint|biginteger'.split('|')}
    get baseAlias() {return 'H|2|8|10|16|'.split('|')}
    get baseValues() {return this.basePrefixs.map(k=>this._basePrefix[k])}
    get basePrefixs() {return Object.getOwnPropertyNames(this._basePrefix)}
    get basePrefix() {
        const bi = this.baseValues.indexOf(this.base)
        return bi===-1 ? '' : this.basePrefixs[bi];
    }
    deserialize(text) {
        const d = super.deserialize(text)
        if ('bigint'===typeof d){return d}
        if (this._isStr(text) && /^[0-9]+n$/.test(text)){text=text.slice(0,-1)}
        if (10!==this.base && !/^0[box]/i.test(text)) {text = '0' + this.basePrefix + text}
        try {return BigInt(text)}
        catch(err){throw new TypeError(`BigInt型への変換に失敗しました。:${text}`)}
        
    } // BigInt('x') SyntaxError: Cannot convert x to a BigInt
    matchType(v) {return Type.isBigInt(v)}
}
*/
window.TypeStores = new TypeStores();
})();
