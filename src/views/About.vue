<template>
    <v-container>
        <v-layout column>
            <h1 class="title my-3">My Profile</h1>
            <div class="subheading mb-2">User: {{ userData.email }}</div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'About',
    computed: {
        userData() {
            return this.$store.state.user;
        }
    }
};
</script>

<style scoped></style>
