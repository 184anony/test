const DICT_PATH = "./dict";
  let tokens;
  let token;
  let result;
  let str = "これはテスト用の文章です。"
	
  kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
    tokens = tokenizer.tokenize(str);// 解析データの取得
    token = tokens[0].surface_form;
    if(err){
    	token = err;
    }
  });
	
  if(token){
    result = token;
  }else{
    result = "むりぽ";
  }
	
document.write(result);
