const DICT_PATH = "./dict";
let tokens;
let test;
let result;
let str = "これはテスト用の文章です。"
	
kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
	tokens = tokenizer.tokenize(str);// 解析データの取得
	
	tokens.forEach( function(token,index,array) {
		test += token;
		if(index != array.length-1){
			test += ",";
		}
	});
	console.log(test);
});
