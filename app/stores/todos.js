import { Store, toImmutable } from 'nuclear-js'
import {
    TODOS_LOAD,
    TODOS_LOADED,
    TODOS_CREATE,
    TODOS_CREATED,
    TODOS_UPDATE,
    TODOS_UPDATED,
    TODOS_DELETE,
    TODOS_DELETED
} from './../actions/types';

export default Store({
    getInitialState() {
        return toImmutable({
            items: [],
            loading: false,
            submitting: false
        });
    },
    initialize() {
        this.on(TODOS_LOAD, todosLoad);
        this.on(TODOS_LOADED, todosLoaded);
        this.on(TODOS_CREATE, todosCreate);
        this.on(TODOS_UPDATE, todosUpdate);
        this.on(TODOS_UPDATED, todosUpdated);
        this.on(TODOS_DELETE, todosDelete);
        this.on(TODOS_DELETED, todosDeleted);
    }
});

function todosLoad(state) {
    return state.set('loading', true);
}

function todosLoaded(state, { todos }) {
    const nextItems = toImmutable(todos)
        .toMap()
        .mapKeys((k, v) => v.get('id'));
        
    return state
        .set('loading', false)
        .set('items', state.get('items').concat(nextItems));
}

function todosCreate(state, { todo }) {
    
}

function todosCreated(state, { todos }) {
    
}

function todosLoad(state, { todos }) {
    
}

function todosLoad(state, { todos }) {
    
}

function todosLoad(state, { todos }) {
    
}

function todosLoad(state, { todos }) {
    
}

function todosLoad(state, { todos }) {
    
}

function todosLoad(state, { todos }) {
    
}