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

// var input = Rx.Observable.fromEvent(document.querySelector('.into'), 'input');

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

// create  (大多数时候，您不需要使用create，因为现有的创建操作符（以及实例组合运算符）允许您为大多数用例创建一个Observable。)


// defer
/* var clicksOrInterval = Rx.Observable.defer(function () {
    if (Math.random() > 0.5) {
        return Rx.Observable.fromEvent(document, 'click');
    } else {
        return Rx.Observable.interval(1000);
    }
});
clicksOrInterval.subscribe(x => console.log(x)); */


// empty
/* var result = Rx.Observable.empty().startWith(7);
result.subscribe(x => console.log(x)); */


/* var interval = Rx.Observable.interval(1000);
var result = interval.mergeMap(x =>
    x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
);
result.subscribe(x => console.log(x)); */

// forkJoin


// from
// var array = [10, 20, 30];
/* var result = Rx.Observable.from(array);
result.subscribe(x => console.log(x)); */

/* var intervalObservable = Rx.Observable.interval(1000).take(array.length);
intervalObservable.subscribe( x=> console.log(array[x])) */

/* function* generateDoubles(seed) {
    var i = seed;
    while (true) {
        yield i;
        i = 2 * i; // double it
    }
}

var iterator = generateDoubles(3);
var result = Rx.Observable.from(iterator).take(10);
result.subscribe(x => console.log(x)); */


// fromEvent (第三个参数selector，大体作用和map 一样)
/* let eventObservable = Rx.Observable.fromEvent(document,'click',(arg) => {
    return arg.target;
}) */

/* let eventObservable = Rx.Observable.fromEvent(document,'click').map( x =>x.target)

eventObservable.subscribe( x => console.log(x))
 */


// fromEventPattern



// fromPromise

// interval
// merge

/* var clicks = Rx.Observable.fromEvent(document, 'click');
var timer = Rx.Observable.interval(1000);
var clicksOrTimer = Rx.Observable.merge(clicks, timer);
clicksOrTimer.subscribe(x => console.log(x));
 */



/* var timer1 = Rx.Observable.interval(1000).take(10);
var timer2 = Rx.Observable.interval(2000).take(6);
var timer3 = Rx.Observable.interval(500).take(10);
var concurrent = 2; // the argument
var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
merged.subscribe(x => console.log(x)); */


// never
/* function info() {
    console.log('Will not be called');
}
var result = Rx.Observable.never().startWith(7);
result.subscribe(x => console.log(x), info, info); */

// of
/* var numbers = Rx.Observable.of(1, 2, 3);
var letters = Rx.Observable.of('a', 'b', 'c');
var interval = Rx.Observable.interval(1000);
var result = numbers.concat(letters).concat(interval);
result.subscribe(x => console.log(x)); */


// range


// throw


// timer
/* var numbers = Rx.Observable.timer(3000, 1000);
numbers.subscribe(x => console.log(x)); */

// toAsync - undefined
/* var func = Rx.Observable.toAsync(function (x, y) {
    return x + y;
});
var source = func(3, 4);
var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);
    },
    function () {
        console.log('Completed');
    }
); */
