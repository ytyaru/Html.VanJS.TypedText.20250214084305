window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOMContentLoaded!!');
    /*
    const {h1, p, a} = van.tags
    const author = 'ytyaru'
    van.add(document.querySelector('main'), 
        h1(a({href:`https://github.com/${author}/Html.VanJS.TypedText.20250214084305/`}, 'TypedText')),
        p('値の名、順、型、初期値を定義するテキスト書式。'),
//        p('A text format that defines the name, order, type, and initial value of the value.'),
    )
    van.add(document.querySelector('footer'),  new Footer('ytyaru', '../').make())
    */
    const a = new Assertion();
    a.t('TypedText' in window)
    a.e(TypeError, `TypedText.parse()の第一引数は文字列であるべきです。:undefined:undefined`, ()=>TypedText.parse());
    a.e(TypeError, `TypedText.parse()の第一引数は文字列であるべきです。:undefined:undefined`, ()=>TypedText.parse(undefined));
    a.e(TypeError, `TypedText.parse()の第一引数は文字列であるべきです。:null:object`, ()=>TypedText.parse(null));
    a.e(TypeError, `kは必須です。:`, ()=>TypedText.parse(''));
    a.e(TypeError, `kは必須です。:`, ()=>TypedText.parse(' '));
    a.e(TypeError, `k（_）は次のパターンのみ有効です。:/^[a-zA-Z][a-zA-Z0-9]*$/`, ()=>TypedText.parse('_'));
    a.e(TypeError, `k（あ）は次のパターンのみ有効です。:/^[a-zA-Z][a-zA-Z0-9]*$/`, ()=>TypedText.parse('あ'));
    a.e(TypeError, `kは必須です。:`, ()=>TypedText.parse(':'));
    a.e(TypeError, `kは必須です。:`, ()=>TypedText.parse('='));
    a.e(TypeError, `kは必須です。:`, ()=>TypedText.parse(':str'));
    a.e(TypeError, `kは必須です。:`, ()=>TypedText.parse('=value'));
    a.t(()=>{
        const tt = TypedText.parse('name');
        return 1===tt.ktds.length && TypedText.Formats.OneLine===tt.format && 'name'===tt.ktds[0].k && null===tt.ktds[0].t && null===tt.ktds[0].d
    })
    a.t(()=>{
        const tt = TypedText.parse('name:str');
        return 1===tt.ktds.length && TypedText.Formats.OneLine===tt.format && 'name'===tt.ktds[0].k && 'str'===tt.ktds[0].t && null===tt.ktds[0].d
    })
    a.t(()=>{
        const tt = TypedText.parse('name=A');
        return 1===tt.ktds.length && TypedText.Formats.OneLine===tt.format && 'name'===tt.ktds[0].k && null===tt.ktds[0].t && 'A'===tt.ktds[0].d
    })
    a.t(()=>{
        const tt = TypedText.parse('name:str=A');
        return 1===tt.ktds.length && TypedText.Formats.OneLine===tt.format && 'name'===tt.ktds[0].k && 'str'===tt.ktds[0].t && 'A'===tt.ktds[0].d
    })
    a.t(()=>{
        const tt = TypedText.parse('name age');
        return 2===tt.ktds.length && TypedText.Formats.OneLine===tt.format
            && 'name'===tt.ktds[0].k && null===tt.ktds[0].t && null===tt.ktds[0].d
            && 'age'===tt.ktds[1].k && null===tt.ktds[1].t && null===tt.ktds[1].d
    })
    a.t(()=>{
        const tt = TypedText.parse('name age:int');
        return 2===tt.ktds.length && TypedText.Formats.OneLine===tt.format
            && 'name'===tt.ktds[0].k && null===tt.ktds[0].t && null===tt.ktds[0].d
            && 'age'===tt.ktds[1].k && 'int'===tt.ktds[1].t && null===tt.ktds[1].d
    })
    a.t(()=>{
        const tt = TypedText.parse('name age=12');
        return 2===tt.ktds.length && TypedText.Formats.OneLine===tt.format
            && 'name'===tt.ktds[0].k && null===tt.ktds[0].t && null===tt.ktds[0].d
            && 'age'===tt.ktds[1].k && null===tt.ktds[1].t && '12'===tt.ktds[1].d
    })
    a.t(()=>{
        const tt = TypedText.parse('name age:int=12');
        return 2===tt.ktds.length && TypedText.Formats.OneLine===tt.format
            && 'name'===tt.ktds[0].k && null===tt.ktds[0].t && null===tt.ktds[0].d
            && 'age'===tt.ktds[1].k && 'int'===tt.ktds[1].t && '12'===tt.ktds[1].d
    })
    a.t(()=>{
        const tt = TypedText.parse('id:I=0 name:s=Yamada age:i=12 isMale:b=v weight:f=65.1');
        console.log(tt)
        return 5===tt.ktds.length && TypedText.Formats.OneLine===tt.format
            && 'id'===tt.ktds[0].k && 'I'===tt.ktds[0].t && '0'===tt.ktds[0].d
            && 'name'===tt.ktds[1].k && 's'===tt.ktds[1].t && 'Yamada'===tt.ktds[1].d
            && 'age'===tt.ktds[2].k && 'i'===tt.ktds[2].t && '12'===tt.ktds[2].d
            && 'isMale'===tt.ktds[3].k && 'b'===tt.ktds[3].t && 'v'===tt.ktds[3].d
            && 'weight'===tt.ktds[4].k && 'f'===tt.ktds[4].t && '65.1'===tt.ktds[4].d
    })
    a.t(()=>{
        const tt = TypedText.parse(`id	name	age	isMale	weight
:I	s	i	b	f
=0	Yamada	12	v	65.1`);
        console.log(tt)
        return 5===tt.ktds.length && TypedText.Formats.MultiLine===tt.format
            && 'id'===tt.ktds[0].k && 'I'===tt.ktds[0].t && '0'===tt.ktds[0].d
            && 'name'===tt.ktds[1].k && 's'===tt.ktds[1].t && 'Yamada'===tt.ktds[1].d
            && 'age'===tt.ktds[2].k && 'i'===tt.ktds[2].t && '12'===tt.ktds[2].d
            && 'isMale'===tt.ktds[3].k && 'b'===tt.ktds[3].t && 'v'===tt.ktds[3].d
            && 'weight'===tt.ktds[4].k && 'f'===tt.ktds[4].t && '65.1'===tt.ktds[4].d
            && 0===tt.vals.length
//            && 1===tt.vals.length && 5===tt.vals.length && tt.vals[0].every(v=>v==='')
//            && '0 Yamada 12 v 65.1'.split(' ').every((v,i)=>v===tt.vals[i])
    })
    a.t(()=>{
        const tt = TypedText.parse(`id	name	age	isMale	weight
:I	s	i	b	f
=0	Nanashi	-1	_	0.0
1	Yamada	12	v	65.1`);
        console.log(tt)
        return 5===tt.ktds.length && TypedText.Formats.MultiLine===tt.format
            && 'id'===tt.ktds[0].k && 'I'===tt.ktds[0].t && '0'===tt.ktds[0].d
            && 'name'===tt.ktds[1].k && 's'===tt.ktds[1].t && 'Nanashi'===tt.ktds[1].d
            && 'age'===tt.ktds[2].k && 'i'===tt.ktds[2].t && '-1'===tt.ktds[2].d
            && 'isMale'===tt.ktds[3].k && 'b'===tt.ktds[3].t && '_'===tt.ktds[3].d
            && 'weight'===tt.ktds[4].k && 'f'===tt.ktds[4].t && '0.0'===tt.ktds[4].d
            && 1===tt.vals.length && 5===tt.vals[0].length && '1 Yamada 12 v 65.1'.split(' ').every((v,i)=>v===tt.vals[0][i])
    })
    a.t(()=>{
        const tt = TypedText.parse(`id	name	age	isMale	weight
:I	s	i	b	f
=0	Nanashi	-1	_	0.0
1	Yamada	12	v	65.1
2	Suzuki	24	_	72.3`);
        console.log(tt)
        return 5===tt.ktds.length && TypedText.Formats.MultiLine===tt.format
            && 'id'===tt.ktds[0].k && 'I'===tt.ktds[0].t && '0'===tt.ktds[0].d
            && 'name'===tt.ktds[1].k && 's'===tt.ktds[1].t && 'Nanashi'===tt.ktds[1].d
            && 'age'===tt.ktds[2].k && 'i'===tt.ktds[2].t && '-1'===tt.ktds[2].d
            && 'isMale'===tt.ktds[3].k && 'b'===tt.ktds[3].t && '_'===tt.ktds[3].d
            && 'weight'===tt.ktds[4].k && 'f'===tt.ktds[4].t && '0.0'===tt.ktds[4].d
            && 2===tt.vals.length
            && 5===tt.vals[0].length && '1 Yamada 12 v 65.1'.split(' ').every((v,i)=>v===tt.vals[0][i])
            && 5===tt.vals[1].length && '2 Suzuki 24 _ 72.3'.split(' ').every((v,i)=>v===tt.vals[1][i])
    })
    a.t(()=>{
        const tt = TypedText.parse(`id	name	age	isMale	weight
1	Yamada	12	v	65.1
2	Suzuki	24	_	72.3`);
        console.log(tt)
        return 5===tt.ktds.length && TypedText.Formats.MultiLine===tt.format
            && 'id'===tt.ktds[0].k && null===tt.ktds[0].t && null===tt.ktds[0].d
            && 'name'===tt.ktds[1].k && null===tt.ktds[1].t && null===tt.ktds[1].d
            && 'age'===tt.ktds[2].k && null===tt.ktds[2].t && null===tt.ktds[2].d
            && 'isMale'===tt.ktds[3].k && null===tt.ktds[3].t && null===tt.ktds[3].d
            && 'weight'===tt.ktds[4].k && null===tt.ktds[4].t && null===tt.ktds[4].d
            && 2===tt.vals.length
            && 5===tt.vals[0].length && '1 Yamada 12 v 65.1'.split(' ').every((v,i)=>v===tt.vals[0][i])
            && 5===tt.vals[1].length && '2 Suzuki 24 _ 72.3'.split(' ').every((v,i)=>v===tt.vals[1][i])
    })
    // 代入無視（例外発生せず）
    a.t(()=>{
        const tt = TypedText.parse('name');
        tt.ktds[0].k = 'X'
        tt.ktds[0].t = 'Y'
        tt.ktds[0].d = 'Z'
        return 1===tt.ktds.length && TypedText.Formats.OneLine===tt.format && 'name'===tt.ktds[0].k && null===tt.ktds[0].t && null===tt.ktds[0].d
    })
    // 代入可
    a.t(()=>{
        const tt = TypedText.parse('name', true);
        tt.ktds[0].k = 'X'
        tt.ktds[0].t = 'Y'
        tt.ktds[0].d = 'Z'
        return 1===tt.ktds.length && TypedText.Formats.OneLine===tt.format && 'X'===tt.ktds[0].k && 'Y'===tt.ktds[0].t && 'Z'===tt.ktds[0].d
    })
    // ktds, vals, format はゲッターでありセッターがないため代入されない（無視される）
    a.t(()=>{
        const tt = TypedText.parse('name');
        tt.ktds[0] = {k:'X',t:'Y',d:'Z'}
        return 1===tt.ktds.length && TypedText.Formats.OneLine===tt.format && 'name'===tt.ktds[0].k && null===tt.ktds[0].t && null===tt.ktds[0].d
    })
    a.t(()=>{
        const tt = TypedText.parse('name', true);
        tt.ktds[0] = {k:'X',t:'Y',d:'Z'}
        return 1===tt.ktds.length && TypedText.Formats.OneLine===tt.format && 'name'===tt.ktds[0].k && null===tt.ktds[0].t && null===tt.ktds[0].d
    })
    a.t(()=>{
        const tt = TypedText.parse('name');
        tt.vals = ['X']
        console.log(tt.vals)
        return 1===tt.ktds.length && TypedText.Formats.OneLine===tt.format && 'name'===tt.ktds[0].k && null===tt.ktds[0].t && null===tt.ktds[0].d && 0===tt.vals.length
    })
    


    a.fin();
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

