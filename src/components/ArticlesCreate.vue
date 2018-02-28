<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Create new article</div>
            <div class="panel-body">
                <form v-on:submit.prevent="saveForm">
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Article title</label>
                            <input type="text" v-model="article.title" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label class="control-label">Article body</label>
                            <input type="text" v-model="article.body" class="form-control">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <button class="btn btn-success">Create</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data: function () {
            return {
                article: {
                    title: '',
                    body: ''
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newArticle = app.article;
                axios.post('http://localhost:8000/api/articles', newArticle)
                    .then(function (resp) {
                        app.$router.push({path: '/'});
                    })
                    .catch(function (resp) {
                        alert("Could not create your company");
                    });
            }
        }
    }
</script>
