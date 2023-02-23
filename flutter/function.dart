main(List<String> args) {
 var res =  testCalulate((a,b){
    return a + b;
  });

  print(res);
}

typedef Calulate = int Function(int a,int b);

int testCalulate(Calulate cal){
  return cal(10,10);
}

