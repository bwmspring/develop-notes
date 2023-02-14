let strategies = {
  "S": function (salary) {
    return salary * 4;
  },
  "A": function (salary) {
    return salary * 3;
  },
  "B": function (salary) {
    return salary * 2;
  }
}

let calculateBous = function (level, salary) {
  return strategies[level](salary);
}

const print = console.log;

print(calculateBous('S', 20000))
print(calculateBous('A', 20000))