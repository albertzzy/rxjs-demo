import Rx from 'rxjs'


/* const source = Rx.Observable.create(observer => {
    observer.next('foo');
    setTimeout(() => observer.next('bar'), 1000);
    // observer.complete()
});
  
const source1 = source.map(val => `hello ${val}`);
const subscription = source1.subscribe(value => console.log('subscribe',value)); */


// subscription.next('foo1');
  

// console.log(source1.then);

// forEach和subscribe相似，同是实现订阅效果，等到promise可以监控subscription完成和失败的异常。
// 日志打印并没有comlete, 因为source并没有完成关闭，触发调用observer.complete()
// const promise = source1.forEach(value => console.log('foreach',value))
// promise.then(() => console.log('complete'), (err) => console.log(err));



/* Rx.Observable.of('foo1', Rx.Scheduler.async).subscribe(value => console.log(value));

const subject = new Subject();
const source2 = subject.map(val => `hello ${val}`);
const subscription = source1.subscribe(value => console.log(value));
subject.next('foo');
subscription.next('bar'); */


/* var source3=Rx.Observable.from([1,2,3]);
var subject=new Rx.Subject();
var multicasted=source3.multicast(subject);
multicasted.subscribe({
    next:(v)=>console.log('observerA:' +v)
});
multicasted.subscribe({
    next: (v) => console.log('observerB: ' + v)
});
multicasted.connect(); */



/* var source = Rx.Observable.interval(500);
var subject = new Rx.Subject();
var refCounted = source.multicast(subject).refCount();
var subscription1,subscription2,subscriptionConnect;
// This calls `connect()`, because
// it is the first subscriber to `refCounted`
console.log('observerA subscribed');
subscription1 = refCounted.subscribe({
    next: (v) => console.log('observerA: ' + v)
});

setTimeout(() => {
    console.log('observerB subscribed');
    subscription2 = refCounted.subscribe({
        next: (v) => console.log('observerB: ' + v)
    });
}, 600);

setTimeout(() => {
    console.log('observerA unsubscribed');
    subscription1.unsubscribe();
}, 1200);
// This is when the shared Observable execution will stop, because
// `refCounted` would have no more subscribers after this
setTimeout(() => {
    console.log('observerB unsubscribed');
    subscription2.unsubscribe();
}, 2000); */


/* var subject = new Rx.BehaviorSubject(0); // 0 is the initial value

subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
subject.next(1);
subject.next(2);

subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});
subject.next(3); */


/* let btnObservable = Rx.Observable.fromEvent(document.querySelector('.btn'),'click');
btnObservable.subscribe((value)=>{
    console.log(value);
})
 */



// 控制流

var input = Rx.Observable.fromEvent(document.querySelector('.into'), 'input');

/* input.filter(event => event.target.value.length > 2)
.subscribe(value => console.log(value));  */

/* input.delay(1000)
.subscribe(value => console.log(value)); */

/* input.throttleTime(1000)
.subscribe(e => console.log(e.target.value)); */


/* input.debounceTime(1000)
.subscribe(e => console.log(e.target.value)); */

/* input.take(3)
.subscribe(e => console.log(e.target.value)); */

/* var stopStream = Rx.Observable.fromEvent(document.querySelector('.btn'), 'click');
    input.takeUntil(stopStream)
    .subscribe(value => console.log(value)); */


// 生产值

/* input.pluck('target', 'value')
.subscribe(value => console.log(value)); */


/* input.pluck('target', 'value').pairwise()
.subscribe(value => console.log(value)); */ 



/* input.pluck('target', 'value').distinct()
.subscribe(value => console.log(value)); */       // 好像没有用


/* input.pluck('target', 'value').distinctUntilChanged()
.subscribe(value => console.log(value));  */         // 好像没有用


// scan (reduce) to a stream of counts
/* input.scan(count => count + 1, 0).subscribe((value) => {
    console.log(value);
}) */


// bindCallback
// bindNodeCallback


// combineLatest

/* var weight = Rx.Observable.of(70, 72, 76, 79, 75);
var height = Rx.Observable.of(1.76, 1.77, 1.78);
var bmi = Rx.Observable.combineLatest(height, weight, (h, w) =>{
    console.log(h,w)
    return w / (h*h)
});
bmi.subscribe(x => console.log('BMI is ' + x)); */


// concat
/* var timer = Rx.Observable.interval(1000).take(4);
var sequence = Rx.Observable.range(1, 10);
var result = Rx.Observable.concat(timer, sequence);
result.subscribe(x => console.log(x)); */


/* var timer1 = Rx.Observable.interval(1000).take(10);
var timer2 = Rx.Observable.interval(2000).take(6);
var timer3 = Rx.Observable.interval(500).take(10);
var result = Rx.Observable.concat(timer1, timer2, timer3);
result.subscribe(x => console.log(x)); */

// create
