<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Update article</div>
            <div class="panel-body">
                <form v-on:submit.prevent="updateItem">
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
                            <button class="btn btn-success">Update</button>
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

        created: function(){
            this.getItem();
        },

        methods: {
            getItem()
            {
                var app = this;
                var newArticle = app.article;
                axios.get('http://localhost:8000/api/articles/' + app.$route.params.id + '/edit').then((resp) => {
                    this.article = resp.data;
                });
            },

            updateItem() {
                var app = this;
                var newArticle = app.article;
                axios.put('http://localhost:8000/api/articles/' + app.$route.params.id, newArticle)
                    .then(function (resp) {
                        app.$router.replace('/');
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your company");
                    });
            }
        }
    }
</script>
