<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="lighten-2"
            disable-resize-watcher
        >
            <v-list>
                <template v-if="!isAuthenticated">
                    <v-list-tile>
                        <v-btn flat to="/sign-in" data-cy="signinBtn"
                            >SIGN IN</v-btn
                        >
                    </v-list-tile>
                </template>
                <template v-else>
                    <v-list-tile>
                        <v-btn flat to="/about">PROFILE</v-btn>
                    </v-list-tile>
                    <v-list-tile>
                        <v-btn outline @click="logout" data-cy="logout"
                            >Logout</v-btn
                        >
                    </v-list-tile>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="darken-4">
            <v-toolbar-side-icon
                class="hidden-md-and-up"
                @click="drawer = !drawer"
            ></v-toolbar-side-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title data-cy="titleBtn">{{
                    appTitle
                }}</v-toolbar-title>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat to="/sign-in" data-cy="signinBtnDesktop"
                    >SIGN IN</v-btn
                >
            </div>
            <div v-else class="hidden-sm-and-down">
                <v-btn flat to="/about">PROFILE</v-btn>
                <v-btn outline @click="logout" data-cy="logoutDesktop"
                    >Logout</v-btn
                >
            </div>
        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'Sample App',
            drawer: false
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>

<style>
a {
    color: white;
    text-decoration: none;
}
</style>
