import reactor from './reactor';
import todos from './todos';

reactor.registerStores({
    'todos': todos
});