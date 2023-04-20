function test(str){
  const DICT_PATH = "./dict";
  let tokens;
  let token;
  let result;
	
  kuromoji.builder({dicPath: DICT_PATH}).build((err, tokenizer)=>{
    tokens = tokenizer.tokenize(str);// 解析データの取得
    token = tokens[0].surface_form;
  });
	
  if(token){
    result = token;
  }else{
    result = "むりぽ";
  }
	
  return result;
}

window.function = function (str) {
  return test(str);
}
