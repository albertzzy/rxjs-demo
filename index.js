import Rx from 'rxjs'


const source = Rx.Observable.create(observer => {
    observer.next('foo');
    setTimeout(() => observer.next('bar'), 1000);
    // observer.complete()
});
  
const source1 = source.map(val => `hello ${val}`);
const subscription = source1.subscribe(value => console.log('subscribe',value));


// subscription.next('foo1');
  

// console.log(source1.then);

// forEach和subscribe相似，同是实现订阅效果，等到promise可以监控subscription完成和失败的异常。
// 日志打印并没有comlete, 因为source并没有完成关闭，触发调用observer.complete()
// const promise = source1.forEach(value => console.log('foreach',value))
// promise.then(() => console.log('complete'), (err) => console.log(err));



Rx.Observable.of('foo1', Rx.Scheduler.async).subscribe(value => console.log(value));

const subject = new Subject();
const source2 = subject.map(val => `hello ${val}`);
const subscription = source1.subscribe(value => console.log(value));
subject.next('foo');
subscription.next('bar');