<script>
import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data() {
        return {
            posts: [],
            user: null,
            index: null
        }
    },

    mounted(){
        this.loadPosts();
    },  

    methods: {
        async loadPosts() {
            let response = await axios.get('/feed');
            this.posts = response.data;
            console.log(this.posts)
        },

        
        getRelativeDate(date) {
            let day = dayjs(date);
            return day.fromNow();
        },

    },

    watch: {
        $route() {
            this.loadPosts();
        }
    }
}

</script>


<template>
    <div class="user-post card mb-3" v-for="(item, index) in posts">
        <div class="card-body">
            <div class="user-post-time">
                <img :src="'/src/avatars/'+ item.author.avatar" class="card-img" alt="">
                <span class="card-text text">
                    {{ item.author.firstName }}
                    {{ item.author.lastName }}
                </span>
                {{ getRelativeDate(item.createdAt) }}
            </div>
            <p class="card-text">
                {{ item.content }}
            </p>
        </div>
    </div>
</template>

<style>
.user-post img {
    width: 70px
}

.text {
    font-size: 15px;
    font-weight: bold;
    margin-right: 10px;
}

.card-body {
    justify-content: space-around;
}


</style>