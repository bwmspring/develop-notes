
// 策略模式是一种行为型设计模式，它允许在运行时根据不同的条件选择不同的算法实现。在 TypeScript 中，我们可以使用接口和类来实现策略模式。
// 以下是一个使用 TypeScript 实现策略模式的示例代码：




interface DiscountStrategy {
  getDiscountedPrice(price: number): number;
}

class TwentyPercentDiscountStrategy implements DiscountStrategy {
  getDiscountedPrice(price: number): number {
    return price * 0.8;
  }
}

class TenPercentDiscountStrategy implements DiscountStrategy {
  getDiscountedPrice(price: number): number {
    return price * 0.9;
  }
}

class NoDiscountStrategy implements DiscountStrategy {
  getDiscountedPrice(price: number): number {
    return price;
  }
}

class ShoppingCart {
  private discountStrategy: DiscountStrategy = new NoDiscountStrategy();

  public setDiscountStrategy(discountStrategy: DiscountStrategy) {
    this.discountStrategy = discountStrategy;
  }

  public checkout(price: number): number {
    const discountedPrice = this.discountStrategy.getDiscountedPrice(price);
    console.log(`Price before discount: ${price}, Price after discount: ${discountedPrice}`);
    return discountedPrice;
  }
}

// Example usage
const shoppingCart = new ShoppingCart();

// Apply 20% discount
shoppingCart.setDiscountStrategy(new TwentyPercentDiscountStrategy());
shoppingCart.checkout(100); // Output: Price before discount: 100, Price after discount: 80

// Apply 10% discount
shoppingCart.setDiscountStrategy(new TenPercentDiscountStrategy());
shoppingCart.checkout(100); // Output: Price before discount: 100, Price after discount: 90

// No discount
shoppingCart.setDiscountStrategy(new NoDiscountStrategy());
shoppingCart.checkout(100); // Output: Price before discount: 100, Price after discount: 100


// 在上面的代码中，`DiscountStrategy` 接口定义了一个 `getDiscountedPrice` 方法，用于计算折扣后的价格。
// `TwentyPercentDiscountStrategy`、`TenPercentDiscountStrategy` 和 `NoDiscountStrategy` 分别实现了 `DiscountStrategy` 接口，提供了不同的计算方式。
// `ShoppingCart` 类使用了策略模式，通过 `setDiscountStrategy` 方法设置折扣策略，然后在 `checkout` 方法中调用策略的 `getDiscountedPrice` 方法来计算折扣后的价格。
// 在示例中，我们使用 `ShoppingCart` 来展示策略模式的使用方式。
// 我们首先创建了一个 `ShoppingCart` 的实例，然后通过 `setDiscountStrategy` 方法设置不同的折扣策略。最后调用 `checkout` 方法来计算折扣后的价格，并输出结果。