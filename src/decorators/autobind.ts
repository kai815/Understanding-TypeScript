namespace App {
  // autobind decorator
  export function Autobind(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _target: any,
    // _を使う以外にもtsconfigのnoUnusedParametersの設定で変更できる
    _methodName: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      enumerable: false,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }
}
