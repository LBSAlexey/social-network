<script>
import axios from 'axios';
import dayjs from 'dayjs';

export default {
    data() {
        return {

            // Данные загружены?
            isReady: false,

            // Данные с сервера
            user: null,
            posts: [],

            // Новый пост
            postContent: ''
        }
    },

    mounted() {
        this.loadData();
        console.log(this.user)
    },

    methods: {
        async loadData() {
            this.isReady = false;
            this.loadUser();
            this.loadPosts();
            this.isReady = true
        },

        async loadUser() {
            let response
            this.user = response
            if(this.$route.name == 'profile') {
                response = await axios.get('/profile');
            } else {
                response = await axios.get('/user', {
                    params: {
                        username: this.$route.params.username
                    }
                });
            }
            
            this.user = response.data;
        },

        async loadPosts() {
            let response = await axios.get('/user/posts', {
                params: {
                    id: this.user._id
                }
            });

            this.posts = response.data;
        },

        async createPost(evt) {
            evt.preventDefault();
            await axios.post('/post/create', {
                content: this.postContent,
            });

            this.postContent = '';
            this.loadPosts();
        },

        getRelativeDate(date) {
            let day = dayjs(date);
            return day.fromNow();
        }
    },

    watch: {
        $route() {
            this.loadData();
        }
    }
}
</script>

<template>
    <div class="user-page">
        <div v-if="!isReady">
            Данные загружаются...
        </div>
        <div class="user-container" v-if="isReady">
            <!-- Карточка пользователя -->
            <div class="user-info">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img :src="'/src/avatars/' + user.avatar" class="img-fluid rounded-start">
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 class="card-title">
                                    {{ user.firstName }} {{ user.lastName }}
                                </h5>
                                <p class="card-text">
                                    {{ user.info }}
                                </p>
                                <p class="card-text">
                                    Телефон: {{ user.phone }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Стена пользователя -->
            <div class="user-wall">
                <!-- Cоздание нового поста-->
                <form class="post-form my-3" @submit="createPost" v-show="$route.name == 'profile'">
                    <textarea class="form-control" rows="2" placeholder="Что у вас нового?" v-model="postContent"></textarea>
                    <button type="submit" class="btn btn-primary">
                        Отправить
                    </button>
                </form>

                <!-- Посты -->
                <div class="user-post card mb-3" v-for="(item, index) in posts">
                    <div class="card-body">
                        <div class="user-post-time">
                            {{ getRelativeDate(item.createdAt) }}
                        </div>
                        <p class="card-text">
                            {{ item.content }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style>
.user-page img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

.post-form {
    display: flex;
    gap: 10px;
}

.user-post-time {
    font-size: 14px;
    color: #6c757d;
}
</style>