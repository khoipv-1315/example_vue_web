<template>
  <div>
        <div class="form-group">
            <router-link :to="{name: 'ArticlesCreate'}" class="btn btn-success">Create new article</router-link>
        </div>

        <div class="panel panel-default">
            <div class="panel-heading">Articles list</div>
            <div class="panel-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Body</th>
                        <th width="100">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="article, index in articles">
                        <td>{{ article.title }}</td>
                        <td>{{ article.body }}</td>
                        <td>
                            <router-link :to="{name: 'ArticlesEdit', params: {id: article.id}}" class="btn btn-xs btn-default">
                                Edit
                            </router-link>
                            <a href="#"
                               class="btn btn-xs btn-danger"
                               v-on:click="deleteEntry(article.id, index)">
                                Delete
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios';

  export default {
      data: function () {
          return {
              articles: []
          }
      },
      created()
        {
            this.fetchArticles();
        },
      methods: {
          fetchArticles(){
              axios.get('http://localhost:8000/api/articles').then((resp) => {
                  this.articles = resp.data;
              });
          },
          deleteEntry(id, index) {
              if (confirm("Do you really want to delete it?")) {
                  var app = this;
                  axios.delete('http://localhost:8000/api/articles/' + id)
                      .then(function (resp) {
                          app.articles.splice(index, 1);
                      })
                      .catch(function (resp) {
                          alert("Could not delete company");
                      });
              }
          }
      }
  }
</script>
