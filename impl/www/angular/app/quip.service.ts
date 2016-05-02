import {QUIPS} from './mock-quips';
import {Injectable} from 'angular2/core';

@Injectable()
export class QuipService {
    getQuips() {
	return Promise.resolve(QUIPS);
    }
    getQuip(id: string) {
	return Promise.resolve(QUIPS).then(
	    quips => quips.filter(quip => quip.id === id)[0]
	);
    }
}
