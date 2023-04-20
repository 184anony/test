const DICT_PATH = "./dict";
let tokens;
let result;
let str = "これはテスト用の文章です。"
	
kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
	const tokens = tokenizer.tokenize(str);// 解析データの取得
	tokens.forEach((token)=>{// 解析結果を順番に取得する
		console.log(token);
	});
});
