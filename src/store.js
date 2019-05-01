import Vue from 'vue';
import Vuex from 'vuex';
import router from '@/router';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        isAuthenticated: false
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setIsAuthenticated(state, payload) {
            state.isAuthenticated = payload;
        }
    },
    actions: {
        userLogin({ commit }, { email, password }) {
            if (email == 'test@test.com' && password == 'test123') {
                const user = {
                    email: email
                };
                commit('setUser', user);
                commit('setIsAuthenticated', true);
                router.push('/about');
            } else {
                commit('setUser', null);
                commit('setIsAuthenticated', false);
                router.push('/');
            }
        },
        userSignOut({ commit }) {
            commit('setUser', null);
            commit('setIsAuthenticated', false);
            router.push('/');
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.user !== null && state.user !== undefined;
        }
    }
});
