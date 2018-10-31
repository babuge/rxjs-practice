import 'babel-polyfill';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/do';

// const ob = Observable.interval(1000);
// ob.subscribe( () => console.log(new Date()));
// ob.take(3).map(n => n*2).filter(n => n > 2).subscribe( n => console.log('result:'+n));
// ob.take(3).map(n => n*2).filter(n => n > 2).subscribe({
//     next: n => console.log(n),
//     error: e => consoloe.log(e),
//     complete: () => console.log('complie')
// });

// var clicksInFiveSeconds = Observable.fromEvent(document, 'click').takeUntil(Observable.interval(5000));//takeUntil 直到。。时候
// var ones = clicksInFiveSeconds.mapTo(1);
// var seed = 0;
// var count = ones.reduce((acc, one) => acc + one, seed);
// count.subscribe(x => console.log(x));

var btn = document.querySelector('#btn');
var btnClick = Observable.fromEvent(btn, 'click');
btnClick.subscribe(x => console.log(x));