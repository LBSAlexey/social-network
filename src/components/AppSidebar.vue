<script>

export default {
    methods: {
        profile() {
            this.$router.push({
                name: 'profile'
            })
        },
        friends() {
            this.$router.push({
                name: 'friends'
            })
        },
        feed() {
            this.$router.push({
                name: 'feed'
            })
        },
        main() {
            this.$router.push({
                name: 'main'
            })
        }
    }
}

</script>

<template>
    <div class="app-sidebar">
        <ul>
            <li>
                <button class="btn btn-outline-secondary btn-logo" @click="feed" :class="{'active': $route.name == 'main'}">
                    <img src="../assets/logo.png" alt="">
                    В ШП
                </button>
            </li>
            <li>
                <button class="btn btn-outline-secondary" :class="{'active': $route.name == 'profile'}" @click="profile">
                    Моя страница
                </button>
            </li>
            <li>
                <button class="btn btn-outline-secondary" :class="{'active': $route.name == 'friends'}" @click="friends">
                    Друзья
                </button>
            </li>
            <li>
                <button class="btn btn-outline-secondary" :class="{'active': $route.name == 'feed'}" @click="feed">
                    Новости
                </button>
            </li>
        </ul>
    </div>
</template>

<style>
.app-sidebar ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;

}

.app-sidebar li {
    list-style-type: none;
    width: 100%;
}

.app-sidebar button {
    width: 100%;
}

.app-sidebar .btn-logo {
    font-size: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
}

.app-sidebar .btn-logo img {
    width: 50px;
}

</style>