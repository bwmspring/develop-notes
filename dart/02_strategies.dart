void main(){
  var res = exec(select('sum'),1 ,2);
  print(res);
}

Function select(String opType){
  if(opType == 'sum') return sum;
  if(opType == 'sub') return sub;
  return (a, b) => 0;
}

int exec(NumberOp op, int a, int b){
  return op(a,b);
}

int sum(int a, int b) => a + b;
int sub(int a, int b) => a - b;

typedef NumberOp = Function (int a, int b);
