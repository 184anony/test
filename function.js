const DICT_PATH = "./dict";
  let tokens;
  let token;
  let result;
  let str = "これはテスト用の文章です。"
	
  kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
    tokens = tokenizer.tokenize(str);// 解析データの取得
    //token = tokens[0].surface_form;
    document.write(err + "だ");
  });
	
  if(tokens){
    result = tokens;
  }
	
document.write(result + "だ");
