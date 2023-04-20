const DICT_PATH = "./dict";
let tokens;
let test;
let result;
let str = "これはテスト用の文章です。"
	
kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
	tokens = tokenizer.tokenize(str);// 解析データの取得
	
	test = tokens[0];
	console.log(test.surface_form);
});
